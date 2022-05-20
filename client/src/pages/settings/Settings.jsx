import React, { useContext, useState } from 'react';
import SidebarLeft from '../../components/SidebarLeft/SidebarLeft';
import { Context } from "../../context/Context";
import "./Settings.css";
import axios from "axios";

function Settings() {

    const {user, dispatch} = useContext(Context);
    const [file, setFile] = useState(null);
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [success, setSuccess] = useState(false);
    const PF = "http://localhost:5000/images/";

    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch({type: 'UPDATE_START'})
        const updatedUser = {
            userId: user._id,
            username, 
            email,
            password,
        };
        if(file){
            const data = new FormData();
            const filename = Date.now() + file.name;
            data.append("name", filename);
            data.append("file", file);
            updatedUser.profilePic = filename;
            
            try{
                await axios.post("http://localhost:5000/api/upload", data);
            }
            catch(err){
                
            }
        }
        try{
            const res = await axios.put("http://localhost:5000/api/users/"+user._id, updatedUser);
            setSuccess(true);
            dispatch({type: 'UPDATE_SUCCESS', payload: res.data})
        }
        catch(err){
            dispatch({type: 'UPDATE_FAILURE'})
        }
    }
    return (
        <div className='settings'>
            <SidebarLeft />
            <div className="settingWrapper">
                <div className="settingsTitle">
                    <span className='settingsUpdateTitle'>Update Your Account</span>
                    <span className='settingsDeleteTitle'>Delete Account</span>
                </div>
                <form className='settingsForm' onSubmit={handleSubmit}>
                    <label>Profile Picture</label>
                    <div className='settingsPP'> 
                        <img 
                            src={file ? URL.createObjectURL(file) : PF+user.profilePic}
                            alt='pfp'
                        />
                        <label htmlFor='fileInput'>
                            <i className='settingsPPIcon far fa-user-circle'></i>
                        </label>
                        <input 
                        type="file" 
                        id='fileInput' 
                        style={{display:"none"}} 
                        className='settingsPPInput'
                        onChange={e => setFile(e.target.files[0])}
                        />
                    </div>
                    <label>Username</label>
                    <input type="text" placeholder={user.username} name='name' onChange={e => setUsername(e.target.value)}></input>
                    <label>Email</label>
                    <input type="text" placeholder={user.email} name='email' onChange={e => setEmail(e.target.value)}></input>
                    <label>Password</label>
                    <input type="password" placeholder="Password" name="password" onChange={e => setPassword(e.target.value)}></input>
                    <button className='settingsSubmit' type="submit" >Update</button>
                    {success && <span style={{color: "green", textAlign: "center", marginTop: "20px"}}>Profile has been updated!</span>}
                </form>
            </div>
        </div>
    )
}

export default Settings;

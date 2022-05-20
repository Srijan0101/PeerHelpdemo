import "./TopBar.css"
import {Link} from "react-router-dom";
import { Context } from "../../context/Context";
import { useContext } from "react";

function TopBar() {

  // const user = true;
  const {user, dispatch} = useContext(Context);

  const handleLogout = () => {
    dispatch({type: "LOGOUT"})
  }

  const PF = "http://localhost:5000/images/";

  return( 
    <div className="top">
        <div className="topLeft">
            <div className="topheading">Peer Help!</div>
        </div>
        <div className="topCenter">
            <ul className="topList">
                <li className="topListItem">
                    <Link className="link" to="/">HOME</Link>
                </li>
                <li className="topListItem">
                    <Link className="link" to="/">CONTACT</Link>
                </li>
                <li className="topListItem">
                    <Link className="link" to="/">ABOUT</Link>
                </li>
                <li className="topListItem">
                    <Link className="link" to="/write">WRITE</Link>
                </li>
                <li className="topListItem" 
                onClick={handleLogout}
                >
                    <Link className="link" to="/">{user && "LOGOUT"}</Link>
                </li>
            </ul>
        </div>
        <div className="topRight">
        {user ? (
          <Link className="link" to="/settings">
            <img className="topimg" src={PF+user.profilepPic} alt="user"></img>
          </Link>
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/login">
                LOGIN
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/register">
                REGISTER
              </Link>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
}

export default TopBar;

// {/* <img className="topimg" src="https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes.png" alt="user"></img> */}
import React, { useState, useEffect } from 'react';
import SidebarLeft from '../../components/SidebarLeft/SidebarLeft';
import SidebarRight from '../../components/SidebarRight/SidebarRight';
import Posts from '../../components/Posts/Posts';
import "./Home.css";
import axios from "axios";
import {useLocation} from "react-router";

function Home() {

  const [posts, setPosts] = useState([]);
  const {search} = useLocation();

  useEffect(() => {
    
    const fetchPosts = async () => {
      const res = await axios.get("http://localhost:5000/api/posts"+search);
      console.log(res);
      setPosts(res.data);
    }
    fetchPosts();
  }, [search])

  return (
    <div className='home'>
        <SidebarLeft />
        <Posts posts={posts}/>
        <SidebarRight />
    </div>
)
}

export default Home;

import React from 'react';
import SidebarLeft from '../../components/SidebarLeft/SidebarLeft';
import SidebarRight from '../../components/SidebarRight/SidebarRight';
import SinglePost from '../../components/SinglePost/SinglePost';
import "./Single.css";

function Single() {
  return (
    <div className='single'>
        <SidebarLeft />
        <SinglePost />
        <SidebarRight />
    </div>
  )
}

export default Single;

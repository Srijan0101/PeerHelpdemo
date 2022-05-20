import React from 'react';
import "./SidebarLeft.css";

function SidebarLeft() {
    return (
        <div className='sidebarLeft'>
            <a href='https://salty-citadel-31663.herokuapp.com' target="_blank">
                <button className='sidebarLeftLink btn'>
                    + Create Room
                </button>
            </a>
            <div className='sidebarLeftLink con'>
                Whiteboard
            </div>
            <div className='sidebarLeftLink con'>

            </div>
            <div className='sidebarLeftLink con'>

            </div>
        </div>
    )
}

export default SidebarLeft;

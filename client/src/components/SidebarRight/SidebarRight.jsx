import axios from 'axios';
import React from 'react';
import { useEffect, useState } from 'react';
import {Link} from "react-router-dom";
import "./SidebarRight.css";

function SidebarRight() {

  const[cats, setCats] = useState([]);

  useEffect(() => {
    const getCats = async () => {

      const res = await axios.get("/categories")
      setCats(res.data)
    }
    getCats();
  }, [])
  return (
    <div className='sidebarRight'>
      <div className="sideBarRightItem">
        <div className="sidebarRightTitle">Categories</div>
        <ul className='sideBarRightList'>
          {cats.map(c => {
            <Link to={`/?cat=${c.name}`} className="link">
              <li className='sideBarRightListItem'>{c.name}</li>
            </Link>
          })}
        </ul>
      </div>
      

    </div>
)
}

export default SidebarRight;

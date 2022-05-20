import React from 'react';
import { Link } from "react-router-dom";
import "./Post.css";

function Post({post}) {
  return (
      <div className='post'>
        <Link to={`/post/${post._id}`} className="link" >
          <div className='postTitle'> {post.title} </div>
        </Link>
        <div className='postContent'> {post.desc} </div>
        <div className='postbottom'>
          <div className='postCats'>{
            post.categories.map(c => {
              <div className='postCategory'> {c.name} </div>
            })
          }
          </div>
          <div className='postDate'> {new Date(post.createdAt).toDateString()} </div>
        </div>
      </div>
  )
}

export default Post;

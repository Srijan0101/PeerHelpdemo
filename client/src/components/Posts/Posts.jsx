import Post from "../Post/Post";
import "./Posts.css";

function Posts({posts}) {
  return (
    <div className="posts">
      <img className="homeImg" 
      src="https://www.pikpng.com/pngl/b/578-5782721_technology-background-white-png-tech-background-image-for.png" 
      alt="image"></img>
      <div className="posthome">
        {
          posts.map((p) =>(
            <Post post={p} />
          ))
        }
        {/* <Post />
        <Post />
        <Post />
        <Post />
        <Post />         */}
      </div>
      
    </div>
  )
}

export default Posts;

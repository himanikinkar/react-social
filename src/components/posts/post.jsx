import "./post.css";
import { MoreVert } from "@material-ui/icons";
export default function post() {
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img className="postProfileImg" src="\assests\DP-Pic-Best-Dp-for-whatsappfacebook-and-instagram.jpg" alt=""/>
            <span className="postUsername">Himani Kinkar</span>
            <span className="postDate">5 min ago</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
              <span className="postText">Hey! Its my first post </span>
              <img className ="postImg" src="/assests/DP-Pic-Best-Dp-for-whatsappfacebook-and-instagram.jpg" alt=""/>
        </div>
        <div className="PostBottom">
            <div className="postBottomLeft">
              <img className="likeIcon" src="/assests/like.jpg" alt=""/>
              <img className="likeIcon" src="/assests/heart.png" alt=""/>
              <span className="postLikeCounter">32 people like it</span>
              <span className="postCommentText">9 comments</span>

            </div>
            <div className="postBottomRight">
            </div>
        </div>
      </div>
    </div>
  );
}
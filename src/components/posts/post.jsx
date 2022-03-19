import "./post.css"
import {MoreVert} from "@material-ui/icons"

export default function post(){
    return (
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img className ="postProfileImg" src-"assests/download (1).jpg" alt=""/>
                        <span className="postUsername">Himani Kinkar</span>
                        <span className="postDate">5 min ago </span>
                    </div>
                    <div className="postTopRight">
                        <MoreVert/>
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postText">Hey! my first post</span>
                    <img className="postImg" src="assests/DP-Pic-Best-Dp-for-whatsappfacebook-and-instagram.jpg" alt=""/>
                </div>
                <div className="postBottom">
                    <img className="likeicon" src = "assets/like.png" alt=""/>
                    <img className="likeIcon" src ="assets/heart.png" alt=""/>
                    <span className="postLikeCounter">69 people like it</span>
                </div>
                <div className="postBottom"></div>
            </div>
        </div>
    )
}
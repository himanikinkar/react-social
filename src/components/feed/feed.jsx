import Share from "../share/share";
import Post from "../posts/post"
import "./feed.css";

export default function feed() {
    return (
        <div className = "feed">
            <div className="feedWrapper">
                <Share/>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
            </div>
        </div>
    )
}
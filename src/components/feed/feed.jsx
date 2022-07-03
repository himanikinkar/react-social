import Share from "../share/share";
import Post from "../posts/post"
import "./feed.css";
import {Posts} from "../../dummyData"

export default function feed() {
    return (
        <div className = "feed">
            <div className="feedWrapper">
                <Share/>
                {Posts.map((p)=>(
                    <Post key={p.id} post={p}/>

                ))}
                
            </div>
        </div>
    )
}
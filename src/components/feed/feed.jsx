import Share from "../share/share";
import "./feed.css";

export default function feed() {
    return (
        <div className = "feed">
            <div className="feedWrapper">
                <Share/>
            </div>
        </div>
    )
}
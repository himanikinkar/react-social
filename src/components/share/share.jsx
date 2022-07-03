import "./share.css"
import {PermMedia, Label,Room,EmojiEmotions} from "@material-ui/icons"

export default function share(){
    return (
        <div className="share">
            <div className="sharedWrapper">
                <div className="shareTop">
                    <img className = "shareProfileImg" src="/assests/photo2.jpg" alt = ""/>
                    <input placeholder="whats in your mind" className="shareInput"/>    
                </div>
                <hr className="shareHr"/>
                <div className="shareBottom"> 
                    <div className="shareOptions">
                        <div className="shareOption">
                            <PermMedia htmlolor = "tomato" className="shareIcon"/>
                            <span className="shareOptionText">Photo</span>
                        </div>
                        <div className="shareOption">
                            <Label htmlColor="blue" className="shareIcon"/>
                            <span className="shareOptionText">Tag</span>
                        </div>
                        <div className="shareOption">
                            <Room htmlColor="green" className="shareIcon"/>
                            <span className="shareOptionText">Location</span>
                        </div>
                        <div className="shareOption">
                            <EmojiEmotions htmlColor="goldenrod" className="shareIcon"/>
                            <span className="shareOptionText">Feelings</span>
                        </div>
                    </div>
                    <button className="shareButton">Share</button>
                </div>
            </div>
        </div>
    )
}
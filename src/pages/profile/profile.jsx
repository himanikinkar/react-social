import "./profile.css";
import Topbar from "../../components/topbar/topbar";
import Sidebar from "../../components/sidebar/sidebar";
import Feed from "../../components/feed/feed";
import Rightbar from "../../components/rightbar/Rightbar";

export default function Profile(){
    const PF = process.env.REACT_APP_PUBLIC_FOLDER
    return (
    <>
        <Topbar />
        <div className = "homeContainer">
            <Sidebar />
            <div className="profileRight">
                <div className="profileRightTop">
                    <div className="profileCover">
                        <img className="profileCoverImg" src="/assests/photo3.jpg" alt=""/>
                        <img className="profileUserImg" src="/assests/photo2.jpg" alt=""/>
                    </div>
                    <div className="profileInfo">
                       <h4 className="profileInfoName">Himani Kinkar</h4>
                       <span className="profileInfoDesc">Hello friends</span>
                    </div>
                </div>
                <div className="profileRightBottom">
                    <Feed/>
                    <Rightbar profile/>
                </div>
            </div>
        </div>
    </>
    );
}
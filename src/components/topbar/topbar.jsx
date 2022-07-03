import "./topbar.css"
import { Search,Person,Chat,Notifications} from "@material-ui/icons";
import { Link } from "react-router-dom";

export default function topbar(){
    return (
        <div className = "topbarContainer">
            <div className = "topbarleft">
                <Link to ="/home" style={{textDecoration:"none"}}>
                  <span className="logo">Social Media</span>
                </Link>
            </div> 
            <div className = "topbarCenter">
                <div className = "searchBar">
                    <Search className="searchIcon"/>
                    <input placeholder="Search People" className="searchInput"/>
                </div>
            </div> 
            <div className = "topbarRight">
                <div className="topbarLink">
                    <span className="topbarLink">Homepage</span>
                    <span className="topbarLink">Timeline</span>
                </div>
            </div> 
            <div className="topbarIcons">
                <div className="topbarIconItem">
                   <Person />
                   <span className="topbarIconsBadge">1 </span>
                </div>
                <div className="topbarIconItem">
                   <Chat />
                   <span className="topbarIconsBadge">1 </span>
                </div>
                <div className="topbarIconItem">
                   <Notifications />
                   <span className="topbarIconsBadge">1 </span>
                </div>
            </div>
            <img src = "\assests\photo2.jpg" alt="" className="topbarImg"/>
        </div>
    )
}
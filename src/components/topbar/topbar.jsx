import "./topbar.css"
import { Search,Person,Chat,Notifications} from "@material-ui/icons"

export default function topbar(){
    return (
        <div className = "topbarContainer">
            <div className = "topbarleft">
                <span className="logo">Social Media</span>
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
            <img src = "\assests\images.jpg" alt="" className="topbarImg"/>
        </div>
    )
}
import "./rightbar.css";

export default function rightbar() {
    return (
        <div className= " rightbar">
            <div className="rightbarWrapper">
               <div className="birthdayContainer">
                  <img className="birthdayImg" src="/assests/present.png" alt=""/>
                  <span className="bithdayText">
                     <b>Pola foster</b>and <b> 3 other friends</b> have a birthday today
                  </span>
               </div>
               <img className="rightbarAd" src="/public/assests/advertise.jpg" alt=""/>
               <h4 className="rightbarTitle">Online Friends</h4>
               <ul className="rightbarFriendList">
                  <li className="rightBarFriend">
                    <div className="rightbarProfileImgContainer">
                       <img className="rightbarProfileImg" src="/public/assests/images.jpg" alt=""/>
                    <span className="rightbarOnline"></span>
                   </div>
                  </li>
                </ul>   
            </div>
        </div>
    )
}
import Topbar from "../../components/topbar/topbar";
import Sidebar from "../../components/sidebar/sidebar";
import Feed from "../../components/feed/feed";
import Rightbar from "../../components/rightbar/Rightbar";
// import Post from "../../components/posts/Post";
import "./home.css";

export default function Home() {
    return (
    <>
        <Topbar />
        <div className = "homeContainer">
            <Sidebar />
            <Feed/>
            <Rightbar/>
        </div>
    </>
    );
}
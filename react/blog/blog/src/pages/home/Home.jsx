import Header from "../../header/Header"
import Post from "../../post/Post"
import Sidebar from "../../sidebar/Sidebar"
import "./home.css"
export default function Home() {
    return (
        <div className="home">
            <Sidebar/>
            <Post/>
        </div>
    )
}

import "./topbar.css"
import perfil from "../resources/perfil.jpg"
export default function TopBar(){
    return(
        <div className="top">
            <div className="topLeft">
                <i className="topIcons fa-brands fa-facebook"></i>
                <i className="topIcons fa-brands fa-instagram"></i>
                <i className="topIcons fa-brands fa-twitter"></i>
            </div>
            <div className="topCenter">
                <ul className="topList">
                    <li>ABOUT</li>
                    <li>HOME</li>
                    <li>CONTACT</li>
                    <li>WRITE</li>
                    <li>LOGOUT</li>
                </ul>
            </div>
            <div className="topRight">
               <img src={perfil} alt="" className ="topImage" />
               <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
            </div>
        </div>
    )
}
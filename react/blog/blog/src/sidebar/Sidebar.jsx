import "./sidebar.css"
import firma from "../resources/firma.png"
export default function Sidebar() {
    return (
        <div className="sidebar">
            <img src={firma} alt="firmaCreacion" className="imgFirma" />
            <ul className="sideList">
                <li>ABOUT</li>
                <li>HOME</li>
                <li>CONTACT</li>
                <li>WRITE</li>
                <li>LOGOUT</li>
            </ul>
            <div className="sideSocial">
                <i className="topIcons fa-brands fa-facebook"></i>
                <i className="topIcons fa-brands fa-instagram"></i>
                <i className="topIcons fa-brands fa-twitter"></i>
            </div>
        </div>
    )
}

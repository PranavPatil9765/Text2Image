import { GiMagicSwirl } from "react-icons/gi";
import { useNavigate } from "react-router-dom";
import "../components/navbar.css"
export const Navbar = ()=>{
    
    const navigate = useNavigate();

    return <>
        <div className="navbar-content">
            <div className="logo-name">
                <GiMagicSwirl size={40}/>
                <h2>Text to Image generator</h2>
            </div>
            <div className="nav-list">
                <ul>
                    <li onClick={()=>{navigate("/")}}>Home</li>
                    <li onClick={()=>{navigate("/Community")}}>Community</li>
                </ul>    
            </div>    
        </div>

    </>
}
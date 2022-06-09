
import {useState, useContext, useEffect} from "react";
import {Link, useNavigate} from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { API } from "../lib/api";
import logoPetImg from "../public/img/logoPet.png"
import lupaImg from "../public/img/lupa.png"
import userIcon from '../public/img/userIcon.png'



export default function Navbar(){
    const [perfilVisibility, setPerfilVisibility] = useState(false);
    

    const nav = useNavigate();
    const {state, dispatch} = useContext(UserContext);

    const {user} = state;



    function handlePerfil(){
        let content = document.getElementById("perfilContent");
        console.log(user)
        if(perfilVisibility && content){
            content.style.display = "none"
            setPerfilVisibility(!perfilVisibility);
        }else if(!perfilVisibility && content){
            content.style.display = "block"
            setPerfilVisibility(!perfilVisibility);
        }   
    }
    
    function handleLogout(){
        API.get("/logout").then(res=>{
            dispatch({
                type:"logout",
                payload: null
            })
            window.localStorage.removeItem("user");
            nav("/")
        })
    }

    

   

    return(
        <>
            <nav className="navbar">
                <div className="nav-box-content nav-content-left">
                    <Link to="/">
                        <img className="nav-icon" src={logoPetImg} alt="Voltar para a pagina principal"/>
                    </Link>

                    <div className="search-box">
                        <img className="icon-search" src={lupaImg} alt="Pesquisar"/>
                        <input className="nav-search-input" type="search" title="Procurar ONGs" placeholder="Pesquisar..."/>
                    </div>
                </div>
                <div className="nav-box-content nav-content-right">
                    <Link to="/" className="nav-option">
                        ONGs ❤
                    </Link>
    
                    <button className="nav-profile border-0" onClick={handlePerfil}>
                        <img className="nav-icon"  src={userIcon}/>
                        Perfil
                    </button>
                </div>
            </nav>

            <div className="perfil-content" id="perfilContent">
                {!user ? 
                    <>
                        Para acessar seu Perfil, faça o <Link to="/login" onClick={handlePerfil} className="nav-link"> Login</Link>
                    </>
                : 
                    <>
                        Olá {user.username}!
                        tudo bom?
                        <button className="btn btn-primary" onClick={handleLogout}>Logout</button>
                    </>
                }
                
                
            </div>
        </>
    )
}
import React, {useState, FormEvent} from "react"
import { useNavigate, Link } from "react-router-dom"
import { API } from "../lib/api";
import logoPet from '../public/img/logopet.png'

export default function Login(){
    const [email, setEmail] = useState<string>('diov@gmail.com')
    const [password, setPassword] = useState<string>('oraclo123')
    const [passwordVisibility, setPasswordVisibility] = useState<boolean>(false)
    const nav = useNavigate();

    async function handleSubmit(e: FormEvent){
        e.preventDefault();
        try{
            const response = await API.post('/auth',{
                email,
                password
            }, { withCredentials: true})
            const {data} = response;
            window.localStorage.setItem("user", JSON.stringify(data));
            nav("/");
        }catch(err){
            console.log(err)
        }
    }

    return(
        <>
            <div className="container col-md-4 offset-md-4 pt-5">
                <div className="form-card">
                    <div className="form-card-header">
                        <img src={logoPet} className = "form-logo " />
                        <h3 className="text-center pt-3">Bem vindo!</h3>
                        <p className="text-center pb-3 txt-s">Faça seu login para continuar!</p>
                    </div>
                
                    <form onSubmit={handleSubmit} className="form-style">
                        <input className="form-control mb-4 form-input" type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required/>
                        
                        <input className="form-control mb-2 form-input" type={passwordVisibility ? 'text' : 'password'} placeholder="Senha" value={password} onChange={e => setPassword(e.target.value)} required/>
                        <div className="line-left">
                            <input type="checkbox" checked= {passwordVisibility} onChange = {()=>{setPasswordVisibility(!passwordVisibility)}}/>
                            <p>Mostrar senha</p>
                        </div>
                        <button type="submit" className="btn form-control mt-4 form-btn">
                            Continuar
                        </button>
                    </form>
                    <p className="text-end mt-2">
                        <a className="link-auth" href="/register">Esqueci minha senha!</a>
                    </p>
                    <p className="text-center mt-5">
                    Não tem conta ainda? <Link to="/register">Faça a sua aqui</Link>
                    </p>
                </div>
            </div>
        </>
    )
}
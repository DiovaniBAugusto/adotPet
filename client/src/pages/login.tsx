import React, {useState, FormEvent} from "react"
import { useNavigate, Link } from "react-router-dom"
import { API } from "../lib/api";


export default function Login(){
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const nav = useNavigate();

    async function handleSubmit(e: FormEvent){
        e.preventDefault();
        try{
            const response = await API.post('/auth',{
                email,
                password
            })
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
                    <h4 className="text-center pb-3">Faça seu login</h4>
                    <form onSubmit={handleSubmit} className="form-style">
                        <input className="form-control mb-4 form-input" type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required/>
                        
                        <input className="form-control mb-4 form-input" type="password" placeholder="Senha" value={password} onChange={e => setPassword(e.target.value)} required/>
                    
                        <button type="submit" className="btn form-control mt-4 form-btn">
                            Continuar
                        </button>
                    </form>
                    <p className="text-center mt-2">
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
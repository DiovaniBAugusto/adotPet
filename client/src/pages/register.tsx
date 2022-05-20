import React, {FormEvent, useState} from "react"
import { useNavigate, Link } from 'react-router-dom'
import { API } from "../lib/api";


export default function Register(){
    const [username, setUsername] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [passwordConfirm, setPasswordConfirm] = useState<string>('');
    const nav = useNavigate();
    async function handleSubmit(event: FormEvent){
        event.preventDefault();
        if(password != passwordConfirm){
            alert("As senhas devem ser iguais nos dois campos");
            return;
        }
        try{
            const response = await API.post('/user',{
                username,
                email,
                password
            })

            console.log(response);

        }catch(err){
            console.log(err)
        }
    }

    return(
        <>
            <div className="container col-md-4 offset-md-4 pt-5">
                <div className="form-card">
                <h4 className="text-center pb-3">Faça seu cadastro</h4>
                <form onSubmit={handleSubmit} className="form-style">
                    <input className="form-control mb-4 form-input" type="text" placeholder="Usuário" value={username} onChange={e => setUsername(e.target.value)} required/>
                    
                    <input className="form-control mb-4 form-input" type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required/>
                    
                    <input className="form-control mt-2 mb-4 form-input" type="password" placeholder="Senha" value={password} onChange={e => setPassword(e.target.value)} required/>
                    <input className="form-control mb-4 form-input" type="password" placeholder="Confirme sua senha" value={passwordConfirm} onChange={e => setPasswordConfirm(e.target.value)} required/>

                    <button type="submit" className="btn form-control form-btn mt-4">
                        Cadastrar
                    </button>
                </form>
                <p className="text-center mt-5">
                    Ja tem uma conta? <Link to="/login">Faça seu login aqui</Link>
                </p>
                </div>
            </div>
        </>
    )
}
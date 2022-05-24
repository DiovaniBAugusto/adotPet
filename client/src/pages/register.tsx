import React, {FormEvent, useState} from "react"
import { useNavigate, Link } from 'react-router-dom'
import { API } from "../lib/api";


export default function Register(){
    const [username, setUsername] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [passwordConfirm, setPasswordConfirm] = useState<string>('');
    const [passwordVisibility, setPasswordVisibility] = useState<boolean>(false)
    const [passwordConfirmVisibility, setPasswordConfirmVisibility] = useState<boolean>(false)

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
                <h3 className="text-center">Criar nova conta</h3>
                <p className="text-center pb-3 txt-s">Preencha os dados a baixo para se cadastrar em nosso site!</p>
                <form onSubmit={handleSubmit} className="form-style">
                    <input className="form-control mb-4 form-input" type="text" placeholder="Usuário" value={username} onChange={e => setUsername(e.target.value)} required/>
                    
                    <input className="form-control mb-4 form-input" type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required/>
                    
                    <input className="form-control mt-2 mb-2 form-input" type={passwordVisibility ? 'text' : 'password'} placeholder="Senha" value={password} onChange={e => setPassword(e.target.value)} required/>
                    <div className="line-left">
                            <input type="checkbox" checked= {passwordVisibility} onChange = {()=>{setPasswordVisibility(!passwordVisibility)}}/>
                            <p>Mostrar senha</p>
                        </div>
                    <input className="form-control mb-2 form-input" type={passwordConfirmVisibility ? 'text' : 'password'} placeholder="Confirme sua senha" value={passwordConfirm} onChange={e => setPasswordConfirm(e.target.value)} required/>
                    <div className="line-left">
                            <input type="checkbox" checked= {passwordConfirmVisibility} onChange = {() =>{setPasswordConfirmVisibility(!passwordConfirmVisibility)}}/>
                            <p>Mostrar senha</p>
                        </div>
                    <button type="submit" className="btn form-control form-btn mt-4">
                        Cadastrar
                    </button>
                </form>
                <p className="text-center mt-5">
                    Ja tem uma conta? <Link to="/login">Faça seu login</Link>
                </p>
                </div>
            </div>
        </>
    )
}
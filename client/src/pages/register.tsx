import React, {FormEvent, useState} from "react"


export default function Register(){
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    function handleSubmit(event: FormEvent){
        event.preventDefault();
        
    }

    return(
        <>
            <div className="container col-md-4 offset-md-4 pt-5">
                <h4 className="text-center pb-3">Faça seu cadastro aqui</h4>
                <form>
                    <label>
                        Nome:
                    </label>
                    <input className="form-control p-4 mb-4" type="text" placeholder="digite seu nome aqui" value={name} onChange={e => setName(e.target.value)} required/>
                    <label>
                        Email:
                    </label>
                    <input className="form-control p-4 mb-4" type="email" placeholder="digite seu email aqui" value={email} onChange={e => setEmail(e.target.value)} required/>
                    <label>
                        Senha:
                    </label>
                    <input className="form-control p-4 mb-4" type="password" placeholder="digite sua senha aqui" value={password} onChange={e => setPassword(e.target.value)} required/>

                    <button type="submit" className="btn btn-primary form-control">
                        Cadastrar
                    </button>
                    
                    <p className="text-center mt-4">
                    Ja tem uma conta? <a href="/login">Faça seu login aqui</a>
                    </p>
                    
                </form>
            </div>
        </>
    )
}
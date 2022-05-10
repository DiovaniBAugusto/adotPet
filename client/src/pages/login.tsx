import React, {useState, FormEvent}from "react"


export default function Login(){
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    function handleSubmit(e: FormEvent){
        e.preventDefault();

    }

    return(
        <>
            <div className="container col-md-4 offset-md-4 pt-5">
                <h4 className="text-center pb-3">Login</h4>
                <form onSubmit={handleSubmit}>
                    <label>
                        Email:
                    </label>
                    <input className="form-control p-4 mb-4" type="email" placeholder="digite seu email aqui" value={email} onChange={e => setEmail(e.target.value)} required/>
                    <label>
                        Senha:
                    </label>
                    <input className="form-control p-4 mb-4" type="password" placeholder="digite sua senha aqui" value={password} onChange={e => setPassword(e.target.value)} required/>

                    <button type="submit" className="btn btn-primary form-control">
                        Logar
                    </button>
                    
                    <p className="text-center mt-4">
                    Não tem conta ainda? <a href="/register">Faça a sua aqui</a>
                    </p>
                    
                </form>
            </div>
        </>
    )
}
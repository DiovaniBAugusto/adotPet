//Pagina teste para verificar o sistema de autenticação
//Este arquivo deve ser excluído com o desenvolver do projeto 

import logoPet from '../public/img/logopet.png'
import AuthWrapper from "../components/authWrapper"

export default function Teste(){

    return(
        <AuthWrapper>
            <div className="container col-md-4 offset-md-4 pt-5">
                <div className="form-card">
                    <div className="form-card-header">
                        <img src={logoPet} className = "form-logo " />
                    
                        <h3 className="text-center pt-3">Bem vindo!</h3>
                        <p className="text-center pb-3 txt-s">Faça seu login para continuar!</p>
                    </div>
                </div>
            </div>
        </AuthWrapper>
    )
}
import React from 'react';
import { Link } from 'react-router-dom'

import logoLogin from '../../assets/logo-home.svg';


function Login() {
    return (

        <div id="page-background">
            <img src={logoLogin} alt="Login" />

            <div className="content">
                <main>
                    <h1>Entrar</h1>
                    <form action="">
                        <button>Email</button>
                        <button>Senha</button>
                    </form>

                    <Link to ="" className="btn-login">Entrar</Link>
                    <span>Esqueceu sua Senha?</span>

                    <span>Ainda não nos conhece?</span>
                    <span>CLIQUE AQUI e registre-se.</span>
                </main>

            </div>
        </div>
    )
}

export default Login;
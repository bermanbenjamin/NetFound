import React from 'react';
import { Link } from 'react-router-dom'

import Logo from '../components/Logo/Logo';


function Login() {
    return (
        <div id="page-background">

            <main>
                <Logo />

                <form action="" className="insert-login-form">
                    <h1>Entrar</h1>

                    <div className="input-block">
                        <label htmlFor="email">Email</label>
                        <input type="text" name="email" className="insert-email" />
                    </div>

                    <div className="input-block">
                        <label htmlFor="password">Senha</label>
                        <input type="password" name="password" className="insert-password" />
                    </div>

                    <Link to="/recomendation" className="btn-login">Entrar</Link>



                </form>
            </main>


        </div>
    )
}

export default Login;
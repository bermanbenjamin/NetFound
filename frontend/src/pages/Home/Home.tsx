import React from 'react';
import { Link } from 'react-router-dom'
import { FiChevronRight } from 'react-icons/fi';

import './home.css';

import logoHome from '../../assets/logo-home.svg';

function Home() {
    return (

        <div id="page-background">
            <div className="content">
                <img src={logoHome} alt="Home" />

                <main>
                    <h1>Tá cansado de assistir os mesmos<br />filmes e séries né?</h1>
                    <span>Ache as melhores programações pro estilo que combina com você!</span>


                    <Link to="/login" className="enter-app">
                        <div className="text-button">
                            <span>VAMOS LÁ</span>
                        </div>

                        <div className="icon">
                            <FiChevronRight size={40} color="#ffffff" />
                        </div>
                    </Link>
                </main>
            </div>
        </div>
    )
}

export default Home;
import React from "react";
import { Link } from "react-router-dom";
import { FiChevronRight } from "react-icons/fi";

import "./home.css";
import Logo from "../components/Logo/Logo";

function Home() {
  return (
    <div id="page-background">
      <main>
        <div className="content">
        <Logo />

          <h1>Tá cansado de assistir os mesmos filmes e séries né?</h1>
          <span>
            Ache as melhores programações pro estilo que combina com você!
          </span>

          <Link to="/login">
            <button className="enter-app">
              <div className="text-button">
                <span>VAMOS LÁ</span>
              </div>

              <div className="icon">
                <FiChevronRight size={40} color="#ffffff" />
              </div>
            </button>
          </Link>
        </div>
      </main>
    </div>
  );
}

export default Home;

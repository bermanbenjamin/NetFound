import React from "react";
import { Link } from 'react-router-dom';

import Logo from "../components/Logo/Logo";


function Recomenation() {
  return (
    <div id="page-background">
      <Logo />

      <div className="content">
        <main>
          <h1>Perguntas</h1>
          <span>Aqui você deve colocar inserir informações<br />importantes para defirnmos padrão</span>

          <form action="" className="insert-ask-form" >

            <div className="input-block">
              <input type="text" name="email" className="" />
            </div>

            <div className="input-block">
              <input type="text" name="email" className="" />
            </div>

            <div className="input-block">
              <input type="text" name="email" className="" />
            </div>

            <div className="input-block">
              <input type="text" name="email" className="" />
            </div>

            <Link to="" className="btn-login">Avançar</Link>
          </form>
        </main>

      </div>
    </div>

  );
}

export default Recomenation;

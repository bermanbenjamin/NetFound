import React, { FormEvent, useState } from "react";
import { useHistory } from "react-router";
import { useForm } from "react-hook-form";
import Logo from "../components/Logo/Logo";
import api from "../../services/api";

import "./login.css";

type User = {
  user: string;
  password: string;
};

function Login() {
  const { register, handleSubmit } = useForm<User>();

  let history = useHistory();

  const onSubmit = handleSubmit((data) => {
    const body = {
      username: data.user,
      password: data.password,
    };

    console.log(body);

    api
      .post("/services/sign-in", body)
      .then((response) => history.push("/quests"));
  });

  return (
    <div id="page-background">
      <main>
        <Logo />

        <div className="background-form-login">
          <form onSubmit={onSubmit} className="insert-login-form">
            <h1>Entrar</h1>

            <input
              ref={register({ required: true })}
              id="user"
              name="user"
              type="text"
              placeholder="Usuário"
            />

            <input
              ref={register({ required: true })}
              id="password"
              name="password"
              type="password"
              placeholder="Senha"
            />

            <button type="submit">Entrar</button>
          </form>
        </div>
      </main>
    </div>
  );
}

export default Login;

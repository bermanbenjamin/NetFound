import React, { FormEvent, useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router";
import Logo from "../components/Logo/Logo";
import api from "../../services/api";

import "./quests.css";

type Quest = {
  type: string;
  genre: string;
  director: string;
  begin: String;
  end: String;
};

function Quests() {
  const { register, handleSubmit, errors } = useForm<Quest>();

  let directors: any[] = [];

  let history = useHistory();

  function getDirectors() {
    api
      .get("/services/directors")
      .then((response) => (directors = response.data));
  }

  const onSubmit = handleSubmit((data) => {
    if (data.genre == "Fantasia") {
      data.genre = "14";
    }
    if (data.genre == "Drama") {
      data.genre = "18";
    }
    if (data.genre == "Crime") {
      data.genre = "80";
    }
    if (data.genre == "Romance") {
      data.genre = "10749";
    }
    if (data.genre == "Comédia") {
      data.genre = "35";
    }

    api
      .get("/services/sugestion", {
        params: {
          id_genre: data.genre,
          director: data.director,
          end_date: data.end,
          type: data.type,
          begin_date: data.begin,
        },
      })
      .then((response) => {
        localStorage.setItem("movieTitle", response.data[0].title.toString());
        localStorage.setItem("movieDescription", response.data[0].overview);
        localStorage.setItem("movieGenre", response.data[0].genres[0].name);
        localStorage.setItem(
          "movieDate",
          response.data[0].release_date.toString()
        );
        localStorage.setItem(
          "movieDirector",
          response.data[0].director.toString()
        );
        localStorage.setItem(
          "movieImage",
          response.data[0].poster_path.toString()
        );
        history.push("/recomendation");
      });

    // window.open("/recomendation:14");
  });

  return (
    <div id="page-background">
      <main>
        <Logo />

        <div className="background-form-quest">
          <form onSubmit={onSubmit} className="insert-login-form">
            <div className="top-title">
              <h1>Perguntas</h1>
              <span>
                Aqui você deve colocar inserir informações importantes <br />{" "}
                para definirnmos uma sugestão
              </span>
            </div>
            <select name="type" id="type" ref={register({ required: true })}>
              <option value="filme">Filme</option>
              <option value="série">Série</option>
            </select>

            <input
              ref={register({ required: true })}
              id="director"
              name="director"
              type="director"
              placeholder="Diretor"
            />

            <input
              ref={register({ required: true })}
              id="genre"
              name="genre"
              type="genre"
              placeholder="Gênero"
            />

            <input
              ref={register({ required: true })}
              id="begin"
              name="begin"
              type="begin"
              placeholder="De"
            />

            <input
              ref={register({ required: true })}
              id="end"
              name="end"
              type="end"
              placeholder="Até"
            />

            <button type="submit">Procurar</button>
          </form>
        </div>
      </main>
    </div>
  );
}

export default Quests;

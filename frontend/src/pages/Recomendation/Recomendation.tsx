import React from "react";
import { Link } from "react-router-dom";

import "./recomendation.css";

function Recomenation(props: any) {
  let movieTitle = localStorage.getItem('movieTitle');
  let movieDescription = localStorage.getItem('movieDescription');
  let movieDirector = localStorage.getItem('movieDirector');
  let movieGenre = localStorage.getItem('movieGenre');
  let movieImage = localStorage.getItem('movieImage');
  let movieDate = localStorage.getItem('movieDate');



  return (
    <div id="page-background">
      <main>
        <div className="recomendation">
          <img
            src={movieImage ? movieImage : ''}
            alt="banner image"
            className="poster"
          />
          <section className="info">
            <h1>{movieTitle}</h1>

            <p>
              {
                movieDescription
              }
            </p>
            <div>
              <span>{`Dirigido Por ${movieDirector}`}</span>
              <br />
              <br />
              <span>{`Lançamento: ${movieDate}`}</span>
            </div>
          </section>
        </div>
        <Link to="/quests">
          <button>Nova Sugestão</button>
        </Link>
      </main>
    </div>
  );
}

export default Recomenation;

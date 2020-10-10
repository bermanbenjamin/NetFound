const express = require('express');
const { uuid, isUuid } = require('uuidv4');
const cors = require('cors');


const app = express();

app.use(cors());
app.use(express.json());

const movies = [];

function logRequests(request, response, next) {
    const { method, url } = request;

    const logLabel = `[${method.toUpperCase()}] ${url}`;

    console.log(logLabel);

    return next();
}

function validadeMovieId(request, response, next) {
    const { id } = request.params;

    if (!isUuid(id)) {
        return response.status(400).json({ error: 'Invalid Movie ID. ' })
    }

    return next();
}

app.use(logRequests);

app.get('/movies', (request, response) => {
    const { title } = request.query;

    const results = title
        ? movies.filter(movie => movie.title.includes(title))
        : movies;

    return response.json(results);
});

app.post('/movies', (request, response) => {
    const { title, sinopse, url_background, url_img, original_lengague, dt_lancamento, director } = request.body;

    const movie = { id: uuid(), title, sinopse, url_background, url_img, original_lengague, dt_lancamento, director };

    movies.push(movie);

    return response.json(movie);
});

app.put('/movies/:id', validadeMovieId, (request, response) => {
    const { id } = request.params;
    const { title, sinopse, url_background, url_img, original_lengague, dt_lancamento, director } = request.body;

    const movieIndex = movies.findIndex(movie => movie.id == id);

    if (movieIndex < 0) {
        return response.status(400).json({ error: 'Movie not found.' });
    }

    const movie = {
        id,
        title,
        sinopse, 
        url_background, 
        url_img, 
        original_lengague, 
        dt_lancamento, 
        director
    };

    movies[movieIndex] = movie;


    return response.json(movie);
});

app.delete('/movies/:id', validadeMovieId, (request, response) => {
    const { id } = request.params;

    const movieIndex = movies.findIndex(movie => movie.id == id);

    if (movieIndex < 0) {
        return response.status(400).json({ error: 'Movie not found.' });
    }

    movies.splice(movieIndex, 1);

    return response.status(204).send();
});

app.listen(3333, () => {
    console.log('🚀 Back-end Started');
});
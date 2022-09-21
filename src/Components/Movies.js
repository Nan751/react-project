import React, { useState } from 'react';
import Header from './Header';
import axios from 'axios';
import './Movies.css'

const Movies = () => {
    let [movies, setMovies] = useState([]);
    let [title, settitle] = useState('');


    const searchMovie = async (e) => {
        e.preventDefault();

        const API_KEY = "b57e0c63";
        const apiURI = `https://www.omdbapi.com/?i=tt3896198&apikey=${API_KEY}&s=${title}`;

        try {
            const response = await axios.get(apiURI);
            const data = response.data.Search
            console.log(data)
            setMovies(data);

        } catch (err) {
            console.error(err);
        }
    }

    console.log(movies, "movies");


    return (
        <div>
            <Header
                searchMovie={searchMovie}
                title={title}
                settitle={settitle}
                movies={movies}
            />
        </div>
    )
}

export default Movies;
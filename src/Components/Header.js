import React, { Fragment } from 'react';
import './Header.css';
import Card from './Card';



const Header = ({ searchMovie, title, settitle, movies }) => {
    return (
        <>
            <div className="header">

                <div className="search">
                    <form className="search-form" onSubmit={searchMovie}>
                        <label
                            htmlFor="title"
                            className="name"
                        >
                        </label>
                        <input
                            type="text"
                            name="title"
                            placeholder="i.e SEARCH MOVIES "
                            value={title}
                            onChange={(e) => settitle(e.target.value)}
                        />
                        <button type="submit">Search</button>
                    </form>
                </div>
            </div>

            <div className="list-movie">
                <Card movies={movies} />
            </div>
        </>
    )
}

export default Header;
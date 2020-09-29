import React from 'react';
import Movie from './Movie';

const MoviesList = ({ moviesInfo, addToFavorite }) => {
    return(
        <div className="moviesList">
            { moviesInfo.map(movie => <Movie movieInfo={movie} key={movie.id} addToFavorite={addToFavorite} />) }
        </div>
    )
}

export default MoviesList;
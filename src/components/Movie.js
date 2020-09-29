import React from 'react';

const Movie = ({ movieInfo, addToFavorite, removeFromFavorite }) => {
    return(
        <div className="movieCard">
            <img 
                src={movieInfo.posterUrl}
                alt="movie poster"
                onError={(e)=>{e.target.onerror = null; e.target.src="https://i.imgur.com/8grOSdM.png?1"}}
            />
            {movieInfo.title}
            {
                addToFavorite &&
                <button onClick={() => addToFavorite(movieInfo)}>Add to Favs!</button>
            }
            {
                removeFromFavorite &&
                <button onClick={() => removeFromFavorite(movieInfo)}>Remove from Favs!</button>
            }
        </div>
    )
}

export default Movie;
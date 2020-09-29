import React from 'react';
import Movie from './Movie';

const FavoritesList = ({ favoritesInfo, removeFromFavorite }) => {
    return(
        <div className="moviesList">
            { favoritesInfo.map(favorite => <Movie removeFromFavorite={removeFromFavorite} movieInfo={favorite} key={favorite.id} />) }
        </div>
    )
}

export default FavoritesList;
import React, { Component } from 'react';
import './App.css';
import FavoritesList from './FavoritesList';
import MoviesList from './MoviesList';

class App extends Component {
  constructor() {
    super();
    this.state = {
      moviesInfo: [],
      favoritesList: [],
    }
  }

  componentDidMount() {
    this.fetchMovies()
  }

  fetchMovies = () => {
    fetch('https://raw.githubusercontent.com/wildcodeschoolparis/datas/master/movies.json')
      .then(res => res.json())
      .then(data => this.setState({ moviesInfo: data.movies }))
  }

  handleAddToFavorite = (clickedMovie) => {
    const { favoritesList } = this.state;

    const isInFav = favoritesList.find(fav => fav.id === clickedMovie.id);
    if (!isInFav) {
      this.setState({ favoritesList: [...this.state.favoritesList, clickedMovie] })
    }

    // const favoriteMovies = this.state.favoritesList
    // if (favoriteMovies.indexOf(clickedMovie) === -1) {
    //   this.setState({ favoritesList: [...this.state.favoritesList, clickedMovie] })
    // }
  }

  handleRemoveFromFavorite = (clickedMovie) => {
    const { favoritesList } = this.state;

    const removed = favoritesList.filter(favorite => favorite.id !== clickedMovie.id);
    this.setState({ favoritesList: removed })
  }

  render() {
    const { moviesInfo, favoritesList } = this.state;
    return (
      <div className="App">
        Favorites List:
        <FavoritesList removeFromFavorite={this.handleRemoveFromFavorite} favoritesInfo={favoritesList} />
        Movies List:
        <MoviesList addToFavorite={this.handleAddToFavorite} moviesInfo={moviesInfo} />
      </div>
    );
  }
}

export default App;

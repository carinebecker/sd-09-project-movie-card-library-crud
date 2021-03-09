import React, { Component } from 'react';
import { Loading } from '../components';
import MovieCard from '../components/MovieCard';
import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
    };

    this.fetchMoviesApi = this.fetchMoviesApi.bind(this);
  }

  componentDidMount() {
    this.fetchMoviesApi();
  }

  async fetchMoviesApi() {
    const movieList = await movieAPI.getMovies();
    this.setState({ movies: movieList });
  }

  render() {
    const { movies } = this.state;

    if (movies.length === 0) {
      return (
        <Loading />
      );
    }

    return (
      <div data-testid="movie-list">
        {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
      </div>
    );
  }
}

export default MovieList;

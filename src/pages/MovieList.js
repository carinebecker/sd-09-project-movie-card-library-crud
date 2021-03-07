import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      loading: true,
    };

    this.fetchMovies = this.fetchMovies.bind(this);
  }

  componentDidMount() {
    this.fetchMovies();
  }

  async fetchMovies() {
    const data = await movieAPI.getMovies();
    console.log(data);
    this.setState({
      movies: data,
      loading: false,
    });
  }

  render() {
    const { movies, loading } = this.state;
    // Render Loading here if the request is still happening
    const moviesMap = movies.map((movie) => (
      <MovieCard key={ movie.title } movie={ movie } />
    ));
    return (
      <div data-testid="movie-list">
        { loading ? <Loading /> : moviesMap }
      </div>
    );
  }
}

export default MovieList;

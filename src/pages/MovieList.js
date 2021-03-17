import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      loading: false,
    };

    this.getMovies = this.getMovies.bind(this);
  }

  componentDidMount() {
    this.getMovies();
  }

  async getMovies() {
    const { getMovies } = movieAPI;
    const data = await getMovies();
    this.setState({
      movies: data,
      loading: true,
    });
  }

  render() {
    const { movies, loading } = this.state;

    // Render Loading here if the request is still happening
    if (loading) {
      return (

        <div data-testid="movie-list">
          {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
        </div>
      );
    }
    return (
      <Loading />
    );
  }
}

export default MovieList;

import React from 'react';
import { Link } from 'react-router-dom'

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { title, subtitle, id, storyline, imagePath } = movie;
    return (
      <div className="movie-card-body movie-card hvr-underline-reveal hvr-grow" data-testid="movie-card">
        <img alt="Movie Img" className="movie-card-image" src={ imagePath } />
        <div>
        <h4 data-testid="movie-card-title" className="movie-card-title">{title}</h4>
        <h5 className="movie-card-subtitle">{subtitle}</h5>
        <p className="movie-card-storyline">{storyline}</p>
      </div>
        <Link className="button-details" to={ `/movies/${id}` }>VER DETALHES</Link>
      </div>
    );
  }
}

export default MovieCard;

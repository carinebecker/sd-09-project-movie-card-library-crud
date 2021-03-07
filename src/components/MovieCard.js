import React from 'react';
import { Link } from 'react-router-dom';
import PropType from 'prop-types';
//  import movies from '../services/movieData';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { title, storyline, id } = movie;
    return (
      <div data-testid="movie-card">
        { /* Movie Card */ }
        <p>{title}</p>
        <p>{storyline}</p>
        <p><Link to={ `movies/${id}` }>VER DETALHES</Link></p>
      </div>
    );
  }
}

MovieCard.propType = {
  movie: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.number,
    imagePath: PropTypes.string,
    bookmarked: PropTypes.bool,
    genre: PropTypes.string,
  }).isRequired,
};
export default MovieCard;

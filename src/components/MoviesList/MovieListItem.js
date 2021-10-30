import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import s from './MoviesList.module.css';
import defaultPoster from './defaultPoster.png';
import PropTypes from 'prop-types';

const MoviesListItem = ({ movie, type, location }) => {
  const movieName =
    movie.name || movie.title || movie.original_name || movie.original_title;
  return (
    <Link
      to={{
        pathname: `/movies/${movie.id}/${movie.media_type || type}`,
        state: {
          from: location,
        },
      }}
    >
      <li className={s.item}>
        <div className={s.overlayBox}>
          {movie.poster_path ? (
            <img
              className={s.image}
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt={movieName}
            />
          ) : (
            <img className={s.image} src={defaultPoster} alt={movieName} />
          )}
          <div className={s.overlay}>
            <i className={`material-icons ${s.materialIcons}`}>grade</i>
            <span className={s.rating}>{movie.vote_average}</span>
            <i className={`material-icons ${s.materialIcons}`}>group</i>
            <span className={s.rating}>{movie.vote_count}</span>
          </div>
          <h2 className={s.name}>{movieName}</h2>
        </div>
      </li>
    </Link>
  );
};

export default withRouter(MoviesListItem);

MoviesListItem.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    media_type: PropTypes.string,
    poster_path: PropTypes.string,
    name: PropTypes.string,
    title: PropTypes.string,
    original_name: PropTypes.string,
    original_title: PropTypes.string,
    vote_average: PropTypes.number,
    vote_count: PropTypes.number,
  }).isRequired,
  // getType: PropTypes.func.isRequired,
  type: PropTypes.string,
};

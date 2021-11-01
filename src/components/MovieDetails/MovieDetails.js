import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
// import * as movieApi from '../../services/API';
// import WatchTrailerButton from '../WatchTrailerBtn/WatchTrailerBtn';
// import Modal from '../Modal/Modal';
// import YouTubeFrame from '../YouTubeFrame/YouTubeFrame';
import defaultPoster from '../MoviesList/defaultPoster.png';
// import { ReactComponent as YouTubeIcon } from '../WatchTrailerBtn/youtube-icon.svg';
import s from './MovieDetails.module.css';

import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';

const MovieDetails = ({ movie, match, history, location }) => {
  const [back, setBack] = useState();
  const backDate = history.location.state;
  // const [trailers, setTrailers] = useState(null);
  // const [showModal, setShowModal] = useState(false);
  // const [status, setStatus] = useState('idle');

  useEffect(() => {
    backDate && setBack(backDate);
  }, [backDate]);

  const GoBack = () => {
    history.push(back?.from);
  };

  // useEffect(
  //   () => {
  //     getTrailers();
  //   },
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  //   [],
  // );

  // const getTrailers = () => {
  //   setStatus('pending');
  //   movieApi.fetchTrailers().then(response => {
  //     const data = response.results;
  //     setTrailers(data);
  //     setStatus('resolved');
  //     if (status === 'resolved') {
  //       toggleModal();
  //     }
  //   });
  // };

  // const toggleModal = () => {
  //   setShowModal(!showModal);
  // };

  return (
    <div className={s.wrapper}>
      <h1 className={s.movieName}>
        {movie.title || movie.name} (
        {movie.original_title || movie.original_name})
      </h1>
      <button className={s.goBack} type="button" onClick={GoBack}>
        <span className={`material-icons ${s.arrowBack}`}>west</span>
      </button>
      {/* {showModal && (
        <Modal onToggle={toggleModal} aria-label="open trailers">
          <YouTubeFrame trailers={trailers} />
        </Modal>
      )} */}

      <div
        className={s.poster}
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/w500/${movie.backdrop_path})`,
          backgroundSize: 'cover',
        }}
      >
        <div className={s.posterOverlay}></div>
        <div className={s.description}>
          <div className={s.image}>
            {movie.poster_path ? (
              <img
                className={s.smallImg}
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path} `}
                alt={movie.original_name}
              />
            ) : (
              <img
                className={s.smallImg}
                src={defaultPoster}
                alt={movie.original_name}
              />
            )}

            <a
              className={s.movieHomepage}
              href={movie.homepage}
              target="_blank"
              rel="noreferrer"
            >
              Домашняя страница фильма
            </a>
          </div>
          <div className={s.info}>
            <h2 className={s.mainTitle}>{movie.tagline}</h2>
            <div className={s.box}>
              <h3 className={s.title}>Рейтинг :</h3>
              <i className={`material-icons ${s.materialIcons}`}>grade</i>
              <span className={s.rating}>{movie.vote_average}</span>
              <i className={`material-icons ${s.materialIcons}`}>group</i>
              <span className={s.rating}>{movie.vote_count}</span>
            </div>

            <div className={s.box}>
              <h3 className={s.title}>Жанр :</h3>
              <ul className={s.genres}>
                {movie.genres &&
                  movie.genres.map(({ id, name }) => (
                    <li className={s.genre} key={id}>
                      {name}
                    </li>
                  ))}
              </ul>
            </div>

            <div className={s.box}>
              <h3 className={s.title}>Дата релиза :</h3>
              <p>{movie.release_date || movie.first_air_date}</p>
            </div>

            <div className={s.box}>
              <h3 className={s.title}>Время :</h3>
              <p>{movie.runtime || movie.episode_run_time} мин.</p>
            </div>

            <div className={s.box}>
              <h3 className={s.title}>О чём "{movie.title || movie.name}" :</h3>
              <p className={s.infoMovie}>{movie.overview}</p>
            </div>

            <nav className={s.nav}>
              <NavLink
                to={{
                  pathname: `${match.url}/casts`,
                }}
                className={s.link}
                activeClassName={s.activeLink}
              >
                Актёры
              </NavLink>
              <NavLink
                to={{
                  pathname: `${match.url}/reviews`,
                }}
                className={s.link}
                activeClassName={s.activeLink}
              >
                Отзывы
              </NavLink>
              {/* <article className="movieArticle trailerButton">
                <WatchTrailerButton onClick={getTrailers}>
                  <YouTubeIcon width="80" height="50" />
                </WatchTrailerButton>
              </article> */}
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(MovieDetails);

MovieDetails.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    media_type: PropTypes.string,
    poster_path: PropTypes.string,
    homepage: PropTypes.string,
    tagline: PropTypes.string,
    release_date: PropTypes.string,
    first_air_date: PropTypes.string,
    name: PropTypes.string,
    title: PropTypes.string,
    original_name: PropTypes.string,
    original_title: PropTypes.string,
    vote_average: PropTypes.number,
    vote_count: PropTypes.number,
    overview: PropTypes.string,
    adult: PropTypes.bool,
    genres: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
      }),
    ),
  }).isRequired,
};

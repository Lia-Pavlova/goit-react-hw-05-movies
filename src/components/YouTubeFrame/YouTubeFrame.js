import PropTypes from 'prop-types';
import './YouTubeFrame.module.css';
import errorImage from './error.png';

export default function YouTubeFrame({ trailers }) {
  return (
    <>
      {trailers.length !== 0 ? (
        <iframe
          src={`https://www.youtube.com/embed/${trailers[0].key}`}
          title={trailers[0].name}
          className="iFrame"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      ) : (
        <>
          <h2 style={{ textAlign: 'center' }}>
            Трейлер к этому фильму отсутствует...
          </h2>
          <img src={errorImage} alt="no trailer" />
        </>
      )}
    </>
  );
}

YouTubeFrame.propTypes = {
  movies: PropTypes.array,
};

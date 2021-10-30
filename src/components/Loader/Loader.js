import s from './Loader.module.css';
import Loader from 'react-loader-spinner';

export default function ImagePendingView() {
  return (
    <Loader
      className={s.loader}
      type="Circles"
      color="#057a8fcc"
      height={100}
      width={100}
    />
  );
}

import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from './themoviedb.svg';
import s from './header.module.css';
import Container from '../Container/Container';
import paths from '../Routes/paths';

export default function Header() {
  return (
    <header className={s.header}>
      <Container className="Container">
        <div className={s.wrapper}>
          <Link className={s.logo} to={paths.HOME}>
            <img src={logo} alt="logo" className={s.logo} />
          </Link>

          <nav className={s.nav}>
            <NavLink
              exact
              to={paths.HOME}
              className={s.link}
              activeClassName={s.activeLink}
            >
              Популярные
            </NavLink>
            <NavLink
              exact
              to={paths.FILMS}
              className={s.link}
              activeClassName={s.activeLink}
            >
              Фильмы
            </NavLink>
            <NavLink
              exact
              to={paths.TV}
              className={s.link}
              activeClassName={s.activeLink}
            >
              Сериалы
            </NavLink>
            <NavLink
              to={paths.MOVIES}
              className={s.link}
              activeClassName={s.activeLink}
            >
              Найти
            </NavLink>
          </nav>
        </div>
      </Container>
    </header>
  );
}

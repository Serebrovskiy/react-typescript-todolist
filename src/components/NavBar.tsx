import React from 'react';
import { NavLink } from 'react-router-dom';

export const NavBar: React.FunctionComponent = () => (
  <nav>
    <div className="nav-wrapper light-blue darken-3 px1">
      <a href="/" className="brand-logo">
        Home notes
      </a>
      <ul className="right hide-on-med-and-down">
        <li>
          <NavLink to="/">Список дел</NavLink>
        </li>
        <li>
          <NavLink to="/useful-links">Полезные ссылки</NavLink>
        </li>
        <li>
          <NavLink to="/about">Информация</NavLink>
        </li>
      </ul>
    </div>
  </nav>
);

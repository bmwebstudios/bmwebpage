import React from 'react';
import { NavLink } from 'react-router-dom';
import { RoutesConfig } from '../config/routes.config';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ReactComponent as ReactSeoLogoSvg } from '../assets/img/blueMonkeyIcon.svg';

const NavBar: React.FC = () => (
  <nav
    role='navigation'
    className='navbar'
    aria-label='main navigation'
  >
    <div className='navbar-wrapper'>
      <div className='brand-wrapper'>
        <ReactSeoLogoSvg
          height='68'
          width='170'
          aria-hidden={true}
          title='react-seo-template'
        />
      </div>
      <div className='navbar-routes'>
        <NavLink
          className='navbar-item'
          to={RoutesConfig.Home.path}
          exact={RoutesConfig.Home.exact}
          activeClassName={RoutesConfig.Home.activeClassName}
        >
          <span>{RoutesConfig.Home.displayName}</span>
        </NavLink>
        <NavLink
          className='navbar-item'
          to={RoutesConfig.Services.path}
          exact={RoutesConfig.Services.exact}
          activeClassName={RoutesConfig.Services.activeClassName}
        >
          <span>{RoutesConfig.Services.displayName}</span>
        </NavLink>


      </div>
    </div>
  </nav>
);

export default NavBar;

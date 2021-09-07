import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const Header = () => (
 <header className="header">
 <div className="content-container">
      <div className="header__content">
      <Link className="header__title" to="/">
      <h1>Expensify</h1>
    </Link>
    <NavLink className="button button--link" to="/" activeClassName="is-active" exact={true}>Dashboard</NavLink>
    <NavLink className="button button--link" to="/create" activeClassName="is-active">Create Expense</NavLink>
    <NavLink className="button button--link" to="/help" activeClassName="is-active">Help</NavLink>
    </div>
    </div>
 </header>
);

export default Header;
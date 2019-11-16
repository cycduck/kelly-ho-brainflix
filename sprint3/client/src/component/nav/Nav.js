import React from 'react';
import './nav.scss';
import logoImg from '../../assets/logo/Logo.svg'
import avatar from '../../assets/Images/Mohan-muruge.jpg';
import { Link } from 'react-router-dom';

class Nav extends React.Component {

  render() {
    return (
      <nav className="nav">
        <div className="nav__width-container">
          <Link to="/1af0jruup5gu"><img className="nav__logo" src={logoImg} alt="Brainflix logo" onClick={this.props.homeButton}/></Link>
          <form className="nav__form">
            <input className="nav__search" type="text" placeholder="Search" />
            <div className="nav__flex-box">
              <Link className="nav__link" to="/upload">
                <button className="nav__button">{'\uFF0B'} Upload</button>
              </Link>
              {/* unicode */}
              <img className="nav__avatar" src={avatar} alt="avatar" />
            </div>
          </form>
        </div>
      </nav>
    )
  }
}
export default Nav;
// This say exporting as the variable name

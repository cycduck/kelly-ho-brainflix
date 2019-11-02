import React from 'react';
import './nav.scss';
import logoImg from '../../assets/logo/Logo.svg'
import avatar from '../../assets/Images/Mohan-muruge.jpg';

class Nav extends React.Component {
    // what is the react.component?
    // you can also use Comoonent
    // every component must extend from the React component
    // file:///F:/webDev/Hackeryou/Beginner/dayFour/airbnb_codealong_answer/airbnb-login-form.html
    // mouseover
    render() {
        // why is the render needed?
        return (
            <nav className="nav">
                <img className="nav__logo" src={logoImg} alt="Brainflix logo"/>
                <form className="nav__form">
                    <input className="nav__search" type="text" placeholder="Search"/>
                    <div className="nav__flex-box">
                        <button className="nav__button" type="submit">{'\uFF0B'} Upload</button>
                        {/* unicode */}
                        <img className="nav__avatar" src={avatar} alt="avatar"/>
                    </div>
                </form>
            </nav>
        )
    }
}
export default Nav;
// This say exporting as the variable name

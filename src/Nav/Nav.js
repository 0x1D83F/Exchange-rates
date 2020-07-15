import React from 'react';
import './Nav.css';

class Nav extends React.Component {
    render() {
        return (

            <header>
                <div className="menu">
                    <nav className="container">
                        <ul className="menu-list">
                            {/* <li className="list-item">
                                <a href="#">Главная</a>
                            </li>
                            <li className="list-item">
                                <a href="#">Обмен</a>
                            </li>
                            <li className="list-item">
                                <a href="#">Контакты</a>
                            </li> */}
                        </ul>
                    </nav>
                </div>
            </header>
        );
    }
}


export default Nav;

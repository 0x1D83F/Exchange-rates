import React from 'react';
import './Footer.css';


class Footer extends React.Component {
    render() {
        return (

            <footer>
                <div className="footer_items container">
                    <div className="footer_items-block">
                        <nav>
                            <ul className="footer-menu-list">
                                {/* <li className="footer-list-item">
                                    <a href="#">Главная</a>
                                </li>
                                <li className="footer-list-item">
                                    <a href="#">Обмен</a>
                                </li>
                                <li className="footer-list-item">
                                    <a href="#">Контакты</a>
                                </li> */}
                            </ul>
                        </nav>
                    </div>
                    <div className="footer_items-block">
                        <p>All right reserved</p>
                        <p>2020</p>
                    </div>
                    <div className="footer_items-block">
                        <p>React lite level</p>
                    </div>
                </div>
            </footer>
        );
    }
}


export default Footer;

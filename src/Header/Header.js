import React from 'react';
import './Header.css';
import Nav from '../Nav/Nav';


class Header extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }



    render() {
        return (

            <header>
                <div className="banner">
                    <div className="banner-img">
                        <img src="" alt="" />
                    </div>
                    <div className="banner-title container">
                        <h1>React Lite level</h1>
                    </div>
                </div>
                <Nav />
            </header>
        );
    }
}


export default Header;

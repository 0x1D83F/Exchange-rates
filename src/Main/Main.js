import React from 'react';
import './Main.css';
import Rate from './Rate/Rate';
import Calc from './Calc/Calc';

class Main extends React.Component {
    render() {
        return (
            <div className="main">
                <div className="content container color">
                    <Rate />
                    <Calc />
                </div>
            </div>
        )
    }
}

export default Main;
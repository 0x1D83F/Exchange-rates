import React from 'react';
import './Calc.css';

class Calc extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="main_calc">
                <div className="calc_title">
                    <h2>Калькулятор обмена </h2>
                </div>
                <div className="calc-wrap">
                    <div className="calc_body">
                        <div className="calc_header">
                            <p>Я хочу</p>
                        </div>
                        <div className="body_select">
                            <div className="select_check">
                                <input type="radio" name='rdb' value="Купить" id='1' />
                                <label htmlFor="1">Купить</label>
                                <br />
                                <input type="radio" name='rdb' value="Продать" id='2' />
                                <label htmlFor="2">Продать</label>
                            </div>
                            <div className="select_input">
                                <input type="text" />
                                <select>
                                    <option value="USD">USD</option>
                                    <option value="EUR">EUR</option>
                                    <option value="UAH">UAH</option>
                                </select>
                            </div>
                            <div className="select_result">
                                <h3>Результат:</h3>
                                <p>EUR 150</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Calc;
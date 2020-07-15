import React from 'react';
import './Rate.css';

class Rate extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: `${new Date().getDate()}.0${new Date().getMonth()}.${new Date().getFullYear()}`,
            currencyRate: {},
        }
        this.currency = ['USD', 'EUR', 'RUR', 'BTC'];
    }
    componentDidMount() {
        this.getRate();
    }
    getRate() {
        fetch('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5')
            .then(data => {
                return data.json()
            })
            .then(data => {
                let res = {};
                for (let i = 0; i < this.currency.length; i++) {
                    res[this.currency[i]] = data[i];
                }
                this.setState({ currencyRate: { res } })

            }).then(() => {
                let obj = Object.entries(this.state.currencyRate.res).map((item, number) => {
                    return (
                        <div className="rates-info" key={number.toString()}>
                            <div className="rates-info_name" >
                                <p>{item[1].ccy}</p>
                            </div>
                            <div className="rates-info_value">
                                <div className="info_value-buy">
                                    <p>Покупка</p>
                                    <p>{item[1].buy}</p>
                                </div>
                                <div className="info_value-buy">
                                    <p>Продажа</p>
                                    <p>{item[1].sale}</p>
                                </div>
                            </div>
                        </div>
                    )
                })
                this.setState({ div: obj })
            })
    }
    render() {
        return (
            <div className="main_info">
                <div className="main_info-title">
                    <h2>Курс валют на {this.state.date}</h2>
                </div>
                <div className="main_info-rates">{this.state.div}</div>
            </div >
        )
    }
}

export default Rate;





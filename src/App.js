import React from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Main from './Main/Main';

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }



    render() {
        return (
            <div className="App">
                <div className="wrapper">
                    <Header />
                    <Main />
                    <Footer />
                </div>
            </div>
        );
    }
}

export default App;

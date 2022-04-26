import React, { Component } from "react";
import "./app.scss";
import Header from "../header";
import Body from "../body";
import Footer from "../footer";

class App extends Component {
    render() {
        return (
            <div className="app">
                <Header userInfo={this.props.userInfo} />
                <div className="app__body">
                    <Body />
                    <Footer />
                </div>
            </div>
        );
    }
}

export default App;

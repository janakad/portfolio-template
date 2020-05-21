import React from 'react';

import {HashRouter as Router, Route, Switch, withRouter} from "react-router-dom";
import Home from "./View/Page/Home";
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './assets/css/style.css';
import About from "./View/Page/About";
import Contact from "./View/Page/Contact";
import 'aos/dist/aos.css'
import AOS from "aos";

function App() {
    AOS.init({
        duration: 1000,
        easing: 'ease'
    });
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route exact path="/" component={withRouter(Home)}/>
                    <Route exact path="/about-me" component={withRouter(About)}/>
                    <Route exact path="/contact-me" component={withRouter(Contact)}/>
                </Switch>
            </Router>
        </div>
    );
}

export default App;

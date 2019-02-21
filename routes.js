import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import App from './containers/App';
import About from './containers/About';
import Calculator from './containers/Calculator';

export default () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={App}/>
                <Route path='/about' component={About}/>
                <Route path='/calculator' component={Calculator}/>
            </Switch>
        </BrowserRouter>
    );
}
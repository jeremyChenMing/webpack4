import React from 'react';
import { hot } from 'react-hot-loader'

import {HashRouter as Router, Route, Switch } from 'react-router-dom'

import Index from './components/main.js'
import Hello from './components/hello.js'

import IndexPage from './routes/IndexPage'
import products from './routes/products'
import Us from './routes/Us'


class AppRouter extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/" exact component={IndexPage}></Route>
                    <Route path="/products" component={products}></Route>
                    <Route path="/us" component={Us}></Route>
                </Switch>
            </Router>
        )
    }
}

export default hot(module)(AppRouter)
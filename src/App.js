import React, { Component } from 'react';
import './App.css';

import { Route, Switch } from 'react-router-dom';

//Components
import Home from './pages/Home';
import Rooms from './pages/Rooms';
import SingleRoom from './pages/SingleRoom';
import Error from './pages/Error';

class App extends Component {
    render() {
        return (
            <>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/rooms" component={Rooms}/>
                <Route exact path="/rooms/:id" component={SingleRoom}/>
                <Route component={Error} />
            </Switch>
            </>
        );
    }
}

export default App;
import React, { Component } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Dashboard from './Dashboard';
import C1 from './C1';
import C2 from './C2';


class Home extends Component{

    render(){

        return(

            <BrowserRouter>

                <Switch>
                    <Route exact path="/" component={Dashboard} />
                    <Route exact path="/c1" component={C1} />
                    <Route exact path="/c2" component={C2} />
                </Switch>
            </BrowserRouter>
        )
    }
}

export default Home;
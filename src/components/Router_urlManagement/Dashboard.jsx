import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Dashboard extends Component {

    render(){

        return(

            <div>

            <h3>Welcom to React</h3>

            <Link to="/">Dashboard</Link>
            <Link to="/C1">C1</Link>
            <Link to="/C2">C2</Link>
            <Link to="/DisplayInfo">DisplayInfoFunction</Link>
            <Link to="/EmaployeeInfo">Info about employee</Link>
            <h3>Dashboard</h3>

        </div>

        )

        
    }
}

export default Dashboard;
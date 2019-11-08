import React, { Component } from 'react';
import DisplayInfo from './DisplayInfo';
import DisplayInfoFunction from './DisplayInfoFunction';
import Dashboard from '../Router_urlManagement/Dashboard';


class ReactStates extends Component{

    state = {
        count:0,
        name:''
    }

    increamentCount= () => {

            this.setState({
                count:this.state.count + 1
            })
    }    

    handleNameChange = (e) => {

        this.setState({
            name:e.target.value
        })
    }     
    render(){

        return(

                <div>

                    <Dashboard />
                    <button onClick={ this.increamentCount }>Increament</button>

                    <input type='text' onChange={ this.handleNameChange } />


                    <DisplayInfo count1 = {this.state.count} name1 = {this.state.name} />
                    <DisplayInfoFunction count1 = {this.state.count} name1 = {this.state.name} />

                    
                </div>
        )
    }
}

export default ReactStates;
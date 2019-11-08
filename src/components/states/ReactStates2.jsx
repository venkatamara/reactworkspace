import React, { Component } from 'react'


class ReactStates2 extends Component{

    state = {
        count:0
    }

    increamentCount= () => {

            this.setState({
                count:this.state.count + 1
            })
    }    

    render(){

        const { count } = this.state;

        return(

                <div>

                    <h3> { count } </h3>
                    <button onClick={ this.increamentCount }>Increament</button>

                </div>
        )
    }
}

export default ReactStates2;
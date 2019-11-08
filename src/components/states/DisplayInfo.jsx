import React, { Component } from 'react';


class DisplayInfo extends Component {

    state = {};

    componentWillMount(){
        console.log('componetWillMount')
    }
    componentDidMount(){
        console.log('componentDidMount')
    }
    componentWillReceiveProps(newProps){
        console.log('props', newProps.name1);
    }

    render(){

        const { count1, name1 } = this.props

        return(

            <div>

                <h3>Count: { count1 } </h3>
                <h3>Name: {name1 } </h3>
            </div>
        )
    }


}


export default DisplayInfo;
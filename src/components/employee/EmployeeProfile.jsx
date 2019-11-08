import React, { Component } from 'react';
import axios from 'axios'

class EmaployeeProfile extends Component{

    state = {
        employeelist:[]
    }

    componentDidMount(){

        axios.get('http://localhost:9090/employee')
        .then(response=>{
            console.log("response", response.data);
            this.setState({employeelist:response.data});
        })
        .catch(error =>{
            console.log('exception', error)
        })

    }

    getEmployee = () => {

    }

    render() {

        const { employeelist } = this.state;
        return(
            <div>

                <h3>Employee Info</h3>
                {
                    employeelist.map(item=>{

                        return <div>
                            <p>Id: {item.id}</p>
                            <p>Name: {item.name}</p>
                            <p>Email: {item.email}</p>
                        </div>
                    })
                }
                <button onClick={this.getEmployee}>get employee</button>
            </div>
        )
    }

}


export default EmaployeeProfile;
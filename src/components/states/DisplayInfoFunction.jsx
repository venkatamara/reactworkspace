import React from 'react'

export default (props) => {

    const { count1, name1 } = props;

    return(

        <div>

            <h3>count: { count1 }</h3>
            <h3>Name: { name1 }</h3>
        </div>
    );
}

/*export default function DisplayInfoFunction(props){

    const { count1, name1} = props;

    return(

        <div>

            <h3>count: { count1 }</h3>
            <h3> Name: { name1 }</h3>
        </div>
    );
}

const DisplayInfoFunction = (props) => {

    const { count1, name1 } = props

    return(

        <div>

            <h3>count: { count1 }</h3>
            <h3>Name: { name1 }</h3>
        </div>
    );
}

export default DisplayInfoFunction;*/

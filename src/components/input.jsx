import React from 'react';
import Aux from '../hoc/aux'

const input = (props) => {
    return (
        <Aux>
            <label htmlFor="name"></label>
            <input id={props.id} onChange={props.change} value={props.value}></input>
        </Aux>

    )
}

export default input;
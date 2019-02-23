import React from 'react';

const button = (props) => {
    return(
        <button id={props.id} onClick={props.click}>{props.label}</button>
    )
}

export default button;
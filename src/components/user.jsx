import React from 'react';
import Button from './button';

const user = (props) => {
    return (
        <div>
            <span>{props.name}</span>
            <Button label='edit' click={props.handleEdit}></Button>
            <Button label='delte' click={props.handleDelete}></Button>
        </div>
    )
}

export default user
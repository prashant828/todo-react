import React, { Component } from 'react';
import User from '../components/user';
import Button from '../components/button';
import Input from '../components/input'

class userList extends Component {
    render() {
        let button = <Button label='save' click={this.props.handleSave}/>
        let users = this.props.userList.map((user, i) => <User name={user}
            key={i}
            handleDelete={(e) => this.props.handleDelete(i)}
            handleEdit={(e)=>this.props.handleEdit(i)} />);
        if(this.props.edit){
            button = <Button label='update' click={this.props.handleUpdate}/>
        }    
        return (
            <React.Fragment>
                <h2>Users</h2>
                <div>
                    <Input change={this.props.handleUserInput} value={this.props.userInputValue} />
                    {button}
                </div>
                {users}
            </React.Fragment>
        )
    }
}

export default userList;
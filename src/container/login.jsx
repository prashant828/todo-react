import React, {Component} from 'react';
import Aux from '../hoc/aux';
import Input from '../components/input';
import Button from '../components/button'

class login extends Component{
    render(){
        return(
            <Aux>
                <h2>login</h2>
                <Input id='name' change={this.props.nameOnChange}></Input>
                <Input id='password' change={this.props.passOnChange}></Input>
                <Button id='register' label='Register' click={this.props.registerClick}></Button>
                <Button id='login' label='Login' click={this.props.loginClick}></Button>
            </Aux>
        )
    }
}

export default login;
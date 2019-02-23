import React, { Component } from 'react';
import './App.css';
import Login from './container/login';
import UserList from './container/userList'
import user from './components/user';

class App extends Component {

  state = {
    accounts: [],
    currentUser: null,
    name: null,
    password: null,
    isLoggedIn: false,
    loggedInUser: null,
    userInput: '',
    userListIndex: null,
    edit: false
  }

  nameOnChange = (e) => {
    this.setState({
      name: e.target.value
    })
  }

  passOnChange = (e) => {
    this.setState({
      password: e.target.value
    })
  }

  registerClick = (e) => {
    for (let i = 0; i < this.state.accounts.length; i++) {
      if (this.state.accounts[i].name === this.state.name) {
        alert('user already exists');
        return
      }
    }
    let updateAccounts = [...this.state.accounts];
    let newUser = {
      name: this.state.name,
      password: this.state.password,
      users: []
    }
    updateAccounts.push(newUser)
    this.setState({
      accounts: updateAccounts
    }, () => localStorage.accounts = JSON.stringify(this.state.accounts))
  }

  loginClick = (e) => {
    let name = this.state.name;
    let password = this.state.password;
    for (let i = 0; i < this.state.accounts.length; i++) {
      if (name === this.state.accounts[i].name && password === this.state.accounts[i].password) {
        alert('success')
        this.setState({
          isLoggedIn: true,
          loggedInUser: name
        })
        return
      }
    }
    alert('incorrect credentials')
  }

  handleUserInput = (e) => {
    this.setState({
      userInput: e.target.value
    })
  }

  handleSave = (e) => {
    let updateAccounts = [...this.state.accounts];
    let userIndex = updateAccounts.findIndex(account => account.name === this.state.loggedInUser);
    updateAccounts[userIndex].users.push(this.state.userInput);
    this.setState({
      accounts: updateAccounts,
      userInput: ''
    }, () => localStorage.accounts = JSON.stringify(this.state.accounts))
  }

  handleDelete = (id, e) => {
    let updateAccounts = [...this.state.accounts];
    let userIndex = updateAccounts.findIndex(account => account.name === this.state.loggedInUser);
    updateAccounts[userIndex].users.splice(id, 1);
    this.setState({
      accounts: updateAccounts
    })
  }

  handleEdit = (id, e) => {
    let updateAccounts = [...this.state.accounts];
    let userIndex = updateAccounts.findIndex(account => account.name === this.state.loggedInUser);
    let singleUser = updateAccounts[userIndex].users[id];
    this.setState({
      userInput: singleUser,
      edit: true,
      userListIndex: id
    })
  }

  handleUpdate = (e) => {
    let updateAccounts = [...this.state.accounts];
    let userIndex = updateAccounts.findIndex(account => account.name === this.state.loggedInUser);
    updateAccounts[userIndex].users[this.state.userListIndex] = this.state.userInput;
    this.setState({
      accounts: updateAccounts,
      edit: false,
      userInput: ''
    })
  }

  componentDidMount() {
    let accounts = JSON.parse(localStorage.getItem('accounts')) || [];
    this.setState({
      accounts: accounts
    })
  }

  render() {
    let userIndex, userList, displayComponent
      

    if(this.state.isLoggedIn && this.state.loggedInUser){
      userIndex = this.state.accounts.findIndex(account => account.name === this.state.loggedInUser);
      userList = this.state.accounts[userIndex].users
      console.log(userList)
      displayComponent = <UserList
      handleUserInput={this.handleUserInput}
      handleSave={this.handleSave}
      userList={userList}
      handleDelete={this.handleDelete}
      handleEdit={this.handleEdit}
      userInputValue={this.state.userInput}
      edit={this.state.edit}
      handleUpdate={this.handleUpdate}
    />
    }else{
      displayComponent = <Login
          nameOnChange={this.nameOnChange}
          passOnChange={this.passOnChange}
          registerClick={this.registerClick}
          loginClick={this.loginClick}
        />
    }
    return (
      <div className="App">
        {displayComponent}
      </div>
    );
  }
}

export default App;

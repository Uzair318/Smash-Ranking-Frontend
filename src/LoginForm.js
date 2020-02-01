import React from 'react';


class LoginForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          userVal: '',
          passVal: ''
        };
  
      this.handleUsernameChange = this.handleUsernameChange.bind(this);
      this.handlePasswordChange = this.handlePasswordChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleUsernameChange(event) {
      this.setState({userVal: event.target.value});
    }

    handlePasswordChange(event) {
        this.setState({passVal: event.target.value});
    }
    
  
    handleSubmit(event) {
      alert('A user attemted to log in: ' + this.state.userVal + ', ' + this.state.passVal);
      //event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Username:
            <input type="text" value={this.state.value} onChange={this.handleUsernameChange} />
          </label>
          <label>
            Password:
            <input type="text" value={this.state.value} onChange={this.handlePasswordChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      );
    }
  }

  export default LoginForm
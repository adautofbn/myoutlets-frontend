import React, {Component} from "react";
import { Dropdown, Button } from "semantic-ui-react";
import Axios from "axios";

const trigger = (
  <Button inverted color="orange" icon="user"></Button>
);

const options = [
  { key: 'sign-up', text: 'Cadastrar', icon: 'add user', value: 'signup' },
  { key: 'sign-in', text: 'Entrar', icon: 'sign in', value: 'login' }
]

export default class Login extends Component {

  state = {}

  handleChange = (e, {value}) => {
    this.setState({value});
    if(this.state.value === 'login') {
      const user = {
        email: 'alex@aa.ee',
        password: 'alex123' 
      }

      Axios('http://localhost:8080/login', {
        'method': 'post',
        'data': user,
        'withCredentials': true
      })
    }
  }

  render() {
    const {value} = this.state

    return (
      <Dropdown 
      trigger={trigger} 
      options={options} 
      icon={null} 
      onChange={this.handleChange} 
      value={value}/>
    )
  }

}

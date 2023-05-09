import React, { Component } from "react"
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import msg from '../languages/msg';
import './Auth.css';

export class Auth extends Component {

  render() {
    return (
      <div className="card container" style={{backgroundColor:"gray"}}>
      <div className="grid bloc ">
          <div className="col-12 flex align-items-center justify-content-center">
              <div className="p-fluid">
                  <div className="field">
                      <label htmlFor="username">{msg('login.username')}</label>
                      <InputText id="username" type="text" />
                  </div>
                  <div className="field">
                      <label htmlFor="password">{msg('login.password')}</label>
                      <InputText id="password" type="password" />
                  </div>
                  <Button label={msg('login.signIn')}></Button>
              </div>
          </div>
      </div>
  </div>
    )
  }

}
export default Auth;
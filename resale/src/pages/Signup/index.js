import React, { Component } from "react";
import { Link } from "react-router-dom";
import Api from "../../services/api";
import Header from "../../components/Header";
import Highlight from "../../components/Highlight";

import logo from "../../assets/logo-color.png";

import { Content, Half, Logo, Title, Description, Input, Actions } from "./styles";

class Signup extends Component {
  constructor() {
    super();
    this.api = Api();
    this.state = {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  }


  async handle(){
    let resp =await this.api.signin(this.state.name,this.state.password,this.state.email)
    if(resp.status){
      alert("Createed Successfully")
      this.props.history.push("/login")
    }
    else{
      alert("user already exist")
      this.props.history.push("/login")
    }
  }

  
  render() {
    return (
      <Content>
        <Header hideLogo />
        <Half fixed>
          <Logo src={logo} alt="recently sold" />

          <Description>
            <p>
              Lorem ipsum <span>dolor</span> sit amet, consectetur adipiscing elit. Integer <span>mattis massa</span> sit amet
              nisl rhoncus, at sodales dolor fringilla. Etiam pretium leo non arcu molestie, quis maximus urna varius. Donec
              viverra justo volutpat lacus ornare <span>lacinia</span>. Suspendisse eros libero, eleifend et mi vitae.
            </p>
          </Description>
        </Half>

        <Half>
          <Input
            value={this.state.name}
            onChange={(e) => this.setState({ name: e.target.value })}
            type="text"
            placeholder="Full name"
          />
          <Input
            value={this.state.email}
            onChange={(e) => this.setState({ email: e.target.value })}
            type="text"
            placeholder="E-mail"
          />
          <Input
            value={this.state.password}
            onChange={(e) => this.setState({ password: e.target.value })}
            type="password"
            placeholder="Password"
          />
          <Input
            value={this.state.confirmPassword}
            onChange={(e) => this.setState({ confirmPassword: e.target.value })}
            type="password"
            placeholder="Confirm password"
          />

          <Actions>
            <Link to="/register">
              <p>Don’t have an account? Create one!</p>
            </Link>
            <button onClick={()=>this.handle()}>Login</button>
          </Actions>
        </Half>

        <Highlight />
      </Content>
    );
  }
}

export default Signup;

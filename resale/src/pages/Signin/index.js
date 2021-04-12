import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import Header from '../../components/Header';
import Highlight from '../../components/Highlight';

import logo from '../../assets/logo-color.png';
import Api from "../../services/api";

import {Content, Half, Logo, Title, Description, Input, Actions} from './styles';

class Signin extends Component {
    constructor() {
        super();
        this.api = Api();
        this.state = {
            email: '',
            password: ''
        }
    }


    async loginapi(){
        const response = await this.api.login(this.state.email, this.state.password);
        if(response.status){
            localStorage.setItem('token', response.login_credentials.api_token);
            this.props.history.push("/user")
        }
        else{
            alert("Error: Invalid username of passowrd")
        }
     
    }
    componentDidMount(){
        if(localStorage.getItem("token")!=null){
            this.props.history.push("/user")
        }
    }
    render() {
        return(
            <Content>
                <Header hideLogo />
                <Half fixed>
                    <Logo src={logo} alt='recently sold' />

                    <Description>
                        <p>Lorem ipsum <span>dolor</span> sit amet, consectetur adipiscing elit. Integer <span>mattis massa</span> sit amet nisl rhoncus, at sodales dolor fringilla. Etiam pretium leo non arcu molestie, quis maximus urna varius. Donec viverra justo volutpat lacus ornare <span>lacinia</span>. Suspendisse eros libero, eleifend et mi vitae.</p>
                    </Description>
                </Half>

                <Half>
                    <Input value={this.state.email} onChange={(e) => this.setState({email: e.target.value})} type="text" placeholder="E-mail" />
                    <Input value={this.state.password} onChange={(e) => this.setState({password: e.target.value})} type="password" placeholder="Password" />

                    <Actions>
                        <Link to='/register'><p>Don’t have an account? Create one!</p></Link>
                        <button onClick={()=>this.loginapi()}>Login</button>
                    </Actions>
                </Half>            
            
                <Highlight />
            </Content>
        )
    }
}

export default Signin;
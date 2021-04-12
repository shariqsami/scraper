import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Highlight from '../../components/Highlight';
import AsyncSelect from "react-select/async";
import Select from "react-select";
import Slider from "react-rangeslider";
import CurrencyInput from "react-currency-input";
import DatePicker from "react-datepicker";
import "react-rangeslider/lib/index.css";
import "react-datepicker/dist/react-datepicker.css";
import logo from '../../assets/logo-color.png';

import Header from "../../components/Header";

import Api from "../../services/api";
import { Content, Half, Input, Actions, DateInput, Range, SelectInput, Checkbox, Logo,Description } from "./styles";

class Signin extends Component {
  constructor() {
    super();
    this.api = Api();
    this.state = {
       username:"",
       email:"",
       package:"",
       search_remaining:""
    }
}
async getUserDetails(id){  
  
  const response = await this.api.userPofile({id});
  //alert(JSON.stringify(response))
  this.setState({username:response.user_details.name,email:response.user_details.email,search_remaining:response.search_remaining})
  if(response.user_details.subscription!= null){
    console.log(response.user_details.subscription)
    this.setState({package:response.package_details.package_name})
  }
  else{
    this.setState({package:"Free User"})
  }
}
logout(){
  localStorage.clear()
  this.props.history.push("/login")
}
componentDidMount(){
  if(localStorage.getItem('token')){
    this.getUserDetails(localStorage.getItem('token'))
  }
  else{
    this.props.history.push("/login")
  }
}
render() {
    return(
        <Content>
        <Header alwaysWhite={true}/>
          <>
            <Half fixed>
              <Range>
                <p>User Name :</p>
                <p>{this.state.username}</p>
              </Range>
              <Range>
                <p>Email :</p>
                <p>{this.state.email}</p>
              </Range>
              <Range>
                <p>package :</p>
                <p>{this.state.package}</p>
              </Range>
              <Range>
                <p>Search Remaining :</p>
                <p>{this.state.search_remaining}</p>
              </Range>
              <Range>
              <button onClick={()=>this.logout()}>Logout</button>
              </Range>
            </Half>

            <Half>
           
   
            </Half>
          </>
     
      </Content>
    )
}
}

export default Signin;
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
import Summary from '../../components/Summary'
import Api from "../../services/api";
import { Content, Half, Input, Actions, DateInput, Range, SelectInput, Checkbox, Logo,Description } from "./styles";

class Summarypage extends Component {
    constructor() {
        super();
        this.api = Api();
        this.state = {
           summary:[]
        }
    }
    async getUserDetails(){  
      const repo = await this.api.summary();
    
      const summary = [
        { label: "Total sales", value: "20" },
        { label: "Dollar volume", value: "$" + repo.summary[0].total_volume_price },
        { label: "Average price", value: "$" + repo.summary[0].average_price },
        { label: "Standard deviation", value: repo.summary[0].deviation },
        { label: "Low price", value: "$" + repo.summary[0].lowest_price },
        { label: "High price", value: "$" + repo.summary[0].highest_price },
      ];
   
   
      this.setState({summary:summary})
    }
   
    componentDidMount(){
      this.getUserDetails()
    }
    render() {
        return(
            <Content>
            <Header alwaysWhite={true}/>
          
              <Summary  summary={this.state.summary} />
           
         
          </Content>
        )
    }
}

export default Summarypage;
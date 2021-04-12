import React, {Component} from 'react';

import "react-rangeslider/lib/index.css";
import "react-datepicker/dist/react-datepicker.css";

import Header from "../../components/Header";
import SwaggerUI from "swagger-ui-react"
import "swagger-ui-react/swagger-ui.css"
import {Content, Items, Item, Recommended} from './styles';


class APIDocument extends Component {
    constructor() {
        super();
    
    }
  
 
    render() {
        return(
            <Content >
            <Header alwaysWhite={true}/>
              <Items style={{backgroundColor:'white'}}>
                <SwaggerUI  url="http://64.227.2.220/doc.json"/>
              </Items>
          </Content>
        )
    }
}

export default APIDocument;
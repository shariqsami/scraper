import React, {Component} from 'react';

import Header from '../../components/Header';
import Api from "../../services/api";
import { PayPalButton } from "react-paypal-button-v2";


import {Content, Items, Item, Recommended} from './styles';
import { Redirect } from 'react-router-dom';

class Checkout extends Component {
    constructor() {
        super();
        this.api = Api();
        this.state = {
           packages:[],
           user:null,
           locading:true
        }
    }
    async getPackages(id){
        const response = await this.api.getPackages();
        const user = await this.api.userPofile({id});
        this.setState({packages:response.packages,user:user.user_details,locading:false})
        console.log(user)
     
    }
    async subscribe(package_id,user_id){
        const response = await this.api.subscribe(package_id,user_id);
        return response.status
        
    }
    componentDidMount(){
        if(localStorage.getItem("token")!=null){
            this.getPackages(localStorage.getItem("token"))
        }
        else{
            this.props.hstory.push("/membership")
        }
    }
    render() {
       
        if(this.state.locading){
            return(
                <Content>
                <Header alwaysWhite />
                <Items>
               
                </Items>
            </Content>
            )
        }
        if(this.props.location.data != undefined){
            return(
                <Content>
                    <Header alwaysWhite />
                    <Items>
                        <Item style={{backgroundColor:'transparent'}}></Item>
                    <Item>
                        {/* <Recommended>Recommended</Recommended> */}
                        <h1>{this.props.location.data.package_name}</h1>
                        <p>Price: {this.props.location.data.price}</p>
                        <p>Lorem ipsum</p>
                        <p>Lorem ipsum</p>
                        <p>Lorem ipsum</p>
                        <p style={{marginBottom:20}} >Lorem ipsum</p>
    
                        <PayPalButton
            amount={this.props.location.data.price}
            shippingPreference="NO_SHIPPING" // default is "GET_FROM_FILE"
            onSuccess={(details, data) => {
              alert("Transaction completed by " + details.payer.name.given_name);
               this.subscribe(this.props.location.data.id,this.state.user.id)
              
              // OPTIONAL: Call your server to save the transaction
              // return fetch("/paypal-transaction-complete", {
              //   method: "post",
              //   body: JSON.stringify({
              //     orderId: data.orderID
              //   })
              // });
            }}
            options={{
              clientId: "AYFZxosP2Cxc4B-bT1P5qOc90nGfU3Tk22lq3vgpm2pbiiyPKwb7bY2B9VLs-55gxQqM58iMEWD61apT"
            }}
          />
                    
                        
                    </Item>
                    <Item style={{backgroundColor:'transparent'}}></Item>
                    </Items>
                </Content>
            )
        }
        else{
            return(
             <Redirect to="/membership"></Redirect>
            )
        }
      
   
    }
}

export default Checkout;
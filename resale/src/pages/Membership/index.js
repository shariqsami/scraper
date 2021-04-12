import React, {Component} from 'react';

import Header from '../../components/Header';
import Api from "../../services/api";
import { PayPalButton } from "react-paypal-button-v2";
import Checkout from "../Checkout/index"
import { useHistory,Redirect } from "react-router-dom";
import {Content, Items, Item, Recommended} from './styles';

class Home extends Component {
    constructor() {


        super();
        this.api = Api();
        this.state = {
           packages:[],
           user:null,
           locading:true,
           
        }
    }
    async getPackages(id){
        const response = await this.api.getPackages();
        const user = await this.api.userPofile({id});
        this.setState({packages:response.packages,user:user.user_details,locading:false})
        console.log(user)
     
    }
    async getPackagesnouser(){
      const response = await this.api.getPackages();
      this.setState({packages:response.packages,locading:false})
  }
    gotoCheckout(ee) {
      this.props.history.push({ pathname: "/checkout","data":ee})
    }
    componentDidMount(){
     
      if(localStorage.getItem("token")!=null){
        this.getPackages(localStorage.getItem("token"))
      }
      else{
        this.getPackagesnouser()
      }
     
    }
    render() {
      if(this.state.locading){
        return(
          <Content>
      
          </Content>
        )
     
      }
      else{

        return(
          <Content>
              <Header alwaysWhite />
              <Items>
              {
                  this.state.packages.map((element,i) =>
                 
                  <Item>
                  {/* <Recommended>Recommended</Recommended> */}
                  <h1>{element.package_name}</h1>
                  <p>Price: {element.price}</p>
                  <p>Searches : {element.searching_allow}</p>
              
                  {
                     this.state.user !=null?
                     (this.state.user.subscription==element.id?(<button disabled style={{backgroundColor:'grey'}}>Subscribed</button>):(<button onClick={()=>this.gotoCheckout(element)}>Subscribe</button>)):(<button>Sign up</button>)
                  }
                  
              </Item>
                )
              }

              </Items>
          </Content>
      )
      }
  
       
    }
}

export default Home;
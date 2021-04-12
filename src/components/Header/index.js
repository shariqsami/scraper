import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import {FaBars, FaTimes} from 'react-icons/fa';

import logo from '../../assets/logo.png';
import diamond from '../../assets/diamond.svg';
import Api from "../../services/api";

import {Head, Logo, Content, Item, MenuIcon} from './styles';

class Header extends Component {
    constructor() {
        super();
        this.api = Api();
        this.state = {
            show: false,
            user:null
        }
    }
    async getUserDetails(id){  
        const response = await this.api.userPofile({id});
        this.setState({user:response.user_details})
    }
    componentDidMount(){
        if(localStorage.getItem('token')){
            this.getUserDetails(localStorage.getItem('token'))
        }
        else{
            this.setState({user:null})
        }
       }
    render() {
        //alert(localStorage.getItem('token'))
        return(
            <Head> 
                <Link className='home-link' to='/'><Logo hide={this.props.hideLogo ? true : false} src={logo} alt='Recently Sold' /></Link> 
                <MenuIcon alwaysWhite={this.props.alwaysWhite ? this.props.alwaysWhite : false}>
                    <FaBars onClick={() => this.setState({show: true})} />
                </MenuIcon>
                <Content show={this.state.show}>
                    <FaTimes onClick={() => this.setState({show: false})} />
                    <Link to='/'><Item hide={this.props.hideLogo ? false : true}>home</Item></Link>
                    <Link to='/search' hide={this.state.user!=null ? true : false}><Item>Finds</Item></Link>
                    <Link to='/summary'><Item>Summary</Item></Link>
                    <Link to='/market'><Item>Market</Item></Link>
                    <Link to='/developers'><Item>Developers</Item></Link>
                    <Link to='/membership'><Item button><img src={diamond} alt="diamond" /> Membership</Item></Link>
                    <Link to='/login'><Item button   hide={this.state.user!=null ? true : false}>Login</Item></Link>
                    <Link to='/user'><Item button   hide={this.state.user==null ? true : false}>Profile</Item></Link>
                </Content>
            </Head>
        )
    }
}

export default Header;
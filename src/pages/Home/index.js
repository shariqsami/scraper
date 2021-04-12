import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import search from '../../assets/search.svg';
import data from '../../assets/data.svg';
import membership from '../../assets/membership.svg';
import api from '../../assets/api.svg';

import Header from '../../components/Header';
import Highlight from '../../components/Highlight';

import logo from '../../assets/logo-color.png';

import {Content, Half, Logo, Title, Description, Items, Item, Actions} from './styles';

class Home extends Component {
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
                    <Items>
                        <Item>
                            <img src={search} alt="search" />
                            <p><span>Custom search</span> sit amet, consectetur adipiscing elit. Integ lorem ipsum sit am.</p>
                        </Item>

                        <Item>
                            <img src={data} alt="search" />
                            <p><span>Graphs</span> sit amet, consectetur adipiscing elit. Inte lorem ipsum dolor sit amet.</p>
                        </Item>

                        <Item>
                            <img src={membership} alt="search" />
                            <p><span>Membership</span> sit amet, consectetur adipiscing elit. Inte lorem ipsum dolor si.</p>
                        </Item>

                        <Item>
                            <img src={api} alt="search" />
                            <p><span>API</span> sit amet, consectetur adipiscing elit. Inte lorem ipsum dolor sit amet.</p>
                        </Item>
                    </Items>

                    <Actions>
                        <Link to='/search'><button>Try it now!</button></Link>
                    </Actions>
                </Half>            
            
                <Highlight />
            </Content>
        )
    }
}

export default Home;
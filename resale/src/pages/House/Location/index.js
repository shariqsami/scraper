import React, {Component} from 'react';

import {Content} from './styles';

import Loader from 'react-loader-spinner'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"

class Location extends Component {

    render() {
        return(
            <Content>                
                <Loader
                    type="Puff"
                    color="white"
                    height={100}
                    width={100}          
                />
                <iframe title="google-maps" src={`//maps.google.com/maps?q=${this.props.address}&output=embed`} width="100%" height="500" frameBorder="0" allowfullscreen="" aria-hidden="false" tabindex="0">
                </iframe>
            </Content>
        )
    }
}

export default Location;

import React, {Component} from 'react';

import curve from '../../assets/curve-highlight.svg';

import {Img} from './styles';

class Highlight extends Component {
    render() {
        return(
            <Img src={curve} alt="highlight" />
        )
    }
}

export default Highlight;
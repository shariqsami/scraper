import React, {Component} from 'react';

import {Content, Img} from './styles';

class Images extends Component {
    constructor() {
        super();

        this.state = {
            active: 0
        }
    }

    componentDidUpdate () {
        [...document.querySelectorAll("img[data-src]")].map(img => window.hotlink(img))
    }

    componentDidMount () {
        [...document.querySelectorAll("img[data-src]")].map(img => window.hotlink(img))
    }

    componentWillUnmount () {
        if (this.interval) {
            clearInterval(this.interval)
        }
    }

    render() {
        return(
            <Content>
                {this.props.images.map((image, index) => (
                    
                    <Img active={this.state.active === index ? true : false} key={index} data-src={image.url} alt={`house-img-${index}`} />
                ))}
            </Content>
        )
    }
}

export default Images;

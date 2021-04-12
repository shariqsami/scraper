import React, {Component} from 'react';

import {Content, Items, Item} from './styles';

class Summary extends Component {

    render() {
        return(
            <Content>
                <h1>Summary</h1>
                <Items>
                    {this.props.summary.map((item, index) => (
                        <Item key={index}>
                            <h1>{item.value}</h1>
                            <p>{item.label}</p>
                        </Item>
                    ))}
                </Items>
            </Content>
        )
    }
}

export default Summary;
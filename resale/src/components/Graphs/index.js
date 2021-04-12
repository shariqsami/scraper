import React, {Component} from 'react';

import {Content, GraphContainer} from './styles';

import Line from './Line';

class Graphs extends Component {
    render() {
        return(
            <Content>
                <h1>Graphs</h1>
                
                {this.props.graphs.map(graph => (
                    <GraphContainer>
                        <Line data={graph} />
                    </GraphContainer>
                ))}
            </Content>
        )
    }
}

export default Graphs;
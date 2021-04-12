import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import house from '../../../assets/house.jpg';

import {Content, Items, Item} from './styles';

class Similar extends Component {
    constructor() {
        super();

        this.state = {
            item: false           
        }
    }
    
    render() {
        return(
            <Content>  
                <Items>
                    {this.props.similar.map(similar => (
                        <Link target={'_blank'} to={`/house/${similar.id}`}>
                            <Item key={similar.id}>
                                <img src={house} alt="similar-img" />
                                <div>
                                    <section>
                                        <h1>{similar.title}</h1>
                                        <p>{similar.city}</p>
                                    </section>
                                    <section>
                                        <p>Sold for <span>${similar.price}</span> on <span>{similar.sold_date}</span></p>
                                    </section>
                                    <section>
                                        <p><span>{similar.bedrooms} bedrooms</span>, <span>{similar.bathrooms} bathrooms</span> and <span>{similar.sqfeet} ft²</span>.</p>
                                    </section>
                                </div>
                            </Item>
                        </Link>
                    ))}
                </Items>
            </Content>
        )
    }
}

export default Similar;
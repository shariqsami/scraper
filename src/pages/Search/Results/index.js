import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {format} from 'date-fns'

import house from '../../../assets/house.jpg'

import {Content, Actions, Items, Item, Pages, Export} from './styles'
import CsvDownload from 'react-json-to-csv'

import Graphs from '../../../components/Graphs'
import Summary from '../../../components/Summary'
import Pagination from "react-js-pagination";
import 'bootstrap/dist/css/bootstrap.min.css';
//require("./node_modules/bootstrap/less/bootstrap.less");


class Results extends Component {
    constructor(props){
        super(props);
        this.state={
            page:[],
            sort:false,
            ...props
          
        }
    }


    createpages=()=>{
        let number_of_pages=this.props.totalItems/15
        if(number_of_pages%1>0){
            number_of_pages +=1

        }
        let pages=[]
        for(let page=1;page<=number_of_pages;page++){
            if(page==this.props.currentpage){
                pages.push({page:page,active:true});
            }
            else{
                pages.push({page:page,active:false});
   
            }
        }

        return(
            <section>
                       
        {/* <Pages active>1</Pages>
            {pages.map((pagenum, index) => (
                    pagenum.active==true?(<Pages active >{pagenum.page}</Pages>):(<Pages  onClick={()=>this.props.changepage(pagenum.page)}>{pagenum.page}</Pages>)
                    // <Pages active onClick={()=>alert(pagenum)}>{pagenum.page}</Pages>
            ))} */}
            <div>
        <Pagination
          activePage={this.props.currentpage}
          itemsCountPerPage={15}
          totalItemsCount={this.props.totalItems}
          pageRangeDisplayed={5}
          onChange={(e)=>this.props.changepage(e)}
          itemClass="page-item"
            linkClass="page-link"
        />
        </div>

         
            </section>
           
        )
    }
   
    componentDidUpdate () {
        [...document.querySelectorAll("img[data-src]")].map(img => window.hotlink(img))

    }

    componentDidMount(){
        //this.setState({data:this.props.results})
        // setTimeout(() => {
        //     this.setState({isloading:false})
        // }, 1000);
        
        //this.setState({})
    }

    onSort(event, sortKey){
        const data = this.props.results;
        
        data.sort((a,b) => a[sortKey].toString().localeCompare(b[sortKey]))
        this.setState({results:data})
        this.setState({sort:true})
      }

    componentWillMount(){
      //  this.createpages()

    }

    render() {

        return(
            <Content>
                <h1>Search results</h1>
                <h4>Showing 1 to {this.props.results.length} of {(this.props.totalItems.toString().length==6)?(1):(" ")}{this.props.totalItems} enteries</h4>

                <Export>
                <CsvDownload data={this.props.results} />
                </Export>

                {this.props.images &&
                <Items>
                    {this.props.results.map(result => (
                        <Link key={result.id} to={`house/${result.id}`}>
                            <Item>
                                <img data-src={result.img} alt={result.title} />
                                <div>
                                    <section>
                                        <h1>{result.title}</h1>
                                        <p>{result.city}</p>
                                    </section>
                                    <section>
                                        <p>Sold for <span>${result.price}</span> on <span>{format(new Date(result.sold_date), 'MM/dd/yyyy')}</span></p>
                                    </section>
                                    <section>
                                        <p><span>{result.bedrooms} bedrooms</span>, <span>{result.bathrooms} bathrooms</span> and <span>{result.sqfeet} ft²</span>.</p>
                                    </section>
                                </div>
                            </Item>
                        </Link>
                    ))}
                </Items>                       
                }

                {!this.props.images &&
                    <table>
                        <tr>
                            <th onClick={e => this.onSort(e, 'title')}>Address</th>
                            <th onClick={e => this.onSort(e, 'sqfeet')}>Home size (SF)</th>
                            {/* <th onClick={e => this.onSort(e, 'lotsize')}>Lot size</th> */}
                            <th onClick={e => this.onSort(e, 'price')}>Sale price</th>
                            <th onClick={e => this.onSort(e, 'sold_date')}>Sale date</th>
                            <th>Details</th>
                        </tr>

                        {this.props.results.map(result =>(
                            <tr key={result.id}>
                                <td>{`${result.title},  ${result.zip}`}</td>
                                <td>{`${result.sqfeet}ft²`}</td>
                            {/* <td>{`${result.lotsize}`}</td> */}
                                <td>{`$${result.price}`}</td>
                                {/* <td>{format(new Date(result.sold_date), 'MM/dd/yyyy')}</td> */}
                                <td>{result.sold_date}</td>
                                <td><Link to={`house/${result.id}`}>View</Link></td>
                            </tr>
                        ))}

                    </table>                      
                }                    

                <Actions>
                    {this.createpages()}
                    <section>
                        <button>Share search</button>
                        <button>Save search</button>
                    </section>
                </Actions>

                <Summary  summary={this.props.summary} />
                <Graphs graphs={this.props.graphs} />
            </Content>
        )
       }
  
    
}

export default Results;

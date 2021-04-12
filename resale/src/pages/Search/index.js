import React, { Component } from "react";
import AsyncSelect from "react-select/async";
import Select from "react-select";
import Slider from "react-rangeslider";
import CurrencyInput from "react-currency-input";
import DatePicker from "react-datepicker";
import "react-rangeslider/lib/index.css";
import "react-datepicker/dist/react-datepicker.css";
import selectStyles from "./selectStyles";
import logo from '../../assets/logo-color.png';
import moment from "moment";
import Header from "../../components/Header";
import Results from "./Results";
import {Row,Col} from "react-bootstrap"
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import { Content, Half, Input, Actions, DateInput, Range, SelectInput, Checkbox, Logo,Description } from "./styles";

import Api from "../../services/api";
import { lastDayOfQuarterWithOptions } from "date-fns/fp";

class Search extends Component {
  constructor() {
    super();
    this.api = Api();
    this.loadOptions = this.loadOptions.bind(this);
    this.loadOptionscity = this.loadOptionscity.bind(this);
    this.loadOptionsstate = this.loadOptionsstate.bind(this);
    this.loadOptionszip = this.loadOptionszip.bind(this);
    

    this.state = {
      results: [],
      totalItems: 0,
      summary: [],
      graphs: [],
      address: null,
      radius: null,
      soldDateMin: new Date("1900/01/01"),
      soldDateMax: new Date(),
      priceMin: 0,
      priceMax: 0,
      bedroomsMin: null,
      bedroomsMax: null,
      bathroomsMin: null,
      bathroomsMax: null,
      sqfeetMin: null,
      sqfeetMax: null,
      lotMin: null,
      lotMax: null,
      yearMin: null,
      yearMax: null,
      brokerage: "",
      showPictures: false,
      propertyType: null,
      propertyTypes: [],
      venue: null,
      type:null,
      zipcode:null,
      state:null,
      city:null,
      venues: [{ value: "zillow", label: "Zillow" },{ value: "redfin", label: "Redfin" },{ value: "realtor", label: "Realtor" },{ value: "trulia", label: "Trulia" }],
      currentpage:1,
      isloading:true
    };
    
   

    this.search = this.search.bind(this);
  }

  gotopage=(pagenum)=>{
  
     this.setState({currentpage:pagenum})
     this.search(false,pagenum);
  }

   removeEmpty = (obj) => {
    Object.entries(obj).forEach(([key, val])  =>
      (val && typeof val === 'object') && this.removeEmpty(val) ||
      (val === null || val === "") && delete obj[key]
    );
    return obj;
  };

   getStandardDeviation=(array)=> {
    const n = array.length
    const mean = array.reduce((a, b) => a + b) / n
    return Math.sqrt(array.map(x => Math.pow(x - mean, 2)).reduce((a, b) => a + b) / n)
  }

  async search(filter = false, pageno=1) {
    this.setState({isloading:true})
    let queryString;
    if (filter != false) {
      let sold_date_min = moment.unix(this.state.soldDateMin.getTime()/1000).format('YYYY-MM-DD HH:mm:ss');
      let sold_data_max =moment.unix(this.state.soldDateMax.getTime()/1000).format('YYYY-MM-DD HH:mm:ss');
      const searchParams = {
        street: this.state.address ? this.state.address.value : null,
        zipcode:this.state.zipcode ? this.state.zipcode.value:null,
        state:this.state.state ? this.state.state.value:null,
        city:this.state.city ? this.state.city.value:null,
        type:this.state.type ? this.state.type:null,
    
        sold_price_min: this.state.priceMin,
        sold_price_max: this.state.priceMax > 0 ? this.state.priceMax : null,
        bedrooms_min: this.state.bedroomsMin,
        bedrooms_max: this.state.bedroomsMax,
        bathrooms_min: this.state.bathroomsMin,
        bathrooms_max: this.state.bathroomsMax,
        sqft_min: this.state.sqfeetMin,
        sqft_max: this.state.sqfeetMax,
        lot_min: this.state.lotMin,
        lot_max: this.state.lotMax,
        year_min: this.state.yearMin,
        year_max: this.state.yearMax,
        property_type: this.state.propertyType,
        venue: this.state.venue,
      };

      console.log(this.state.propertyType);
     
      console.log(this.state.address);

      queryString = Object.keys(searchParams)
        .map((key) => {
          if (searchParams[key] == null) {
            return;
          }
          if (Array.isArray(searchParams[key])) {
            if (searchParams[key].length === 0) {
              return;
            }
            return searchParams[key].map((obj) => `${encodeURIComponent(key)}[]=${encodeURIComponent(obj.value)}`).join("&");
          }
          return `${encodeURIComponent(key)}=${encodeURIComponent(searchParams[key])}`;
        })
        .join("&");
    }

   let response;
    if(localStorage.getItem('token')){
       response = await this.api.search({ queryString,pageno:pageno });
    }
    else{
      if(filter){

      response = await this.api.search_pub({ queryString,pageno:pageno });
      }
      else{
        queryString=""
        response = await this.api.search_pub({ queryString,pageno:pageno });
      }
    }
   
    //alert("dfdfdfdfdf")
   
 
    
    const totalItems = response.total_results;

    const results = response.search_data.map((property) => ({
      id: property.id,
      img: property.image[Object.keys(property.image)[0]],
      title: property.street,
      city: `${property.city_name}, ${property.state_name}`,
      zip: property.zipcode,
      price: property.last_sold_price,
      sold_date: property.date_sold,
      bedrooms: property.bedrooms,
      bathrooms: property.bathrooms,
      lotsize: property.lot_size,
      sqfeet: property.living_area,
    }));

    //     const propertyTypesResponse = await this.api.propertyTypes()
    //    // var result = Object.keys(propertyTypesResponse).map((key) => [Number(key), propertyTypesResponse[key]]);
    //     console.log(propertyTypesResponse)
    //     const propertyTypes = propertyTypesResponse.map(propertyType => ({
    //         label: propertyType.name,
    //         value: propertyType.kind
    //     }))
    const propertyTypes = [
      { label: "TOWNHOUSE", value: "Townhouse" },
      { label: "APARTMENT", value: "Apartment" },
      { label: "MANUFACTURED", name: "Manufactured" },
      { label: "MULTI_FAMILY", value: "Multi family" },
      { label: "SINGLE_FAMILY", value: "Single family" },
      { label: "LOT", value: "Lot" },
      { label: "CONDO", value: "Condo" },
    ];
    console.log({
      results,
      totalItems,
    },"/////////////////////////////")

    

    // const repo = await this.api.summary();
    // console.log(repo, "......====>>");
   
    response.graph.sort(function (a, b) {
      return a.x.localeCompare(b.x);
  });

    const graphs = [
      [
        {
          id: "Average price",
          color: "hsl(189, 70%, 50%)",
          //   data: [
          //     {
          //       x: "2009",
          //       y: 125000,
          //     },
          //     {
          //       x: "2010",
          //       y: 135000,
          //     },
          //     {
          //       x: "2011",
          //       y: 170000,
          //     },
          //     {
          //       x: "2012",
          //       y: 230000,
          //     },
          //     {
          //       x: "2013",
          //       y: 200000,
          //     },
          //     {
          //       x: "2014",
          //       y: 250000,
          //     },
          //     {
          //       x: "2015",
          //       y: 200000,
          //     },
          //     {
          //       x: "2016",
          //       y: 190000,
          //     },
          //     {
          //       x: "2017",
          //       y: 180000,
          //     },
          //     {
          //       x: "2018",
          //       y: 230000,
          //     },
          //     {
          //       x: "2019",
          //       y: 280000,
          //     },
          //     {
          //       x: "2020",
          //       y: 250000,
          //     },
          //   ],
          data: response.graph,
        },
      ],
    ];

    let price = []
    results.forEach(element => {
      price.push(element.price)
    });
    let summary=[]
    if(results.length!=0){
      const repo = await this.api.summary();
    
      summary = [
        { label: "Total sales", value: "20" },
        { label: "Dollar volume", value: "$" + repo.summary[0].total_volume_price },
        { label: "Average price", value: "$" + repo.summary[0].average_price },
        { label: "Standard deviation", value: repo.summary[0].deviation },
        { label: "Low price", value: "$" + repo.summary[0].lowest_price },
        { label: "High price", value: "$" + repo.summary[0].highest_price },
      ];
      // let totalprice=price.reduce((a, b) => a + b) 
      //  summary = [
      //   { label: "Total sales", value: results.length },
      //   { label: "Dollar volume", value: "$" + totalprice },
      //   { label: "Average price", value: "$" + Math.round(totalprice/price.length) },
      //   { label: "Standard deviation", value: Math.round(this.getStandardDeviation(price)) },
      //   { label: "Low price", value: "$" + Math.min(...price) },
      //   { label: "High price", value: "$" + Math.max(...price) },
      // ];
    }
    else{
       summary = [
        { label: "Total sales", value: results.length },
        { label: "Dollar volume", value: "$" + 0 },
        { label: "Average price", value: "$" + 0 },
        { label: "Standard deviation", value: 0 },
        { label: "Low price", value: "$" + 0},
        { label: "High price", value: "$" +0},
      ];
    }
  

 
    this.setState({
      results,
      totalItems,
      propertyTypes,
      summary,
      graphs,
      isloading:false
    });


    
  }

  componentDidMount() {
   
    this.search(false,this.state.currentpage);
    //alert(this.state.currentpage)
  }

  getvalue(e){
   
     if(e.type=="zipcode"){
       this.setState({zipcode:e})
     }
     if(e.type=="city"){
      this.setState({city:e})
    }
    if(e.type=="state"){
      this.setState({state:e})
    }
    if(e.type=="street"){
      this.setState({address:e})
    }
     //this.setState({ address: e,type:e.type })
  }



  loadOptions(inputValue, callback) {
    this.api.locations({ search: inputValue,type:"street" }).then((locationsResponse) => {
      const addressOptions = locationsResponse.city.map((location) => {
        return {
          value: location.id,
          label: location.name,
          type : location.type,
        };
      });
      callback(addressOptions);
    });
  }

  loadOptionscity(inputValue, callback) {
    this.api.locations({ search: inputValue,type:"city" }).then((locationsResponse) => {
      const addressOptions = locationsResponse.city.map((location) => {
        return {
          value: location.id,
          label: location.name,
          type : location.type,
        };
      });
      callback(addressOptions);
    });
  }

  loadOptionsstate(inputValue, callback) {
    this.api.locations({ search: inputValue,type:"state" }).then((locationsResponse) => {
      const addressOptions = locationsResponse.city.map((location) => {
        return {
          value: location.id,
          label: location.name,
          type : location.type,
        };
      });
      callback(addressOptions);
    });
  }

  loadOptionszip(inputValue, callback) {
    this.api.locations({ search: inputValue,type:"zipcode" }).then((locationsResponse) => {
      const addressOptions = locationsResponse.city.map((location) => {
        return {
          value: location.id,
          label: location.name,
          type : location.type,
        };
      });
      callback(addressOptions);
    });
  }

  render() {
    return (
      <>
        <Content >
          <Header alwaysWhite={true} />
          {!this.state.showResults && (
            <>
              <Half>

              <Row style={{width:"100%"}}>
              <Col style={{padding:0, marginTop:"30px"}}>
              <div style={{display:"flex",flexDirection:"row",margin:"0"}}>
                  <AsyncSelect
                    loadOptions={this.loadOptionszip}
                    styles={selectStyles}
                    className="select-input"
                    value={this.state.zipcode}
                    placeholder="Enter zipcode"
                    onChange={(e) => this.getvalue(e)}
                  />
                  <AsyncSelect
                    loadOptions={this.loadOptionscity}
                    styles={selectStyles}
                    className="select-input"
                    value={this.state.city}
                    placeholder="Enter City"
                    onChange={(e) => this.getvalue(e)}
                  />
         
              </div>
              <div style={{display:"flex",flexDirection:"row",margin:"0"}}>
                  <AsyncSelect
                    loadOptions={this.loadOptionsstate}
                    styles={selectStyles}
                    className="select-input"
                    value={this.state.state}
                    placeholder="Enter state"
                    onChange={(e) => this.getvalue(e)}
                  />
           
                  <AsyncSelect
                    loadOptions={this.loadOptions}
                    styles={selectStyles}
                    className="select-input"
                    value={this.state.address}
                    placeholder="Enter street"
                    onChange={(e) => this.getvalue(e)}
                  />
              </div>
              <DateInput>
                  <p>Sold date between </p>
                  <DatePicker
                    selected={this.state.soldDateMin}
                    onChange={(date) => this.setState({ soldDateMin: date })}
                    className="date-input"
                  />
                  <p>and </p>
                  <DatePicker
                    selected={this.state.soldDateMax}
                    onChange={(date) => this.setState({ soldDateMax: date })}
                    className="date-input"
                  />
                </DateInput>
                <Range>
                  <p>Sold price between </p>
                  <CurrencyInput
                    precision={0}
                    prefix="$"
                    value={this.state.priceMin}
                    onChangeEvent={(e, maskedvalue, floatValue) => this.setState({ priceMin: floatValue })}
                  />
                  <p>and </p>
                  <CurrencyInput
                    precision={0}
                    prefix="$"
                    value={this.state.priceMax}
                    onChangeEvent={(e, maskedvalue, floatValue) => this.setState({ priceMax: floatValue })}
                  />
                </Range>
                <Select
                    options={this.state.propertyTypes}
                    styles={selectStyles}
                    isMulti
                    className="select-input"
                    placeholder="Select a property type"
                    onChange={(e) => this.setState({ propertyType: e })}
                />
              
              <Checkbox>
                  <input onClick={() => this.setState({ showPictures: !this.state.showPictures })} type="checkbox" />
                  <span></span>
                  <p>Show results with pictures</p>
                </Checkbox>
              </Col>
              <Col style={{padding:0, marginTop:"30px"}}>
       
   
              <Range>
                  <p>Bedrooms between </p>
                  <section>
                    <Slider
                      min={1}
                      max={5}
                      value={this.state.bedroomsMin}
                      handleLabel={this.state.bedroomsMin ? `${this.state.bedroomsMin.toString()}` : ""}
                      tooltip={false}
                      onChange={(e) => this.setState({ bedroomsMin: e })}
                    />
                    <p>and </p>
                    <Slider
                      min={1}
                      max={5}
                      value={this.state.bedroomsMax}
                      handleLabel={
                        this.state.bedroomsMax
                          ? `${this.state.bedroomsMax.toString()}${this.state.bedroomsMax == 5 ? "+" : ""}`
                          : ""
                      }
                      tooltip={false}
                      onChange={(e) => this.setState({ bedroomsMax: e })}
                    />
                  </section>
                </Range>
                <Range>
                  <p>Bathrooms between </p>
                  <section>
                    <Slider
                      min={1}
                      max={5}
                      value={this.state.bathroomsMin}
                      handleLabel={this.state.bathroomsMin ? `${this.state.bathroomsMin.toString()}` : ""}
                      tooltip={false}
                      onChange={(e) => this.setState({ bathroomsMin: e })}
                    />
                    <p>and </p>
                    <Slider
                      min={1}
                      max={5}
                      value={this.state.bathroomsMax}
                      handleLabel={
                        this.state.bathroomsMax
                          ? `${this.state.bathroomsMax.toString()}${this.state.bathroomsMax == 5 ? "+" : ""}`
                          : ""
                      }
                      tooltip={false}
                      onChange={(e) => this.setState({ bathroomsMax: e })}
                    />
                  </section>
                </Range>
                <Range>
                  <p>Square feet between </p>
                  <section>
                    <Slider
                      min={0}
                      max={4990}
                      step={10}
                      value={this.state.sqfeetMin}
                      handleLabel={this.state.sqfeetMin != null ? `${this.state.sqfeetMin.toString()}ft²` : ""}
                      tooltip={false}
                      onChange={(e) => this.setState({ sqfeetMin: e })}
                    />
                    <p>and </p>
                    <Slider
                      min={20}
                      max={5000}
                      step={10}
                      value={this.state.sqfeetMax}
                      handleLabel={
                        this.state.sqfeetMax
                          ? `${this.state.sqfeetMax.toString()}${this.state.sqfeetMax == 5000 ? "+" : ""} ft²`
                          : ""
                      }
                      tooltip={false}
                      onChange={(e) => this.setState({ sqfeetMax: e })}
                    />
                  </section>
                </Range>
                <Range>
                  <p>Lot size between </p>
                  <section>
                    <Slider
                      min={0}
                      max={500}
                      step={50}
                      value={this.state.lotMin}
                      handleLabel={this.state.lotMin != null ? `${this.state.lotMin.toString()} acres` : ""}
                      tooltip={false}
                      onChange={(e) => this.setState({ lotMin: e })}
                    />
                    <p>and </p>
                    <Slider
                      min={50}
                      max={500}
                      step={50}
                      value={this.state.lotMax}
                      handleLabel={
                        this.state.lotMax ? `${this.state.lotMax.toString()}${this.state.lotMax == 500 ? "+" : ""} acres` : ""
                      }
                      tooltip={false}
                      onChange={(e) => this.setState({ lotMax: e })}
                    />
                  </section>
                </Range>
                <Range>
                  <p>Year built between </p>
                  <section>
                    <Slider
                      min={1900}
                      max={2020}
                      step={10}
                      value={this.state.yearMin}
                      handleLabel={this.state.yearMin ? `${this.state.yearMin.toString()}` : ""}
                      tooltip={false}
                      onChange={(e) => this.setState({ yearMin: e })}
                    />
                    <p>and </p>
                    <Slider
                      min={1900}
                      max={2020}
                      step={10}
                      value={this.state.yearMax}
                      handleLabel={
                        this.state.yearMax ? `${this.state.yearMax.toString()}${this.state.yearMax == 2020 ? "+" : ""}` : ""
                      }
                      tooltip={false}
                      onChange={(e) => this.setState({ yearMax: e })}
                    />
                  </section>
                </Range>
                <button onClick={() => this.search(true)}>Search</button>
            
              </Col>
   
             
              </Row>
              </Half>
            </>
          )}
          
        </Content>
        {
          (this.state.isloading)?(<Loader type="Puff" color="white" height={100} width={100} />):(<Results
            results={this.state.results}
            totalItems={this.state.totalItems}
            summary={this.state.summary}
            graphs={this.state.graphs}
            images={this.state.showPictures}
            changepage={this.gotopage}
            currentpage={this.state.currentpage}
          />)
        }
     
       
      </>
    );
  }
}

export default Search;

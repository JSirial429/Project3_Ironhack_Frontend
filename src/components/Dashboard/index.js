import React, { Component, useState, useEffect  } from 'react';
import SearchBar from '../SearchBar';
import { DashboardContainer, DashH1, DashP, Icon, TableWrap } from './DashboardElements';
import './dashboard.component.css';
//import { DashboardContainer, DashH1, DashP } from './DashboardElements';
import service from '../../services/axios.services';
import { render } from 'react-dom';

const Dashboard = () => {

    const[product, setProduct] = useState("");
    const[productResult, setProductResult] = useState("");
    const[productArr, setProductArr] = useState(null);

    let resultsArr = null;

    const productSearch = async (e)=>{

        e.preventDefault();
        console.log(product);
        await service.productLookUp({product})
        .then( response =>{
            console.log('Response from product look up:' ,response);
            resultsArr = response.data;
            console.log("ResultsArr:", response);
            setProductArr(resultsArr);
            console.log("productArr:", productArr);
        })
        .catch( err =>{
            console.log(err);
        });
        
    }
    
    useEffect( ()=>{

        

    })
    
    return (
        <>
        <DashboardContainer>
                <TableWrap>
                    <Icon to='/'>Price Checker</Icon>
                <DashH1>My Dashboard</DashH1>
                <DashP>Here you can keep track of all your items and their current price.</DashP>
                </TableWrap>
            </DashboardContainer> 
            <form className="productSearchBar" onSubmit={productSearch}>
                    <input type="text"
                        value={product}
                        onChange={(e)=>{setProduct(e.target.value)}}
                        placeholder="Type product to search" 
                    />
                    <button>Search</button>
            </form>
        </>
    )
}

export default Dashboard;

/* export default class Dashboard extends Component{

    constructor(props){

        super(props);

        this.onChangeProduct = this.onChangeProduct.bind(this);

        this.state = {

            product: "",
            productArr: [],


        }

    }

    productSearch(e){

        e.preventDefault();
        const Product = {product: this.state.product}
        console.log(this.state.product.toString());
        service.productLookUp(this.state.product)
        .then( response =>{
            console.log('Response from product look up:' ,response);
            console.log(productArr);
            setProductArr("response.data");
            console.log(productArr);
            
        })
        .catch( err =>{
            console.log(err);
        });
        
    }

    onChangeProduct(e){
        this.setState({product: e.target.value});
        console.log(e.target.value);
        console.log(this.state.product);
    }

    render(){

        return(

            <>
                <DashboardContainer>
                    <TableWrap>
                    <Icon to='/'>Price Checker</Icon>
                    <DashH1>My Dashboard</DashH1>
                    <DashP>Here you can keep track of all your items and their current price.</DashP>
                    </TableWrap>
                </DashboardContainer> 
                <form className="productSearchBar" onSubmit={this.productSearch}>
                    <input type="text"
                        value={this.state.product}
                        onChange={this.onChangeProduct}
                        placeholder="Type a product to search" 
                    />
                    <button>Search</button>
                </form>
            </>

        )

    }

} */
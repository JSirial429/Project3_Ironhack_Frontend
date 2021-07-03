import React, { useState } from 'react';
import SearchBar from '../SearchBar';
import { DashboardContainer, DashH1, DashP, Icon, TableWrap } from './DashboardElements';
import './dashboard.component.css';
//import { DashboardContainer, DashH1, DashP } from './DashboardElements';
import service from '../../services/axios.services';
import { render } from 'react-dom';

const Dashboard = () => {

    const[product, setProduct] = useState("");
    const[productResult, setProductResult] = useState("");
    const[productArr, setProductArr] = useState([]);

    const productSearch = async (e)=>{

        e.preventDefault();
        service.productLookUp({product})
        .then( response =>{
            //console.log('Response from product look up:' ,response);
            setProductArr(response);
            console.log(productArr);
        })
        .catch( err =>{
            console.log(err);
        });

    }


    
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

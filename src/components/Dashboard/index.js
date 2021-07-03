import React, { useState } from 'react';
import { DashboardContainer, DashH1, DashP, Icon, TableWrap, TableContent, Table } from './DashboardElements';
import './dashboard.component.css';
//import { DashboardContainer, DashH1, DashP } from './DashboardElements';
import service from '../../services/axios.services';
import { render } from 'react-dom';
// import ProductTable from '../ProductTable';

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
            {/* <DashboardContainer>
                <TableWrap>
                    <Icon to='/'>Price Checker</Icon>
                    <DashH1>My Dashboard</DashH1>
                    <DashP>Here you can keep track of all your items and their current price.</DashP>
                    <form className="productSearchBar" onSubmit={productSearch}>
                    <input type="text"
                        value={product}
                        onChange={(e)=>{setProduct(e.target.value)}}
                        placeholder="Type product to search" 
                    />
                    <button>Search</button>
                    </form>
                </TableWrap>
            </DashboardContainer>  */}

            <DashboardContainer>
                <TableWrap>
                    <Icon to='/'>Price Checker</Icon>
                    <DashH1>My Dashboard</DashH1>
                    <DashP>Here you can keep track of all your items and their current price.</DashP>
                    <TableContent>
                    <form className="productSearchBar" onSubmit={productSearch}>
                    <input type="text"
                        value={product}
                        onChange={(e)=>{setProduct(e.target.value)}}
                        placeholder="Type product to search" 
                    />
                    <button>Search</button>
                    </form>
                        <Table>
                        {/* <ProductTable /> */}
                        </Table>
                    </TableContent>
                </TableWrap>
            </DashboardContainer>
        </>
    )
}

export default Dashboard;

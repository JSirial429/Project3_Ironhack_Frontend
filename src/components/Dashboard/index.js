import React, { useState, useEffect } from 'react';
import { DashboardContainer, DashH1, DashP, Icon, TableWrap, TableContent, Table } from './DashboardElements';
import './dashboard.component.css';
<<<<<<< HEAD
import * as ReactBootStrap from "react-bootstrap";
//import { DashboardContainer, DashH1, DashP } from './DashboardElements';
=======
>>>>>>> 544c210b83b56f7c9e3bf298230c1bef2652fb7f
import service from '../../services/axios.services';
import { render } from 'react-dom';
import { Link } from 'react-scroll';
//import ProductTable from '../ProductTable';

const Dashboard = () => {

    const[product, setProduct] = useState("");
    const[productArr, setProductArr] = useState([]);
    const[productName, setProductName] =  useState("");
    const[productPrice, setProductPrice] = useState("");
    const[productLink, setProductLink] = useState("");
    const[productArrStatus, setproductArrStatus] = useState(false);
    
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
            setproductArrStatus(true);
            console.log(productArrStatus);
        })
        .catch( err =>{
            console.log(err);
        });
        
    }
    
    const renderProductRows = ()=>{

        productArr.map( (eachProduct, index) =>{

            return(

                <tr key={index}>
                    <td>
                        {eachProduct.title}
                    </td>
                    <td>
                        {eachProduct.price}
                    </td>
                    <td>
                        <Link to={eachProduct.link}>
                            Buy Now 
                        </Link>
                    </td>
                    <td>
                        <button>
                            Favorite
                        </button>
                    </td>
                </tr>
    
            )

        })

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
                            <ReactBootStrap.Table className="react-table">
                                <thead>
                                    <tr>
                                        <th>
                                            Product Name
                                        </th>
                                        <th>
                                            Price
                                        </th>
                                        <th>
                                            Link
                                        </th>
                                        <th>
                                            Add to Favorites
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        productArrStatus && renderProductRows/* productArrStatus && renderProductRows */
                                    }
                                </tbody>
                            </ReactBootStrap.Table>
                        </Table>
                    </TableContent>
                </TableWrap>
            </DashboardContainer>
        </>
    )
}

export default Dashboard;

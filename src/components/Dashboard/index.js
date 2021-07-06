import React, { useState, useEffect } from 'react';
import { useLocation, useHistory } from "react-router-dom";

import { DashboardContainer, DashH1, DashP, Icon, TableWrap, TableContent, Table } from './DashboardElements';
import './dashboard.component.css';
import * as ReactBootStrap from "react-bootstrap";
import service from '../../services/axios.services';
import { render } from 'react-dom';
import { Link } from 'react-scroll';
//import { getAllProducts } from '../../../../Project3_Ironhack/src/controllers/product.controller';
//import ProductTable from '../ProductTable';

const Dashboard = () => {

    const[product, setProduct] = useState("");
    const[productArr, setProductArr] = useState([]);
    const[productName, setProductName] =  useState("");
    const[productPrice, setProductPrice] = useState("");
    const[productLink, setProductLink] = useState("");
    const[productArrStatus, setproductArrStatus] = useState(false);

    const[savedProductArr, setSavedProductArr] = useState([]);
    const[user,setUser] = useState(null);
    const[blah, setBlah] = useState(0);
    
    const location = useLocation();
    const history = useHistory();

    let resultsArr = "";

    console.log(productArr);

    const productSearch = (e)=>{

        
        e.preventDefault();
        console.log(product);
        service.productLookUp({product})
        .then( response =>{
            //setBlah(response.data.results[0].length);
            //console.log('Response from product look up:' ,response);
            resultsArr = response.data.results[0];
            //console.log("ResultsArr:", response);
            setProductArr(resultsArr);
            //console.log("productArr:", productArr);
            setproductArrStatus(true);
            //console.log(productArrStatus);
        })
        .catch( err =>{
            console.log(err);
        });
        
    }

  
    const goToSaveHistory = ()=>{
        console.log("Hello World");

        history.push({
            pathname:'/SavedProducts',
            state:{detail: location.state.detail.user._id},
        })
    }


    const SaveProduct = (product)=>{

        const objectToBeSaved = product;
        //setUser(location.state.detail);
        
        objectToBeSaved.id = location.state.detail.user._id;

        //console.log(user);
        //onsole.log(location.state.detail.user._id);
        console.log(objectToBeSaved);
        service.productSave(objectToBeSaved)
                .then( response =>{
                    console.log(response)
                });

    }
    

 /*    useEffect( ()=>{
        //console.log("Hello World");
        setUser(location.state.detail);
        //console.log(user.user._id);
        //console.log(user.user._id)
        console.log(location.state.detail.user._id);

        const userId = {id : location.state.detail.user._id};
        //console.log(userId);

        service.productGetAll(userId)
               .then( response =>{
                   console.log(response);
               })
               .catch( err =>{
                   console.log
               });

    });
 */
    /* const renderProductRows = ()=>{

        if(productArrStatus){
            
        }
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

    } */
    
    return (
        <>
            <DashboardContainer>
            {/* <div>Blah blah</div>
            <div>{blah}</div>
            {productArr.map(  (eachProduct)=>{
                return <div>{eachProduct.link}</div>
             })} */}
                <TableWrap>
                    <Icon to='/'>Price Checker</Icon>
                    <DashH1>My Dashboard</DashH1>
                    <DashP>Here you can keep track of all your items and their current price.</DashP>
                    {/* <button className="savedHistory-button" onClick={()=>goToSaveHistory()}>
                        Go To Saved History
                    </button> */}
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
                                            Retailer
                                        </th>
                                        <th>
                                            Link
                                        </th>
                                       {/*  <th>
                                            Add to Favorites
                                        </th> */}
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        productArr.map(  (eachProduct, index)=>{
                                            return (<tr key={index}>
                                                        <td>
                                                            {eachProduct.title}
                                                        </td>
                                                        <td>
                                                            {`\$${eachProduct.extracted_price}`}
                                                        </td>
                                                        <td>
                                                            {eachProduct.source}
                                                        </td>
                                                        <td>
                                                            <a href={eachProduct.link}>
                                                                <button>
                                                                    Buy
                                                                </button>
                                                            </a>
                                                        </td>
                                                       {/*  <td>
                                                            <button onClick={() => SaveProduct({link :eachProduct.link,
                                                                                                retailer: eachProduct.source,
                                                                                                name: eachProduct.title,
                                                                                                price: eachProduct.price})}>
                                                                Save
                                                            </button>
                                                        </td> */}
                                                    </tr>)
                                        })
                                    }
                                </tbody>
                            </ReactBootStrap.Table>
                           {/*  <ReactBootStrap.Table className="react-table-saved-history">
                                <thead>
                                    <tr>
                                        <td>
                                            Saved Product
                                        </td>
                                        <td>
                                            Price
                                        </td>
                                        <td>
                                            Retailer
                                        </td>
                                        <td>
                                            Link
                                        </td>
                                        <td>
                                            Remove
                                        </td>
                                    </tr>
                                </thead>
                                <tbody>

                                </tbody>
                            </ReactBootStrap.Table> */}
                        </Table>
                    </TableContent>
                </TableWrap>
            </DashboardContainer>
        </>
    )
}

export default Dashboard;

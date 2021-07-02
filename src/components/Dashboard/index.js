import React, { useState } from 'react';
import SearchBar from '../SearchBar';
<<<<<<< Updated upstream
import { DashboardContainer, DashH1, DashP, Icon, TableWrap } from './DashboardElements';
=======
import { DashboardContainer, DashH1, DashP } from './DashboardElements';
import service from '../../services/axios.services';
>>>>>>> Stashed changes

const Dashboard = () => {

    const[product, setProduct] = useState("");
    const[productResult, setProductResult] = useState("");
    const[productArr, setProductArr] = useState([]);

    const productSearch = async (e)=>{

        e.preventDefault();
        service.productLookUp({product})
        .then( response =>{
            console.log(response);
        })
        .catch( err =>{
            console.log(err);
        });

    }

    return (
        <DashboardContainer>
                <TableWrap>
                    <Icon to='/'>Price Checker</Icon>
                <DashH1>My Dashboard</DashH1>
                <DashP>Here you can keep track of all your items and their current price.</DashP>
                <SearchBar />
                </TableWrap>
            </DashboardContainer>
    )
}

export default Dashboard;

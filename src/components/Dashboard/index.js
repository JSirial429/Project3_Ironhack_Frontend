import React from 'react';
import SearchBar from '../SearchBar';
import { DashboardContainer, DashH1, DashP, Icon, TableWrap } from './DashboardElements';

const Dashboard = () => {
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

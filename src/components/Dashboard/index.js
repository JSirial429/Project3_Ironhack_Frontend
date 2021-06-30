import React from 'react';
import SearchBar from '../SearchBar';
import { DashboardContainer, DashH1, DashP } from './DashboardElements';

const Dashboard = () => {
    return (
        <DashboardContainer id='dashboard'>
            <DashH1>My Dashboard</DashH1>
            <DashP>Here you can view all your items that you want to keep tabs on along with there current price!</DashP>
            <SearchBar />
        </DashboardContainer>
    )
}

export default Dashboard;

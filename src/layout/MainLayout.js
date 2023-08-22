import { Box, Container } from '@mui/system';
import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../components/Navbar/NavBar'

const MainLayout = () => {
    return (
        <Box>
            <Container>
                <NavBar></NavBar>
                <Outlet></Outlet>
            </Container>
        </Box>
    );
};

export default MainLayout;
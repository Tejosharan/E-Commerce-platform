import { Fragment } from 'react';
import { Box } from '@mui/material';

// Components
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = (props) => {
    return (
        <Fragment>
            <Navbar />
            <Box sx={{ mt: 10 }}>
                {props.children}
            </Box>
            <Footer />
        </Fragment>
    );
};

export default Layout;
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import MenuIcon from "@mui/icons-material/Menu";

import { Link } from 'react-router';

const Navbar = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="fixed">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        variant="h6"
                        component={Link}
                        to="/"
                        sx={{ flexGrow: 1, textDecoration: "none", color: "inherit", cursor: "pointer" }}
                    >Home</Typography>
                    <Button component={Link} to="/cart" color="inherit">Cart</Button>
                    <Button component={Link} to="/login" color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Navbar;
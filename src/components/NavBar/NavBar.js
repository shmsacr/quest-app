import React from "react";
import { Link } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { styled } from '@mui/system';

const MyLink = styled(Link)({
    textDecoration: "none",
    boxShadow: "none",
    color: "white"
});


function Navbar() {
    let userId = 5;

    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton><Typography variant = "h6" sx={{ flexGrow: 1, textAlign:"left"}} color ="inherit" aria-label = "menu">
                        <MyLink to="/">Home</MyLink></Typography>
                    <Typography variant = "h6" color ="inherit" >
                        <MyLink to={{ pathname: '/users/' + userId }}>User</MyLink></Typography>

                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Navbar;

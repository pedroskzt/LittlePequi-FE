import {MouseEvent, useState} from "react";
import {useNavigate} from "react-router-dom";
import {Box, IconButton, Menu, MenuItem, Typography} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const MenuPages = () => {
    const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

    const navigate = useNavigate();

    const handleOpenNavMenu = (event: MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleClick = (to: string) => {
        handleCloseNavMenu();
        navigate(to);
    }

    return (
        <Box sx={{flexGrow: 1, display: {xs: 'flex', md: 'none'}}}>
            <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
            >
                <MenuIcon/>
            </IconButton>
            <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                    display: {xs: 'block', md: 'none'}
                }}
            >
                <MenuItem onClick={() => handleClick("/")}
                          sx={{":hover": {backgroundColor: "var(--secondary-color)"}}}>
                    <Typography sx={{
                        textAlign: 'center',
                        color: 'var(--tertiary-color)',
                        fontSize: '1rem',
                        fontWeight: 'bolder'
                    }}>
                        Home
                    </Typography>
                </MenuItem>

                <MenuItem onClick={() => handleClick("/about")}
                          sx={{":hover": {backgroundColor: "var(--secondary-color)"}}}>
                    <Typography sx={{
                        textAlign: 'center',
                        color: 'var(--tertiary-color)',
                        fontSize: '1rem',
                        fontWeight: 'bolder'
                    }}>
                        About
                    </Typography>
                </MenuItem>

                <MenuItem onClick={() => handleClick("/")}
                          sx={{":hover": {backgroundColor: "var(--secondary-color)"}}}>
                    <Typography sx={{
                        textAlign: 'center',
                        color: 'var(--tertiary-color)',
                        fontSize: '1rem',
                        fontWeight: 'bolder'
                    }}>
                        Menu
                    </Typography>
                </MenuItem>

                <MenuItem onClick={() => handleClick("/")}
                          sx={{":hover": {backgroundColor: "var(--secondary-color)"}}}>
                    <Typography sx={{
                        textAlign: 'center',
                        color: 'var(--tertiary-color)',
                        fontSize: '1rem',
                        fontWeight: 'bolder'
                    }}>
                        Reservations
                    </Typography>
                </MenuItem>

                <MenuItem onClick={() => handleClick("/")}
                          sx={{":hover": {backgroundColor: "var(--secondary-color)"}}}>
                    <Typography sx={{
                        textAlign: 'center',
                        color: 'var(--tertiary-color)',
                        fontSize: '1rem',
                        fontWeight: 'bolder'
                    }}>
                        Make your order
                    </Typography>
                </MenuItem>


            </Menu>
        </Box>
    )
}

export default MenuPages;
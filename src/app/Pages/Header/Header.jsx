'use client';
import SelectComp from '@/app/about/page';
import MenuIcon from '@mui/icons-material/Menu';
import { Container } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import * as React from 'react';
import { makeStyles } from "@mui/styles";
import { usePathname, useRouter, useSearchParams } from 'next/navigation'

const useStyles = makeStyles((theme) => ({
    linkClass: {
        padding: "12px 20px",
        marginRight: "10px",
        textDecoration: "none",
        color: "#000",
        transition: "background-color 0.1s ease-in-out",
        fontWeight: "400 !important",
        '&:hover': {
            backgroundColor: "#FF6200",
            color: "#fff"
        },
    },
    active: {
        backgroundColor: "#FF6200 !important",
        color: "#fff"
    }
}));
const drawerWidth = 240;
const navItems = [
    { path: '/', text: 'Home' },
    { path: '/shop-all', text: 'Shop All' },
    { path: '/women', text: 'Women' },
    { path: '/men', text: 'Men' },
    { path: '/sale', text: 'Sale' },
    { path: '/about', text: 'About' },
    { path: '/contact', text: 'Contact' },
    { path: '/login', text: 'Login', },
];
function Header(props) {
    const classes = useStyles();
    const router = useRouter()
    const pathname = usePathname()
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };
    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Box sx={{
                width: "100% !important", height: "50px",
                justifyContent: "center", display: "flex", alignItems: "center", background: "#FF6200"
            }}>
                <Link href='/home' style={{ color: "#fff", textDecoration: "none", fontFamily: 'Montserrat' }}>
                    Hustlers
                </Link>
            </Box>
            <Divider />
            <List>
                {navItems.map((item, ind) => (
                    <ListItem key={ind} disablePadding>
                        <ListItemButton sx={{ textAlign: 'center' }}>
                            <Link style={{ textDecoration: "none", color: "#000" }} href={item.path}>
                                <ListItemText primary={item.text} />
                            </Link>
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );
    const container = window !== undefined ? () => window().document.body : undefined;
    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar component="nav" sx={{ background: "#f7f7f7 ", boxShadow: "none" }}>
                <Container maxWidth='xlg'>
                    <Toolbar sx={{
                        paddingLeft: "0px !important", paddingRight: "0px !important", display: "Flex",
                        justifyContent: {
                            lg: "space-between",
                            md: "flex-start",
                            sm: "flex-start"
                        }
                    }}>
                        <IconButton
                            color="#000"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                            sx={{ mr: 2, display: { sm: 'block', lg: "none" } }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography
                            variant="h5"
                            sx={{
                                display: {
                                    xs: 'block', sm: 'block',
                                }
                            }}
                        >
                            <Box sx={{
                                width: "140px !important", height: "45px",
                                justifyContent: "center", display: "flex", alignItems: "center", background: "#FF6200"
                            }}>
                                <Link href={'/home'} style={{ color: "#fff", textDecoration: "none", fontFamily: 'Montserrat' }}>
                                    Hustlers
                                </Link>
                            </Box>
                        </Typography>
                        <Box sx={{ display: { xs: 'none', sm: 'none', lg: "block" } }}>
                            {
                                navItems?.map(({ path, text }, ind) => {
                                    return (
                                        <Link
                                            className={`${classes.linkClass} ${path === pathname ? classes.active : ''}`}
                                            key={ind} href={path}>{text}
                                        </Link>

                                    )
                                })
                            }
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
            <nav>
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
            </nav>
            <Box component="main">
                <Toolbar />
            </Box>
        </Box >
    );
}


export default Header;



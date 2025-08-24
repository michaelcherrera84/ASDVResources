import * as React from 'react';
import { Box, Drawer, Toolbar } from '@mui/material';
import AppHeader from "../components/AppHeader.tsx";
import NavigationDrawer from '../components/NavigationDrawer';
import { Route, Routes } from "react-router";
import BooksPage from "./BooksPage.tsx";
import LinksPage from "./LinksPage.tsx";
import AppsPage from "./AppsPage.tsx";
import LandingPage from "./LandingPage.tsx";

const lgDrawerWidth = 400;
const mdDrawerWidth = 300;


export default function HomePage() {
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [isClosing, setIsClosing] = React.useState(false);

    const handleDrawerClose = () => {
        setIsClosing(true);
        setMobileOpen(false);
    };

    const handleDrawerTransitionEnd = () => {
        setIsClosing(false);
    };

    const handleDrawerToggle = () => {
        if (!isClosing) {
            setMobileOpen(!mobileOpen);
        }
    };

    return (
        <Box>
            <AppHeader onMenuClick={handleDrawerToggle} />

            {/* Drawer Section */}
            <Box component="nav" aria-label="site navigation">
                {/* Mobile Drawer */}
                <Drawer
                    variant="temporary"
                    open={mobileOpen}
                    onTransitionEnd={handleDrawerTransitionEnd}
                    onClose={handleDrawerClose}
                    sx={{
                        display: {xs: 'block', md: 'none'},
                        '& .MuiDrawer-paper': {boxSizing: 'border-box', width: lgDrawerWidth, maxWidth: '95%'},
                    }}
                    slotProps={{
                        root: {
                            keepMounted: true,
                        },
                    }}
                >
                    <NavigationDrawer />
                </Drawer>

                {/* Permanent Drawer */}
                <Drawer
                    variant="permanent"
                    sx={{
                        display: {xs: 'none', md: 'block'},
                        '& .MuiDrawer-paper': {
                            boxSizing: 'border-box',
                            width: {md: mdDrawerWidth, lg: lgDrawerWidth},
                        },
                    }}
                    open
                >
                    <NavigationDrawer />
                </Drawer>
            </Box>

            {/* Main Content Area */}
            <Box
                component="main"
                sx={{ml: {md: `${mdDrawerWidth}px`, lg: `${lgDrawerWidth}px`}}}
            >
                <Toolbar />
                {/* Page Content */}
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/books" element={<BooksPage />} />
                    <Route path="/books/:filter" element={<BooksPage />} />
                    <Route path="/links" element={<LinksPage />} />
                    <Route path="/apps" element={<AppsPage />} />
                </Routes>
            </Box>
        </Box>
    );
}
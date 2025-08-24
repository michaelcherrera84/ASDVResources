import { AppBar, Toolbar, Typography, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

export default function AppHeader({onMenuClick}: { onMenuClick: () => void }) {
    return (
        <AppBar sx={(theme) => ({zIndex: theme.zIndex.drawer + 1})}>
            <Toolbar sx={{width: 'fit-content'}}>
                <IconButton color="inherit" aria-label="open drawer" edge="start"
                            onClick={onMenuClick}
                            sx={{mr: 2, display: {md: 'none'}}}
                >
                    <MenuIcon />
                </IconButton>
                <Typography variant="h5" noWrap component="div" sx={{pl: {md: 3}}}>
                    ASDV Resources
                </Typography>
            </Toolbar>
        </AppBar>
    );
}
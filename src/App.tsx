import { useMemo } from 'react';
import { createTheme, ThemeProvider, CssBaseline } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import HomePage from './pages/HomePage';

export default function App() {
    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

    const theme = useMemo(
        () =>
            createTheme({
                palette: {
                    mode: prefersDarkMode ? 'dark' : 'light',
                    background: prefersDarkMode
                        ? {
                            default: '#121212', // dark mode background
                            paper: '#1e1e1e',   // dark card surface
                        }
                        : {
                            default: '#f3f4f6', // light mode background
                            paper: '#ffffff',   // light card surface
                        },
                },
            }),
        [prefersDarkMode],
    );

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <HomePage />
        </ThemeProvider>
    );
}
import { Box, Typography, Paper } from '@mui/material';
import Grid from '@mui/material/Grid'; // v7 Grid (v2)

export default function LandingPage() {
    return (
        <Box sx={{p: 4}}>
            <Typography variant="h3" gutterBottom>
                Welcome to ASDV Resources
            </Typography>

            <Typography variant="h6" color="text.secondary">
                Your hub for essential study materials, tools, and links for the Application Software Development
                program.
            </Typography>

            <Paper sx={{p: 3, mt: 4}}>
                <Typography variant="h5" gutterBottom>
                    Explore Resources
                </Typography>
                <Typography variant="body1">
                    Whether you're just starting or preparing for graduation, this dashboard keeps everything you need
                    in one place.
                </Typography>

                <Grid container spacing={2} mt={5}>
                    <Grid size={{xs: 12, md: 4}} border="1px solid" borderRadius={1} p={2}>
                        <Typography variant="h6">Books</Typography>
                        <Typography variant="body2">
                            Find recommended reading for each semester and course.
                        </Typography>
                    </Grid>
                    <Grid size={{xs: 12, md: 4}} border="1px solid" borderRadius={1} p={2}>
                        <Typography variant="h6">Important Links</Typography>
                        <Typography variant="body2">
                            Access tutorials, official documentation, and student tools.
                        </Typography>
                    </Grid>
                    <Grid size={{xs: 12, md: 4}} border="1px solid" borderRadius={1} p={2}>
                        <Typography variant="h6">Applications</Typography>
                        <Typography variant="body2">
                            Discover software and utilities to improve your workflow.
                        </Typography>
                    </Grid>
                </Grid>
            </Paper>

            <Box sx={{mt: 4}}>
                <Typography variant="body1" color="text.secondary">
                    Need guidance or have a suggestion for new resources? Connect through the discussion server or
                    contact your program tutor.
                </Typography>
            </Box>
        </Box>
    );
}
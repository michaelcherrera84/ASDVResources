import { Box, Button, Typography } from "@mui/material";
import RelationalLogo from '../assets/relational.png';

function AppsPage() {

    const handleDownloadClick = (link: string) => {
        if (!link) return;

        // Create a download link element
        const alink = document.createElement("a");
        alink.href = link;

        // Extract file extension from the URL and set a descriptive filename
        const extension = link.substring(link.lastIndexOf('.'));
        alink.download = `Install Relational${extension}`;

        // Trigger the download
        alink.click();
    };

    return (
        <Box display="flex" flexDirection="column" alignItems="start" m={{xs: 1, md: 5}}>
            <Box sx={{border: '1px solid', borderColor: 'text.secondary', width: '100%', p: {xs: 2, sm: 5}}}>
                <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'start', width: 'fit-content'}}>
                    <Box display="flex"
                         flexDirection={{xs: 'column', sm: 'row'}}
                         alignItems="center"
                         justifyContent="start"
                    >
                        <img src={RelationalLogo} alt="Relational Logo" width={150} />
                        <Box display="flex" flexDirection="column" alignItems={{xs: 'center', sm: 'start'}}>
                            <Typography variant="h4">Relational</Typography>
                            <Typography variant="h6" sx={{textAlign: {xs: 'center', sm: 'start'}}}>
                                Educational tool for relational algebra
                            </Typography>
                        </Box>
                    </Box>
                    <Box display="flex" width="100%" justifyContent="center">
                        <Box display="flex" flexDirection={{xs: 'column', sm: 'row'}} gap={{xs: 2, sm: 5}} sx={{mt: 2}}>
                            <Button variant="contained"
                                    onClick={() => handleDownloadClick('https://storage.googleapis.com/asdv-resources/Install%20Relational.exe')}
                                    sx={{width: 200}}
                            >
                                Download Windows
                            </Button>
                            <Button variant="contained"
                                    onClick={() => handleDownloadClick('https://storage.googleapis.com/asdv-resources/Install%20Relational.dmg')}
                                    sx={{width: 200}}
                            >
                                Download Mac
                            </Button>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

export default AppsPage;
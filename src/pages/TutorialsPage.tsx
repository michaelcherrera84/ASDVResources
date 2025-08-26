import { Container, Typography } from "@mui/material";

function TutorialsPage() {
    return (
        <Container sx={{
            width: '100%',
            height: 'calc(100vh - 64px)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
        }}
        >
            <Typography variant="h3" sx={{fontStyle: 'italic', fontFamily: 'Times New Roman'}}>
                Coming Soon...
            </Typography>
        </Container>
    );
}

export default TutorialsPage;
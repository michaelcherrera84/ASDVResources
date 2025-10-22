import {Box, Typography, Link, Card} from "@mui/material";
import ImageTutorial from "../components/tutorials/ImageTutorial.tsx";

function TutorialsPage() {
    return (
        <Box>
            <ImageTutorial imageKey="netbeans-basics"
                           title="NetBeans Basics"
            />
            <ImageTutorial imageKey="common-visual-studio-error"
                           title="Common Visual Studio Error"
            />

            <Box sx={{p: {xs: 2, sm: 4}, mx: "auto", w: "100%"}}>
                <Typography variant="h4" gutterBottom mt={2}>
                    Other Tutorials
                </Typography>
                <Card style={{display: 'flex', flexWrap: 'wrap', gap: 10, padding: 15}}>
                    <Link
                        href="/tutorials/netbeans-maven-web-application-tutorial.html"
                        target="_blank"
                        rel="noopener noreferrer"
                        underline="none"
                    >
                        NetBeans Maven Web Application Tutorial (JSF/PrimeFaces/GlassFish)
                    </Link>
                </Card>
            </Box>
        </Box>
    );
}

export default TutorialsPage;
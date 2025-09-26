import {Box} from "@mui/material";
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
        </Box>
    );
}

export default TutorialsPage;
import { useState } from 'react';
import { Box, Card, CardMedia, Dialog, Typography, IconButton } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const imageSets: Record<string, Record<string, { default: string }>> = {
    "netbeans-basics": import.meta.glob<{ default: string }>('/src/assets/netbeans-basics-tutorial/*.png', { eager: true }),
    "common-visual-studio-error": import.meta.glob<{ default: string }>('/src/assets/common-visual-studio-error/*.png', { eager: true }),
};

type props = {
    imageKey: keyof typeof imageSets;
    title: string;
}

export default function ImageTutorial({imageKey, title}: props) {

    const images = Object.values(imageSets[imageKey]).map((module) => module.default);

    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

    const handlePrev = () => {
        if (selectedIndex !== null) {
            setSelectedIndex((selectedIndex - 1 + images.length) % images.length);
        }
    };

    const handleNext = () => {
        if (selectedIndex !== null) {
            setSelectedIndex((selectedIndex + 1) % images.length);
        }
    };

    return (
        <Box sx={{p: {xs: 2, sm: 4}, mx: "auto", w: "100%"}}>
            <Typography variant="h4" gutterBottom mt={2}>
                {title}
            </Typography>
            <Card style={{display: 'flex', flexWrap: 'wrap', gap: 10, padding: 15}}>
                {images.map((img, index) => (
                    <Card
                        key={index}
                        sx={{width: 160, cursor: 'pointer'}}
                        onClick={() => setSelectedIndex(index)}
                    >
                        <CardMedia
                            component="img"
                            height="100"
                            image={img}
                            alt={`Tutorial step ${index + 1}`}
                        />
                    </Card>
                ))}
            </Card>

            <Dialog open={selectedIndex !== null} onClose={() => setSelectedIndex(null)} maxWidth="lg">
                {selectedIndex !== null && (
                    <Box sx={{position: 'relative', display: 'flex', alignItems: 'center'}}>
                        <IconButton
                            onClick={handlePrev}
                            sx={{
                                position: 'absolute',
                                left: 10,
                                top: '50%',
                                transform: 'translateY(-50%)',
                                color: 'white',
                                backgroundColor: 'rgba(0,0,0,0.3)',
                            }}
                            disableRipple
                        >
                            <ArrowBackIcon />
                        </IconButton>
                        <img
                            src={images[selectedIndex]}
                            alt="Selected tutorial"
                            style={{width: '100%', height: 'auto'}}
                        />
                        <IconButton
                            onClick={handleNext}
                            sx={{
                                position: 'absolute',
                                right: 10,
                                top: '50%',
                                transform: 'translateY(-50%)',
                                color: 'white',
                                backgroundColor: 'rgba(0,0,0,0.3)',
                            }}
                            disableRipple
                        >
                            <ArrowForwardIcon />
                        </IconButton>
                    </Box>
                )}
            </Dialog>
        </Box>
    );
}
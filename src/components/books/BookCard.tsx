import { Box, Button, Card, CardContent, CardMedia, Typography } from '@mui/material';
import type { Book } from '../../data/books';

export default function BookCard({book}: { book: Book }) {
    const handleDownloadClick = () => {
        if (!book.downloadLink) return;
        const alink = document.createElement("a");
        alink.href = book.downloadLink;
        alink.download = book.title + " - " + book.subtitle + "(" + book.edition + ").pdf";
        alink.click();
    };

    return (
        <Card sx={{
            m: 2,
            width: {md: 700, lg: 800},
            display: {sm: 'inline-flex'},
            alignItems: 'stretch',
            height: 'fit-content',
        }}
        >
            <CardMedia component="img" image={book.image} title={book.title} sx={{width: {xs: '100%', sm: '30%'}}} />
            <CardContent sx={{display: 'flex', flexDirection: 'column', flexGrow: 1}}>
                <Typography variant="h6" sx={{lineHeight: 1.1, mb: {xs: 0.5, sm: 0}}}>{book.title}</Typography>
                <Box component="div" sx={{display: {sm: 'flex'}, mb: {xs: 0.5, sm: 0}}}>
                    {book.subtitle && (
                        <Typography variant="subtitle1" sx={{lineHeight: {xs: 1.1, md: 'inherit'}}}>
                            {book.subtitle}&nbsp;{book.edition && '-'}&nbsp;
                        </Typography>)}
                    {book.edition && (<Typography variant="subtitle1"
                                                  sx={{lineHeight: {xs: 1.1, md: 'inherit'}}}
                    >{book.edition}</Typography>)}
                </Box>
                <Typography variant="subtitle2"
                            sx={{color: 'text.secondary', mb: '0.75em'}}
                >
                    Author: {book.author}
                </Typography>
                <Typography variant="caption" sx={{pb: 2}}>{book.description}</Typography>
                {book.downloadLink && (<Button variant="outlined"
                                               sx={{display: 'block', width: '100%', mt: 'auto'}}
                                               onClick={handleDownloadClick}
                >
                    Download
                </Button>)}
                {book.buyLink && (<Button variant="outlined"
                                          sx={{display: 'block', width: '100%', mt: 'auto', textAlign: 'center'}}
                                          href={book.buyLink} target="_blank"
                    >
                        Purchase
                    </Button>
                )}
            </CardContent>
        </Card>
    );
}
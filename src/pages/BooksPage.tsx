import { Box } from '@mui/material';
import { books } from '../data/booksIndex';
import BookList from '../components/books/BookList';
import { useParams } from 'react-router';

export default function BooksPage() {
    const {filter: routeFilter} = useParams();
    const filter = routeFilter || 'all';

    const filteredBooks = filter === 'all'
        ? books
        : books.filter(
            (book) =>
                book.semester.includes(filter) ||
                book.course.includes(filter),
        );

    return (
        <Box sx={{
            p: {xs: 1, sm: 4},
            display: 'flex',
            alignContent: 'center',
        }}
        >
            <BookList books={filteredBooks} />
        </Box>
    );
}
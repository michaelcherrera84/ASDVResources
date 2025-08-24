import { Box } from '@mui/material';
import type { Book } from '../../data/books';
import BookCard from './BookCard';

export default function BookList({ books }: { books: Book[] }) {
    return (
        <Box>
            {books.map((book) => (
                <BookCard key={book.id} book={book} />
            ))}
        </Box>
    );
}
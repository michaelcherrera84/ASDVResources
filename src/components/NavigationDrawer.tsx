import { Toolbar, Accordion, AccordionSummary, AccordionDetails, Link } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { courseLinks } from "../data/navigation.ts";
import { Link as RouterLink } from 'react-router';

export default function NavigationDrawer({onLinkClick}: { onLinkClick?: () => void }) {
    return (
        <div>
            <Toolbar sx={{height: 90}} />
            <Accordion sx={{transition: 'background-color 0.2s ease', '&:hover': {backgroundColor: 'action.hover'}}}
                       disableGutters square
            >
                <Link sx={{cursor: 'pointer', p: 2, display: "block", pl: 6}}
                      variant="h6"
                      color="inherit"
                      underline="none"
                      component={RouterLink}
                      to="/"
                      onClick={onLinkClick}
                >
                    Home
                </Link>
            </Accordion>
            <Accordion sx={{transition: 'background-color 0.2s ease', '&:hover': {backgroundColor: 'action.hover'}}}
                       disableGutters square
            >
                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="semester list" id="books-header">
                    <Link variant="h6"
                          color="inherit"
                          underline="none"
                          sx={{pl: 4}}
                          component={RouterLink}
                          to="/books"
                          onClick={onLinkClick}
                    >
                        Books
                    </Link>
                </AccordionSummary>
                {courseLinks.map(({semester, courses}) => (
                    <Accordion key={semester}
                               sx={{
                                   transition: 'background-color 0.2s ease',
                                   '&:hover': {backgroundColor: 'action.hover'},
                               }}
                               disableGutters square
                    >
                        <AccordionSummary expandIcon={<ArrowDropDownIcon />} aria-controls={semester}>
                            <Link key={semester}
                                  component={RouterLink}
                                  variant="subtitle1"
                                  sx={{pl: 6}}
                                  to={`/books/${encodeURIComponent(semester)}`}
                                  color="inherit"
                                  underline="none"
                                  onClick={onLinkClick}
                            >
                                {semester}
                            </Link>
                        </AccordionSummary>
                        <AccordionDetails>
                            {courses.map(course => (
                                <Link key={course}
                                      sx={{cursor: 'pointer', pl: 8, py: 1, display: 'inline-block'}}
                                      color="inherit"
                                      underline="hover"
                                      component={RouterLink}
                                      to={`/books/${encodeURIComponent(course)}`}
                                      onClick={onLinkClick}
                                >
                                    {course}
                                </Link>
                            ))}
                        </AccordionDetails>
                    </Accordion>
                ))}
            </Accordion>
            <Accordion sx={{transition: 'background-color 0.2s ease', '&:hover': {backgroundColor: 'action.hover'}}}
                       disableGutters square
            >
                <Link sx={{cursor: 'pointer', pl: 6, py: 2, display: "block"}}
                      variant="h6"
                      color="inherit"
                      underline="none"
                      component={RouterLink}
                      to="/links"
                      onClick={onLinkClick}
                >
                    Important Links
                </Link>
            </Accordion>
            <Accordion sx={{transition: 'background-color 0.2s ease', '&:hover': {backgroundColor: 'action.hover'}}}
                       disableGutters square
            >
                <Link sx={{cursor: 'pointer', pl: 6, py: 2, display: "block"}}
                      variant="h6"
                      color="inherit"
                      underline="none"
                      component={RouterLink}
                      to="/apps"
                      onClick={onLinkClick}
                >
                    Applications
                </Link>
            </Accordion>
            <Accordion sx={{transition: 'background-color 0.2s ease', '&:hover': {backgroundColor: 'action.hover'}}}
                       disableGutters square
            >
                <Link sx={{cursor: 'pointer', pl: 6, py: 2, display: "block"}}
                      variant="h6"
                      color="inherit"
                      underline="none"
                      component={RouterLink}
                      to="/tutorials"
                      onClick={onLinkClick}
                >
                    Tutorials
                </Link>
            </Accordion>
        </div>
    );
}
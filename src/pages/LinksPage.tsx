import { Box, Divider, Link, List, ListItem, ListSubheader, Typography } from "@mui/material";

export default function LinksPage() {
    return (
        <Box sx={{p: {xs: 1, sm: 4}}}>
            <List>
                <Typography variant="h5" component="div">
                    Java
                </Typography>
                <Divider />
                <List>
                    <ListItem>
                        <Link underline="none"
                              component="a"
                              href="https://www.oracle.com/java/technologies/downloads/"
                              target="_blank"
                        >
                            Java Downloads
                        </Link>
                    </ListItem>
                    <ListSubheader sx={{background: 'none'}}>Companion Sites</ListSubheader>
                    <ListItem>
                        <Link underline="none"
                              component="a"
                              href="https://media.pearsoncmg.com/ph/esm/ecs_liang_ijp_11/cw/"
                              target="_blank"
                        >
                            Introduction to Java Programming and Data Structures, Comprehensive Version, 11th Edition
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link underline="none"
                              component="a"
                              href="https://media.pearsoncmg.com/ph/esm/ecs_liang_ijp_12/cw/"
                              target="_blank"
                        >
                            Introduction to Java Programming and Data Structures, Comprehensive Version, 12th Edition
                        </Link>
                    </ListItem>
                </List>
                <Typography variant="h5" component="div" sx={{mt: 3}}>
                    Logisim
                </Typography>
                <Divider />
                <List>
                    <ListItem sx={{mt: 1}}>
                        <Link underline="none"
                              component="a"
                              href="https://minnie.tuhs.org/CompArch/Tutes/week03.html"
                              target="_blank"
                        >
                            An Example Hardwired CPU
                        </Link>
                    </ListItem>
                </List>
                <Typography variant="h5" component="div" sx={{mt: 3}}>
                    Database Design
                </Typography>
                <Divider />
                <List>
                    <ListItem sx={{mt: 1}}>
                        <Link underline="none"
                              component="a"
                              href="https://www.ict.griffith.edu.au/normalization_tools/normalization/ind.php"
                              target="_blank"
                        >
                            Normalization Tool
                        </Link>
                    </ListItem>
                </List>
                <Typography variant="h5" component="div" sx={{mt: 3}}>
                    Jakarta Web Development
                </Typography>
                <Divider />
                <List>
                    <ListItem>
                        <Link underline="none"
                              component="a"
                              href="https://jakarta.ee"
                              target="_blank"
                        >
                            Jakarta EE
                        </Link>
                    </ListItem>
                    <ListSubheader sx={{background: 'none'}}>PrimeFaces</ListSubheader>
                    <ListItem>
                        <Link underline="none"
                              component="a"
                              href="https://showcase.primefaces.org/index.xhtml?jfwid=0b273"
                              target="_blank"
                        >
                            Showcase
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link underline="none"
                              component="a"
                              href="https://primefaces.github.io/primefaces/jsdocs/index.html"
                              target="_blank"
                        >
                            PrimeFaces JavaScript API Docs
                        </Link>
                    </ListItem>
                    <ListSubheader sx={{background: 'none'}}>Eclipse GlassFish</ListSubheader>
                    <ListItem>
                        <Link underline="none"
                              component="a"
                              href="https://glassfish.org/documentation.html"
                              target="_blank"
                        >
                            Eclipse GlassFish Documentation
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link underline="none"
                              component="a"
                              href="http://localhost:4848/common/index.jsf"
                              target="_blank"
                        >
                            GlassFish Admin Console (GlassFish server must be running)
                        </Link>
                    </ListItem>
                    <Typography variant="h5" component="div" sx={{mt: 3}}>
                        Integrated Development Environments
                    </Typography>
                    <Divider />
                    <List>
                        <ListItem sx={{mt: 1}}>
                            <Link underline="none"
                                  component="a"
                                  href="https://netbeans.apache.org/front/main/index.html"
                                  target="_blank"
                            >
                                Apache NetBeans
                            </Link>
                        </ListItem>
                        <ListItem sx={{mt: 1}}>
                            <Link underline="none"
                                  component="a"
                                  href="https://code.visualstudio.com"
                                  target="_blank"
                            >
                                Visual Studio Code
                            </Link>
                        </ListItem>
                        <ListSubheader sx={{background: 'none'}}>JetBrains</ListSubheader>
                        <ListItem sx={{mt: 1}}>
                            <Link underline="none"
                                  component="a"
                                  href="https://www.jetbrains.com/idea/"
                                  target="_blank"
                            >
                                IntelliJ IDEA
                            </Link>
                        </ListItem>
                        <ListItem sx={{mt: 1}}>
                            <Link underline="none"
                                  component="a"
                                  href="https://www.jetbrains.com/webstorm/"
                                  target="_blank"
                            >
                                WebStorm
                            </Link>
                        </ListItem>
                        <ListItem sx={{mt: 1}}>
                            <Link underline="none"
                                  component="a"
                                  href="https://developer.android.com/studio"
                                  target="_blank"
                            >
                                Android Studio
                            </Link>
                        </ListItem>
                        <ListItem sx={{mt: 1}}>
                            <Link underline="none"
                                  component="a"
                                  href="https://www.jetbrains.com/clion/"
                                  target="_blank"
                            >
                                CLion
                            </Link>
                        </ListItem>
                    </List>
                    <Typography variant="h5" component="div" sx={{mt: 3}}>
                        Other
                    </Typography>
                    <Divider />
                    <List>
                        <ListItem sx={{mt: 1}}>
                            <Link underline="none"
                                  component="a"
                                  href="https://github.com"
                                  target="_blank"
                            >
                                GitHub
                            </Link>
                        </ListItem>
                        <ListItem sx={{mt: 1}}>
                            <Link underline="none"
                                  component="a"
                                  href="https://discord.gg/6BXG2YvAGH"
                                  target="_blank"
                            >
                                ASDV Studies Discord
                            </Link>
                        </ListItem>
                    </List>
                </List>
            </List>
        </Box>
    );
}
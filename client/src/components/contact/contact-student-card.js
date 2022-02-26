import { Box, Card, CardContent, CardActionArea, CardMedia, IconButton, Typography, Grid } from '@mui/material';

function ContactStudentCard() {
    return(
        <Box
            sx={{
                display: 'flex',
                flexDirection:'row',
                border: '1px dashed grey',
                align: "center",
                mx: 2,
                mt: 2,
                mb: 40,
                p: 1,
            }}
        >
            <Grid container spacing={2} justifyContent="center">
                <Grid item xs={2}>
                    <Card>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="350"
                                width="350"
                                image="/img/nat.jpg"
                                alt="1"
                            />
                            <CardContent>
                                <Typography variant="body1" color="black">
                                    Phone: 098 0170180 <br />
                                    Email: 6410110154@psu.ac.th
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>

                <Grid item xs={2}>
                    <Card>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="350"
                                width="350"
                                image="/img/bat.png"
                                alt="2"
                            />
                            <CardContent>
                                <Typography variant="body1" color="black">
                                    Phone: 091 8618713 <br />
                                    Email: 6410110204@psu.ac.th
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>

                <Grid item xs={2}>
                    <Card>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="350"
                                width="350"
                                image="/img/pea.png"
                                alt="3"
                            />
                            <CardContent>
                                <Typography variant="body1" color="black">
                                    Phone: 099 2310215 <br />
                                    Email: 6410110238@psu.ac.th
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>

                <Grid item xs={2}>
                    <Card>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="350"
                                width="350"
                                image="/img/toey.jpg"
                                alt="4"
                            />
                            <CardContent>
                                <Typography variant="body1" color="black">
                                    Phone: 061 1855153 <br />
                                    Email: 6410110294@psu.ac.th
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>

                <Grid item xs={2}>
                    <Card>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="350"
                                width="350"
                                image="/img/trai.jpg"
                                alt="5"
                            />
                            <CardContent>
                                <Typography variant="body1" color="black">
                                    Phone: 062 3302875 <br />
                                    Email: 6410110384@psu.ac.th
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>

            </Grid>

        </Box>
    )
};

export default ContactStudentCard
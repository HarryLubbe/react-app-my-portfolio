import React from 'react';
import Navbar from "./Navbar";
import {
    Box,
    Grid,
    Card,
    CardActionArea,
    CardActions,
    CardMedia,
    Button,
    Typography, CardContent
} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import project1 from "../images/react.png";
import project2 from "../images/aboutmeimage.jpg";


const useStyles = makeStyles({
    cardContainer: {
        maxWidth: 345,
        margin: "5rem auto"
    }
});

const Portfolio = () => {
    const classes = useStyles();
    return (
        <Box component="div" className={classes.mainContainer}>
            <Navbar/>
            <Grid container justify="center">
                {/*This is my test for object in portfolio*/}               
                <Grid item xs={12} sm={8} md={6}>
                    <Card className={classes.cardContainer}>
                        <CardActionArea>
                            <CardMedia 
                                component="img" 
                                alt="Test1" 
                                height="140" 
                                image={project1}>          
                            </CardMedia>
                            <CardContent>
                                <Typography gutterBottom variant="h5">
                                    About my app
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    I used React, a javascript library for building user interfaces, to build my website. Alongside that i utilised the Material-UI API for my components giving it a sleek, proffesional feel. In my homepage I utilised the react particle-api-js lirbrary to incorporate particle effects. For my contacts page i used the email.js api which automatcially sends the filled in message to my inbox when contact me is selected. Lastly, I hosted my website on Azure hosting as well as built an Azure-Doc-Pipeline.
                                </Typography>
                            </CardContent>
                            <CardActions>
                            </CardActions>
                        </CardActionArea>
                 </Card>
                </Grid>
                 {/*This is my test 2 for object in portfolio*/}               
                 <Grid item xs={12} sm={8} md={6}>
                    <Card className={classes.cardContainer}>
                        <CardActionArea>
                            <CardMedia 
                                component="img" 
                                alt="Test2" 
                                height="140" 
                                image={project2}>          
                            </CardMedia>
                            <CardContent>
                                <Typography gutterBottom variant="h5">
                                    About me
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    My full name is Harry-Carl Lubbe Siska, I was born 8th of April 1999 in Broward County, Florida, U.S.A. After moving to South Africa in 2010 I then began my secondary education at Hermanus Highschool Western-Cape and gained my Matric certificate. After that I immediately began my tertiary studying at North-West University. My hobbies include programming, computer building, gaming and skateboarding. In my field, I am most passionate about web development, software development and software security. My end goal is to become a developer and continue doing what I love as a job.
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                 </Card>
                </Grid>
            </Grid>
        </Box>
    )
};

export default Portfolio

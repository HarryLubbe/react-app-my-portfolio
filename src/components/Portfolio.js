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
import project1 from "../images/PinClipart.com_cute-penguin-clipart_421066.png";
import project2 from "../images/ComputerGuy.png";


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
                                    Test 1
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Do do aute aliquip ipsum consequat sit cupidatat magna. Nostrud labore voluptate enim occaecat adipisicing laboris cupidatat aliquip. Aliqua culpa veniam non labore elit excepteur commodo. Non nostrud tempor ad anim. Sit exercitation cupidatat magna velit fugiat quis. Ullamco enim sunt commodo commodo proident irure irure voluptate voluptate mollit minim. Velit Lorem sunt elit id occaecat cillum officia duis elit nulla sit.
                                </Typography>
                            </CardContent>
                            <CardActions>
                                 <Button size="small" color="primary">
                                     Share
                                </Button>
                                <Button size="small" color="primary">
                                    Live Demo
                                </Button>
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
                                    Test 2
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Do do aute aliquip ipsum consequat sit cupidatat magna. Nostrud labore voluptate enim occaecat adipisicing laboris cupidatat aliquip. Aliqua culpa veniam non labore elit excepteur commodo. Non nostrud tempor ad anim. Sit exercitation cupidatat magna velit fugiat quis. Ullamco enim sunt commodo commodo proident irure irure voluptate voluptate mollit minim. Velit Lorem sunt elit id occaecat cillum officia duis elit nulla sit.
                                </Typography>
                            </CardContent>
                            <CardActions>
                                 <Button size="small" color="primary">
                                     Share
                                </Button>
                                <Button size="small" color="primary">
                                    Live Demo
                                </Button>
                            </CardActions>
                        </CardActionArea>
                 </Card>
                </Grid>
            </Grid>
        </Box>
    )
};

export default Portfolio

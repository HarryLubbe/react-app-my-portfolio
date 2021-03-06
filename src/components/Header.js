import React from 'react'
import {
    Typography,
    Avatar,
    Grid,
    Box
} from "@material-ui/core"
import avatar from "../avatar.png"
import Typed from "react-typed";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(theme=> ({
    avatar: {
        width: theme.spacing(15),
        height: theme.spacing(15),
        margin: theme.spacing(1),
    },
    title: {
        color: "white"
    },
    subtitle: {
        color: "#66A5AD",
        marginBottokm: "3rem"
    },
    typedContainer: {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "100vw",
        textAlign: "center",
        zIndex: 1
    }
}));

const Header = () => {
    const classes = useStyles()
    return (
        <Box  className={classes.typedContainer}>
            <Grid container justify="center">
            <Avatar className={classes.avatar} src={avatar} alt="Harry Lubbe"/>
            </Grid>
            <Typography className={classes.title} variant="h4">
                <Typed strings={["Harry Lubbe"]} typeSpeed={40}/>
            </Typography>
            <br/>
            <Typography className={classes.subtitle} variant="h5">
                <Typed strings={["Student", "Programmer", "Tech Fanatic"]} typeSpeed={40} backSpeed={60} loop/>
            </Typography>
        </Box>
    );
}

export default Header

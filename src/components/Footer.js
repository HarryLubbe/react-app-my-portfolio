import React from 'react';
import {makeStyles} from "@material-ui/styles";
import {BottomNavigation, BottomNavigationAction} from "@material-ui/core";
import Facebook from "@material-ui/icons/Facebook";
import GitHub from "@material-ui/icons/GitHub";
import LinkedIn from "@material-ui/icons/LinkedIn";

//GitHub Facebook 

const useStyle = makeStyles({
    root: {
        "&.MuiBottomNavigationAction-root": {
            minWidth: 0,
            maxWidth: 250,
        }
    }, 
});

const Footer = () => {

    const classes = makeStyles()

    return (
        <BottomNavigation width="auto" style={{background: "#222"}}>
            <BottomNavigationAction 
                className={classes.root}
                style={{padding:0}} 
                icon={<Facebook />}/>
            <BottomNavigationAction className={classes.root} style={{padding:0}} icon={<GitHub />}/>
            <BottomNavigationAction className={classes.root} style={{padding:0}} icon={<LinkedIn />}/>
        </BottomNavigation>
    );
};  

export default Footer;

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
            <a href="https://www.facebook.com/profile.php?id=100009016342858">
            <BottomNavigationAction 
                className={classes.root}
                style={{padding:0}} 
                icon={<Facebook />}/>
            </a>
            <a href="https://github.com/HarryLubbe">
            <BottomNavigationAction className={classes.root} style={{padding:0}} icon={<GitHub />}/>
            </a>
            <a href="https://www.linkedin.com/in/harry-lubbe-294ba61b1/8">
            <BottomNavigationAction className={classes.root} style={{padding:0}} icon={<LinkedIn />}/>
            </a>
        </BottomNavigation>
    );
};  
//https://github.com/HarryLubbe
//https://www.linkedin.com/in/harry-lubbe-294ba61b1/
export default Footer;

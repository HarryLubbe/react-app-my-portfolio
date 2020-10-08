import React, {useState} from 'react';
import {Link} from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import MobileMenuSlider from "@material-ui/core/Drawer";
import {spacing} from "@material-ui/system"
import Footer from "./Footer";
import {
    AppBar,
    Toolbar,
    ListItem,
    IconButton,
    ListItemText,
    Avatar,
    Divider,
    List,
    Typography,
    Box, ListItemIcon
} from "@material-ui/core";
import {
    ArrowBack,
    AssignmentInd,
    Home,
    Apps,
    ContactMail,
    GetApp
} from "@material-ui/icons";
import avatar from "../avatar.png";

// CSS STYLES
const useStyles = makeStyles(theme=>({
    menuSliderContainer: {
        width: 250,
        background: "#511",
        height: "100%" 
    },
    avatar: {
        display: "block",
        margin: "0.5rem auto",
        width: theme.spacing(13),
        height: theme.spacing(13)
    },
    listItem: {
       color: "tan" 
    }
}) );

const menuItems = [
    {
        listIcon: <Home/>,
        listText: "Home",
        listPath: "/"
    },
    {
        listIcon: <AssignmentInd/>,
        listText: "Resume",
        listPath: "/resume"
    },{
        listIcon: <Apps/>,
        listText: "Porfolio",
        listPath: "/portfolio"
    },{
        listIcon: <ContactMail/>,
        listText: "Contacts",
        listPath: "/contacts"
    }
]

const downloadItems = [
    {
        listIcon: <GetApp/>,
        listText: "Curriculum Vitae",
    },
    {
        listIcon: <GetApp/>,
        listText: "Matric Certificate"
    },{
        listIcon: <GetApp/>,
        listText: "Academic Report"
    }
]

const Navbar = () => { 
    const [state, setState] = useState({
        left:false
    });

    const toggleSlider = (slider, open) => () => {
        setState({ ...state, [slider]: open});
    };

    const classes = useStyles()

    const sideList = slider => (
        <Box className={classes.menuSliderContainer} component="div" onClick={toggleSlider(slider, false)}>
        <Avatar className={classes.avatar} src={avatar} alt="Harry Lubbe"/>
        <Divider/>
        <List>
            {menuItems.map((lstItem, key)=>(
            <ListItem button key={key} component={Link} to={lstItem.listPath}>
                <ListItemIcon className={classes.listItem}>{lstItem.listIcon}</ListItemIcon>
                <ListItemText 
                    className={classes.listItem}
                    primary={lstItem.listText}
                />
            </ListItem>
            ))},
            {/* <Divider/>/
            {downloadItems.map((lstItem, key)=>(
            <ListItem button key={key}>
                <ListItemIcon className={classes.listItem}>{lstItem.listIcon}</ListItemIcon>
                <ListItemText 
                    className={classes.listItem}
                    primary={lstItem.listText}
                />
            </ListItem>))}*/}
        </List>
    </Box>
    )

    return (
    <>
        <Box component='nav'>
            <AppBar position="static" style={{background: "#222"}}>
                <Toolbar>
                    <IconButton onClick={toggleSlider("left", true)}> 
                        <ArrowBack style={{color: "tomato"}}/>
                    </IconButton>
                    <Typography variant="h5" style={{color: "tan"}}>
                        Portfolio
                    </Typography>
                    <MobileMenuSlider anchor="left" open={state.left} onClose={toggleSlider("left", false)}>
                        {sideList("left")}
                        <Footer/>
                    </MobileMenuSlider>
                </Toolbar>
            </AppBar>
        </Box>
    </>
    )
}

export default Navbar

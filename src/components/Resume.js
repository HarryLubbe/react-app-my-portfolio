import React from 'react'
import {makeStyles} from "@material-ui/core/styles"
import {Typography, Box} from "@material-ui/core";
import Navbar from "./Navbar";

const useStyles = makeStyles(theme=>({
    timeLine: {
        position: "relative",
        padding: "1rem",
        margin: "0 auto",
        "&:before": {
            content: "''",
            position: "absolute",
            height: "100%",
            border: "1px solid black",
            right: "40px",
            top: 0
        },
        "&:after": {
            content: "''",
            display: "table",
            clear: "both"
        },
        [theme.breakpoints.up("md")]:{
            padding: "2rem",
            "&:before": {
                left: "calc(50% - 1px)",
                right: "auto"
            }
        }
    },
    timeLineItem: {
        padding: "1rem",
        borderBottom: "2px solid black",
        position: "relative",
        margin: "1rem 3rem 1rem 1rem",
        clear: "both",
        "&:after": {
            content: "''",
            position: "absolute"
        },
        "&:before": {
            content: "''",
            position: "absolute",
            right: "-0.625rem",
            top: "calc(50% - 5px)",
            borderStyle: "solid",
            borderColor: "#003B46 #003B46 transparent transparent",
            borderWidth: "0.625rem",
            transform: "rotate(45deg)"
        },
        [theme.breakpoints.up("md")]: {
           width: "44%",
           margin: "1rem",
           "&:nth-of-type(2n)":{
               float: "right",
               margin: "1rem",
               borderColor: "black"
           },
           "&:nth-of-type(2n):before":{
            right: "auto",
            left: "-0.625rem",
            borderColor: "transparent transparent #003B46 #003B46"
        }
        }
    },
    timeLineYear: {
        textAlign: "center",
        maxWidth: "9.375rem",
        margin: "0 3rem 0 auto",
        fontSize: "1.8rem",
        background: "purple",
        color: "white",
        lineHeight: 1,
        padding: "0.5rem 0 1rem",
        "&:before" : {
            display: "none"
        },
        [theme.breakpoints.up("md")]: {
            textAlign: "center",
            margin: "0 auto",
            "&:nth-of-type(2n)": {
                float: "none",
                margin: "0 auto"
            },
            "&:nth-of-type(2n):before": {
                display: "none"
            }
        }
    },
    heading: {
        color: "purple",
        padding: "3rem 0",
        textTransform: "uppercase"
    },
    subHeading:{
        color: "07575B",
        padding: "0",
        textTransform: "uppercase"
    }
}));

const Resume = () => {
    const classes = useStyles();
    return (
        <>
           <Navbar/>
           <Box component="header" className={classes.mainContainer}>
               <Typography variant="h4" align="center" className={classes.heading}>
                   working experience
               </Typography>
               <Box component="div" className={classes.timeLine}>
                   <Typography variant="h2" className={`${classes.timeLineYear} ${classes.timeLineItem}`}>
                       2017
                    </Typography>
                    <Box component="div" className={classes.timeLineItem}>
                        <Typography variant="h5" align="centre" className={classes.subHeading}>
                            Matriculated
                        </Typography>
                        <Typography variant="body1" align="centre" style={{color: "#66A5AD"}}>
                            Hoerskool Hermanus, Western Cape
                        </Typography>
                        <Typography variant="body1" align="centre" style={{color: "#C4DFE6"}}>
                            Obtained my national senior certificate with an average of 73. 
                            Subejcts: Afrikaans home language,
                                      Mathematics,
                                      English first additional language,
                                      Information Technology,
                                      Biology,
                                      Science,
                                      Life orientation.
                        </Typography>
                    </Box>
                    <Typography variant="h2" className={`${classes.timeLineYear} ${classes.timeLineItem}`}>
                       2018
                    </Typography>
                    <Box component="div" className={classes.timeLineItem}>
                        <Typography variant="h5" align="centre" className={classes.subHeading}>
                            Began tertiary studying
                        </Typography>
                        <Typography variant="body1" align="centre" style={{color: "#66A5AD"}}>
                            North-West University, Potchefstroom
                        </Typography>
                        <Typography variant="body1" align="centre" style={{color: "#C4DFE6"}}>
                            Began studying Bsc in Information Technology. Gained proffeciency in Python, C++ and C#.
                        </Typography>
                    </Box>
                    <Typography variant="h2" className={`${classes.timeLineYear} ${classes.timeLineItem}`}>
                       2019
                    </Typography>
                    <Box component="div" className={classes.timeLineItem}>
                        <Typography variant="h5" align="centre" className={classes.subHeading}>
                            Web design and second year
                        </Typography>
                        <Typography variant="body1" align="centre" style={{color: "#66A5AD"}}>
                            North-West University, Potcheftroom
                        </Typography>
                        <Typography variant="body1" align="centre" style={{color: "#C4DFE6"}}>
                            Continued with second year of studying, also participated in a Web Development internship at Matogen Co. situated in Potchefstroom where I learned how to use javascript with node.js, Angular and MongoDB. Gained proffeciency in Java.
                        </Typography>
                    </Box>
                    <Typography variant="h2" className={`${classes.timeLineYear} ${classes.timeLineItem}`}>
                       2020
                    </Typography>
                    <Box component="div" className={classes.timeLineItem}>
                        <Typography variant="h5" align="centre" className={classes.subHeading}>
                           (Current)Final year of studying 
                        </Typography>
                        <Typography variant="body1" align="centre" style={{color: "#66A5AD"}}>
                            North-West University, Potchefstroom
                        </Typography>
                        <Typography variant="body1" align="centre" style={{color: "#C4DFE6"}}>
                            Currently completing the final year of my degree.
                        </Typography>
                    </Box>
               </Box>
           </Box>
        </>
    );
};

export default Resume

import React from 'react';
import {makeStyles, withStyles} from "@material-ui/core/styles";
import {TextField, Typography, Button, Grid, Box} from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
import Navbar  from "./Navbar";
import emailjs from "emailjs-com";

function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('gmail', 'template_shhganl', e.target, 'user_IynL3oLrf90irPO3YPljw')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
}

const useStyles = makeStyles(theme=>({
    form: {
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        position: "absolute",
    },
    button: {
        marginTop: "1rem",
        color: "white",
        borderColor: "white"
    }
}));

const InputField = withStyles({
    root: {
        "& label.Mui-focused": {
            color: "#07575B",
        },
        "& label": {
           color: "#66A5AD" 
        },
        "& .MuiOutlinedInput-root": {
            "& fieldset": {
                borderColor: "#66A5AD",
            },
            "&:hover fieldset": {
                borderColor: "#66A5AD",
            },
            "&.Mui-focused fieldset": {
                borderColor: "white",
            }
        },
    },
})(TextField);

const Contacts = () => {

    const classes = useStyles()

    return (
        <Box component="div">
            <Navbar/>
            <form onSubmit={sendEmail}>
            <Grid container justify="center">
                <Box component="form" className={classes.form}>
                    <Typography variant="h5" style={{color: "white", textAlign: "center", textTransform: "uppercase"}}>
                        contact me here
                    </Typography>
                    <InputField
                        fullWidth={true}
                        label="Name"
                        variant="outlined"
                        inputProps={{style:{color: "white"}}}
                        margin="dense"
                        size="medium"
                        name="name"
                    />
                    <br/>
                    <InputField
                        fullWidth={true}
                        label="Email"
                        variant="outlined"
                        inputProps={{style:{color: "white"}}}
                        margin="dense"
                        size="medium"
                        name="email"
                    />
                    <br/>
                    <InputField
                        fullWidth={true}
                        label="Subject"
                        variant="outlined"
                        inputProps={{style:{color: "white"}}}
                        margin="dense"
                        size="medium"
                        name="subject"
                    />
                    <br/>
                    <InputField
                        fullWidth={true}
                        label="Message"
                        variant="outlined"
                        inputProps={{style:{color: "white"}}}
                        margin="dense"
                        size="medium"
                        name="message"
                    />
                    <br/>
                    <Button type="submit" className={classes.button} variant="outlined" fullWidth={true} endIcon={<SendIcon/>}>
                        contact me
                    </Button>
                </Box>
            </Grid>
            </form>
        </Box>
    );
};

export default Contacts

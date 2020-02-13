import React from 'react';
import { Toolbar,Typography,IconButton, AppBar,makeStyles } from '@material-ui/core'
import { blue } from '@material-ui/core/colors';
const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    appBar:{
        // background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)'
        background: blue[500],
        padding:"5px",
        marginBottom:"25px"
    }
  }));
const Header = () => {
    const classes=useStyles();
    return (
        <AppBar position="sticky" className={classes.appBar}>
      <Toolbar variant="dense">
      {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
        &#9776;
      </IconButton> */}
      <Typography variant="h6" color="inherit">
        Mashhad Weather
      </Typography>
    </Toolbar>
  </AppBar>
      );
}
 
export default Header;
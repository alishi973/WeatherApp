import React, { Fragment } from 'react';
import { Grid,Paper,makeStyles,Container, CircularProgress,List,ListItem,ListItemText,ListItemAvatar,Avatar } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';
const useStyles = makeStyles(theme => ({
    paper: {
      padding: theme.spacing(2),
      height:"120px",
      textAlign: 'center',
      color: theme.palette.text.secondary,
      borderRadius:"5px",
      display:"flex",
      alignItems:"center",
      justifyContent:"space-between"
    },
    margin:{
        margin:"0 auto",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        textAlign:"center"
    },
    listContainer: {
        width: '100%',
        // backgroundColor: "#fafafafa",
        margin:"0 auto"
      },
    weatherItem: {
        boxShadow:"0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)",
        borderRadius:"5px",
        marginBottom:"15px",
        backgroundColor: theme.palette.background.paper,
        
      },
      skeleton:{
          height:"85px",
          display:"flex",
          width:"100%",
          justifyContent:"space-evenly",
          alignItems:"center",
          flexDirection:"row",
          padding:"0px 10px",
          marginBottom:"15px",
      },
      avatarXl:{
        width: theme.spacing(10),
        height: theme.spacing(10),
        backgroundImage:" linear-gradient(-270deg,lightgray, #e6e6e6)"
      },
      GeneralCardContainer:{
          display:'flex',
          flexDirection:"column",
          alignItems:"flex-end",
          justifyContent:"space-evenly"
      }

  }));





const GridData = (props) => {
    const classes=useStyles();

    let GeneralCard=(GeneralData)=>{
        if(GeneralData!=null){
            return(
                <Grid item xs={12}>
                    <Paper className={classes.paper}>
                        <div>
                            <Avatar className={classes.avatarXl}>
                                <img src={ process.env.REACT_APP_BASE_URL_IMG.replace("{CODE}",GeneralData.data.weather[0].icon)} style={{height:"100%"}} />
                            </Avatar>
                        </div>
                        <div className={classes.GeneralCardContainer}>
                            <h1 style={{marginTop:"0",marginBottom:"0"}}>Mashhad</h1>
                            <h3 style={{marginTop:"0",marginBottom:"0"}}>{GeneralData.data.weather[0].main} ({GeneralData.data.main.temp}&#8451;)</h3>
                            <h4 style={{marginTop:"0",marginBottom:"0"}}>{}</h4>
                        </div>
                    </Paper>
                </Grid>
            );
        }else{
            return(
                <Grid item xs={12} className={classes.margin}>
                    <Paper style={{width:"100%",display:"flex",justifyContent:"center",alignItems:"center"}} className={classes.paper}><CircularProgress style={{color:"#57d218"}} /></Paper>
                </Grid>
            );
        }
    }

    class WeatherListItem extends React.Component{

        constructor(props){
            super(props);
        }
    
        render(){
            return (
                <ListItem className={classes.weatherItem}>
                    <ListItemAvatar>
                    <Avatar style={{border: 0, objectFit: 'cover',backgroundColor:"#e4e4e4"}}>
                        {/* <ImageIcon /> */}
                        <img src={ process.env.REACT_APP_BASE_URL_IMG.replace("{CODE}",this.props.min_max.weather[0].icon)} style={{height:"100%"}} />
                    </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary={`Min:${this.props.min_max.main.temp_min} & Max:${this.props.min_max.main.temp_min} And Sky Is ${this.props.min_max.weather[0].main}(${this.props.min_max.weather[0].description})`} secondary={this.props.date} />
                </ListItem>
            )
        }
    }

    let skelet=()=>{
        return (
            <Fragment>
                <Skeleton variant="rect" animation="pulse" className={classes.skeleton}>
                    <ListItemAvatar>
                    <Avatar>
                        {/* <ImageIcon /> */}
                        <Skeleton variant="circle" />
                    </Avatar>
                    </ListItemAvatar>
                    <div style={{flexBasis:"90%"}} >
                        <Skeleton  variant="text" />
                        <Skeleton  variant="text" />
                    </div>
                </Skeleton>
                <Skeleton variant="rect" animation="wave" className={classes.skeleton}>
                    <ListItemAvatar>
                    <Avatar>
                        {/* <ImageIcon /> */}
                        <Skeleton variant="circle" />
                    </Avatar>
                    </ListItemAvatar>
                    {/* <div style={{flexBasis:"85%"}} > */}
                    <div style={{flexBasis:"90%"}} >
                        <Skeleton  variant="text" />
                        <Skeleton  variant="text" />
                    </div>
                </Skeleton>
                <Skeleton variant="rect" className={classes.skeleton}>
                    <ListItemAvatar>
                    <Avatar>
                        {/* <ImageIcon /> */}
                        <Skeleton variant="circle" />
                    </Avatar>
                    </ListItemAvatar>
                    <div style={{flexBasis:"90%"}} >
                        <Skeleton  variant="text" />
                        <Skeleton  variant="text" />
                    </div>
                </Skeleton>
                <Skeleton variant="rect" animation="wave" className={classes.skeleton}>
                    <ListItemAvatar>
                    <Avatar>
                        {/* <ImageIcon /> */}
                        <Skeleton variant="circle" />
                    </Avatar>
                    </ListItemAvatar>
                    <div style={{flexBasis:"90%"}} >
                        <Skeleton  variant="text" />
                        <Skeleton  variant="text" />
                    </div>
                </Skeleton>
            
            </Fragment>
        );
    }

    return (  
        <div>
        <Container>
        <Grid container spacing={3}>

            {GeneralCard(props.GeneralData)}
    
        <Grid style={{maxHeight:"66vh" , overflow:"hidden scroll"}} item xs={12}>
            <List className={classes.listContainer}>
                {
                    props.ForeCast!=null?props.ForeCast.data.list.map((data,index)=>{
                        return (<WeatherListItem key={index} min_max={data} date={data.dt_txt} />)
                    }):skelet()
                }
                {/* <WeatherListItem min_max={"15 10"} date={new Date().toLocaleString()} /> */}
              </List>
        </Grid>
      </Grid>
        </Container>
    </div>
    );
}
 
export default GridData;
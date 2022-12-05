import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import Fab from '@material-ui/core/Fab';
import SendIcon from '@material-ui/icons/Send';
import HeaderLayout from '../../common/header';
import { current } from '@reduxjs/toolkit';
import { Button } from '@mui/material';
import { useRef, useState, useEffect } from 'react';
import chats from '../../__mocks__/chats';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  chatSection: {
    width: '100%',
    height: '80vh'
  },
  headBG: {
      backgroundColor: '#e0e0e0'
  },
  borderRight500: {
      borderRight: '1px solid #e0e0e0'
  },
  messageArea: {
    height: '70vh',
    overflowY: 'auto'
  }
});

const currUser =  localStorage.getItem('currentuser')
const username = JSON.parse(localStorage.getItem('users'))
const chat = JSON.parse(localStorage.getItem('chats'))
const chatsNow = JSON.parse(localStorage.getItem('chatsNow'))

// if(currUser == 'chrisjohnson'){
//     console.log(username.chrisjohnson.name)
// }
// console.log(chat["abbysmith,chrisjohnson"][0].message)
 //console.log(chat["abbysmith,chrisjohnson"])
 
// const [value, setValue] = useState('')

// console.log(text)


const Chat = (props) => {
    const [text, setText] = useState(" ")
    const handleChange = (event) => {
        setText({
          ...text,
          message: event.target.value,
        });
      };

    const onSubmit = () => {
      //  let data = chatsNow["abbysmith,chrisjohnson"]

    let jsonData =  [
      {
        sender: 'chrisjohnson',
        receiver: 'abbysmith',
        message: chatsNow[0].message,
      },
    ];

    jsonData.push({
        sender: 'chrisjohnson',
        receiver: 'abbysmith',
        message: text.message,
    })

    // chatsNow["abbysmith,chrisjohnson"] = jsonData
    
    //console.log(JSON.stringify(jsonData))
    
    localStorage.setItem('chatsNow', JSON.stringify(jsonData));
    // window.location.reload();

}


  const classes = useStyles();

  return (
      <HeaderLayout>
        <Grid container>
            <Grid item xs={12} >
                <Typography variant="h4" className="header-message" sx={{p: 5, m: 5}}>Chat Room</Typography>
            </Grid>
        </Grid>
        <Grid container component={Paper} className={classes.chatSection}>
            <Grid item xs={3} className={classes.borderRight500}>
                <List>
                    <ListItem button key="RemySharp">
                        <ListItemIcon>
                        <Avatar alt="Remy Sharp" src="https://material-ui.com/static/images/avatar/1.jpg" />
                        </ListItemIcon>
                        <ListItemText primary="Chris Johnson"></ListItemText>
                    </ListItem>
                </List>
                <Divider />
                {/* <Grid item xs={12} style={{padding: '10px'}}>
                    <TextField id="outlined-basic-email" label="Search" variant="outlined" fullWidth />
                </Grid> */}
                <Divider />
                <List>
                    <ListItem button key="RemySharp">
                        <ListItemIcon>
                            <Avatar alt="Abby Smith" src="https://material-ui.com/static/images/avatar/3.jpg" />
                        </ListItemIcon>
                        <ListItemText primary="Abby Smith">Abby Smith</ListItemText>
                        <ListItemText secondary="online" align="right"></ListItemText>
                    </ListItem>
                    <ListItem button key="CindyBaker">
                        <ListItemIcon>
                            <Avatar alt="Cindy Baker" src="https://material-ui.com/static/images/avatar/2.jpg" />
                        </ListItemIcon>
                        <ListItemText primary="Cindy Baker">Cindy Baker</ListItemText>
                    </ListItem>
                </List>
            </Grid>
            <Grid item xs={9}>
                <List className={classes.messageArea}>
                    <ListItem key="1">
                        <Grid container>
                            <Grid item xs={12}>
                            {Object.keys(chat["abbysmith,chrisjohnson"]).map((index) => {
                            return (
                             <ListItemText 
                             align="left" 
                             primary = {chat["abbysmith,chrisjohnson"][index].message}>
                             </ListItemText>
                                 );
                               })} 
                            </Grid>
                            <Grid item xs={12}>
                                <ListItemText align="left" secondary="09:30"></ListItemText>
                            </Grid>


                            <Grid item xs={12}>
                            {Object.keys(chatsNow).map((index) => {
                            return (
                             <ListItemText 
                             align="right" 
                             primary = {chatsNow[index].message}>
                             </ListItemText>
                                 );
                               })} 
                            </Grid>
                            <Grid item xs={12}>
                                <ListItemText align="right" secondary="09:30"></ListItemText>
                            </Grid>
                            
                        </Grid>
                    </ListItem>

                    {/* <ListItem key="2">
                        <Grid container>
                            <Grid item xs={12}>
                                <ListItemText align="left" primary="Hey, Iam Good! What about you ?"></ListItemText>
                            </Grid>
                            <Grid item xs={12}>
                                <ListItemText align="left" secondary="09:31"></ListItemText>
                            </Grid>
                        </Grid>
                    </ListItem>
                    <ListItem key="3">
                        <Grid container>
                            <Grid item xs={12}>
                                <ListItemText align="right" primary="Cool. i am good, let's catch up!"></ListItemText>
                            </Grid>
                            <Grid item xs={12}>
                                <ListItemText align="right" secondary="10:30"></ListItemText>
                            </Grid>
                        </Grid>
                    </ListItem> */}
                </List>
                <Divider />
                <Grid container style={{padding: '20px'}}>
                    <Grid item xs={11}>
                        <TextField id="outlined-basic-email" onChange={handleChange} label="Type Something" fullWidth />
                    </Grid>
                    
                    <Grid xs={1} align="right">
                        <Button onClick={onSubmit}>
                       {/* <Fab color="primary" aria-label="add"><SendIcon /></Fab> */}
                       Send
                       </Button>
                       </Grid>
                    </Grid>
                </Grid>
            </Grid>
      </HeaderLayout>
  );
}

export default Chat;
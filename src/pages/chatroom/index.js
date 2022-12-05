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
import UserCircleIcon from '../../icons/user-circle';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  chatSection: {
    width: '100%',
    height: '80vh',
  },
  headBG: {
    backgroundColor: '#e0e0e0',
  },
  borderRight500: {
    borderRight: '1px solid #e0e0e0',
  },
  messageArea: {
    height: '70vh',
    overflowY: 'auto',
  },
});


const Chat = (props) => {
    const currUser = localStorage.getItem('currentuser')
    const username = JSON.parse(localStorage.getItem('users'))[currUser].name
    
    var chats = JSON.parse(localStorage.getItem('chats'))
    
    var receiver = "abbysmith"
    if (currUser === "abbysmith") {
        receiver = "chrisjohnson";
    }
    const receiverUsername = JSON.parse(localStorage.getItem('users'))[receiver].name
    const [text, setText] = useState(" ")
    const handleChange = (event) => {
        setText({
          ...text,
          message: event.target.value,
        });
      };

    const onSubmit = () => {
        const date = new Date();
        const currTime = date.getHours() + ':' + date.getMinutes()
        chats["abbysmith,chrisjohnson"].push({
            sender: currUser,
            receiver: receiver,
            message: text.message,
            time: currTime,
        })
        localStorage.setItem('chats', JSON.stringify(chats));
        
        let cur = JSON.parse(localStorage.getItem('users'));
        cur[receiver]['notification'] = true;
        localStorage.setItem('users', JSON.stringify(cur))
        window.location.reload();
    }

  const classes = useStyles();

  return (
      <HeaderLayout>
        <Grid container sx={{mt:5}} >
            <Grid item xs={12} >
                <Typography variant="h4" className="header-message" sx={{p: 5, m: 5}}>Chat Room</Typography>
            </Grid>
        </Grid>
        <Grid container component={Paper} className={classes.chatSection}>
            <Grid item xs={3} className={classes.borderRight500}>
                <List>
                    <ListItem button key={currUser}>
                        <ListItemIcon>
                        <Avatar alt={currUser} src={"/static/images/avatars/"+currUser+".png"} />
                        </ListItemIcon>
                        <ListItemText primary={username}></ListItemText>
                    </ListItem>
                </List>
                <Divider />
                <Divider />
                <List>
                <ListItem button key={receiver}>
                        <ListItemIcon>
                        <Avatar alt={receiver} src={"/static/images/avatars/"+receiver+".png"} />
                        </ListItemIcon>
                        <ListItemText primary={receiverUsername}></ListItemText>
                    </ListItem>
                </List>
            </Grid>
            <Grid item xs={9}>
                <List className={classes.messageArea}>
                    <ListItem key="1">
                        <Grid container>
                            <Grid item xs={12}>
                            {Object.keys(chats["abbysmith,chrisjohnson"]).map((index) => {
                                return (
                                <Grid container spacing={2}>
                                    {chats["abbysmith,chrisjohnson"][index].receiver === currUser && 
                                        <Grid item xs={1}>
                                            <Avatar
                                                sx={{
                                                    cursor: 'pointer',
                                                    height: 40,
                                                    width: 40,
                                                    ml: 1,
                                                }}
                                                src={'/static/images/avatars/' + chats["abbysmith,chrisjohnson"][index].sender + '.png'}
                                                >
                                                <UserCircleIcon fontSize="small" />
                                            </Avatar>
                                        </Grid>
                                    }
                                    <Grid item xs={11}>
                                        <ListItemText 
                                            align={chats["abbysmith,chrisjohnson"][index].sender === currUser? "right":"left"} 
                                            primary = {chats["abbysmith,chrisjohnson"][index].message}>
                                        </ListItemText>
                                        <ListItemText align={chats["abbysmith,chrisjohnson"][index].sender === currUser? "right":"left"} 
                                            primary = {chats["abbysmith,chrisjohnson"][index].time}>
                                        </ListItemText>
                                    </Grid>
                                    {chats["abbysmith,chrisjohnson"][index].sender === currUser && 
                                    <Grid item xs={1}>
                                        <Avatar
                                            sx={{
                                                cursor: 'pointer',
                                                height: 40,
                                                width: 40,
                                                ml: 1,
                                            }}
                                            src={'/static/images/avatars/' + chats["abbysmith,chrisjohnson"][index].sender + '.png'}
                                            >
                                            <UserCircleIcon fontSize="small" />
                                        </Avatar>
                                    </Grid>
                                    }
                                </Grid>
                            );
                            })} 
                            </Grid>
                        </Grid>
                    </ListItem>
                </List>
                <Divider />
                <Grid container style={{padding: '20px'}}>
                    <Grid item xs={11}>
                        <TextField id="outlined-basic-email" onChange={handleChange} label="Type Something" fullWidth />
                    </Grid>
                    
                    <Grid xs={1} align="right">
                        <Button onClick={onSubmit}>
                       Send
                       </Button>
                       </Grid>
                    </Grid>
                </Grid>
              </Grid>
    </HeaderLayout>
  );
};

export default Chat;

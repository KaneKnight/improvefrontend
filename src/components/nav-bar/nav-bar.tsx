import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Image from 'next/image'

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
    appBar: {
        backgroundColor: 'white',
    },
    root: {
        flexGrow: 1,
    },
        menuButton: {
        marginRight: theme.spacing(2),
    },
        title: {
        flexGrow: 1,
    },
}));

export const NavBar = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar} position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <Image src='/improve.png' alt="fireSpot" width={200} height={70}/>
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}
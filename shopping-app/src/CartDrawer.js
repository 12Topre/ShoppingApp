import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Drawer, List, ListItem, ListItemText, Divider, IconButton } from '@material-ui/core';
import { ChevronLeft, Delete } from '@material-ui/icons';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  listItem: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
}));

const CartDrawer = ({ cart, removeFromCart, open, onClose }) => {
  const classes = useStyles();

  return (
    <Drawer className={classes.drawer} classes={{ paper: classes.drawerPaper }} anchor="right" open={open}

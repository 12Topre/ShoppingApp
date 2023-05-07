import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper, Typography, Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const InventoryList = ({ inventory, addToCart }) => {
  const classes = useStyles();

  return (
    <Grid container spacing={3}>
      {inventory.map((item) => (
        <Grid item xs={12} sm={6} md={4} key={item.id}>
          <Paper className={classes.paper}>
            <Typography variant="h6" gutterBottom>
              {item.name}
            </Typography>
            <Typography variant="body1" gutterBottom>
              {item.description}
            </Typography>
            <Typography variant="h6" gutterBottom>
              ${item.price}
            </Typography>
            <Button variant="contained" color="primary" onClick={() => addToCart(item)}>
              Add to Cart
            </Button>
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
};

export default InventoryList;
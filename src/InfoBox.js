import React from "react";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import './infobox.css';

export const InfoBox = ({title,cases,total}) => {
  return (

    <div className='infoBox'>
    
      <Paper elevation={3}>
        <CardContent>
          <Typography
            color="textSecondary"
            gutterBottom
          >
            {title}
          </Typography>
          
          <h2>{cases}</h2>
          <Typography
            color="textSecondary"
        
          >
            {total} total
          </Typography>
        
        
        </CardContent>
        </Paper>
    
    </div>
  );
};

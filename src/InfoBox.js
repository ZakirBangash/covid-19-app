import React from "react";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import './infobox.css';

export const InfoBox = ({title,cases,isRed,active,total,...props}) => {
  console.log(active)
  return (

    <div 
      onClick={props.onClick}
      className={`infoBox ${active && 'infoBox--selected'}
      ${
        isRed && "infoBox--red"}
      `}
    
      >
    
      <Paper elevation={3}>
        <CardContent>
          <Typography
            color="textSecondary"
            gutterBottom
          >
            {title}
          </Typography>
          
          <h2 className="infoBox__cases">{cases}</h2>
          <Typography
            color="textSecondary"
            className="infoBox__total"
          >
            {total} total
          </Typography>
        
        
        </CardContent>
        </Paper>
    
    </div>
  );
};

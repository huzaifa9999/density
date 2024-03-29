import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

import Rating from '@mui/material/Rating';

export default function ActionAreaCard(props) {
  return (
 
    <>
    <Card sx={{ Maxwidth: 350,
    height:300,
    gap:6,
background:"black"     }}>
      <CardActionArea
      sx={{minWidth:500,
    height:300,
    color:"black"}}
    className='border-2 border-white'
    >
        <CardContent className='border-2 border-white' sx={{padding:1,
        margin:3
        }}>
          <Typography gutterBottom variant="h3" color="white">
         {props.name}
          </Typography>
          <Typography variant="h5" color="white">
          {props.title}
          </Typography>
        </CardContent>
      </CardActionArea>
 
    
    </Card>
    <Rating name="half-rating-read" Value={4.5} precision={0.5} readOnly />
    </>

  );
}

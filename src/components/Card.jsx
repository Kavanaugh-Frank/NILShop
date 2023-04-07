import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import style from "../styles/mediaCard.module.css"

import messiHeadShot from "../photos/messi-headshot.webp";

export default function MediaCard() {
  return (
    <Card 
    className={`${style.mediaCard}`}
    sx={{ 
        maxWidth:700,
        boxShadow:20,
    }}
    >
      <CardMedia
        sx={{ 
            height: 350 
        }}
        image={messiHeadShot}
        title="Your Name"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" sx={{
            textAlign: "center",
        }}>
          Your Name
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure porro possimus repellendus nostrum veniam eos rem optio a deleniti harum alias similique magnam ipsam, placeat architecto culpa sint unde dolorem.
        </Typography>
      </CardContent>
      <CardActions sx={{
        display:"flex",
        justifyContent:"center",
        
      }}>
        <Button
            size='small'
            onClick={() => {
                alert('clicked');
            }}
            sx={{color:"black"}}
        >
            Button
        </Button>
        <Button 
            size="small"
            sx={{color:"black"}}
        >
            Button
        </Button>
      </CardActions>
    </Card>
  );
}
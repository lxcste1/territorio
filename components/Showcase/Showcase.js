import React from 'react'

import { Grid } from '@mui/material';
import Card from '@mui/material/Card';
import { CardActionArea } from '@mui/material';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Divider } from '@mui/material';

import AccessTimeIcon from '@mui/icons-material/AccessTime';

export default function Showcase({ data }) {

  return (
    <>
      <Card sx={{ width: 315, margin:'1rem', border:'2px solid #C1AC99', borderRadius:'0px', boxShadow:'unset' }}>
        <CardActionArea href={`/servicios/${encodeURIComponent(data.slug)}`} sx={{":hover":{backgroundColor:'#FFF3E3'}}}>
          <CardMedia
            sx={{ height: 315 }}
            image={data.image}
            title={data.title}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" sx={{minHeight:'65px', display:'flex', justifyContent:'center', alignItems:'center'}}>
              {data.title}
            </Typography>
            <Grid container sx={{justifyContent:'center', fontSize:'13px', alignItems:'center', lineHeight:'0', marginBottom:'1rem'}}>
              <Grid item sx={{fontWeight:'700', marginRight:'5px'}}>{data.price}</Grid><Grid item> | <AccessTimeIcon fontSize="small"/> {data.variation}</Grid>
            </Grid>
            <Divider variant="middle" sx={{width:'50%', margin:'0 auto', border:'1px solid #C1AC99', marginBottom:'1rem'}}/>
            <Typography>
              {data.details}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  )
}

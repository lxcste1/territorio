import React from 'react'
import { Container, Grid, Button } from '@mui/material'

import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

export default function Footer() {

    const social = [
        {
            title:'Whatsapp',
            url: '/whatsapp-api-test',
            icon: <WhatsAppIcon sx={{color:'#ffffff'}} />
        },
        {
            title:'Instagram',
            url: '/instagram-api-test',
            icon: <InstagramIcon sx={{color:'#ffffff'}} />
        },
                {
            title:'Gmail',
            url: '/mail-api-test',
            icon: <MailOutlineIcon sx={{color:'#ffffff'}} />
        }
    ];

    const pages = [{name:'Servicios', slug:'/servicios'}, {name:'Sobre nosotros', slug:'/sobre-nosotros'}];

  return (
    <Container sx={{paddingBottom:'0.5rem'}}>
        <Grid container sx={{alignItems:'center', flexDirection:['column-reverse', 'unset']}}>
            <Grid item md={4} xs={12} sx={{textAlign:['center', 'left']}}>
                {social.map((item) => (
                    <Button 
                        key={item.title}
                        sx={{
                            borderRadius:'100px',
                            backgroundColor:'#C1AC99!important',
                            minWidth:'unset',
                            padding:'8px',
                            margin:'3px'
                        }}
                    >
                    {item.icon}
                    </Button>
                ))}
            </Grid>
            <Grid item md={4} xs={12} sx={{textAlign:'center', fontSize:'13px', marginY:['1rem', 'unset']}}>
                ® Territorio Bohemian. Todos los derechos reservados
            </Grid>
            <Grid item md={4} xs={12} sx={{textAlign:['center','end']}}>
                {pages.map((text) => (
                    <Button key={text.name} href={text.slug} sx={{color:'#0F0E08', textTransform:'inherit', borderRadius:'8px', ":hover":{backgroundColor:'#FFF3E3'}}}>
                        {text.name}
                    </Button>
                ))}
            </Grid>
        </Grid>
    </Container>
  )
}

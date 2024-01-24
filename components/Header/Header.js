import React, { useState } from 'react';

import Image from 'next/image';

import { AppBar, Drawer, Box, Toolbar, Container, Button, Divider, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';

import MenuIcon from '@mui/icons-material/Menu';

const pages = ['Servicios', 'Sobre nosotros'];

export default function Header() {
      const [state, setState] = React.useState({right: false});
    
  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

    const list = (anchor) => (
        <Box
        sx={{ width: 250 }}
        role="presentation"
        onClick={toggleDrawer(anchor, false)}
        onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                {pages.map((text) => (
                <ListItem key={text} disablePadding>
                    <ListItemButton sx={{color:'#0F0E08', fontFamily:'Aleo-Regular'}}>
                        {text}
                    </ListItemButton>
                </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
         <>
            <AppBar sx={{backgroundColor:'transparent', boxShadow:'none', paddingY:'10px'}}>
                <Toolbar sx={{padding:0}}>
                    <Container sx={{color:"#0F0E08", fontWeight:"700"}}>
                        <Grid container sx={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
                            <Grid item md={9} xs={9} sx={{display:'flex', alignItems:'center'}}>
                                <Image 
                                    src={'/50x50.png'}
                                    alt='Territorio Bohemian'
                                    width={50}
                                    height={50}
                                    className='rounded-full mr-2'
                                />
                                Territorio Bohemian
                            </Grid>
                            <Grid item xs={3} sx={{display:['flex', 'none'], justifyContent:'end'}}>
                                <Button onClick={toggleDrawer("right", true)} sx={{color:'#0F0E08', minWidth:'unset', padding:'0'}}>
                                    <MenuIcon />
                                </Button>
                                <Drawer
                                    anchor={"right"}
                                    open={state["right"]}
                                    onClose={toggleDrawer("right", false)}
                                >
                                    {list("right")}
                                </Drawer>
                            </Grid>
                            <Grid item md={3} sx={{display:['none', 'block']}}>
                                    {pages.map((text) => (
                                        <Button key={text} sx={{color:'#0F0E08', fontFamily:'Aleo-Regular', textTransform:'inherit', borderRadius:'8px', ":hover":{backgroundColor:'#FFF3E3'}}}>
                                            {text}
                                        </Button>
                                    ))}
                            </Grid>
                        </Grid>
                    </Container>
                </Toolbar>
            </AppBar>
        </>
    );
}

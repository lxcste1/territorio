import React from 'react'
import Image from 'next/image';
import { Container, Grid, Typography } from '@mui/material';
import Title from '@/components/Title/Title';

export default function AboutUs() {


  return (
    <Container sx={{paddingTop:'7rem'}}>
      <Grid container justifyContent={'center'}>
        <Grid item md={12}>
            <Title text={'Sobre nosotros'} type={'h3'}/>
        </Grid>
        <Grid item md={12} sx={{display:'flex', justifyContent:'space-evenly', marginY:'2rem'}}>
          <Grid>
                <Image
                    src={'/200x300.svg'}
                    alt={'El árbol'}
                    width={200}
                    height={300}
                    className='md:block hidden'
                />
                <Image
                    src={'/125x190.svg'}
                    alt={'El árbol'}
                    width={125}
                    height={190}
                    className='md:hidden block'
                />                              
          </Grid>
          <Grid sx={{display:'flex', flexWrap:'wrap', flexDirection:'column',alignItems:'end', alignContent:'center', justifyContent:'center'}}>
            <Typography sx={{fontFamily:'Calligraffitti-Regular', textAlign:'end', fontSize:['14px', '25px']}}>
              &ldquo; Un árbol nos recuerda que para crecer
              <br />
              hacia lo alto, hacia lo espiritual, lo abstracto,
              <br />
              es necesario estar bien arraigado
              <br />
              en la tierra, en lo concreto, en la materia.&ldquo;
            </Typography>
            <Typography sx={{textAlign:'end', fontWeight:'700', fontSize:['11px', 'initial']}}>
              Friedrich Nietzsche, Un árbol
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  )
}

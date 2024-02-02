import React, { useState } from 'react';
import getServices from '@/service/api';

import Head from 'next/head';

import { Container, Grid, ToggleButtonGroup, ToggleButton, Typography } from '@mui/material';
import Showcase from '@/components/Showcase/Showcase';

export default function Services({ services }) {
  const [service, setService] = useState('');

  const handleChange = (event, newService) => {
    setService(newService); 
  };

  const uniqueServices = new Set();
  const filteredServices = services.filter((e) => {
    if (!uniqueServices.has(e.service)) {
      uniqueServices.add(e.service);
      return true;
    }
    return false;
  });

  const showService = services.filter((item) => item.service == service)

  return (
    <>
      <Head>
        <title>{`Territorio Bohemian | Servicios`}</title>
      </Head>
      <Container sx={{paddingTop:'7rem', textAlign:'center'}}>
        <Grid container justifyContent={'center'}>
          <Grid item md={12}>
            <Typography variant='h4'>
              ¿Que servicio querés ver?
            </Typography>
          </Grid>
          <Grid item md={12}>
            <ToggleButtonGroup
              color="primary"
              value={service}
              exclusive
              onChange={handleChange}
              aria-label="Platform"
            >
              {filteredServices.map((e, i) => (
                  <ToggleButton key={i} value={e.service} sx={{backgroundColor:'#FFF3E3 !important', margin:'1rem', border:'unset', borderRadius:'8px!important', textTransform:'inherit', fontWeight:'600', ":hover":{backgroundColor:'#C1AC99!important'}, "&.Mui-selected":{backgroundColor:'#C1AC99!important', color:'#594F46'}}}>{e.service}</ToggleButton>
              ))}
            </ToggleButtonGroup>
          </Grid>
          <Grid item md={12} sx={{display:'flex', justifyContent:['center', 'start'], flexWrap:'wrap'}}>
            {showService.length == 0 ? 
              services.map((e, i) => (
                <Showcase key={i} data={e} />
              )) : 
              showService.map((e, i) => (
                <Showcase key={i} data={e} />
              )) 
            }
          </Grid>
        </Grid>
      </Container>
    </>
  )
}

export const getStaticProps = async () => {
  try {
    const servicesPromise = getServices.list();
    const services = await servicesPromise;

    return {
      props: {
        services: Array.isArray(services) ? services : [],
      },
    };
  } catch (error) {
    console.error("Error fetching services:", error);
    return {
      props: {
        services: [],
      },
    };
  }
};

import React from 'react';
import getServices from '@/service/api';

import { Container, Grid } from '@mui/material';


export default function Services({ services }) {
  // return (
  //   <div>
  //     {services && services.length > 0 ? (
  //       <ul>
  //         {services.map((service, index) => (
  //           <li key={index}>{service}</li>
  //         ))}
  //       </ul>
  //     ) : (
  //       <p>No hay servicios disponibles.</p>
  //     )}
  //   </div>
  // );

  return (
    <Container>
      <Grid container>
        <Grid item md={12}>
        
        </Grid>
      </Grid>
    </Container>
  )

  // return <div>{JSON.stringify(services)}</div>
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

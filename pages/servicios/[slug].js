import React from 'react'

import Head from 'next/head';

import getServices from '@/service/api';
import { useRouter } from 'next/router';
import Image from 'next/image';

import { Container, Grid, Box, Typography, Divider } from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CTAButton from '@/components/CTAButton/CTAButton';

export default function Product({service}) {
    const router = useRouter();
    const product = service.filter((item) => item.slug == router.query.slug)

    return (
        <>
            {product.map((item, i) => (
                <div key={i}>
                    <Head>
                        <title>{`Territorio Bohemian | ${item.title}`}</title>
                    </Head>            
                    <Container sx={{paddingTop:'7rem', textAlign:'center'}}>
                            
                                <Grid container justifyContent={'center'}>
                                    <Grid item md={7} xs={12}>
                                        <Image 
                                            src={item.productImage}
                                            alt={item.title}
                                            width={600}
                                            height={400}
                                            priority
                                        />
                                    </Grid>
                                    <Grid item md={4} xs={12} sx={{marginY:'1rem', textAlign:'left'}}>
                                        <Box>
                                            <Typography variant='h1' sx={{fontSize:'40px', fontWeight:'700'}}>{item.title}</Typography>
                                                <Box sx={{display:'flex', marginTop:'1rem'}}>
                                                    {item.professional != 'undefined' ?
                                                        <Box sx={{marginRight:'5px'}}>
                                                            <Typography>
                                                                Profesional: {item.professional} |
                                                            </Typography> 
                                                        </Box>
                                                    : ''}    
                                                <Box>
                                                    <AccessTimeIcon /> {item.variation}
                                                </Box>
                                            </Box>                          
                                        </Box>
                                        <Divider textAlign="left" sx={{width:'50%', marginTop:'1rem', border:'1px solid #C1AC99', marginBottom:'1rem'}}/>
                                        <Box sx={{marginY:'1rem'}}>
                                            <Typography variant='h4' sx={{fontWeight:'700'}}>{item.price}</Typography>
                                        </Box>
                                        <Box sx={{marginY:'1rem'}}>
                                            <Typography>
                                                {item.details}
                                            </Typography>
                                        </Box>
                                        <Box>
                                            <CTAButton linkTo={'/test'}>Sacar turno</CTAButton>
                                        </Box>
                                    </Grid>
                                    <Grid item md={9} xs={12}>
                                        <Typography variant='h4' sx={{fontWeight:'700'}}>
                                            Descripción
                                        </Typography>
                                        <Divider sx={{marginTop:'1rem', border:'1px solid #C1AC99', marginBottom:'1rem'}}/>
                                        <Typography sx={{textAlign:'left'}}>
                                            {item.description}
                                        </Typography>
                                    </Grid>
                                </Grid>
                    </Container>
                </div>
            ))}
        </>
    )
}

export async function getServerSideProps() {
  try {
    const servicesPromise = getServices.list();
    const service = await servicesPromise;

    return {
      props: {
        service: Array.isArray(service) ? service : [],
      },
    };
  } catch (error) {
    console.error("Error fetching service:", error);
    return {
      props: {
        service: [],
      },
    };
  }
}

import React from 'react'
import Image from 'next/image'
import { Grid, Typography } from '@mui/material'

export default function ContentCard({data}) {
  return (
    <>
        {data?.map((e) => (
            <Grid container 
                key={e.title}
                sx={
                    e.textAlign == 'left' 
                    ? {
                        flexDirection:['unset', 'row-reverse'],
                        alignItems:'center',
                        justifyContent:'space-between',
                        border:"2px solid #C1AC99",
                        maxWidth:['355px', 'unset'],
                        margin:'1rem auto',
                        ":last-child":{
                            marginBottom:'3rem'
                        }
                    } 
                    : {
                        alignItems:'center',
                        justifyContent:'space-between',
                        border:"2px solid #C1AC99",
                        maxWidth:['355px', 'unset'],
                        margin:'1rem auto',
                    }
                }>
                <Grid item md={6} xs={12}>
                    <Image 
                        src={e.mobileImg}
                        alt={e.title}
                        width={355}
                        height={200}
                        className='md:hidden block'
                    />
                    <Image 
                        src={e.desktopImg}
                        alt={e.title}
                        width={600}
                        height={400}
                        className='md:block hidden'
                    />
                </Grid>
                <Grid item md={6} xs={12} sx={{padding:['1rem', '2rem']}}>
                    <Typography sx={{fontWeight:'700', fontSize:['11px', '12px']}}>
                        {e.title}
                    </Typography>
                    <Typography sx={{fontSize:['11px', '12px']}}>
                        {e.text}
                    </Typography>
                </Grid>
            </Grid>
        ))}
    </>
  )
}

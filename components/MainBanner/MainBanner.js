import React from 'react'
import { Grid } from '@mui/material'
import Image from 'next/image'

export default function MainBanner() {
  return (
    <Grid container>
        <Grid item sx={{display:['none', 'block']}}>
            <Image 
                src={'/1920x600.svg'}
                alt={'Imagen principal'}
                width={1920}
                height={600}
                priority
            />
        </Grid>
        <Grid item sx={{display:['block', 'none']}}>
            <Image 
                src={'/415x315.svg'}
                alt={'Imagen principal'}
                width={415}
                height={315}
                className='w-full'
            />    
        </Grid>
    </Grid>
  )
}

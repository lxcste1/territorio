import React from 'react'
import Image from 'next/image'
import { Card, CardMedia, CardContent, Typography } from '@mui/material'

export default function InfoCard({data}) {
  return (
    <>
        <Card sx={{display:['flex','none'], justifyContent:'center', border:'none', boxShadow:'unset', borderRadius:'unset'}}>
            <CardMedia sx={{minWidth:"315px"}}>
                <Image 
                    src={data.mobileImg}
                    alt={data.alt}
                    width={315}
                    height={215}
                />
            </CardMedia>            
        </Card> 
        <Card sx={{display:['none','flex'], border:'none', boxShadow:'unset', borderRadius:'unset'}}>
            <CardMedia sx={{minWidth:"600px"}}>
                <Image 
                    src={data.desktopImg}
                    alt={data.alt}
                    width={600}
                    height={400}
                />
            </CardMedia>
            <CardContent sx={{
                width:"fit-content",
                display:"flex",
                alignItems:"center",
                padding:"4rem",
                borderTop:"2px solid #C1AC99",
                borderRight:"2px solid #C1AC99",
                borderBottom:"2px solid #C1AC99"
                }}>
                <Typography variant='h6' sx={{fontWeight:"400"}}>{data.text}</Typography>
            </CardContent>
        </Card>
    </>
  )
}

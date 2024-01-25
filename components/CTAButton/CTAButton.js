import React from 'react'
import { Button } from '@mui/material'

export default function CTAButton({children, linkTo}) {
  return (
    <Button href={linkTo} sx={{
        border:'2px solid #c1ac99',
        backgroundColor:'#FFF3E3',
        color:'#6A5843',
        textTransform:'inherit',
        fontSize:'18px',
        paddingY:'0.75rem',
        paddingX:'4rem',
        marginY:'2rem',
        ":hover":{
            backgroundColor:'#c1ac99'
        }
    }}>
        {children}
    </Button>
  )
}

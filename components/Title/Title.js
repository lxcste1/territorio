import React from 'react'
import { Typography } from '@mui/material'

export default function Title({text, type}) {
    return <Typography variant={type} sx={{fontWeight:'700', textAlign:'center'}}>{text}</Typography>
}

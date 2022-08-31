import React from 'react'
import Grid from '@mui/material/Grid'; // Grid version 1
import Grid2 from '@mui/material/Unstable_Grid2'; // Grid version 2
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';


const Item = styled(Paper)(({ theme }) => ({  
    padding: theme.spacing(10),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

export default function Footer() {

    

  return (
    <Grid container > 
        <Grid styled={Item} xs={12}> 
                <Item> Powered By [Name]&copy; 2022 </Item>
        </Grid>  
    </Grid>
  )
}

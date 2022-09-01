import React from 'react' 
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab'; 
import Box from "@mui/material/Box"; 
import logo from '../assets/logo.png';
import './Nav.css';

export default function Nav() {

    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
      setValue(newValue);
    };

  return ( 
    <Box> 
        <section>
            <img className='one-fourth' src={logo} />
        </section> 
        <Tabs className='navmenu' value={value} onChange={handleChange} centered>
            <Tab label="Item One" />
            <Tab label="Item Two" />
            <Tab label="Item Three" />
        </Tabs>
    </Box>
  )
}
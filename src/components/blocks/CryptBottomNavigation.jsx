import { useState } from 'react';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import { Box, Stack, Button, Paper, Container, Typography, } from '@mui/material';
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import ListIcon from '@mui/icons-material/List';
import InfoIcon from '@mui/icons-material/Info';

const BottomStaticPaper = styled(Paper)(({theme}) => ({
  position: 'fixed', 
  bottom: 0,
  left: 0,
  right: 0,
}));

export const CryptBottomNavigation = () => {
  // 選択項目
  const [value, setValue] = useState(0);
  const handleOnChange = (e, newValue) => {
    setValue(newValue);
  };
  
  return (
    <BottomStaticPaper elevation={3}>
      <BottomNavigation 
        showLabels 
        value={value} 
        onChange={handleOnChange}
      >
        <BottomNavigationAction 
          label="Home" 
          icon={<HomeIcon />}
          component={Link}
          to={'/'}
        />
        <BottomNavigationAction 
          label="Crypt" 
          icon={<MonetizationOnIcon />}
          component={Link}
          to={'/crypt'}
        />
        <BottomNavigationAction 
          label="List"
          icon={<ListIcon />}
          component={Link}
          to={'/list'}
        />
        <BottomNavigationAction
          label="About"
          icon={<InfoIcon />}
          href="/about"
          component={Link}
          to={'/about'}
        />
      </BottomNavigation>
    </BottomStaticPaper>
  );
};

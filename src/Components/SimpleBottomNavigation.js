import * as React from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';
//Materials
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import DiscountIcon from '@mui/icons-material/Discount';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Avatar from '@mui/material/Avatar';
//Components
import UploadStory from './UploadStory';

export default function SimpleBottomNavigation() {
  const token = localStorage.getItem('token');
    let decodedToken = null;

    if(token){
        try{
            decodedToken = jwtDecode(token);
        } catch(error){
            console.error('Error decoding token: ', error);
        }
    }

  const imageUrl = decodedToken?.imagenPerfil?.replace('localhost', '192.168.100.5');


  const [value, setValue] = React.useState(0);
  const location = useLocation();

  const[open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  React.useEffect(() => {
    switch (location.pathname){
      case '/':
        setValue(0);
        break;
      case '/Cupones':
        setValue(1);
        break;
      case '/Ordenes':
        setValue(4);
        break;
      case '/Account':
        setValue(5);
        break;
      default:
        setValue(6);
        break;
    }
  }, [location.pathname]);

  const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: '0 4px',
    },
  }));

  return (
    <Box sx={{ width: 'auto'}}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction LinkComponent={Link} to='/Home' label="Home" icon={<RestoreIcon />} />
        <BottomNavigationAction LinkComponent={Link} to='/Cupones' label="Cupones" icon={<DiscountIcon />} />
        <BottomNavigationAction 
          icon={<AddCircleIcon sx={{fontSize:'50px', paddingBottom:'30px', color:'#820B8A'}}/>}
          onClick={handleClickOpen}
        />
        <UploadStory open={open} onClose={handleClose} />
        <BottomNavigationAction LinkComponent={Link} to='/Ordenes' label="Ordenes" icon={<StyledBadge badgeContent={4} color='secondary'><LocalGroceryStoreIcon /></StyledBadge>} />
        <BottomNavigationAction LinkComponent={Link} to='/Account' label="Cuenta" icon={<Avatar alt='User Prueba' src={imageUrl} sx={{height:'28px', width:'28px'}}/>} />
      </BottomNavigation>
    </Box>
  );
}
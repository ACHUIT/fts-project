import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Stack } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import { styled } from '@mui/system';

const Root = styled('div')({
  flexGrow: 1,
});

const MenuButton = styled(IconButton)(({ theme }) => ({
  marginRight: theme.spacing(2),
}));

const Title = styled(Typography)({
  flexGrow: 1,
});



const Navbar = () => {
    const [selected, setSelected] = useState('');

    const handleClick = (buttonName) => {
      setSelected(buttonName);
    };

  return (
    <Root>
      <AppBar position="static">
       
          <Stack direction="row" sx={{justifyContent:"space-around", backgroundColor:"#000", paddingTop:"40px",paddingBottom:"10px"}} spacing={2}>
          <Button color="inherit" component={Link} to="/" onClick={() => handleClick('Home')}
              style={{
                backgroundColor: selected === 'Home' ? 'rgba(255, 255, 255, 0.2)' : 'transparent',fontWeight:"bold"
              }}>Home</Button>
            <Button color="inherit" component={Link} to="/ftstechnicalstacks" onClick={() => handleClick('ftstechnicalstack')}
              style={{
                backgroundColor: selected === 'ftstechnicalstack' ? 'rgba(255, 255, 255, 0.2)' : 'transparent',fontWeight:"bold"
              }}>FTS Technical Stacks</Button>
            <Button color="inherit" component={Link} to="/movetorunprocess" onClick={() => handleClick('Movetorunprocess')}
              style={{
                backgroundColor: selected === 'Movetorunprocess' ? 'rgba(255, 255, 255, 0.2)' : 'transparent',fontWeight:"bold"
              }}>Move To Run Process</Button>
            <Button color="inherit" component={Link} to="/frombuildtohypercare" 
             onClick={() => handleClick('frombuildtohypercare')}
             style={{
               backgroundColor: selected === 'frombuildtohypercare' ? 'rgba(255, 255, 255, 0.2)' : 'transparent',fontWeight:"bold"
             }}>From Build To Hypercare</Button>
            <Button color="inherit" component={Link} to="/fromhypercaretorun"
             onClick={() => handleClick('From Hypercare To Run')}
             style={{
               backgroundColor: selected === 'From Hypercare To Run' ? 'rgba(255, 255, 255, 0.2)' : 'transparent',fontWeight:"bold"
             }}>From Hypercare To Run</Button>
            <Button color="inherit" component={Link} to="/Appendix"
              onClick={() => handleClick('Appendix')}
              style={{
                backgroundColor: selected === 'Appendix' ? 'rgba(255, 255, 255, 0.2)' : 'transparent',fontWeight:"bold"
              }}>Appendix</Button>
          </Stack>
      </AppBar>
    </Root>
  );
};

export default Navbar;

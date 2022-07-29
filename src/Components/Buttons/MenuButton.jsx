import React from 'react'
import { IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

function MenuButton({handleOpen, isWhite}) {
  return (
    <IconButton
      aria-label="navmenu"  
      sx={{
        fontSize:'3.5rem',
        backgroundColor:'rgba(0,0,0,0)',
        position:'absolute',
        top:"5%",
        right:"5%",
      }}
      onClick={handleOpen}
    >
        <MenuIcon sx={{
        fontSize:'3.5rem',
        // color:'#22356f'
        color:isWhite?'#22356f':'#A8D4AF'

    }}/>

    </IconButton>
  )
}

export default MenuButton
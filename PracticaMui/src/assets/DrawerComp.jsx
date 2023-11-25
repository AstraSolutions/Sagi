import React, { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu'
import { Drawer, IconButton, List, ListItemButton} from '@mui/material'
const Pages = ["Inicio","Materiales","Pagina Oficial","LogIn"]

const DrawerComp = () => {
    const [openDrawer,setOpenDrawer] = useState()

const navigateToEt21Page = () => {
window.location.replace('https://Et21.com.ar')
    }
  return (
    <React.Fragment>
        <Drawer open={openDrawer}
        onClose={() => setOpenDrawer(false)} 
        >
            <List sx={{paddingTop:10, display:'flex', flexDirection:'column',justifyContent:'center'}} style={{border: '1px solid white'}} >
                <ListItemButton button divider to="/LogIn" sx={{fontSize:'1.5rem'}}>Inicio</ListItemButton>
                <ListItemButton button divider to="/Materiales" sx={{paddingTop:2, fontSize:'1.5rem'}} >Materiales</ListItemButton>
                <ListItemButton button divider onClick={navigateToEt21Page} sx={{paddingTop:2, fontSize:'1.2rem'}}>Pagina Oficial</ListItemButton>
                
                
            </List>
        </Drawer>
        <IconButton sx={{color:'black' , marginLeft:'auto'}}onClick={() => setOpenDrawer(!openDrawer)}>
            <MenuIcon/> 

        </IconButton>
    </React.Fragment>
  )
}

export default DrawerComp
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Avatar,AppBar, Tabs,Tab ,Toolbar, Button ,useMediaQuery,useTheme, Typography, IconButton } from "@mui/material";
import DrawerComp from "./DrawerComp";
const Header2 = () => {
    const [value,setValue] = useState()
    const theme = useTheme()
    const isMatch = useMediaQuery(theme.breakpoints.down('md'))
    const navigate = useNavigate()

    const navigateToEt21Page = () => {
        navigate("/Login")
    }
    const navigateToIndex = () => {
        navigate("/Login")
    }

    const navigateToAdd = () => {
        navigate("/Agregar")
    }
    
    return(
        <React.Fragment>
            <AppBar sx={{background: '#FFFFFF'}}> 
                <Toolbar  sx={{marginLeft:15}}>

                <IconButton sx={{ml:-4}}>
                <Avatar alt="E" src=".\src\assets\logo.png"  onClick={navigateToEt21Page} sx={{width: 1, height:80}} />
                </IconButton>
                    {
                        isMatch ? (
                            <>
                            <Typography sx={{fontSize:'1rem' , paddingLeft: '10%',color:"black"}}>
                                Pagina Materiales
                            </Typography>
                            <DrawerComp/>
                            </>
                        ) : (
                            <>
                            <Tabs textColor="inherit" value={value} sx={{color:"black"}} indicatorcolor="primary">
                                <Tab label="Inicio" 
                                onClick={navigateToIndex} 
                                sx={{":hover":{
                                    color:'#fa5252'
                                }}}/>
                        </Tabs>
                        <Button sx={{marginLeft:"auto", bgcolor:'green'}}variant="contained" onClick={navigateToAdd} >Agregar </Button>
                        <Button sx={{marginLeft:"10px", bgcolor:'darkred'}}variant="contained" onClick={navigateToIndex} >Cerrar Sesion</Button>
                            
                            </>
                        )
                    }
                    
                </Toolbar>
               
            </AppBar>
        </React.Fragment>
    )
}

export default Header2
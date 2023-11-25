import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Avatar,AppBar, Tabs,Tab ,Toolbar, Button ,useMediaQuery,useTheme, Typography, IconButton } from "@mui/material";
import DrawerComp from "./DrawerComp";
const Header1 = () => {
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
    
    return(
        <React.Fragment>
            <AppBar sx={{background: '#FFFFFF'}}> 
                <Toolbar sx={{marginLeft:20}}>

                <IconButton>
                <Avatar alt="E" src=".\src\assets\logo.png"  onClick={navigateToEt21Page} sx={{ width: 75, height:75}}/>
                </IconButton>
                    {
                        isMatch ? (
                            <>
                            <Typography sx={{fontSize:'1rem' , paddingLeft: '10%',color:"black"}}>
                                Bienvenido | Pagina inicial
                            </Typography>
                            <DrawerComp/>
                            </>
                        ) : (
                            <>
                            
                            <Tabs textColor="inherit" value={value} sx={{color:"black"}} indicatorcolor="primary">
                                <Tab label="Inicio" onClick={navigateToIndex} sx={{":hover":{
                                    color:'#fa5252'
                                }}}/>
                                


                        </Tabs>
                        
                            
                            </>
                        )
                    }
                    
                </Toolbar>
               
            </AppBar>
        </React.Fragment>
    )
}

export default Header1
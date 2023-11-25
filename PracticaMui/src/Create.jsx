import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { Box, Button, TextField} from '@mui/material'
import { Typography } from '@mui/material'

function Create() {
  const [values,setValues] = useState({
    nombre:"",
    descripcion: "",
    zona: "",
    unidad: "",
    cantidad : ""
  })
  const navigate = useNavigate()
  const handleToMaterial = () => {
    navigate("/Materiales")
  }
  const handleSubmit = (event) =>{
    event.preventDefault();
    axios.post("https://us-west-2.data.tidbcloud.com/api/v1beta/app/dataapp-uYFCQhPa/endpoint/createMaterial",values, {
            auth: {
              username: 'C0OH2140',
              password: 'c1549ec8-d219-43c6-ae0a-f924ebf7302f',
            }
        })
        .then(res => {
          console.log(res)
          navigate("/Materiales")

        })
        .catch(err => console.log(err))
  }
  return (
    
          <form action=''>
          <Box 
            display="flex" 
            flexDirection={"column"} 
            maxWidth={400} 
            alignItems="center" 
            justifyContent="center"
            margin="auto"
            marginTop={20}
            padding={3}
            borderRadius={5}
            bgcolor={"white"}
            sx={{alignContent:'center',justifyContent:'center'
            }}
    
          >
            <Typography sx={{fontFamily:'Corbel Light' , fontSize:25}}>Añadir Material</Typography>
            
              <TextField  onChange={e => setValues({...values, nombre : e.target.value})} placeholder="Ingrese nombre" sx={{m:1}}/>
              <TextField  type={'text'}  onChange={e => setValues({...values, descripcion : e.target.value})}placeholder="Ingrese Descripcion" sx={{m:1}}/>
              <TextField   type={'text'}  onChange={e => setValues({...values, zona : e.target.value})} placeholder="Ingrese Zona" sx={{m:1}}/>
              <TextField   type={'text'}  onChange={e => setValues({...values, unidad : e.target.value})} placeholder="Ingrese Unidad" sx={{m:1}}/>
              <TextField   type={'text'}  onChange={e => setValues({...values, cantidad : e.target.value})} placeholder="Ingrese Cantidad" sx={{m:1}}/>
              {/* <input type="text" placeholder='Nombre Producto' className='form-control' 
              onChange={e => setValues({...values, nombre : e.target.value})}/> */}
            
            
              
              {/* <input type="text" placeholder='Desc Producto' className='form-control' 
              onChange={e => setValues({...values, descripcion : e.target.value})}/>

            
            
              
              <input type="text" placeholder='Zona Producto' className='form-control' 
              onChange={e => setValues({...values, zona : e.target.value})}/>

            
            
             
              <input type="text" placeholder='Unidad medible' className='form-control'
              onChange={e => setValues({...values, unidad : e.target.value})} />

            
           
            
              <input type="text" placeholder='Cant Producto' className='form-control' 
              onChange={e => setValues({...values, cantidad : e.target.value})}/> */}

            
            <Button sx={{color: 'white',bgcolor:'orange' , fontWeight:'bold' , fontSize:15, m:1, ":hover":{
              bgcolor:'black',color:'white'
            }}} onClick={handleSubmit} >Confirmar</Button>
            <Button sx={{bgcolor:'#4194e6', color:'white' , m:2, ":hover":{
              bgcolor:'black',color:'white'
            }}} onClick={handleToMaterial}>Volver</Button>
          </Box>
          </form>

        
    
  )
}

export default Create
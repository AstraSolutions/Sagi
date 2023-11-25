import {Box, Typography,TextField,Button,Avatar} from "@mui/material"
import {useState} from "react"
import { useNavigate } from "react-router-dom"

const Auth = () => {
  
  const [nombre,setNombre] = useState("")
  const [invalid,setinvalid] = useState("")
  const [pass,setPass] = useState("")
  const navigate = useNavigate()
  const [error, setError] = useState("")
  const [submit, setSubtmit] = useState(false)
  const handleSubmit = (e) => {
    e.preventDefault()

    if(nombre === "" || pass === ""){
        setError(true)
        setinvalid(false)
        return 
    }
    if((nombre != "Julieta" && pass != "1234") && (nombre != "Cesar" && pass != "12345") && (nombre != "Pablo" && pass != "123456") && (nombre != '' && pass != "")){
        setinvalid(true)
        setError(false)
        return
    }
    if((nombre === "Julieta" && pass === "1234") || (nombre === "Cesar" && pass === "12345") || (nombre === "Pablo" && pass === "123456")){
        setError(false)

         //Setter del nombre a nivel global //Setter de la contraseña a nivel global
        navigate("/Materiales")
        return 
    }

    
}
  return (
    <div>
        <form action="">
            
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
            style={{
              //background: 'linear-gradient(to right,#3fe4b3,#81e4f9)',
            
            }}
            > 
                <Avatar alt="E" src=".\src\assets\logo.png" sx={{width: 75, height:1}}/>
                <Typography variant="h6" marginTop={2} textAlign={'center'}>Bienvenido a SAGI</Typography>
                <TextField value={nombre}  onChange={e => setNombre(e.target.value)}   type={'text'} variant="outlined" placeholder="Ingrese Usuario" sx={{m:3}}/>
                <TextField value={pass} onChange={e => setPass(e.target.value)}  type={'password'} variant="outlined" placeholder="Ingrese Contraseña"/>
                
                {error && <p>Todos los campos son obligatorios</p> } 
              {invalid && <p>Usuario equivocado</p>}
                <Button sx={{bgcolor: 'orange', color: 'white',fontSize:14.5, fontWeight:'bold',marginTop:2 ,":hover":{
              bgcolor:'black',color:'white'
            }}} onClick={handleSubmit}>Iniciar Sesion</Button>
               <Typography sx={{color: 'black'}}>
            
            </Typography>
            </Box>
            
        </form>
            

    </div>
  )
}

export default Auth
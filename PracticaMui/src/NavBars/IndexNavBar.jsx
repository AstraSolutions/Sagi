
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import '../assets/estilo.css'
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@emotion/react';
import Avatar from '@mui/material/Avatar';

const esquema = createTheme({
  palette: {
    primary: {
      light: '#FFFFFF',
      main: '#000000',
      dark: '#0F0F0F',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
});

// const HandleLogoClick = () => {

// }

export default function IndexAppBar() {
  return (
    
      <ThemeProvider theme={esquema}>
    <Box sx={{ flexGrow: 1}}>
      <AppBar sx={{p:2}} className="Contenedor"  position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            
          >
            <Avatar alt="E" src=".\src\assets\logo.png" />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Pagina Inicio
          </Typography>
          
        </Toolbar>
      </AppBar>
    </Box>
      </ThemeProvider>
    
  );
}
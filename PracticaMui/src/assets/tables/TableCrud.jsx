import {Box, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";
import DeleteIcon from '@mui/icons-material/Delete';

function styledRow(id){
    if(id % 2 == 0){
        return 'rgba(0, 200, 255, 0.10)'
    }
    else{
        return 'rgba(255, 255, 255, 0.4)'
    }
}

const Muitable = () => {
    const columns = [
        { id: 'id_especificacion', name: 'Id' },
        { id: 'nombre', name: 'Nombre' },
        { id: 'zona', name: 'Zona' },
        { id: 'unidad', name: 'Unidad' },
        {id: 'cantidad', name: 'Cantidad'},
        {id: '' , name: 'Acciones'}
    ]

    const handlechangepage = (event, newpage) => {
        pagechange(newpage)
    }
    const handleRowsPerPage = (event) => {
        rowperpagechange(+event.target.value)
        pagechange(0);
    }

    const [rows, rowchange] = useState([]);
    const [page, pagechange] = useState(0);
    const [rowperpage, rowperpagechange] = useState(5);
    
    const fetchData = async() => {
        axios.get('https://us-west-2.data.tidbcloud.com/api/v1beta/app/dataapp-uYFCQhPa/endpoint/getMateriales/All',
        {auth: 
    {
    username: 'C0OH2140',
    password: 'c1549ec8-d219-43c6-ae0a-f924ebf7302f',
    }
    })
    .then(res => {
       rowchange(res.data.data.rows)
    })
    }

    useEffect(() => {
        fetchData()

    }, [])

    const handleDeleteRow = async (id) => {
        axios.delete('https://us-west-2.data.tidbcloud.com/api/v1beta/app/dataapp-uYFCQhPa/endpoint/delMaterial/id?id='+ id,
        {auth: 
    {
    username: 'C0OH2140',
    password: 'c1549ec8-d219-43c6-ae0a-f924ebf7302f',
    }
    })  
    console.log('deleted :' + id )
    await fetchData()
    console.log('FetchData maded')
        
    }

    return (
        <div style={{ textAlign: 'center' }}>
            <Box sx={{mt:35, backgroundColor: 'rgba(0, 0, 0, 0.3)',borderRadius:'20px 20px 0px 0px' }}>
            <Typography sx={{color:'white', mb:10,backdropFilter: blur(4)}}>
            <h1>Materiales Taller</h1>
            </Typography>


            <Paper sx={{ width: '90%', marginLeft: '5%' }}>
                
                <TableContainer sx={{maxHeight:450}}>
                    <Table stickyHeader>
                        <TableHead>
                            <TableRow>
                                {columns.map((column) => (
                                    <TableCell style={{ backgroundColor: 'black', color: 'white' }} key={column.id}>{column.name}</TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows && rows
                                .slice(page * rowperpage, page * rowperpage + rowperpage)
                                .map((row, i) => {
                                    return (
                                        <TableRow key={row.id_especificacion} sx={{backgroundColor: styledRow(i)}}>
                                            <TableCell>{row.id_especificacion}</TableCell>
                                            <TableCell>{row.nombre}</TableCell>
                                            <TableCell>{row.zona}</TableCell>
                                            <TableCell>{row.unidad}</TableCell>
                                            <TableCell>{row.cantidad}</TableCell>
                                            <TableCell>
                                                <IconButton onClick={() => handleDeleteRow(row.id_especificacion)}>
                                                    <DeleteIcon/>
                                                </IconButton>
                                            </TableCell>

                                            
                                        </TableRow>
                                    )
                                })}
                                
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[5, 10, 25]}
                    rowsPerPage={rowperpage}
                    page={page}
                    count={rows.length}
                    component="div"
                    onPageChange={handlechangepage}
                    onRowsPerPageChange={handleRowsPerPage}

                >

                </TablePagination>
            </Paper>
                <Typography sx={{}}>.</Typography>
            </Box>
        </div>
    );
}

export default Muitable;
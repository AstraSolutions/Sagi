import MUIDataTable from "mui-datatables"
import axios from 'axios'
import {useState,useEffect} from 'react'
import '../estilo.css'
import React from "react"



export const TableAxios = () =>{
    //1 Conf hooks
    const [products,setProducts] = useState([])
    //
    //2 fc mostrar datos
   

    const fetchData   = async ()  =>{
        axios.get('https://us-west-2.data.tidbcloud.com/api/v1beta/app/dataapp-uYFCQhPa/endpoint/getMateriales/All',
        {auth: 
    {
    username: 'C0OH2140',
    password: 'c1549ec8-d219-43c6-ae0a-f924ebf7302f',
    }
    }).then((res)=> {
    const data = res.data.data.rows
    setProducts(data);
}
);
        
    }
        
            
        
    
    useEffect(( )=> {
        fetchData()
    }, [])

    //3 def columns

const columns = [
    {
        name: "id_especificacion",
        label:"ID"
    },
    {
        name: "nombre",
        label:"NOMBRE"
    },
    {
        name: "unidad",
        label:"UNIDAD"
    },
    {
        name: "cantidad",
        label:"CANTIDAD"
    },
    {
        name: "zona",
        label:"ZONA"
    },
]
    //4
    return(
        <React.Fragment>
        <div className="Container1">
        
        <MUIDataTable
        title={"Lista de Materiales"}
        data={products}
        columns={columns}
        />
        </div>
        </React.Fragment>
    ) 
}
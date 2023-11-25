import {useState,useEffect}from 'react'
import MaterialTable from 'material-table'
import axios from 'axios'

const TableCrud = () => {
    const[materiales,setMateriales]=useState([])
    const columns=[
        {title:'ID',field:'id'},
        {title: 'Nombre', field:'nombre'},
        {title: 'Zona', field: 'zona'},
        {title: 'Unidad', field: 'unidad'},
        {title: 'Cantidad', field:'cantidad'},
    ]

    useEffect(()  => {
        fetchData()
    },[])
    const fetchData = async () =>{
        axios.get('https://us-west-2.data.tidbcloud.com/api/v1beta/app/dataapp-uYFCQhPa/endpoint/getMateriales/All',
        {auth: 
        {
        username: 'C0OH2140',
        password: 'c1549ec8-d219-43c6-ae0a-f924ebf7302f',
        }
        })
        .then(res => {
            setMateriales(res.data.data.rows)
        })

    }
  return (
    <div>
        <MaterialTable columns={columns} data={materiales} />
    </div>
  )
}

export default TableCrud
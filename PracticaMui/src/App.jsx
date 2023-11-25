
import React from "react"
import { Route, Routes} from "react-router-dom"
import Header2 from "./assets/HeaderMaterial"
import { TableAxios } from './assets/tables/TableAxios'
import Header1 from "./assets/Header"
import Auth from "./Auth"
import { useState } from "react"
import Create from "./Create"






function App() {
  
  const [user,setUser] = useState("")
  const [logged, setLog] = useState("")
  return (
    <>
    

    <Routes>
      <Route path="/Materiales" element={
        <React.Fragment>
          <Header2 user={user}/>
          
          <TableAxios/>
        </React.Fragment>
      }/>
      <Route path="/Header" element={
        <Header1/>
      }/>
      
      <Route path="/" > </Route>
      <Route path="/LogIn" element={
        <React.Fragment>
          <Header1 setUser={setUser} setLog={setLog}/>
          <Auth/>
        </React.Fragment>
      }/>
      <Route path="/Agregar" element={
        <React.Fragment>
          <Header1/>
          <Create/>
        </React.Fragment>
      }/>
    </Routes>
      
    </>
  )
}

export default App

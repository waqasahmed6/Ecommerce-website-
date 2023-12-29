import React, { useEffect, useState } from 'react'
import AxiosInstnace from '../../../utils/Axios/Axiox'
import { useNavigate } from 'react-router-dom'
function Admins() {
const navigate = useNavigate()
    const [admins,setAdmins]=useState([])
    const axios = async()=>{
        try {
            const response= await AxiosInstnace.get("/admin")
            setAdmins(response.data)
            console.log(admins)

        } catch (error) {
            console.log(error)
        }
    }
  useEffect(()=>{
    axios()
    
  },[])
  return (
    <>
<h1>Admins</h1>
<table>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Email</th>
          <th>Actions</th>
        </tr>
        {admins.map((admin, index) => (
          <tr key={index}>
            <td>{admin.id}</td>
            <td>{admin.name}</td>
            <td>{admin.email}</td>
            <td>
              <button
                onClick={()=>navigate("admins/" + admin.id +"/edit")}
              >
                edit
              </button>
            </td>
          </tr>
        ))}
      </table>
    </>
  )
}

export default Admins
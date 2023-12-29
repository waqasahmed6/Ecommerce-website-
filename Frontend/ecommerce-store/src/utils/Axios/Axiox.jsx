import React from 'react'
import axios from "axios"
const AxiosInstnace = axios.create({
    baseURL:"http://localhost:3301",
    headers:{
        "Content-Type":"application/json"
    },
    timeout:5000
})
export default AxiosInstnace
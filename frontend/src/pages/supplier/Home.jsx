import React from 'react'
import Dashboard from "../../components/Dashboard"
import { useSelector } from 'react-redux'
import {selectUser} from "../../Redux/Slices/userSlice"
import { Button } from '@mui/material'
import { useNavigate } from 'react-router'

const Home = () => {
    const user = useSelector(selectUser)
    const navigate = useNavigate()
  return (

    <>
        <Dashboard page="Home">
            <div className='d-flex justify-content-center flex-column align-items-center' style={{height : "70vh"}}>
                <h1>Welcome {user?.name}</h1>
                <Button 
                variant="contained" 
                className = "mt-3"
                color='primary'
                onClick={()=>navigate("/add-catalog")} >
                    Upload A catalog
                </Button>
            </div>
        </Dashboard>
    </>
  )
}

export default Home
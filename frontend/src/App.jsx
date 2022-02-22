import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux"
import { selectUser } from "./Redux/Slices/userSlice";
import {fetchUser} from "./apis/commonApis"
import { SET_USER } from './Redux/Slices/userSlice';
import AuthLayout from './layouts/AuthLayout';
import AdminLayout from './layouts/AdminLayout';
import SupplierLayout from './layouts/SupplierLayout';
import Loading from './components/Loading';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

const App = () => {
    const [loading, setLoading] = useState(true)
    const dispatch = useDispatch()

    useEffect(()=>{
        const getUserInfo = async ()=>{
            try {
                const resp = await fetchUser()
                console.log("app",resp)
                if(resp?.msg==="success"){
                    dispatch(SET_USER(resp.response))
                    setLoading(false)
                }else{
                    setLoading(false)
                }
            } catch (err) {
                console.log(err)
                setLoading(false)
            }
        }

        getUserInfo()
    }, [dispatch])
    const user = useSelector(selectUser)
    console.log("user",user)

    return (
        <>
        {
            loading ? <Loading loading={loading} backdrop={false} />
            : (
                <>
                    {
                        user ? (
                            user?.userType === "admin" ? <AdminLayout /> : <SupplierLayout />
                        ) : 
                        <AuthLayout />
                     }
                </>
            )
        }
        </>
    )
};

export default App;

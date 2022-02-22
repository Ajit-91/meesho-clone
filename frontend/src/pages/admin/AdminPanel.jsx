import { Button } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import { approveCatalog, fetchAllCatalogs } from '../../apis/adminApis'
import Dashboard from '../../components/Dashboard'

const AdminPanel = () => {
    const [allCatalogs, setAllCatalogs] = useState([])
    const [reload, setReload] = useState(false)

    useEffect(()=>{
        const getAllCatalogs = async () => {
            const res = await fetchAllCatalogs()
            if(res?.msg === "success"){
                setAllCatalogs(res?.response)
            }else if(res?.msg){
                alert(res?.msg)
            }else{
                alert("process failed")
            }
        }
        getAllCatalogs()
    }, [reload])

    console.log("log",allCatalogs)

    const approve = async(catalogid) => {
        const res = await approveCatalog(catalogid)
        if(res?.msg === "success"){
            setReload(prev=>!prev)
        }else if(res?.msg){
            alert(res?.msg)
        }else{
            alert("process failed")
        }
    }

  return (
    <>
        <Dashboard page="Admin Panel">
            {
                allCatalogs && (
                    <Table className='mt-5 text-muted' striped bordered borderless hover responsive="md" >
                    <thead>
                        <tr>
                            <th>S.No</th>
                            <th>Category</th>
                            <th>Created At</th>
                            <th>Creator ID</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                           allCatalogs?.map((item, i)=>(
                               <>
                                 <tr key={i}>
                                    <td>{i+1}</td>
                                    <td>{item?.category}</td>
                                    <td>{new Date(item?.createdAt).toDateString()}</td>
                                    <td>{item?.creator}</td>
                                    <td>
                                        {
                                            item?.status === "Live" ?  "Approoved" 
                                            : (
                                                <Button variant="contained"  onClick={()=>approve(item?._id)} >Approove</Button>
                                            )
                                        }
                                    </td>
                                </tr>
                               </>
                           ))
                        }
                    </tbody>
                </Table>
                )
            }
        </Dashboard>
    </>
  )
}

export default AdminPanel
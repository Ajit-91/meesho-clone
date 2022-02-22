import React, { useEffect, useState } from 'react'
import Dashboard from '../../components/Dashboard'
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router';
import { fetchMyCatalogs } from '../../apis/supplierApis';
import { Table } from 'react-bootstrap';

const Catalogs = () => {
    const navigate = useNavigate()
    const [myCatalogs, setMyCatalogs] = useState([])

    useEffect(() => {
        const getMyCatalogs = async () => {
            const catalogs = await fetchMyCatalogs()
            setMyCatalogs(catalogs?.response)
        }
        getMyCatalogs()
    }, [])

    return (
        <>
            <Dashboard page="Catalogs">
                <p>Have unique products to sell ?</p>
                <Button
                    variant='contained'
                    onClick={() => navigate("/add-catalog")}
                >Add Catalog
                </Button>

                {
                    myCatalogs && (
                            <Table className='mt-5 text-muted' striped bordered borderless hover responsive="md" >
                                <thead>
                                    <tr>
                                        <th>S.No</th>
                                        <th>Category</th>
                                        <th>Created At</th>
                                        <th>Status</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        myCatalogs?.map((item, i) => (
                                            <>
                                                <tr key={i}>
                                                    <td>{i + 1}</td>
                                                    <td>{item?.category}</td>
                                                    <td>{new Date(item?.createdAt).toDateString()}</td>
                                                    <td>{item?.status}</td>
                                                    <td><Button variant="contained" >view</Button></td>
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

export default Catalogs
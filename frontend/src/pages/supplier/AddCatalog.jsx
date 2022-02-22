import React, { useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import Dashboard from '../../components/Dashboard'
import CatalogForm from '../../components/CatalogForm';
import CatalogImageUpload from '../../components/CatalogImageUpload';
import { useSelector } from 'react-redux';
import { selectUser } from '../../Redux/Slices/userSlice';
import Button from '@mui/material/Button';
import { addCatalog } from '../../apis/supplierApis';
import { useNavigate } from 'react-router';


const AddCatalog = () => {
    const user = useSelector(selectUser)
    const navigate = useNavigate()
    const [catalogDetails, setCatalogDetails] = useState({
        creator : user._id,
        category : "",
        image : "",
        gst : "",
        MRP : "",
        meeshoPrice : "",
        description : ""
    })

    const handleChange = (e) => {
        setCatalogDetails((prev) => {
            return {
                ...prev,
                [e.target.name]: e.target.value
            }
        })
    }

    const handleSubmit = async () =>{
        const {category, image, gst, MRP, meeshoPrice, description} = catalogDetails
        if(!category || !image || !gst || !MRP || !meeshoPrice || !description){
            return alert("one or more fields required")
        }

        const res = await addCatalog(catalogDetails)
        if(res?.msg === "success") {
            alert("success")
            navigate("/catalogs")
        }else if(res.msg){
            alert(res?.msg)
        }else{
            alert("process failed")
        }
    }

    return (
        <div>
            <Dashboard page="Add Catalog">
                <p>Add Product Details</p>
                <Row className='gy-3'>
                    <Col lg={8}>
                        <CatalogForm catalogDetails={catalogDetails} handleChange={handleChange} />
                    </Col>
                    <Col lg={4}>
                        <CatalogImageUpload catalogDetails={catalogDetails} setCatalogDetails={setCatalogDetails}  />
                    </Col>
                </Row>
                <Button 
                variant='contained' 
                className='mt-5' 
                onClick={handleSubmit} >
                    Submit
                </Button>
            </Dashboard>
        </div>
    )
}

export default AddCatalog
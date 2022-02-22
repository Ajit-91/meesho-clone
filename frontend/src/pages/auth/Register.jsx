import React, { useState } from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Card, Col, Row } from 'react-bootstrap';
import "../../assets/css/authStyles/auth.css"
import { registerUser } from '../../apis/commonApis';
import { useDispatch } from 'react-redux';
import { SET_USER } from '../../Redux/Slices/userSlice';
import { useNavigate } from 'react-router';
import BrandCol from '../../components/BrandCol';


const Register = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [details, setDetails] = useState({
        name: "",
        email: "",
        mobileNo: "",
        password: ""
    })

    const handleChange = (e) => {
        setDetails((prev) => {
            return {
                ...prev,
                [e.target.name]: e.target.value
            }
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const res = await registerUser(details)
        if (res.msg === "success") {
            dispatch(SET_USER(res.response))
        }else{
            alert(res?.error || res?.msg ||"process failed")
        }
    }

    return (
        <div className='h-100'>
            <Row className='m-0 h-100'>
                <Col className='p-0' lg={6}>
                    <BrandCol />
                </Col>
                <Col className='p-0 formCol' lg={6} >
                    <Card className='authForm bg-white shadow border-0 rounded p-2' >
                        <Card.Body className='d-flex flex-column justify-content-center ' >
                            <form onSubmit={handleSubmit}>
                                <p>Register to Supplier Pannel</p>
                                <TextField
                                    color='primary'
                                    margin='normal'
                                    fullWidth
                                    
                                    inputProps={{
                                        autoComplete: 'new-password',
                                        form: {
                                            autoComplete: 'off',
                                        },
                                        className : "myTextfield"
                                    }}
                                    label="Name"
                                    name="name"
                                    value={details.name}
                                    onChange={handleChange}
                                />
                                <TextField
                                    color='primary'
                                    margin='normal'
                                    fullWidth
                                    inputProps={{
                                        autoComplete: 'new-password',
                                        form: {
                                            autoComplete: 'off',
                                        },
                                    }}

                                    label="Email"
                                    name="email"
                                    type={"email"}
                                    value={details.email}
                                    onChange={handleChange}
                                />
                                <TextField
                                    color='primary'
                                    margin='normal'
                                    fullWidth
                                    label="Mobile No."
                                    name="mobileNo"
                                    inputProps={{
                                        autoComplete: 'new-password',
                                        form: {
                                            autoComplete: 'off',
                                        },
                                    }}

                                    type={"number"}
                                    value={details.mobileNo}
                                    onChange={handleChange}
                                />
                                <TextField
                                    color='primary'
                                    margin='normal'
                                    fullWidth
                                    label="Password"
                                    name="password"
                                    inputProps={{
                                        autoComplete: 'new-password',
                                        form: {
                                            autoComplete: 'off',
                                        },
                                    }}

                                    type={"password"}
                                    value={details.password}
                                    onChange={handleChange}
                                />
                                <Row className='mt-3'>
                                    <Col className='d-flex align-items-center'><small>forgot password ?</small></Col>
                                    <Col className=' d-flex align-items-center justify-content-end'>
                                        <Button variant='outlined' type='submit'  >Register</Button>
                                    </Col>
                                </Row>
                            </form>
                        </Card.Body>
                    </Card>
                    <p className='mt-3'>Already have account ?</p>
                    <p onClick={()=>navigate("/login")} className="gotoOtherRoute" >Login</p>
                </Col>
            </Row>
        </div>
    )
}

export default Register
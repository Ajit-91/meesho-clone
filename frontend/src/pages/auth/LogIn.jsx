import React, { useState } from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Card, Col, Row } from 'react-bootstrap';
import "../../assets/css/authStyles/auth.css"
import { loginUser } from '../../apis/commonApis';
import { useDispatch } from 'react-redux';
import { SET_USER } from '../../Redux/Slices/userSlice';
import BrandCol from '../../components/BrandCol';
import { useNavigate } from 'react-router';

const LogIn = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [details, setDetails] = useState({
        email: "",
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
        const res = await loginUser(details)
        if (res.msg === "success") {
            dispatch(SET_USER(res.response))
        } else if(res?.msg) {
            alert(res?.msg)
        }else{
            alert("process failed")
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
                                <p>LogIn to Supplier Pannel</p>
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
                                    helperText=""
                                    value={details.email}
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
                                    helperText=""
                                    type={"password"}
                                    value={details.password}
                                    onChange={handleChange}
                                />
                                <Row className='mt-3'>
                                    <Col className='d-flex align-items-center'><small>forgot password ?</small></Col>
                                    <Col className=' d-flex align-items-center justify-content-end'>
                                        <Button 
                                            variant='outlined' 
                                            type='submit'
                                        >   Login
                                        </Button>
                                    </Col>
                                </Row>
                            </form>
                        </Card.Body>
                    </Card>
                    <p className='mt-3'>Don't have account ?</p>
                    <p onClick={()=>navigate("/register")} className="gotoOtherRoute" >Register</p>
                </Col>
            </Row>
        </div>
    )
}

export default LogIn
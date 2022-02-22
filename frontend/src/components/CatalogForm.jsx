import React from 'react'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import { Card, Col, Row } from 'react-bootstrap'

const CatalogForm = ({ catalogDetails, handleChange }) => {
    return (
        <>
            <Card className="m-0">
                <Card.Body>
                    <Row className='gy-3'>
                        <Col md={6}>
                            <FormControl fullWidth>
                                <InputLabel id="category">Select Category</InputLabel>
                                <Select
                                    labelId="category"
                                    id="category"
                                    label="Select Category"
                                    name="category"
                                    value={catalogDetails?.category}
                                    onChange={handleChange}
                                >
                                    <MenuItem value={"Shirt"}>Shirt</MenuItem>
                                    <MenuItem value={"Tshirt"}>Tshirt</MenuItem>
                                    <MenuItem value={"Jeans"}>Jeans</MenuItem>
                                    <MenuItem value={"Pants"}>Pants</MenuItem>
                                </Select>
                            </FormControl>
                        </Col>
                        <Col md={6}>
                            <FormControl fullWidth>
                                <InputLabel id="category">GST</InputLabel>
                                <Select
                                    labelId="GST"
                                    id="GST"
                                    label="Select GST"
                                    name="gst"
                                    value={catalogDetails?.gst}
                                    onChange={handleChange}
                                >
                                    <MenuItem value={3}>3</MenuItem>
                                    <MenuItem value={5}>5</MenuItem>
                                    <MenuItem value={10}>10</MenuItem>
                                    <MenuItem value={18}>18</MenuItem>
                                    <MenuItem value={28}>28</MenuItem>
                                </Select>
                            </FormControl>
                        </Col>
                    </Row>


                    <Row>
                        <Col md={6}>
                            <TextField
                                margin='normal'
                                fullWidth
                                inputProps={{
                                    autoComplete: 'new-password',
                                    form: {
                                        autoComplete: 'off',
                                    },
                                }}
                                label="Meesho Price (Rs)"
                                type={"number"}
                                helperText=""
                                name="meeshoPrice"
                                value={catalogDetails?.meeshoPrice}
                                onChange={handleChange}
                            />
                        </Col>
                        <Col md={6}>
                            <TextField
                                margin='normal'
                                fullWidth
                                inputProps={{
                                    autoComplete: 'new-password',
                                    form: {
                                        autoComplete: 'off',
                                    },
                                }}
                                label="MRP (Rs)"
                                type={"number"}
                                helperText=""
                                name="MRP"
                                value={catalogDetails?.MRP}
                                onChange={handleChange}
                            />

                        </Col>
                    </Row>

                    <TextField
                        margin='normal'
                        fullWidth
                        inputProps={{
                            autoComplete: 'new-password',
                            form: {
                                autoComplete: 'off',
                            },
                        }}
                        label="Add description"
                        type={"number"}
                        helperText=""
                        multiline={true}
                        minRows={4}
                        name="description"
                        value={catalogDetails?.description}
                        onChange={handleChange}
                    />

                </Card.Body>
            </Card>
        </>
    )
}

export default CatalogForm
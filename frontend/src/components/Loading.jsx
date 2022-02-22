import { Backdrop, CircularProgress } from '@mui/material'
import React from 'react'

const Loading = ({ loading, backdrop = true }) => {
    console.log("load", backdrop)
    return (
        <>
            {
                backdrop ?
                    <>
                        <Backdrop
                            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                            open={loading}
                        >
                            <CircularProgress color="primary" />
                        </Backdrop>
                    </>
                    : (
                        <div className='w-100 d-flex justify-content-center align-items-center' style={{ height: "100vh" }}>
                            <CircularProgress color="primary" size={50}  />
                        </div>
                    )
            }

        </>
    )
}

export default Loading
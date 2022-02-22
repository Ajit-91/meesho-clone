import React, { useRef, useState } from 'react'
import { uploadToCloud } from '../apis/supplierApis'
import Button from '@mui/material/Button';
import Loading from './Loading';


const CatalogImageUpload = ({ catalogDetails, setCatalogDetails}) => {
    const [loading, setLoading] = useState(false)
    const fileRef = useRef(null)

    const uploadImg = async (e) => {
        try {
            setLoading(true)
            const files = e.target.files
            console.log("file", files)
            const data = new FormData()
            data.append('file', files[0])
            data.append('upload_preset', 'meesho')

            const res = await uploadToCloud(data)
            console.log("res", res)
            setLoading(false)
            setCatalogDetails((prev) => {
                return {
                    ...prev,
                    image: res?.secure_url
                }
            })

        } catch (err) {
            console.log(err)
            setLoading(false)
        }
    }
    return (
        <>
            <div className=' w-100 d-flex flex-column justify-content-center align-items-center'>

                <input type={"file"} onChange={uploadImg} ref={fileRef} hidden />
                {
                    loading && (
                        <Loading loading={loading} />
                    )
                }

                {
                    catalogDetails?.image ? (
                        <>
                            <div className="mt-4 w-100">
                                <img
                                    src={catalogDetails?.image}
                                    style={{ width: "70%", display: "block", margin: "5px auto" }}
                                    alt="catalog-img"
                                />
                            </div>
                        </>
                    ) : (
                        <Button  variant='contained' onClick={() => fileRef.current.click()}>Upload image</Button>
                    )
                }
            </div>
        </>
    )
}

export default CatalogImageUpload
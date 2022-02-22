import { fetchApi } from "../utils/fetchApi"

// ------------add catalog-------------------------------------

export const uploadToCloud = async (data) =>{

    const route = `https://api.cloudinary.com/v1_1/ddxohc53h/image/upload`
    const options = {
        method : "POST",
        body : data
    }

    return await fetchApi(route, options)
}

export const addCatalog = async (body) => {
    
    const route = "/api/supplier/add-catalog"
    const options = {
        method : "POST",
        headers : {"Content-Type" : "application/json"},
        credentials: 'include',
        body : JSON.stringify(body)
    }

    return await fetchApi(route, options)
}


// ------------fetch my catalogs-------------------------------------

export const fetchMyCatalogs = async () => {
    
    const route = "/api/supplier/fetch-my-catalogs"
    const options = {
        method : "GET",
        credentials: 'include'
    }

    return await fetchApi(route, options)
}
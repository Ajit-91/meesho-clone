import { fetchApi } from "../utils/fetchApi"

// ------------fetch all catalogs-------------------------------------

export const fetchAllCatalogs = async ()=>{

    const route = "/api/admin/fetch-all-catalogs"
    const options = {
        method : "GET",
        credentials: 'include'
    }
    
    return await fetchApi(route, options)
}

// ------------approove catalog-------------------------------------

export const approveCatalog = async (catalogid)=>{

    const route = `/api/admin/approve-catalog/${catalogid}`
    const options = {
        method : "GET",
        credentials: 'include'
    }
    
    return await fetchApi(route, options)
}
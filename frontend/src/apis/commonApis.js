import { fetchApi } from "../utils/fetchApi"

// ------------fetch user-------------------------------------

export const fetchUser = async ()=>{
    
    const route = "/api/fetch-user"
    const options = {
        method : "GET",
        credentials: 'include',
    }

    return await fetchApi(route, options)
}

// ------------login user-------------------------------------

export const loginUser = async (body)=>{
    
    const route = "/api/login"
    const options = {
        method : "POST",
        headers : {"Content-Type" : "application/json"},
        credentials: 'include',
        body : JSON.stringify(body)
    }

    return await fetchApi(route, options)
}

// ------------register user-------------------------------------

export const registerUser = async (body)=>{
    
    const route = "/api/register"
    const options = {
        method : "POST",
        headers : {"Content-Type" : "application/json"},
        credentials: 'include',
        body : JSON.stringify(body)
    }

    return await fetchApi(route, options)
}

// ------------logout user-------------------------------------

export const logout = async () => {
    
    const route = "/api/logout"
    const options = {
        method : "GET",
        credentials: 'include',
    }

    return await fetchApi(route, options)
}

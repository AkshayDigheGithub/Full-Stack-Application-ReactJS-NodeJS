import Axios from 'axios';

const isloggedin = localStorage.getItem('user');
console.log("****", isloggedin);
const headers = {
    "content-type": "application/json",
    "accept": "application/json",
    "Authorization": `Bearer ${isloggedin}`
}

const BaseURL = 'http://localhost:4000/api/v1';

const ManagerSignup = {
    url: '/manager/signin',
    method: 'post'
}

const ManagerLogin = {
    url: '/manager/login',
    method: 'post'
}

const emp = {
    url: '/employee'
}


// signin
export const signup = async (data) => {
    const { url } = ManagerSignup
    try {
        return await Axios.post(`${BaseURL}${url}`, data)
    } catch (error) {
        return error
    }
}

// login 
export const login = async (data) => {
    const { url } = ManagerLogin
    try {
        return await Axios.post(`${BaseURL}${url}`, data);
    } catch (error) {
        return error
    }
}

// add employee
export const addEmployee = async () => {
    const { url } = emp
    try {
        return await Axios.get(`${BaseURL}${url}`, { headers });
    } catch (error) {
        return error
    }
}


export const updateEmployee = async (data) => {
    const { url } = emp
    try {
        return await Axios.put(`${BaseURL}${url}`, data, { headers });
    } catch (error) {
        return error
    }
}
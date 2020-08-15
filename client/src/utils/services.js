import Axios from 'axios';

const BaseURL = 'http://localhost:4000/api/v1';

const ManagerSignup = {
    url: '/manager/signin',
    method: 'post'
}
const ManagerLogin = {
    url: '/manager/login',
    method: 'post'
}

export const ManagerServices = (servicename, data) => {
    switch (servicename) {
        case 'signup':
            signup(data, ManagerSignup)
            break;
        case 'login':

            break;
    }
}


const signup = async (data, ManagerSignup) => {
    const { url } = ManagerSignup
    return await Axios.post(`${BaseURL}${url}`, data)
}
import axios from "axios"
import { globalData } from "../../App"

const addNewUser = (data) => {
    return axios.post(globalData.server + "/users/register", data, {
        withCredentials: true
    })
}

const loginUser = (data) => {
    return axios.post(globalData.server + "/users/login", data, {
        withCredentials: true
    })
}

const getUserProfile = () => {
    return axios.get(globalData.server + "/users/profile", {
        withCredentials: true
    })
}

const logoutUser = () => {
    return axios.get(globalData.server + "/users/logout", {
        withCredentials : true
    })
}

const users = {
    addNewUser,
    loginUser,
    getUserProfile,
    logoutUser
}

export default users
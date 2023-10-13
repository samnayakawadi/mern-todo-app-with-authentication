import { useEffect, useState } from "react"
import users from "./apis/users"
import { toast } from "react-toastify"

const userProfile = () => {

    const defaultData = {
        username: "",
        email: "",
        createdOn: ""
    }
    const [data, setData] = useState(defaultData)

    useEffect(() => {
        getUserDetails()
    }, [])

    const getUserDetails = async () => {
        try {
            const res = await users.getUserProfile()
            setData(res.data.data)
            toast.success(res.data.message)
        } catch (error) {
            toast.error(res.data.message)
        }
    }

    return { data, getUserDetails }
}

export default userProfile
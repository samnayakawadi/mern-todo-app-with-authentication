import { toast } from "react-toastify"
import users from "./apis/users"
import { useNavigate } from "react-router"

const navbarHandler = () => {

    const navigate = useNavigate()

    const logoutHandler = async () => {
        try {
            const res = await users.logoutUser()
            toast.success(res.data.message)
            navigate("/login")
        } catch (error) {
            console.log("Error", error.response)
            toast.error(error.response.data.message)
            navigate("/login")
        }
    }

    return {
        logoutHandler
    }
}

export default navbarHandler
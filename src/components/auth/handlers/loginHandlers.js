import React, { useState } from 'react'
import users from '../../apis/users'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router'

const loginHandlers = () => {

    const navigate = useNavigate()

    const [loading, setLoading] = useState(false)

    const [data, setData] = useState({
        username: "",
        password: ""
    })

    const onChangeHandler = (e) => {
        const { name, value } = e.target
        setData(prevState => { return { ...prevState, [name]: value } })
    }

    const onSubmitHandler = async (e) => {
        e.preventDefault()
        setLoading(true)
        try {
            const res = await users.loginUser(data)
            toast.success(res.data.message)
            setLoading(false)
            navigate("/")
        } catch (error) {
            toast.error(error.response.data.message)
            setLoading(false)
        }
    }

    return { loading, data, onChangeHandler, onSubmitHandler }

}

export default loginHandlers
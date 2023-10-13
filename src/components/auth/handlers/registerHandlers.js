import React, { useState } from 'react'
import users from '../../apis/users'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router'

const registerHandlers = () => {

    const navigate = useNavigate()

    const [isLoading, setIsLoading] = useState(false)

    const defaultData = {
        email: "",
        username: "",
        password: ""
    }
    const [data, setData] = useState(defaultData)

    const onChangeHandler = (e) => {
        const { name, value } = e.target
        setData(prevState => { return { ...prevState, [name]: value } })
    }

    const onSubmitHandler = async (e) => {
        e.preventDefault()

        setIsLoading(true)

        try {
            const response = await users.addNewUser(data)
            toast.success(response.data.message)
            setIsLoading(false)
            setData(defaultData)
            navigate("/login")
        }
        catch (error) {
            toast.error(error.response.data.message)
            setIsLoading(false)
        }
    }

    return { isLoading, data, onChangeHandler, onSubmitHandler }

}

export default registerHandlers
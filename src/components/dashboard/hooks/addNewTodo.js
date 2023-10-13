import React, { useState } from 'react'
import tasks from '../../apis/tasks'
import { toast } from 'react-toastify'

const addNewTodo = () => {

    const [isLoading, setIsLoading] = useState(false)

    const defaultData = {
        title: "",
        description: ""
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
            const res = await tasks.addNewTask(data)
            toast.success(res.data.message)
            setIsLoading(false)
            setData(defaultData)
        } catch (error) {
            toast.error(error.response.data.message)
            setIsLoading(false)
        }
    }

    return { isLoading, data, onChangeHandler, onSubmitHandler }

}

export default addNewTodo
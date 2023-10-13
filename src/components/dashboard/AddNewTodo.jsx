import React from 'react'
import addNewTodo from './hooks/addNewTodo'

const AddNewTodo = () => {

    const { isLoading, data, onChangeHandler, onSubmitHandler } = addNewTodo()

    return (
        <form onSubmit={onSubmitHandler}>
            <input type="text" placeholder="Enter Title Here" onChange={onChangeHandler} name="title" value={data.title} className="input input-bordered input-accent w-full mb-3" />
            <br />
            <input type="text" placeholder="Enter Description Here" onChange={onChangeHandler} name="description" value={data.description} className="input input-bordered input-accent w-full mb-3" />
            <br />
            <button type='submit' className='btn btn-success btn-block' disabled={isLoading}>{isLoading ? "Requesting..." : "Add Task"}</button>
        </form>
    )
}

export default AddNewTodo
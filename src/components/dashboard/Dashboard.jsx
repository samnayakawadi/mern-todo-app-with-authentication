import React from 'react'
import AddNewTodo from './AddNewTodo'
import ListTodos from './ListTodos'

const Dashboard = () => {
    return (
        <div className='mt-3'>
            <div className='flex flex-row justify-center items-center'>
                <div className='basis-3/12 text-center'>
                    <AddNewTodo />
                    <ListTodos />
                </div>
            </div>
        </div>
    )
}

export default Dashboard
import registerHandlers from "./handlers/registerHandlers"

const Register = () => {

    const { isLoading, data, onChangeHandler, onSubmitHandler } = registerHandlers()

    return (
        <div className='mt-3'>
            <div className='flex flex-row justify-center items-center'>
                <div className='basis-3/12 text-center'>
                    <form onSubmit={onSubmitHandler}>
                        <input type="text" name="username" placeholder="Enter Username" value={data.username} onChange={onChangeHandler} className="input input-bordered input-accent w-full mb-3" />
                        <br />
                        <input type="text" name="email" placeholder="Enter Email" value={data.email} onChange={onChangeHandler} className="input input-bordered input-accent w-full mb-3" />
                        <br />
                        <input type="text" name="password" placeholder="Enter Password" value={data.password} onChange={onChangeHandler} className="input input-bordered input-accent w-full mb-3" />
                        <br />
                        <button type="submit" className='btn btn-success btn-block' disabled={isLoading}>{isLoading ? "Requesting..." : "Register"}</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register
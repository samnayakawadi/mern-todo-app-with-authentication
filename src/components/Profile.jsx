import userProfile from "./userProfile"

const Profile = () => {

    const { data } = userProfile()

    return (
        <div className='mt-3'>
            <div className='flex flex-row justify-center items-center'>
                <div className='basis-3/12 text-center'>
                    <div>
                        <input type="text" placeholder="Loading..." className="input input-bordered input-accent w-full mb-3" value={data.username} disabled/>
                        <br />
                        <input type="text" placeholder="Loading..." className="input input-bordered input-accent w-full mb-3" value={data.email} disabled/>
                        <br />
                        <input type="text" placeholder="Loading..." className="input input-bordered input-accent w-full mb-3" value={data.createdOn} disabled/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile
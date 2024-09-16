import React from 'react'

const Container = () => {
    return (
        <div className='container mx-auto h-screen border-2 border-slate-500 my-14 w-1/2 flex-wrap'>

            <div className=' text-black font-weight: bold; text-2xl p-6 mb-2'>Register</div>
            <hr className='border-2 border-gray-500 mx-2 mb-3' />
            <div className=' flex justify-between mx-2 px-4 '>
                <div className=' w-1/2 flex flex-col'>
                    <label className='text-xl mb-2' htmlFor="birinci" >First Name</label>
                    <input type="text" name="birinci" placeholder='Enter First Name' required
                        className='focus:outline-none focus:border-blue-500 border-2
                        border-black rounded-md pl-3 text-lg font-thin;' />
                    <div className='text-red-600 text-sm mt-1'>First Name is required</div>

                    <label className='text-xl mb-2 mt-8' htmlFor="birinci" >Birth Date</label>
                    <input
                        type="date"
                        name="dogumTarihi"
                        required
                        className='focus:outline-none focus:border-blue-500 border-2
                        border-black rounded-md pl-3 text-lg font-thin;' />

                    <div className='text-red-600 text-sm mt-1'>You must be at least 13 years old</div>

                </div>
                <div className=' w-1/2 flex flex-col pl-4'>
                    <label className='text-xl mb-2 ' htmlFor="birinci" >Last Name</label>
                    <input type="text" name="birinci" placeholder='Enter Last Name' required
                        className='focus:outline-none focus:border-blue-500 border-2
                        border-black rounded-md pl-3 text-lg font-thin;' />
                    <div className='text-red-600 text-sm mt-1'>Last Name must be longer than 2 characters</div>
                    <label className='text-xl mb-2 mt-8' htmlFor="birinci" >Gender</label>
                    <div className='flex justify-around'>
                        <div className='flex items-center mb-2'>
                            <input className='mr-2' type="radio" name="cinsiyet" value="male" />
                            <label htmlFor="male">Male</label>
                        </div>
                        <div className='flex items-center mb-2'>
                            <input className='mr-2' type="radio" name="cinsiyet" value="female" />
                            <label htmlFor="female">Female</label>
                        </div>
                        <div className='flex items-center mb-2'>
                            <input className='mr-2' type="radio" name="cinsiyet" value="other" />
                            <label htmlFor="other">Other</label>
                        </div>

                    </div>
                    <div className='text-red-600 text-sm mt-1'>Gender is required</div>


                </div>


            </div>

            <div className=' mx-2 px-4'>

                <div className='flex flex-col mt-4'>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" placeholder='Enter Email' required
                        className='focus:outline-none focus:border-blue-500 border-2  pl-3 text-lg font-thin
                        border-black rounded-md mt-2'
                    />
                    <div className='text-red-600 text-sm mt-1'>Email is not valid</div>
                </div>
                <div className='flex flex-col  mt-4'>
                    <label htmlFor="email">Password</label>
                    <input type="password" name="password" placeholder='Enter Password' required
                        className='focus:outline-none focus:border-blue-500 border-2 pl-3 text-lg font-thin
                        border-black rounded-md mt-2'
                    />
                    <div className='text-red-600 text-sm mt-1'>Password is not valid</div>
                    <div className='text-red-600 text-sm mt-1'>Minimum password length is eight characters</div>
                </div>
                <div className='flex flex-col  mt-4'>
                    <label htmlFor="email">Confirm Password</label>
                    <input type="password" name="confirm" placeholder='Enter Email' required
                        className='focus:outline-none focus:border-blue-500 border-2 pl-3 text-lg font-thin
                        border-black rounded-md mt-2'
                    />
                    <div className='text-red-600 text-sm mt-1'>Passwords dont match</div>
                </div>

                <div className='flex justify-end mr-3'>
                    <button className='bg-cyan-600 rounded-md text-white text-md p-1 mb-2'>Register</button>

                </div>

                <div className='bg-slate-600 rounded-md text-white text-md p-1'>
                    <hr className='border-2 border-gray-500' />
                    <p className='text-center'>Already have an account? <a href="#" className='text-blue-600'>Login</a></p>
                    <br />
                </div>

            </div>

        </div>
    )
}

export default Container

import React, { useState } from 'react'

const Deneme = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        birthDate: '',
        lastName: '',
        
        gender: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Form verilerini işleme kodu buraya gelebilir
        setFormData({
            firstName: '',
            birthDate: '',
            lastName: '',
            gender: '',
            email: '',
            password: '',
            confirmPassword: ''
        });
    };

    return (

        <>
            <div>
                <div className="fixed left-0 top-0 p-4 bg-gray-200 h-full">
                    <p>First Name: {formData.firstName}</p>
                    <p>Birth Date: {formData.birthDate}</p>
                    <p>Last Name: {formData.lastName}</p>
                    <p>Gender: {formData.gender}</p>
                    <p>Email: {formData.email}</p>
                    <p>Password: {formData.password}</p>
                    <p>Confirm Password: {formData.confirmPassword}</p>
                </div>
            </div>
            <form
                onSubmit={handleSubmit}
                className='container mx-auto h-screen border-2 border-slate-500 my-14 w-1/2'>

                <div className='text-black font-bold text-2xl p-6 mb-2'>Register</div>
                <hr className='border-2 border-gray-500 mx-2 mb-3' />
                <div className='flex flex-wrap justify-between mx-2 px-4'>
                    <div className='w-full md:w-1/2 flex flex-col mb-4 md:mb-0'>
                        <label className='text-xl mb-2' htmlFor="firstName">First Name</label>
                        <input
                            type="text"
                            name="firstName"
                            placeholder='Enter First Name'
                            required
                            value={formData.firstName}
                            onChange={handleChange}
                            className='focus:outline-none focus:border-blue-500 border-2 border-black rounded-md pl-3 text-lg font-thin' />
                        <div className='text-red-600 text-sm mt-1'>First Name is required</div>

                        <label className='text-xl mb-2 mt-8' htmlFor="birthDate">Birth Date</label>
                        <input
                            type="date"
                            name="birthDate"
                            required
                            value={formData.birthDate}
                            onChange={handleChange}
                            className='focus:outline-none focus:border-blue-500 border-2 border-black rounded-md pl-3 text-lg font-thin' />
                        <div className='text-red-600 text-sm mt-1'>You must be at least 13 years old</div>
                    </div>
                    <div className='w-full md:w-1/2 flex flex-col pl-0 md:pl-4'>
                        <label className='text-xl mb-2' htmlFor="lastName">Last Name</label>
                        <input
                            type="text"
                            name="lastName"
                            placeholder='Enter Last Name'
                            required
                            value={formData.lastName}
                            onChange={handleChange}
                            className='focus:outline-none focus:border-blue-500 border-2 border-black rounded-md pl-3 text-lg font-thin' />
                        <div className='text-red-600 text-sm mt-1'>Last Name must be longer than 2 characters</div>

                        <label className='text-xl mb-2 mt-8' htmlFor="gender">Gender</label>
                        <div className='flex justify-around'>
                            <div className='flex items-center mb-2'>
                                <input
                                    className='mr-2'
                                    type="radio"
                                    name="gender"
                                    value="male"
                                    checked={formData.gender === 'male'}
                                    onChange={handleChange} />
                                <label htmlFor="male">Male</label>
                            </div>
                            <div className='flex items-center mb-2'>
                                <input
                                    className='mr-2'
                                    type="radio"
                                    name="gender"
                                    value="female"
                                    checked={formData.gender === 'female'}
                                    onChange={handleChange} />
                                <label htmlFor="female">Female</label>
                            </div>
                            <div className='flex items-center mb-2'>
                                <input
                                    className='mr-2'
                                    type="radio"
                                    name="gender"
                                    value="other"
                                    checked={formData.gender === 'other'}
                                    onChange={handleChange} />
                                <label htmlFor="other">Other</label>
                            </div>
                        </div>
                        <div className='text-red-600 text-sm mt-1'>Gender is required</div>
                    </div>
                </div>

                <div className='mx-2 px-4'>
                    <div className='flex flex-col mt-4'>
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            name="email"
                            placeholder='Enter Email'
                            required
                            value={formData.email}
                            onChange={handleChange}
                            className='focus:outline-none focus:border-blue-500 border-2 pl-3 text-lg font-thin border-black rounded-md mt-2' />
                        <div className='text-red-600 text-sm mt-1'>Email is not valid</div>
                    </div>
                    <div className='flex flex-col mt-4'>
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            name="password"
                            placeholder='Enter Password'
                            required
                            value={formData.password}
                            onChange={handleChange}
                            className='focus:outline-none focus:border-blue-500 border-2 pl-3 text-lg font-thin border-black rounded-md mt-2' />
                        <div className='text-red-600 text-sm mt-1'>Password is not valid</div>
                        <div className='text-red-600 text-sm mt-1'>Minimum password length is eight characters</div>
                    </div>
                    <div className='flex flex-col mt-4'>
                        <label htmlFor="confirmPassword">Confirm Password</label>
                        <input
                            type="password"
                            name="confirmPassword"
                            placeholder='Confirm Password'
                            required
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            className='focus:outline-none focus:border-blue-500 border-2 pl-3 text-lg font-thin border-black rounded-md mt-2' />
                        <div className='text-red-600 text-sm mt-1'>Passwords don't match</div>
                    </div>

                    <div className='flex justify-end mr-3 mt-4'>
                        <button className='bg-cyan-600 rounded-md text-white text-md p-1 mb-2'>Register</button>
                    </div>

                    <div className='bg-slate-600 rounded-md text-white text-md p-1 mt-4'>
                        <hr className='border-2 border-gray-500' />
                        <p className='text-center'>Already have an account? <a href="#" className='text-blue-600'>Login</a></p>
                    </div>
                </div>
            </form>
        </>

    )
}

export default Deneme
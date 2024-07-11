import React, { useState } from 'react'
import InputField from '../components/InputField'

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email, password)
    }

    return (
        <section className='w-full px-2 py-4'>
            <form className='max-w-screen-md flex flex-col justify-center items-center m-auto gap-4'>
                <h1 className='text-2xl text-center font-semibold'>Login</h1>
                <InputField
                    label="Email: "
                    type='email'
                    placeholder="youremail@gmail.com"
                    value={email}
                    onChange={handleEmailChange}
                />
                <InputField
                    label="Password: "
                    type='password'
                    placeholder="Your@StrongPassword$$1234"
                    value={password}
                    onChange={handlePasswordChange}
                />

                <button type='submit' className='btn btn-primary' onClick={handleSubmit}>Log In</button>
            </form>
        </section>
    )
}

export default Login

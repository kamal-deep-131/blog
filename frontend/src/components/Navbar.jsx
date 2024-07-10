import React, { useState } from 'react'

const Navbar = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(true)



    return (
        <header className='shadow-md'>
            <div className="navbar px-2 py-4 bg-base-100">
                <div className="flex-1">
                    <a className="btn btn-ghost text-xl">daisyUI</a>
                </div>

                {
                    isLoggedIn ? <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img
                                    alt="Tailwind CSS Navbar component"
                                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                            </div>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <li><a>Profile</a></li>
                            <li><a>Forgot Password</a></li>
                            <li><a>Logout</a></li>
                        </ul>
                    </div> : <button className='btn btn-primary btn-outline'>Log In</button>
                }
            </div>

        </header >
    )
}

export default Navbar
import React from 'react';
import { Link } from 'react-router-dom';
import { contextStore } from '../context/context.jsx';

const Navbar = () => {
    const { user, logout } = contextStore();

    return (
        <header className='shadow-md'>
            <div className="navbar px-2 py-4 bg-base-100">
                <div className="flex-1">
                    <a className="btn btn-ghost text-xl">daisyUI</a>
                </div>
                {
                    user ? (
                        <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img
                                        alt="User Avatar"
                                        src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                                    />
                                </div>
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
                            >
                                <li><Link to={'/profile'}>Profile</Link></li>
                                <li><a>Forgot Password</a></li>
                                <li><button onClick={logout}>Logout</button></li>
                            </ul>
                        </div>
                    ) : (
                        <Link to={'/login'} className='btn btn-primary btn-outline'>Log In</Link>
                    )
                }
            </div>
        </header>
    );
};

export default Navbar;

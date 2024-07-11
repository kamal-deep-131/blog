import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {

    return (
        <section className="w-full px-4 py-6min-h-screen flex flex-col items-center justify-center">
            <div className="max-w-screen-lg w-full  border border-gray-400 rounded-lg p-8 m-8 text-center">
                <h1 className="text-5xl font-bold mb-6">404</h1>
                <h2 className="text-3xl font-semibold mb-4">Page Not Found</h2>
                <p className="text-gray-600 mb-6">The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
                <Link to={'/'} className="btn btn-primary" >
                    Go to Home
                </Link>
            </div>
        </section>
    );
};

export default NotFoundPage;

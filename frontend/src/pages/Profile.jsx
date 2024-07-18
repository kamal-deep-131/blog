import React from 'react';
import { Link } from 'react-router-dom';
import { contextStore } from '../context/context.jsx'

const Profile = () => {

    let { user } = contextStore()
    console.log(user)

    if (!user) {
        user = {
            avatar: 'https://via.placeholder.com/150',
            name: 'Kamaldeep',
            email: 'email2kamaldeep@gmail.com',
        }
    }
    const userdata = {
        avatar: 'https://via.placeholder.com/150',
        name: 'Kamaldeep',
        email: 'email2kamaldeep@gmail.com',
    };


    const blogs = [
        {
            id: 1,
            title: 'My First Blog',
            coverImage: 'https://via.placeholder.com/300x200',
            excerpt: 'This is a short excerpt of the first blog post.',
        },
        {
            id: 2,
            title: 'Another Blog Post',
            coverImage: 'https://via.placeholder.com/300x200',
            excerpt: 'This is a short excerpt of another blog post.',
        },
    ];



    return (
        <section className="w-full px-4 py-6  min-h-screen flex flex-col items-center">
            <div className="max-w-screen-lg w-full border border-gray-400 rounded-lg overflow-hidden">
                <div className="flex flex-col items-center p-6">
                    <img
                        src={'https://via.placeholder.com/150'}
                        alt={user.name}
                        className="w-32 h-32 rounded-full object-cover mb-4"
                    />
                    <h1 className="text-3xl font-bold mb-2">{user.name}</h1>
                    <p className="mb-4">{user.email}</p>
                    <Link to="/add-blog"
                        className="btn btn-primary" >
                        Add new Blog
                    </Link>
                </div>
                <div className="divider"></div>
                <div className="p-6">
                    <h2 className="text-2xl font-semibold mb-4">Your Blogs</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {blogs.map(blog => (
                            <div key={blog.id} className="card bg-base-100 shadow-xl">
                                <figure>
                                    <img src={blog.coverImage} alt={blog.title} className="w-full h-48 object-cover" />
                                </figure>
                                <div className="card-body">
                                    <h2 className="card-title">{blog.title}</h2>
                                    <p>{blog.excerpt}</p>
                                    <div className="card-actions justify-end">
                                        <button className="btn btn-primary">Read More</button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Profile;

import React from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch.jsx'

const SingleBlogPage = () => {
    const coverImage = 'https://images.unsplash.com/photo-1580757468214-c73f7062a5cb?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'

    const { slug } = useParams();
    const { data, loading, error } = useFetch(`/api/v1/blogs/single-blog/${slug}`)

    if (loading) return <p className='text-center'>Loading...</p>
    if (error) return <p className='text-center'>Error...</p>



    return (
        <>
            {
                data && <section className="w-full px-4 py-6 min-h-screen flex items-center justify-center">
                    <div className="max-w-screen-lg mx-auto  border border-gray-400 rounded-lg overflow-hidden">
                        <img
                            src={coverImage}
                            alt={data.title}
                            className="w-full h-64 sm:h-96 object-cover"
                        />
                        <div className="p-6 sm:p-8">
                            <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-center">{data.title}</h1>
                            <div className=" leading-relaxed">
                                <div dangerouslySetInnerHTML={{ __html: data.content }} />
                            </div>
                        </div>
                    </div>
                </section>
            }
        </>
    );
};

export default SingleBlogPage;

import React, { useEffect, useState } from 'react';
import slugify from 'slugify';
import axios from 'axios';
import InputField from '../components/InputField';
import { useParams, useNavigate } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
// import usePost from '../hooks/usePost';

const UpdateBlog = () => {
    const { slug } = useParams();
    const navigate = useNavigate();
    const { data: blog, loading, error } = useFetch(`/api/v1/blogs/single-blog/${slug}`);
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [generatedSlug, setGeneratedSlug] = useState('');

    useEffect(() => {
        if (blog) {
            setTitle(blog.title);
            setContent(blog.content);
            setGeneratedSlug(blog.slug);
        }
    }, [blog]);

    const handleTitleChange = (e) => {
        const newTitle = e.target.value;
        setTitle(newTitle);
        setGeneratedSlug(slugify(newTitle, { lower: true, strict: true }));
    };

    const handleContentChange = (e) => {
        setContent(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`/api/v1/blogs/update/${slug}`, { title, generatedSlug, content });
            navigate(`/blogs/single-blog/${generatedSlug}`);
        } catch (error) {
            console.error('Error updating blog:', error);
        }
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <section className="w-full px-4 py-6 min-h-screen flex flex-col items-center">
            <div className="max-w-screen-lg w-full p-8">
                <h1 className="text-3xl font-semibold text-center mb-6">Update Blog</h1>
                <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    <div className="col-span-1 flex flex-col gap-5">
                        <InputField
                            label="Title:"
                            type="text"
                            placeholder="Enter blog title"
                            value={title}
                            onChange={handleTitleChange}
                        />
                        <InputField
                            label="Slug:"
                            type="text"
                            placeholder="Generated slug"
                            value={generatedSlug}
                            readOnly
                        />

                        <button className="btn btn-primary mt-4" type="submit">
                            Update
                        </button>
                    </div>
                    <div className="form-control col-span-2">
                        <label className="label">
                            <span className="label-text">Content:</span>
                        </label>
                        <textarea
                            className="textarea textarea-bordered h-full w-full"
                            placeholder="Start writing your blog content here..."
                            value={content}
                            onChange={handleContentChange}
                        />
                    </div>
                </form>
            </div>
        </section>
    );
};

export default UpdateBlog;

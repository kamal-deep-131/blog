import React, { useState } from 'react';
import slugify from 'slugify';
import InputField from '../components/InputField';

const AddBlog = () => {
    const [title, setTitle] = useState('');
    const [slug, setSlug] = useState('');
    const [content, setContent] = useState('');

    const handleTitleChange = (e) => {
        const newTitle = e.target.value;
        setTitle(newTitle);
        setSlug(slugify(newTitle, { lower: true, strict: true }));
    };

    const handleContentChange = (e) => {
        setContent(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Title:', title);
        console.log('Slug:', slug);
        console.log('Content:', content);
        // Add your submit logic here (e.g., send data to your API)
    };

    return (
        <section className="w-full px-4 py-6  min-h-screen flex flex-col items-center">
            <div className="max-w-screen-lg w-full  p-8">
                <h1 className="text-3xl font-semibold text-center mb-6">Add New Blog</h1>
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
                            value={slug}
                            readOnly
                        />

                        <button className="btn btn-primary mt-4" type="submit">
                            Upload
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

export default AddBlog;

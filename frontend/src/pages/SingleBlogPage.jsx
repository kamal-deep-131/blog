import React from 'react';

const SingleBlogPage = () => {
    const blog = {
        coverImage: 'https://images.unsplash.com/photo-1580757468214-c73f7062a5cb?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: 'My Blog Title',
        content: `
      <p>This is the content of the blog post. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
      <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    `
    };

    return (
        <section className="w-full px-4 py-6 min-h-screen flex items-center justify-center">
            <div className="max-w-screen-lg mx-auto  border border-gray-400 rounded-lg overflow-hidden">
                {blog.coverImage && (
                    <img
                        src={blog.coverImage}
                        alt={blog.title}
                        className="w-full h-64 sm:h-96 object-cover"
                    />
                )}
                <div className="p-6 sm:p-8">
                    <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-center">{blog.title}</h1>
                    <div className=" leading-relaxed">
                        <div dangerouslySetInnerHTML={{ __html: blog.content }} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SingleBlogPage;

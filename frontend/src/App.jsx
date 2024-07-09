import React, { useEffect, useState } from 'react'
import axios from 'axios'

const App = () => {

  useEffect(() => {
    async function fetchData() {
      try {
        const { data } = await axios('/api/v1/blogs/')
        setBlogData(data)
        console.log(data)
      } catch (error) {
        console.log("Error in fetching blog Data: ", error.message)
      }
    }
    fetchData()
  }, [])

  const [blogData, setBlogData] = useState([])

  return (
    <>
      {blogData.map(blog => <div key={blog.blogID}>
        <h1>{blog.title}</h1>
        <p>{blog.content}</p>
        <code>
          {blog.author}
        </code>
      </div>)}
    </>
  )
}

export default App
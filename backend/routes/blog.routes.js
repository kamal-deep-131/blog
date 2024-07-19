import { Router } from "express";
import { Blogs } from "../models/blog.model.js";

const router = Router()

router.post('/add-blog', async (req, res) => {
    const { title, slug, content } = req.body

    if (!(title && slug && content)) {
        return res.json({ message: "Enter all fields" })
    }

    console.log(title, slug, content)

    try {
        const newBlog = new Blogs({
            title,
            slug,
            content
        })

        await newBlog.save()

        console.log(newBlog)
        return res.json({ message: "Blog added sucssesfully" })
    } catch (error) {
        console.log("Error in storing blog: ", error)
        return res.json({ message: error.message })
    }
})


//find blog
router.get('/single-blog/:slug', async (req, res) => {
    const { slug } = req.params;
    console.log(slug)
    try {
        const blog = await Blogs.findOne({ slug })
        if (!blog) {
            return res.json({ message: "Blog not found" })
        }
        return res.json(blog)
    } catch (error) {
        console.log(error)
        return res.json({ "message": "Server error" })
    }
})

export default router
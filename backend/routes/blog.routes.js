import { Router } from "express";
import { Blogs } from "../models/blog.model.js";

const router = Router()

router.post('/add-blog', async (req, res) => {
    const { title, slug, content } = req.body

    if (!(title && slug && content)) {
        return res.json({ message: "Enter all fields" })
    }


    try {
        const newBlog = new Blogs({
            title,
            slug,
            content
        })

        await newBlog.save()

        return res.json({ message: "Blog added sucssesfully" })
    } catch (error) {
        console.log("Error in storing blog: ", error)
        return res.json({ message: error.message })
    }
})


//find blog on the basis of slug
router.get('/single-blog/:slug', async (req, res) => {
    const { slug } = req.params;

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

//delete route 

router.get('/delete/:slug', async (req, res) => {
    const { slug } = req.params
    try {
        const isBlogPresent = await Blogs.findOne({ slug })
        if (!isBlogPresent) {
            return res.json({ message: "Requested blog didn't prsent" })
        }
        else {
            const blog = await Blogs.deleteOne({ slug })
            return res.json({ message: "Deleted Sucessfully" })
        }

    } catch (error) {
        console.log("Error in deleting: ", error)
        res.json({ Message: "error in server" })
    }
})

export default router
import { Router } from "express";
import { Blogs } from "../models/blog.model.js";

const router = Router();

// Add new blog
router.post('/add-blog', async (req, res) => {
    const { title, slug, content } = req.body;

    if (!(title && slug && content)) {
        return res.status(400).json({ message: "Please enter all fields" });
    }

    try {
        const newBlog = new Blogs({ title, slug, content });
        await newBlog.save();
        return res.status(201).json({ message: "Blog added successfully" });
    } catch (error) {
        console.error("Error in storing blog:", error);
        return res.status(500).json({ message: error.message });
    }
});

// Find blog by slug
router.get('/single-blog/:slug', async (req, res) => {
    const { slug } = req.params;

    try {
        const blog = await Blogs.findOne({ slug });
        if (!blog) {
            return res.status(404).json({ message: "Blog not found" });
        }
        return res.status(200).json(blog);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Server error" });
    }
});

// Delete blog by slug
router.delete('/delete/:slug', async (req, res) => {
    const { slug } = req.params;

    try {
        const blog = await Blogs.findOne({ slug });
        if (!blog) {
            return res.status(404).json({ message: "Requested blog not found" });
        }
        await Blogs.deleteOne({ slug });
        return res.status(200).json({ message: "Deleted successfully" });
    } catch (error) {
        console.error("Error in deleting:", error);
        return res.status(500).json({ message: "Server error" });
    }
});

// Update blog by slug
router.put('/update/:slug', async (req, res) => {
    const { slug } = req.params;
    const { title, generatedSlug, content } = req.body;


    if (!title && !generatedSlug && !content) {
        return res.status(400).json({ message: "Please provide title or content to update" });
    }

    try {
        const blog = await Blogs.findOne({ slug });
        if (!blog) {
            return res.status(404).json({ message: "Blog not found" });
        }
        const newSlug = generatedSlug

        blog.title = title || blog.title;
        blog.content = content || blog.content;
        blog.slug = newSlug || blog.slug
        await blog.save();
        return res.status(200).json({ message: "Blog updated successfully", blog });
    } catch (error) {
        console.error("Error in updating blog:", error);
        return res.status(500).json({ message: error.message });
    }
});

export default router;

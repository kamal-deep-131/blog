import { Router } from "express";

const router = Router()

router.post('/add-blog', async (req, res) => {
    const { title, slug, content } = req.body

    if (!(title && slug && content)) {
        return res.json({ message: "Enter all fields" })
    }

    console.log(title, slug, content)

    return res.send("Ok")
})

export default router
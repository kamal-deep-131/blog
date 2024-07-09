import { Router } from "express";

const router = Router()

const blogData = [
    {
        "blogID": 1,
        "title": "The Journey to Personal Growth",
        "author": "Kamaldeep Singh",
        "content": "In this blog post, I share insights from my journey of overcoming heartbreak and achieving success."
    },
    {
        "blogID": 2,
        "title": "The Power of Resilience",
        "author": "Kamaldeep Singh",
        "content": "Discover how resilience can help you overcome obstacles and achieve your goals."
    },
    {
        "blogID": 3,
        "title": "Strategies for Professional Excellence",
        "author": "Kamaldeep Singh",
        "content": "Learn about effective strategies to excel in your professional life and reach new heights."
    },
    {
        "blogID": 4,
        "title": "Balancing Work and Personal Life",
        "author": "Kamaldeep Singh",
        "content": "Explore tips and techniques to maintain a healthy balance between your work and personal life."
    },
    {
        "blogID": 5,
        "title": "Embracing Change for Success",
        "author": "Kamaldeep Singh",
        "content": "Understand the importance of adaptability and how embracing change can lead to success."
    }
]


router.get('', (req, res) => {
    return res.json(blogData)
})

export default router
import { model, Schema } from "mongoose";

const blogSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
        },
        slug: {
            type: String,
            required: true,
        },
        content: {
            type: String,
            required: true,
        }
    }
    , { timestamps: true }
)

export const Blogs = model("Blogs", blogSchema)
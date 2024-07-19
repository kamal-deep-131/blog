import React, { useState } from 'react'
import axios from 'axios'

const usePost = (url) => {
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)

    const postData = async (postData) => {
        try {
            const response = await axios.post(url, data)
            setData(response.data)
        } catch (error) {
            setError(error)
        }
        finally {
            setIsLoading(false)
        }
    }

    return { postData, error, isLoading }
}

export default usePost
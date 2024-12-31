import { useEffect, useState } from "react"
import { getUsername } from "../services/auth.service"


export const useLogin = () => {
    const [username, setUsername] = useState("")

    useEffect(() => {
        const accessToken = localStorage.getItem("accessToken")
        if (accessToken) {
            setUsername(getUsername(accessToken))
        } else {
            window.location.href = '/login'
        }
    }, [])

    return username
}


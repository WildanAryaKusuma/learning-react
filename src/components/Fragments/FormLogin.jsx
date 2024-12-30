import { useEffect, useInsertionEffect, useRef, useState } from "react"
import Button from "../Elements/Button"
import InputForm from "../Elements/Input"
import { login } from "../../services/auth.service"

const FormLogin = () => {
    const [loginFailed, setLoginFailed] = useState("")

    const handleLogin = (event) => {
        event.preventDefault()

        const data = {
            username: event.target.username.value,
            password: event.target.password.value, 
            expiresInMins: 60
        }

        login(data, (statusCode, res) => {
            if(statusCode) {
                localStorage.setItem('accessToken', res)
                console.log('accessToken masuk ke localStorage')
                setLoginFailed("")
                window.location.href = '/products'
            } else {
                console.log(res.response.data.message)
                setLoginFailed(res.response.data.message)
            }
        })

    }

    const usernameRef = useRef(null)

    useEffect(() => {
        usernameRef.current.focus()
    }, [])

    return (
        <form onSubmit={handleLogin}>
            
            { loginFailed && <p className="text-red-500 text-center -mt-5 mb-2">{loginFailed}</p> }
            <InputForm
                label="Username"
                type="text"
                name="username"
                placeholder="Emilys"
                ref={usernameRef}
            />
            <InputForm
                label="Password"
                type="password"
                name="password"
                placeholder="********"
            />
            <Button classname="bg-blue-600 w-full" type="submit">Login</Button>
        </form>
    )
}

export default FormLogin
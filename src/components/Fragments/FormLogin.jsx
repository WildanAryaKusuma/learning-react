import Button from "../Elements/Button"
import InputForm from "../Elements/Input"

const FormLogin = () => {
    const handleLogin = (event) => {
        event.preventDefault()

        const person = {
            email: event.target.email.value,
            password: event.target.password.value
        }

        localStorage.setItem('person', JSON.stringify(person))

        console.log("successfuly store data to local storage")

        window.location.href = '/products'
    }

    return (
        <form onSubmit={handleLogin}>
            <InputForm
                label="Email"
                type="email"
                name="email"
                placeholder="example@gmail.com"
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
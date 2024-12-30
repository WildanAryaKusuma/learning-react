import Button from "../Elements/Button"
import InputForm from "../Elements/Input"

const FormRegister = () => {
    return (
        <form action="" method="post">
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
            <InputForm
                label="Confirm Password"
                type="password"
                name="confirmPassword"
                placeholder="********"
            />
            <Button classname="bg-blue-600 w-full">Buat Akun</Button>
        </form>
    )
}

export default FormRegister
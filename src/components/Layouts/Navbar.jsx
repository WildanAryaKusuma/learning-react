import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { useLogin } from "../../hooks/useLogin"
import Button from "../Elements/Button"

const Navbar = () => {
    const username = useLogin()
    const [totalCart, setTotalCart] = useState(0) 
    const cart = useSelector((state) => state.cart.data)

    useEffect(() => {
        const sum = cart.reduce((acc, item) => {
            return acc + item.qty
        }, 0)
        setTotalCart(sum)
    }, [cart])

    const handleLogout = () => {
        localStorage.removeItem('accessToken')
        window.location.href = '/'
    }

    return (
        <div className="flex justify-end h-16 bg-blue-600 text-white items-center px-10">
            {username}
            <Button classname="ml-4 bg-black" onClick={handleLogout}>Logout</Button>
            <div className="flex items-center bg-gray-800 p-2 rounded-md ml-5">
                {totalCart}
            </div>
        </div>
    )
}

export default Navbar
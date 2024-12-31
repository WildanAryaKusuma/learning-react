import { useContext, useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { useLogin } from "../../hooks/useLogin"
import Button from "../Elements/Button"
import { DarkMode } from "../../context/darkMode"
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";
import { CiShoppingCart } from "react-icons/ci";
import { useTotalPrice } from "../../context/TotalPriceContext"

const Navbar = () => {
    const username = useLogin()
    const [totalCart, setTotalCart] = useState(0)
    const { isDarkMode, setIsDarkMode } = useContext(DarkMode)
    const cart = useSelector((state) => state.cart.data)
    const {total} = useTotalPrice()

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

    const formattedTotal = total.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2, // Set jumlah minimum angka desimal
        maximumFractionDigits: 2, // Set jumlah maksimum angka desimal
    });

    return (
        <div className="flex justify-end h-16 bg-blue-600 text-white items-center px-10">
            {username}
            <Button classname="ml-4 bg-black" onClick={handleLogout}>Logout</Button>
            <div className="flex items-center bg-gray-800 p-2 rounded-md mx-5">
                <CiShoppingCart style={{ marginRight: '3px', fontSize: '1.5rem' }} /> {totalCart} | Total Price : {formattedTotal}
            </div>
            <Button classname="bg-black p-2 text-white rounded"
                onClick={() => setIsDarkMode(!isDarkMode)}
            >
                {isDarkMode
                    ? <MdOutlineLightMode />
                    : <MdOutlineDarkMode />
                }
            </Button>
        </div>
    )
}

export default Navbar
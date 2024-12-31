import { useContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLogin } from "../../hooks/useLogin";
import Button from "../Elements/Button";
import { DarkMode } from "../../context/darkMode";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";
import { CiShoppingCart } from "react-icons/ci";
import { useTotalPrice } from "../../hooks/useTotalPrice";

const Navbar = () => {
    const username = useLogin();
    const [totalCart, setTotalCart] = useState(0);
    const { isDarkMode, setIsDarkMode } = useContext(DarkMode);
    const cart = useSelector((state) => state.cart.data);
    const { total } = useTotalPrice();

    useEffect(() => {
        const sum = cart.reduce((acc, item) => acc + item.qty, 0);
        setTotalCart(sum);
    }, [cart]);

    const handleLogout = () => {
        localStorage.removeItem("accessToken");
        window.location.href = "/";
    };

    const formattedTotal = (total || 0).toLocaleString("en-US", {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    });

    return (
        <nav className="flex items-center justify-between bg-blue-800 text-white px-6 py-3">
            <span className="text-lg font-semibold">{username}</span>
            <div className="flex items-center space-x-4">
                <Button classname="bg-gray-900 hover:bg-gray-700 px-4 py-2 rounded" onClick={handleLogout}>
                    Logout
                </Button>
                <div className="flex items-center bg-gray-700 px-3 py-2 rounded-md text-sm space-x-2">
                    <CiShoppingCart className="text-xl" />
                    <span>{totalCart}</span>
                    <span className="text-gray-300">|</span>
                    <span>{formattedTotal}</span>
                </div>
                <button
                    className="bg-gray-900 hover:bg-gray-700 p-2 rounded-full"
                    onClick={() => setIsDarkMode(!isDarkMode)}
                >
                    {isDarkMode ? (
                        <MdOutlineLightMode className="text-yellow-400 text-lg" />
                    ) : (
                        <MdOutlineDarkMode className="text-gray-300 text-lg" />
                    )}
                </button>
            </div>
        </nav>
    );
};

export default Navbar;

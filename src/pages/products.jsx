import React, { useEffect, useState } from 'react'
import CardProduct from '../components/Fragments/CardProduct'
import Button from '../components/Elements/Button'

const products = [
    {
        id: 1,
        name: "Air Force 1",
        image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/eaf524f7-a9f7-4f70-a438-1b0480eb2540/NIKE+COURT+VISION+LO.png",
        price: 1549000,
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est dolorem, voluptatibus animi nisi cupiditate at qui eos impedit"
    },
    {
        id: 2,
        name: "Air Force 1 '07 LV8",
        image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/00366317-b552-4167-96f5-824ce1a4ea74/AIR+FORCE+1+%2707+LV8+1.png",
        price: 2455000,
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est dolorem, voluptatibus animi nisi cupiditate at qui eos impedit"
    },
    {
        id: 3,
        name: "Nike Giannis",
        image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/3042f129-ff49-4328-80cb-62b8ed05e9bf/GIANNIS+IMMORTALITY+4+EP.png",
        price: 1199000,
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est dolorem, voluptatibus animi nisi cupiditate at qui eos impedit"
    },
]

const ProductsPage = () => {
    const [cart, setCart] = useState([])
    const [totalPrice, setTotalPrice] = useState(0)

    useEffect(() => { // * mounting untuk mengambil data cart dari localstorage, kalau gaada buat setCart menjadi []
        setCart(JSON.parse(localStorage.getItem("cart")) || [])
    }, [])

    useEffect(() => {
        if (cart.length > 0 ) { // ? mengapa kondisi ini bisa menyimpan data ke localstorage walau di reload ? 
            const sum = cart.reduce((acc, item) => { // bagaimana cara kerja fungsi ini?
                const product = products.find((product) => product.id === item.id)
                return acc + product.price * item.qty
            }, 0)

            setTotalPrice(sum)

            localStorage.setItem("cart", JSON.stringify(cart))
        }
    }, [cart])

    const getPerson = JSON.parse(localStorage.getItem('person'))
    const handleLogout = () => {
        localStorage.removeItem('person')
        window.location.href = '/'
    }

    const handleAddToCart = (id) => {
        if (cart.find(item => item.id === id)) {
            setCart(
                cart.map(item => item.id === id
                    ? { ...item, qty: item.qty + 1 }
                    : item)
            )
        } else {
            setCart([...cart, { id, qty: 1 }])
        }
    }

    return (
        <>
            <div className="flex justify-end h-16 bg-blue-600 text-white items-center px-10">
                {getPerson.email}
                <Button classname="ml-4 bg-black" onClick={handleLogout}>Logout</Button>
            </div>
            <div className="flex justify-center py-5">
                <div className="w-4/6 flex flex-wrap">
                    {products.map(product => (
                        <CardProduct key={product.id}>
                            <CardProduct.Header image={product.image} />
                            <CardProduct.Body name={product.name}>
                                {product.description}
                            </CardProduct.Body>
                            <CardProduct.Footer id={product.id} price={product.price} handleAddToCart={handleAddToCart} />
                        </CardProduct>
                    ))}
                </div>
                <div className="w-2/6">
                    <h1 className="text-3xl font-bold text-blue-600 ml-5 mb-3">Cart</h1>
                    <table className="table-auto text-left border-separate border-spacing-x-5">
                        <thead>
                            <tr>
                                <th>Product</th>
                                <th>Price</th>
                                <th>QTY</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cart.map((item) => {
                                const product = products.find((product) => product.id === item.id)

                                return (
                                    <tr key={item.id}>
                                        <td>{product.name}</td>
                                        <td>Rp {product.price.toLocaleString('id-ID', { styles: 'currency', currency: 'IDR' })}</td>
                                        <td>{item.qty}</td>
                                        <td>Rp {(item.qty * product.price).toLocaleString('id-ID', { styles: 'currency', currency: 'IDR' })}</td>
                                    </tr>
                                )
                            })}
                            <tr>
                                <td colSpan={3}><b>Total Price</b></td>
                                <td><b>Rp {totalPrice.toLocaleString('id-ID', { styles: 'currency', currency: 'IDR' })}</b></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default ProductsPage
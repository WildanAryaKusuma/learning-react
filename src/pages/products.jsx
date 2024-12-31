import React, { useContext, useEffect, useState } from 'react'
import CardProduct from '../components/Fragments/CardProduct'
import { getProducts } from '../services/product.service'
import { useLogin } from '../hooks/useLogin'
import TableCart from '../components/Fragments/TableCart'
import Navbar from '../components/Layouts/Navbar'
import { DarkMode } from '../context/darkMode'

const ProductsPage = () => {
    const [products, setProducts] = useState([])
    const { isDarkMode } = useContext(DarkMode)
    useLogin()

    useEffect(() => {
        getProducts((data) => {
            setProducts(data.products)
        })
    }, [])

    return (
        <>
            <Navbar />
            <div className={`flex justify-center py-5 ${isDarkMode ? 'bg-slate-900' : ''}`}>
                {/* Produk Section */}
                <div className="w-4/6 flex flex-wrap">
                    {products.length > 0 &&
                        products.map(product => (
                            <CardProduct key={product.id}>
                                <CardProduct.Header id={product.id} image={product.images[0]} />
                                <CardProduct.Body name={product.title}>
                                    {product.description}
                                </CardProduct.Body>
                                <CardProduct.Footer id={product.id} price={product.price} />
                            </CardProduct>
                        ))
                    }
                </div>

                {/* Cart Section */}
                <div className="w-2/6">
                    <div
                        className={`sticky top-5  ${isDarkMode ? `bg-gray-800` : `bg-white`} shadow-lg rounded-md p-4`}
                        style={{
                            maxHeight: '80vh', // Mengatur tinggi maksimal
                            overflowY: 'auto', // Tambahkan scroll jika konten terlalu panjang
                            zIndex: 10
                        }}
                    >
                        <h1 className={`text-3xl font-bold ${isDarkMode ? `text-blue-300` : `text-blue-800`} mb-3`}>Cart</h1>
                        <TableCart products={products} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductsPage

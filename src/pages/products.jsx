import React, { useEffect, useState } from 'react'
import CardProduct from '../components/Fragments/CardProduct'
import { getProducts } from '../services/product.service'
import { useLogin } from '../hooks/useLogin'
import TableCart from '../components/Fragments/TableCart'
import Navbar from '../components/Layouts/Navbar'

const ProductsPage = () => {
    const [products, setProducts] = useState([])
    useLogin()

    useEffect(() => {
        getProducts((data) => {
            setProducts(data.products)
        })
    }, [])

    return (
        <>
            <Navbar />
            <div className="flex justify-center py-5">
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
                <div className="w-2/6">
                    <h1 className="text-3xl font-bold text-blue-600 ml-5 mb-3">Cart</h1>
                    <TableCart products={products} />
                </div>
            </div>
        </>
    )
}

export default ProductsPage
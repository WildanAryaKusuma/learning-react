import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getDetailProduct } from '../services/product.service'

const DetailProductPage = () => {
    const { id } = useParams()
    const [product, setProduct] = useState({})

    useEffect(() => {
        getDetailProduct(id, (data) => {
            setProduct(data)
        })
    }, [id])

    // console.log(product)

    return (
        <>
            <div className="w-full min-h-screen flex flex-col justify-center items-center">
                <div className="w-full max-w-xl mb-4">
                    <Link
                        to={'/products'}
                        className="inline-flex items-center w-full px-4 py-2 mt-5 text-sm font-medium text-gray-600 transition-colors hover:text-gray-900"
                    >
                        <svg
                            className="w-4 h-4 mr-2"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M10 19l-7-7m0 0l7-7m-7 7h18"
                            />
                        </svg>
                        Kembali
                    </Link>
                </div>
                {Object.keys(product).length > 0 && (
                    <div className="flex font-sans max-w-xl bg-white rounded-lg shadow-lg">
                        <div className="flex-none w-48 relative">
                            <img
                                src={product.images}
                                alt=""
                                className="absolute inset-0 w-full h-full object-cover rounded-l-lg"
                                loading="lazy"
                            />
                        </div>
                        <form className="flex-auto p-6">
                            <div className="flex flex-wrap">
                                <h1 className="flex-auto text-lg font-semibold text-slate-900">
                                    {product.title}
                                </h1>
                                <div className="text-lg font-semibold text-slate-500">$ {product.price}</div>
                                <div className="w-full flex-none text-md font-medium text-slate-700 mt-2">
                                    {product.rating}/5 | Stock: {product.stock}
                                </div>
                                <div className="w-full flex-none text-sm font-medium text-slate-700 mt-2">
                                    {product.availabilityStatus}
                                </div>
                            </div>
                            <div className="flex items-baseline mt-4 mb-6 pb-6 border-b border-slate-200">
                                <div className="space-x-2 flex text-sm">
                                    {product.description}
                                </div>
                            </div>
                            <div className="flex flex-col space-y-4 mb-6 text-sm font-medium">
                                <div className="flex space-x-4">
                                    <button
                                        className="h-10 px-6 font-semibold rounded-md bg-black text-white"
                                        type="submit"
                                    >
                                        Buy now
                                    </button>
                                    <button
                                        className="h-10 px-6 font-semibold rounded-md border border-slate-200 text-slate-900"
                                        type="button"
                                    >
                                        Add to bag
                                    </button>
                                    <button
                                        className="flex-none flex items-center justify-center w-9 h-9 rounded-md text-slate-300 border border-slate-200"
                                        type="button"
                                        aria-label="Like"
                                    >
                                        <svg width={20} height={20} fill="currentColor" aria-hidden="true">
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                                            />
                                        </svg>
                                    </button>
                                </div>
                                <p className="text-sm text-slate-700">
                                    {product.warrantyInformation}, {product.shippingInformation}
                                </p>
                            </div>
                        </form>
                    </div>
                )}
            </div>
        </>
    );


}

export default DetailProductPage
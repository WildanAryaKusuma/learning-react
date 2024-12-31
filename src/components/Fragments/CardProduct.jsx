import React from 'react'
import Button from '../Elements/Button'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../redux/slices/cartSlice'


const CardProduct = (props) => {
    const { children } = props

    return (
        <div className="flex flex-col justify-between w-full max-w-xs bg-gray-800 border border-gray-700 rounded-lg shadow mx-2 my-2">
            {children}
        </div>
    )
}

const Header = ({ id, image }) => {
    return (
        <Link to={`/product/${id}`}>
            <img src={image} alt=""
                className="p-8 rounded-t-lg h-72 w-full object-cover" />
        </Link>
    )
}

const Body = (props) => {
    const { children, name } = props

    return (
        <div className="h-full px-5 pb-5">
            <a href="#" className="">
                <h5 className="text-xl font-semibold tracking-tight text-white">{name}</h5>
                <p className="text-s text-white">
                    {children.substring(0, 100)}...
                </p>
            </a>
        </div>
    )
}

const Footer = (props) => {
    const { price, id } = props
    const dispatch = useDispatch()

    return (
        <div className="flex items-center justify-between px-5 pb-5">
            <span className="text-xl font-bold text-white">$ {price.toLocaleString('en-US', { styles: 'currency', curreny: 'USD' })}</span>
            <Button classname="bg-blue-600" onClick={() => dispatch(addToCart({ id, qty: 1 }))}>Add to cart</Button>
        </div>
    )
}

CardProduct.Header = Header
CardProduct.Body = Body
CardProduct.Footer = Footer

export default CardProduct
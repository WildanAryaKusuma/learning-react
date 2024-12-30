import { Link } from "react-router-dom"

const AuthLayouts = (props) => {
    const { children, title, type } = props

    return (
        <div className="flex justify-center items-center min-h-screen">
            <div className="w-full max-w-xs">
                <h1 className="text-3xl font-bold text-blue-600 mb-2">{title}</h1>
                <p className="font-medium text-slate-500 mb-8">
                    Welcome, please input your details
                </p>
                {children}

                {type !== "login"
                    ?
                    <p className="mt-5 text-sm text-center">Have an account? <Link to="/login" className="font-bold text-blue-600">Login!</Link></p>
                    :
                    <p className="mt-5 text-sm text-center">Doesn't have an account? <Link to="/register" className="font-bold text-blue-600">Create your account!</Link></p>
                }
            </div>
        </div>
    )
}

export default AuthLayouts
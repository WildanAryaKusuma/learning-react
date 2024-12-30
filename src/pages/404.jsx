import { useRouteError } from "react-router-dom"

const ErrorPage = () => {
    const error = useRouteError()

    return (
        <div className="flex flex-col justify-center items-center min-h-screen">
            <h1 className="text-3xl font-bold">Oops!</h1>
            <p className="mt-5 mb-3 text-xl">Unexpected error, something not found</p>
            <p className="text-lg">{error.statusText || error.message}</p>
        </div>
    )
}

export default ErrorPage
const Input = (props) => {
    const { placeholder, name } = props
        
    return (
        <input
            type={name}
            name={name}
            className="text-sm border rounded w-full py-2 px-3 text-slate-700 placeholder: opacity-85"
            placeholder={placeholder}
            id={name}
        />
    )
}

export default Input
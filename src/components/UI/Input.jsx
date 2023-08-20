const Input = ({ placeholder, type, onChange, name, style, accept, value }) => {
  return (
    <div>
      <input
        className={`border border-gray-600 w-full text-2xl rounded-lg mb-8 px-3 py-2 ${style}`}
        placeholder={placeholder}
        type={type}
        onChange={onChange}
        name={name}
        accept={accept}
        value={value}
      />
    </div>
  )
}

export default Input

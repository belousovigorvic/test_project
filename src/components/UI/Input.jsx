const Input = ({ placeholder, type, onChange, name, style, accept, value, minLength, maxLength }) => {
  return (
    <div>
      <input
        className={`border border-gray-600 text-2xl w-input-width  rounded-lg mb-8 px-3 py-2 ${style}`}
        placeholder={placeholder}
        type={type}
        onChange={onChange}
        name={name}
        accept={accept}
        value={value}
        required
        minLength={minLength}
        maxLength={maxLength}
      />
    </div>
  )
}

export default Input

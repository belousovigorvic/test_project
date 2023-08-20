const Button = ({ children, styles, handleCLick }) => {
  return (
    <button
    onClick={handleCLick}
      className={`uppercase h-12 text-base px-8 rounded-md bg-custom-violet hover:shadow-custom-violet shadow-xl transition-all ${styles}`}
    >
      {children}
    </button>
  )
}

export default Button

const Button = ({ children, styles, handleCLick }) => {
  return (
    <button
    onClick={handleCLick}
      className={`uppercase h-12 text-base px-8 rounded-md bg-custom-violet active:text-white active:shadow-none active:bg-custom-violet-dark active:border-custom-violet-dark hover:shadow-custom-violet shadow-xl transition-all ${styles}`}
    >
      {children}
    </button>
  )
}

export default Button

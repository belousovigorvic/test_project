import searchIcon from '../../../assets/images/search-icon.svg'
import { useRef, useState } from 'react'

const Search = () => {
  const inputRef = useRef(null)
  const [isIconVisible, setIsIconVisible] = useState(true)

  return (
    <div
      className={`w-80 h-14 flex items-center border-2 transition-colors border-gray-400 rounded-md ${
        isIconVisible ? '' : 'border-custom-violet-dark'
      }`}
      onClick={() => {
        inputRef.current.focus()
        setIsIconVisible(false)
      }}
    >
      {isIconVisible && (
        <img
          className="w-6 h-6 m-4 mr-0 cursor-pointer"
          src={searchIcon}
          alt="search-icon"
        />
      )}
      <input
        inputMode="search"
        ref={inputRef}
        className="focus:caret-custom-violet-dark flex-1 p-4"
        type="search"
        placeholder="Placeholder"
        onFocus={() => {
          setIsIconVisible(false) // Скрываем иконку при фокусе на инпуте
        }}
        onBlur={() => {
          setIsIconVisible(true) // Показываем иконку при потере фокуса инпута
        }}
      />
    </div>
  )
}

export default Search

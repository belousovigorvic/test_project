import { useState } from "react"

const CheckBox = () => {
  const [isChecked, setIsChecked] = useState(false) 

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked) 
  }

  return (
    <div className="flex items-center mb-8">
      <input
        id="my_checkbox"
        className="hidden"
        type="checkbox"
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
      <label
        className="
          w-8 h-8 border-2 border-custom-violet rounded-md cursor-pointer
          flex items-center justify-center
          group
        "
        htmlFor="my_checkbox"
      >
        {isChecked && (
          <span className="text-custom-green text-xl text-custom-violet">&#10003;</span>
        )}
      </label>
      <label className="text-gray-500 text-2xl ml-2" htmlFor="my_checkbox">
        Запомнить меня
      </label>
    </div>
  )
}

export default CheckBox

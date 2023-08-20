import { useEffect, useState } from 'react'
import cross from '../../assets/images/cross.svg'
import classes from './RegLog.module.css'
import Log from './log/Log'
import Reg from './reg/Reg'

const RegLog = ({ handleClick, selectData }) => {
  const log = 'log'
  const reg = 'reg'

  const [activeMenu, setActiveMenu] = useState(selectData)

  useEffect(() => {
    console.log(selectData)
  }, [])

  const handleActiveClick = menu => {
    setActiveMenu(menu)
  }

  return (
    <div className="relative rounded-lg max-w-lg m-auto px-12 pt-16 pb-14">
      <img
        onClick={handleClick}
        className="absolute top-7 right-14 h-6 w-6 cursor-pointer"
        src={cross}
        alt="cross"
      />
      <div className="border-b-2 border-gray-500 pb-1">
        <span
          onClick={() => {
            handleActiveClick(log)
          }}
          className={`${
            activeMenu === log ? classes.active : ''
          } text-2xl mr-8 cursor-pointer`}
        >
          Вход
        </span>
        <span
          onClick={() => {
            handleActiveClick(reg)
          }}
          className={`${
            activeMenu === reg ? classes.active : ''
          } text-2xl cursor-pointer`}
        >
          Регистрация
        </span>
      </div>
      {activeMenu === log ? <Log /> : <Reg />}
    </div>
  )
}

export default RegLog

import Button from '../UI/Button.jsx'
import Logo from './logo/Logo'
import Search from './search/Search'

const Header = ({ handleCLick, sendSelectData }) => {
  const log = 'log'
  const reg = 'reg'

  const selectMenu = name => {
    sendSelectData(name)
  }

  return (
    <div className="flex items-center justify-between">
      <Logo />
      <Search />
      <div>
        <Button
          handleCLick={() => {
            handleCLick()
            selectMenu(log)
          }}
          styles={
            'text-black mr-4 bg-transparent border-2 border-custom-violet hover:bg-custom-violet hover:text-white'
          }
        >
          Войти
        </Button>
        <Button
          handleCLick={() => {
            handleCLick()
            selectMenu(reg)
          }}
          styles={'text-white'}
        >
          Регистрация
        </Button>
      </div>
    </div>
  )
}

export default Header

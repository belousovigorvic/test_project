import logoPicture from '../../../assets/images/logo.svg'

const Logo = () => {
  return (
    <div id="header">
      <div id="header__logo" className='flex items-center'>
        <img src={logoPicture} alt="logoPicture" />
        <div>
          <h1 className="font-medium text-xl">MangoRead</h1>
          <p className="text-base text-gray-400">Читай мангу с нами</p>
        </div>
      </div>
    </div>
  )
}

export default Logo
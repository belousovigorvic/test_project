import { useState, useEffect } from 'react'
import Button from '../../UI/Button.jsx'
import CheckBox from '../../UI/CheckBox.jsx'
import Input from '../../UI/Input.jsx'
import { signInUser } from '../../../store/userSlice.js'
import { useDispatch, useSelector } from 'react-redux'

const Log = () => {
  const dispatch = useDispatch()

  const [data, setData] = useState({
    username: '',
    password: ''
  })

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setData(prev => ({
      ...prev, 
      [name]: value 
    }));
  }

  const handleSubmitForm = (e) => {
    e.preventDefault()
    dispatch(signInUser(data))
  }

  useEffect(() => {
    console.log(data);
  }, [data])

  return (
    <form onSubmit={handleSubmitForm} className='flex flex-col mt-11'>
      <Input placeholder={'Username'} onChange={handleChangeInput} name={'username'}/>
      <Input placeholder={'Password'} type={'password'} onChange={handleChangeInput} name={'password'}/>
      <div>
        <CheckBox />
      </div>
      <Button styles={'text-white'}>Вход</Button>
    </form>
  )
}

export default Log

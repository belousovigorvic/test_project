import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { signUpUser } from '../../../store/userSlice.js'
import Input from '../../UI/Input.jsx'
import Button from '../../UI/Button.jsx'
import userPic from '../../../assets/images/user.png'
import loader from '../../../assets/images/loader.gif'

const Reg = () => {
  const dispatch = useDispatch()
  const { signUpResponse, signUpLoading, signUpError } = useSelector(
    state => state.user
  )

  const [data, setData] = useState({
    image_file: null,
    username: '',
    nickname: '',
    password: ''
  })

  const handleSubmitForm = e => {
    e.preventDefault()
    dispatch(signUpUser(data))
  }

  const handleImageChange = e => {
    const file = e.target.files[0]
    setData(prevData => ({
      ...prevData,
      image_file: file
    }))
  }

  const handleChangeInput = e => {
    const { name, value } = e.target
    setData(prevData => ({
      ...prevData,
      [name]: value
    }))
  }

  return (
    <form className="flex flex-col" onSubmit={handleSubmitForm}>
      <img
        className="w-44 h-44 m-auto mt-10 mb-5 cursor-pointer object-cover rounded-full"
        src={data.image_file ? URL.createObjectURL(data.image_file) : userPic}
        alt="user-pic"
      />
      <label className="uppercase text-center font-normal text-base mb-5">
        Добавить фото
        <input
          type="file"
          className="hidden"
          onChange={handleImageChange}
          name="image_file"
          accept="image/*"
          required
        />
      </label>
      {signUpLoading ? <img className='w-8 h-8 m-auto mb-2' src={loader}/> : <span
        className={`${
          signUpResponse ? 'text-green-800' : 'text-red-800'
        } font-700  text-xl`}
      >
        {signUpResponse ? signUpResponse.message : signUpError}
      </span>}
      <Input
        value={data.username}
        placeholder="Username"
        onChange={handleChangeInput}
        type="text"
        name="username"
        minLength={10}
        maxLength={50}
      />
      <Input
        value={data.nickname}
        placeholder="Nickname"
        onChange={handleChangeInput}
        type="text"
        name="nickname"
        minLength={10}
        maxLength={60}
      />
      <Input
        value={data.password}
        placeholder="Password"
        onChange={handleChangeInput}
        type="password"
        name="password"
        minLength={8}
        maxLength={40}
      />
      <Button styles="text-white">Регистрация</Button>
    </form>
  )
}

export default Reg

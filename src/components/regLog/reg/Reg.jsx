import Input from '../../UI/Input.jsx'
import Button from '../../UI/Button.jsx'
import userPic from '../../../assets/images/user.png'
import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { signUpUser } from '../../../store/userSlice.js'

// Import statements...

const Reg = () => {
  const dispatch = useDispatch()

  const [data, setData] = useState({
    image_file: null,
    username: '',
    nickname: '',
    password: ''
  })

  const handleSubmitForm = async e => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('image_file', data.img);
    formData.append('username', data.username);
    formData.append('nickname', data.nickname);
    formData.append('password', data.password);
  
    try {
      await dispatch(signUpUser(formData));
    } catch (error) {
      console.error("Registration error:", error);
    }
  };

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

  useEffect(() => {
    console.log(data);
  }, [data])

  return (
    <form className="flex flex-col" onSubmit={handleSubmitForm}>
      <img
        className="w-44 h-44 m-auto mt-10 mb-5 cursor-pointer"
        src={data.img ? URL.createObjectURL(data.img) : userPic}
        alt="user-pic"
      />
      <label className="uppercase text-center font-normal text-base mb-10">
        Добавить фото
        <input
          type="file"
          onChange={handleImageChange}
          name="image_file"
          accept="image/*"
        />
      </label>
      <Input
        value={data.username}
        placeholder="Username"
        onChange={handleChangeInput}
        type="text"
        name="username"
      />
      <Input
        value={data.nickname}
        placeholder="Nickname"
        onChange={handleChangeInput}
        type="text"
        name="nickname"
      />
      <Input
        value={data.password}
        placeholder="Password"
        onChange={handleChangeInput}
        type="password"
        name="password"
      />
      <Button styles="text-white">Регистрация</Button>
    </form>
  )
}

export default Reg

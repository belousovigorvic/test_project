import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const BASE_URL = import.meta.env.VITE_BASE_URL
const SIGN_IN = import.meta.env.VITE_SIGN_IN
const SIGN_UP = import.meta.env.VITE_SIGN_UP

export const signUpUser = createAsyncThunk('user/signup', async data => {
  const { image_file, username, nickname, password } = data
  const response = await axios.post(BASE_URL + SIGN_UP, {
    image_file: image_file,
    username: username,
    nickname: nickname,
    password: password
  }, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  })
  console.log(response)
  return response.data
})

export const signInUser = createAsyncThunk('user/signin', async data => {
  const { username, password } = data
  const response = await axios.post(BASE_URL + SIGN_IN, {
    username: username,
    password: password
  })
  console.log(response.data)
  return response.data
})

const userSlice = createSlice({
  name: 'user',
  initialState: {
    signUpResponse: '',
    signUpLoading: false,
    signUpError: null,

    signInResponse: '',
    signInLoading: false,
    signInError: null
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(signUpUser.pending, state => {
        state.signUpLoading = true
        state.signUpError = null
      })
      .addCase(signUpUser.fulfilled, (state, action) => {
        state.signUpLoading = false
        state.signUpResponse = action.payload
      })
      .addCase(signUpUser.rejected, (state, action) => {
        state.signUpLoading = false
        state.signUpError = action.error.message
      })

      .addCase(signInUser.pending, state => {
        state.signInLoading = true
        state.signInError = null
      })
      .addCase(signInUser.fulfilled, (state, action) => {
        state.signInLoading = false
        state.signInResponse = action.payload
      })
      .addCase(signInUser.rejected, (state, action) => {
        state.signInLoading = false
        state.signInError = action.error.message
      })
  }
})

export default userSlice.reducer

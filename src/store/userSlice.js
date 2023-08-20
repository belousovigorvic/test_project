import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const BASE_URL = 'http://68.183.214.2:8666/api/auth/'
const SIGN_IN = 'signin/'
const SIGN_UP = 'signup/'

export const signUpUser = createAsyncThunk('user/signup', async data => {
  console.log(data)
  const response = await axios.post(BASE_URL + SIGN_UP, {
    // username: username,
    // nickname: nickname,
    // image_file: image_file,
    // password: password
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
  console.log(response)
  return response.data
})

const userSlice = createSlice({
  name: 'user',
  initialState: {
    data: {},
    loading: false,
    error: null
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(signUpUser.pending, state => {
        state.loading = true
        state.error = null
      })
      .addCase(signUpUser.fulfilled, (state, action) => {
        state.loading = false
        state.data = action.payload
      })
      .addCase(signUpUser.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message
      })

      .addCase(signInUser.pending, state => {
        state.loading = true
        state.error = null
      })
      .addCase(signInUser.fulfilled, (state, action) => {
        state.loading = false
        state.data = action.payload
      })
      .addCase(signInUser.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message
      })
  }
})

export default userSlice.reducer

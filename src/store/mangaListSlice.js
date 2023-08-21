import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchMangaList = createAsyncThunk('manga/list', async () => {
    const response = await axios.get('http://68.183.214.2:8666/api/v1/manga/', {
        params: {
            limit: 14,
        }
    });
    return response.data; 
});

const mangaListSlice = createSlice({
  name: 'manga',
  initialState: {
    data: [],
    isLoading: false,
    isError: null
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchMangaList.pending, state => {
        state.isLoading = true
        state.isError = null
      })
      .addCase(fetchMangaList.fulfilled, (state, action) => {
        state.isLoading = false
        state.data = action.payload
      })
      .addCase(fetchMangaList.rejected, (state, action) => {
        state.isLoading = false
        state.isError = action.error.message
      })
  }
})

export default mangaListSlice.reducer

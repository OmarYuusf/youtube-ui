import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'
import { YOUTUBE_SEARCH_API } from '../../config/constants'
import { AppDispatch } from '../../app/store';

export const initialState: InitStateReduxType = {
  searchResult: [],
  searchResultIsLoading: false
}

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setLoading: (state, { payload }: PayloadAction<boolean>) => {
      state.searchResultIsLoading = payload
    },
    search: (state, { payload }: PayloadAction<any>) => {
      state.searchResult = payload
    }
  },
})


export const fetchYoutubeVideos = (searchValue: string) => async (dispatch: AppDispatch) => {
  try {
    dispatch(setLoading(true));
    const response = await axios.get(`${YOUTUBE_SEARCH_API}&q=${searchValue}&maxResults=20`);
    dispatch(search(response.data));
    dispatch(setLoading(false));
  } catch (err: any) {
    dispatch(setLoading(false));
    throw new Error(err);
  }
};

export const { setLoading, search } = searchSlice.actions
export default searchSlice
// src/app/rootReducer.ts
import { combineReducers } from '@reduxjs/toolkit'
import searchSlice from '../features/search/searchSlice'

const rootReducer = combineReducers({
  search: searchSlice.reducer
})

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer
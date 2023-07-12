import { configureStore } from '@reduxjs/toolkit'
import addProductCounterReducer from './features/addProductCounterSlice'
export default configureStore({
  reducer: {
    addProductCounter: addProductCounterReducer
  }
})
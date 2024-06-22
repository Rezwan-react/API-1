import { configureStore } from '@reduxjs/toolkit'
import ProductSlices from '../slices/ProductSlices'

export default configureStore({
  reducer: {
    counter: ProductSlices,
  },
})
import { configureStore } from '@reduxjs/toolkit'
import { api } from '../store/reducers/products'
import { cartReducer } from './reducers/cart'

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    cart: cartReducer
  },
  middleware: (gDM) => gDM().concat(api.middleware),
})
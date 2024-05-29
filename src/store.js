import { configureStore } from '@reduxjs/toolkit';
import UserReducer from './redux/UserReducer';
export default configureStore({
	reducer: {
    user: UserReducer,
  }
})
import { configureStore } from '@reduxjs/toolkit';
import userReducer from "../Features/Auth/userSlice";



const rootReducer = {
  user: userReducer,
  };
  // tạo store
  const store = configureStore({
    reducer: rootReducer,
  });
  export default store;
  
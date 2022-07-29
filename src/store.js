import { configureStore } from '@reduxjs/toolkit'
import mastSlice from './reducers/appReducer';

export default configureStore({
  reducer: {
      mast: mastSlice,
  }
});
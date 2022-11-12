import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../../features/counter/counterSlice';
import backgroundBarReducer from '../slices/backgroundbarSlice';
import backgroundBarTogglerReducer from '../slices/backgroundbarTogglerSlice';
import colorbarReducer from '../slices/colorbarSlice';
import sidebarReducer from '../slices/sidebarSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    sidebar: sidebarReducer,
    colorbar: colorbarReducer,
    backgroundbartoggler: backgroundBarTogglerReducer,
    backgroundbar: backgroundBarReducer,
  },
});
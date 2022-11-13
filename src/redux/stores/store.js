import { configureStore } from '@reduxjs/toolkit';
import backgroundBarReducer from '../slices/backgroundbarSlice';
import backgroundBarTogglerReducer from '../slices/backgroundbarTogglerSlice';
import colorbarReducer from '../slices/colorbarSlice';
import sidebarReducer from '../slices/sidebarSlice';
import textbarSlice from '../slices/textbarSlice';

export const store = configureStore({
  reducer: {
    sidebar: sidebarReducer,
    colorbar: colorbarReducer,
    backgroundbartoggler: backgroundBarTogglerReducer,
    backgroundbar: backgroundBarReducer,
    textbar:textbarSlice
  },
});
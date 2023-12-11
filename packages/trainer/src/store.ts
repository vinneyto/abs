import { configureStore } from '@reduxjs/toolkit';
import { routerReducer } from './features';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

export const store = configureStore({
  reducer: {
    router: routerReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const useStoreSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useStoreDispatch = () => useDispatch<AppDispatch>();

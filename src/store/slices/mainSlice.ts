import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ITtnInfo } from './../../types/ttnTypes';

interface IInitialState {
  ttnData: ITtnInfo | null;
  history: string[] | [];
}

const initialState: IInitialState = {
  ttnData: null,
  history: [],
};

export const mainSlice = createSlice({
  name: 'mainSlice',
  initialState,
  reducers: {
    setTtnData: (state, action: PayloadAction<ITtnInfo>) => {
      state.ttnData = action.payload;
    },
    setHistoryItem: (state, action: PayloadAction<string>) => {
      const item = state.history.find((item) => item === action.payload);
      if (item) {
        state.history = state.history;
        return;
      }
      state.history = [...state.history, action.payload];
    },
    clearHistory: (state) => {
      state.history = [];
    },
  },
});

export const mainSliceReducer = mainSlice.reducer;
export const mainSliceActions = mainSlice.actions;

import { IDataInfo } from '@/types/officesTypes';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ITtnInfo } from './../../types/ttnTypes';

interface IInitialState {
  ttnData: ITtnInfo | null;
  history: string[] | [];
  offices: IDataInfo[] | null;
}

const initialState: IInitialState = {
  ttnData: null,
  history: [],
  offices: null,
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
    setOffices: (state, action: PayloadAction<IDataInfo[]>) => {
      state.offices = action.payload;
    },
    clearOffices: (state) => {
      state.offices = null;
    },
  },
});

export const mainSliceReducer = mainSlice.reducer;
export const mainSliceActions = mainSlice.actions;

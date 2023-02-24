import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ITtnInfo } from './../../types/ttnTypes';

interface IInitialState {
  ttnData: ITtnInfo | {};
}

const initialState: IInitialState = {
  ttnData: [],
};

export const mainSlice = createSlice({
  name: 'mainSlice',
  initialState,
  reducers: {
    setTtnData: (state, action: PayloadAction<ITtnInfo>) => {
      state.ttnData = action.payload;
    },
  },
});

export const mainSliceReducer = mainSlice.reducer;
export const mainSliceActions = mainSlice.actions;

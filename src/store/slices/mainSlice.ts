import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ITtnSuccessData } from './../../types/ttnTypes';

interface IInitialState {
  ttnData: ITtnSuccessData | {};
}

const initialState: IInitialState = {
  ttnData: {},
};

export const mainSlice = createSlice({
  name: 'mainSlice',
  initialState,
  reducers: {
    setTtnData: (state, action: PayloadAction<ITtnSuccessData>) => {
      state.ttnData = action.payload;
    },
  },
});

export const mainSliceReducer = mainSlice.reducer;
export const mainSliceActions = mainSlice.actions;

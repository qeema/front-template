import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface Num {
  count: number,
};

const initialState: Num = {
  count: 100, 
};

const testModule = createSlice({
  name: 'test',
  initialState,
  reducers: {
    addCount(state: Num, action: PayloadAction<any>) {
      const {count} = action.payload;
      state.count = count + 1;
    }
  }
})

export default testModule;
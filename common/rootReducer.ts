import {combineReducers} from '@reduxjs/toolkit';
import testModule from './modules';

const rootReducer = combineReducers({
  test: testModule.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
import { createSlice } from '@reduxjs/toolkit';
import type { RequestState } from '../../types/interfaces';

const initialState: RequestState = {
  methodsList: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'HEAD', 'OPTIONS'],
  method: 'GET',
  urlRequest: null,
};

const requestSlice = createSlice({
  name: 'methodsData',
  initialState,
  reducers: {
    setMethod(state, action) {
      state.method = action.payload.method;
    },
    setUrlRequest(state, action) {
      state.urlRequest = action.payload.urlRequest;
    },
  },
});

export const { setMethod, setUrlRequest } = requestSlice.actions;
export default requestSlice.reducer;

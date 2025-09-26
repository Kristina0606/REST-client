import { createSlice } from '@reduxjs/toolkit';
import type { EditorState } from '../../types/interfaces';

const initialState: EditorState = {
  editor: 'Params',
};

const editorSlice = createSlice({
  name: 'editor',
  initialState,
  reducers: {
    setEditor(state, action) {
      state.editor = action.payload.editor;
    },
  },
});

export const { setEditor } = editorSlice.actions;
export default editorSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';


export const homeslice = createSlice({
  name: 'home',
  initialState: {
    loading: false,
    actordata: [],
    fab: []

  },
  reducers: {
    setloading: (state, action) => {
      state.loading = action.payload;
    },
    setActor: (state, action) => {
      state.actordata = action.payload;
    },
    setfab: (state, action) => {
      state.fab = action.payload;
    },


  },
});

//actions
export const { setloading, setActor, setfab } = homeslice.actions;


export default homeslice.reducer;

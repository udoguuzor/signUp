// import { configureStore } from '@reduxjs/toolkit';
// import { counterSlice } from  "./counterSlice";


// export const store = configureStore({
//   reducer: {
//     // The reducer key here should match the slice name for clarity
//     counter: counterSlice.reducer
//   },
// });


// // Export types for later use
// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;


import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "./counterSlice";

export const store = configureStore({
  reducer:{
    counter:counterSlice.reducer
  }
})


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch= typeof store.dispatch
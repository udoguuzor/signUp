// // Redux Toolkit's createSlice function simplifies creating reducers and actions.
// import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

// // Define the shape of the state for this slice.
// interface CounterState {
//   value: number;
// }

// // Set the initial state for the counter.
// const initialState: CounterState = {
//   value: 0,
// };

// // Create a "slice" of the Redux store.
// // This handles both the reducer logic and the action creators.
// export const counterSlice = createSlice({
//   name: 'counter', // The name of this state slice.
//   initialState,
//   reducers: {
//     // This is a reducer function that directly modifies the state.
//     // Redux Toolkit uses Immer internally to allow "mutating" logic.
//     increment: (state) => {
//       state.value += 1;
//     },
//     // This reducer takes an argument (an "action payload") to update the state.
//     decrement: (state) => {
//       state.value -= 1;
//     },
//     // This reducer takes an argument (an "action payload") to update the state.
//     // The action parameter is now correctly typed with `PayloadAction<number>`.
//     incrementByAmount: (state, action: PayloadAction<number>) => {
//       state.value += action.payload;
//     },
//   },
// });

// // The slice automatically generates "action creators" for us.
// // We export them so our components can use them to dispatch actions.
// // We also now include `incrementByAmount`.
// export const { increment, decrement, incrementByAmount } = counterSlice.actions;

// // We export the reducer itself, which will be added to the main store.
// export default counterSlice.reducer;


import {createSlice, type PayloadAction} from "@reduxjs/toolkit"


interface counterState{
  value:0
}

const initialState:counterState = {value:0};


export const counterSlice = createSlice({
  name:"counter",
  initialState,
  reducers:{
    increment:(state)=>{state.value += 1},
    decrement:(state)=>{state.value -= 1},
    incrementBYAmount:(state, action:PayloadAction<number>)=>{state.value += action.payload}

  }
})

 export const {increment, decrement, incrementBYAmount} = counterSlice.actions;
 export default counterSlice.reducer
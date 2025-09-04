
// import { useSelector, useDispatch } from 'react-redux';
// import { increment, decrement } from './counterSlice';
// // We are importing the RootState type directly from the store file.
// // This gives TypeScript the information it needs about your global state.
// import type { RootState, } from  "../src/store"

// const Counter = () => {
//   // We explicitly tell useSelector that the 'state' parameter is of type 'RootState'.
//   // This allows TypeScript to understand the shape of your data and ensures type safety.
//   const count = useSelector((state: RootState) => state.counter.value);
  
//   const dispatch = useDispatch();

//   return (
//     <div className="w-full h-[100vh] bg-gray-400 flex justify-center items-center">
//       <div className='w-[300px] h-[100px] bg-white justify-center items-center flex rounded-2xl flex-col gap-10'>
       
//        <button onClick={() => dispatch(decrement())} className='p-2 bg-blue-500 text-white rounded-2xl'>-</button>
//         {/* Use the 'count' variable directly to display the value. */}
//         <span>Count: {count}</span>
        
//         <button onClick={() => dispatch(increment())} className='p-2 bg-blue-500 text-white rounded-2xl'>+</button>
//       </div>
//     </div>
//   );
// };

// export default Counter;



import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "./counterSlice";

import type { RootState } from "./store";


const Counter = () =>{
  const count = useSelector((state:RootState)=>(state.counter.value));
  const dispatch = useDispatch();

  return(
    <div>
       <button onClick={()=>dispatch(decrement())}></button>
     
      <span>count:{count}</span>
     
       <button onClick={()=>dispatch(increment())}></button>

    </div>
  )
}

export default Counter
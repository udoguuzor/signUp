// import React,{useState, useEffect} from "react";
// import axios from "axios";
// import type { userCardProps } from "./Card";
// import Card from "./Card";




// const Blessing:React.FC = () =>{
// const [data, setData]  = useState<userCardProps[]>([]);
// const [modalview, setModalview]  = useState(false)
// const [selectedCard, setSelectedCard] = useState<userCardProps | null> (null)

// useEffect(()=>{

//     const fetchUsers = async():Promise<void>=>{
//         try{
//           const Response = await axios.get("http://localhost:3000/api/getAll")  
//            console.log("data is gotten here", Response.data)

//             const fetchedUsers = Response.data.data.map((user:any)=>(
//                 {
//                   name:user.name,
//                   email:user.email,
//                   id:user._id  
//                 }
//             ))

//             setData(fetchedUsers)
    
//         }catch(err:any){
//             console.log("An error occured", err.message)
//         }
  
// }
// fetchUsers()



// },[])


// const handleModal = (id:string) =>{
//   const findCard = data.find((e)=>e.id === id)
//   if(findCard){
//     setSelectedCard(findCard);
//     setModalview(true)
//   }
// }
  
  
  
//     return(
//         <div className="w-full h-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-2">
//        {data.map((item)=>(
//         <Card name={item.name} email={item.email} id={item.id} handleModal={handleModal}  key={item.id}/>
//        ))}
//        {modalview && selectedCard && (
//         <div></div>
//        )}

//         </div>
//     )
// }



// export default Blessing




import axios from "axios";

import React, { useState, type ChangeEvent } from "react";




interface PostData{
name:string,
email:string,
 password:string
}


const Form:React.FC= () =>{ const [formData, setFormData]  = useState<PostData>({
 name:'',
 email:"",
 password:""
})
 const [success, setSuccess] = useState(false);

const [error, setError] = useState("")
  
const handleChange = (e:ChangeEvent<HTMLInputElement>) =>{

setFormData({
...formData, 
 [e.target.name]: e.target.value
 })
 }
    
 const handleSubmit = async(e:React.FormEvent):Promise<void>=>{
e.preventDefault()
 try{
 const Response = await axios.post("http://localhost:3000/api", formData);

 if(Response.data.success){

setSuccess(true)
return
 }else{
 setSuccess(false);
 setError("An error occured trying to get response from api")
 }
 }catch(err:any){
 console.log("An error occurred", err.message)
 setError("an arror occured in the server")
 return
 }
}
 return(
 <>
<div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
                <div className="w-full p-8 bg-white rounded-lg shadow-2xl">
                    <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Sign Up</h1>
                    
                
                    {success && (
                        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4" role="alert">
                            <span className="block sm:inline">Successfully signed up!</span>
                        </div>
                    )}

                   
                    {error && (
                        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4" role="alert">
                            <span className="block sm:inline">{error}</span>
                        </div>
                    )}

                   

            
                    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                        <div>
                            <label className="block text-gray-700 font-medium mb-1" htmlFor="name">Name</label>
                            <input 
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700 font-medium mb-1" htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700 font-medium mb-1" htmlFor="password">Password</label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                        </div>
                        <button 
                            type="submit"
                            className="w-full bg-blue-500 text-white font-bold py-2 rounded-lg hover:bg-blue-600 transition-colors"
                        >
                            Sign Up
                        </button>
                    </form>

                   
                   
                </div>
            </div>
        </>
    )
}


export default Form


















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
 const Response = await axios.post("http://localhost:3000/api/signUp", formData);

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



 if (success) {
        return (
            <div className="flex flex-col items-center justify-center h-screen bg-green-100 ">
                <h1 className="">🎉🎉 Account created successfully!</h1>
                
                <p className="">Welcome! {formData.name} you can now Login</p>
            </div>
        );
    }





 return(
 <>
<div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
                <div className="w-full p-8 bg-white rounded-lg shadow-2xl">
                    <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Sign Up</h1>
                    
{/*                 
                    {success && (
                        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4" role="alert">
                            <span className="block sm:inline">User created successfully</span>
                        </div>
                    )} */}

                   
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
 )}



 export default Form
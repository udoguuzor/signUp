import axios from "axios";
import React, { useEffect, useState } from "react";

import type { userCardProps } from "./Card"; 
import Card from "./Card";


const Api:React.FC = () =>{


const [data, setData]  = useState<userCardProps[]>([])
const [modalview, setModalview] = useState(false);

const [selectedCard, setSelectedCard] = useState<userCardProps | null>(null)


useEffect(()=>{
    
    const fetchUsers = async():Promise<void>=>{ 
    try{
        
        const response = await axios.get("http://localhost:3000/api/getAll"); 
        console.log("Fetched User Data (raw response):", response.data); 

        
    
        const fetchedUsers = response.data.data.map((user: any) => ({
            id: user._id, 
            name: user.name,
            email: user.email,
        
        }));
        setData(fetchedUsers); 

    }catch(err:any){
        console.error("An error occurred in fetching user data", err.message)
    }
}
fetchUsers()
},[])

const handleModal = (id:string) =>{
   const findCard = data.find((e)=>e.id===id)
   if(findCard){
    setModalview(true);
    setSelectedCard(findCard)
   }else{
    console.warn(`User card with ID ${id} not found.`);
   }
}
    
    return(
        <>
        
        <div className="w-full h-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 justify-items-center pt-20">
        {data.map((item)=>(
            <Card 
                id={item.id} 
                name={item.name}        
                email={item.email}      
                
                key={item.id} 
                handleModal={handleModal} 
            />
        ))}

        {selectedCard && modalview && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                <div className="bg-white p-6 rounded-lg shadow-2xl flex flex-col gap-4 max-w-sm w-full relative">
                    <button 
                        onClick={() => {setModalview(false); setSelectedCard(null);}} 
                        className="absolute top-2 right-2 text-gray-600 hover:text-gray-900 text-xl font-bold"
                    >
                        &times;
                    </button>
            
                    <h3 className="text-2xl font-bold">{selectedCard.name}</h3>
                    <p className="text-gray-700 text-sm">Email: {selectedCard.email}</p>
            
                    <p className="text-gray-500 text-xs">User ID: {selectedCard.id}</p>
                </div>
            </div>
        )}
        </div>
        </>
    )
}

export default Api;







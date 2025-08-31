import React from "react"


export type userCardProps = { 
    id: string; 
    name: string;
    email: string;
  
    handleModal: (id: string) => void; 
}

const Card: React.FC<userCardProps> = ({ id, name, email, handleModal }) => { 
    return (
        <div 
            onClick={() => handleModal(id)} 
            className="w-[350px] h-[200px] shadow-2xl flex flex-col gap-2 justify-between items-center rounded-md bg-violet-300 cursor-pointer hover:shadow-xl transition-shadow duration-200 p-4" 
        >
            <div className="text-black text-[18px] font-sans w-auto h-[30px] text-center flex items-center justify-center px-2 font-bold line-clamp-1">{name}</div>
            <div className="text-black text-[14px] font-sans px-2 text-center line-clamp-2">{email}</div>
            <div className="flex justify-evenly items-center h-auto w-full p-2">
                
                <div className="text-black font-sans text-[12px]">User ID: {id}</div> 
            </div>
        </div>
    );
}

export default Card;

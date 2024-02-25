import Image from "next/image";
import { todo } from "node:test";
"use client"
import { useState } from "react";

export default function Home() {

  //define state

  const [Todo, setTodos] = useState([
    { hobby: "Cricket", id: 1 },
    { hobby: "Reading", id: 2 }
  ]);
  

const [inputValue, setValue] = useState("")
const [id, setid] = useState(0)

//function

const addItems=()=>{
  let obj:any=Todo.find(item => item.id ==id)
  if(obj){
    let newArray=Todo.filter(item => item.id !== obj.id)
    setTodos([...newArray,{hobby:inputValue,id:id}])
  setValue("")
  setid(0)
  return
  }
  setTodos([...Todo,{hobby:inputValue,id:id}])
  setValue("")
  setid(0)
}

const editItem=(id:any)=>{
  let obj:any=Todo.find(item => item.id ==id)
  setValue(obj.hobby)
  setid(obj.id)
 
}
const deleteItem=(id:any)=>{
  let newArray=Todo.filter(item => item.id !== id)
    setTodos([...newArray]) 
}
  return (
   <div className="max-w-4xl mx-auto p-5">
    <h1 className="text-center text-[40px] font-semibold font-serif font-style: italic text-orange-500">Todo App</h1>

{/* start input */}

   <div className="flex justify-between gap-4 mt-5">
   <input
   type="text"
   value={inputValue}
   onChange={(e)=>setValue(e.target.value)}
    className="w-[60%] p-2 ml-3  text-black  border-b focus:outline-none " 
    placeholder="Write your Hobbies" />
   <input 
  type="number"
  value={id}
  onChange={(e:any)=>setid(e.target.value)}
   className="w-[60%] p-2 ml-3  text-black border-b 
   focus:outline-none " placeholder="Write your ID" />
   <button onClick={addItems} className="w-[20%] bg-orange-400
    text-white p-2 rounded 
     hover:bg-orange-500 font-semibold font-serif font-style: italic">Add your Hobby</button>
   </div>


   {/* end input */}


   <h1 className="text-center text-[30px] mt-5 font-semibold font-serif font-style: italic text-orange-500">Hobbies List</h1>
 
{/* Hobbies list */}

   <div className="grid grid-cols-2 gap-4">

    {/* grid item */}

    {
      Todo.map((item:any,i:any)=>{
        return(
          <div className="shadow p-2 mt-5 bg-orange-400" key={i} >
          <div className="flex justify-between text-lg ">
            <span className="shadow rounded-full h-8 w-8  text-center text-orange-500 font-bold bg-orange-200 ">
              {i+1}
            </span>
            <span onClick={()=>deleteItem(item.id)} className="cursor-pointer shadow
             rounded-full h-8 w-8  text-center bg-orange-200 font-bold text-orange-500 ">X</span>
          </div>
      
          {/* div data */}
      
      <div className="mt-3 text-[20px]   font-semibold font-serif font-style: italic">{item.hobby}</div>
      <div>
        <h2 onClick={()=>editItem(item.id)} className="cursor-pointer text-right 
         font-bold hover:text-orange-200  ">Edit</h2>

      </div>
        </div>
      
        )
      })
    }

 

</div>
   </div>
  );
}

import React, { useState } from 'react'
import TagInput from '../components/TagInput'
import { MdClose } from 'react-icons/md';
const AddEditNote = ({noteData,type, onClose}) => {

    const [title, setTitle]= useState("");
    const [content, setContent]= useState("");
    const [tags, setTags]= useState([]);
    const [Error, setError]= useState(null);

    const addNewNote = async ()=>{

    }

    const editNote = async ()=>{
        
    }


    const handleAddNote = ()=>{
        if(!title){
            setError("Please enter the title");
            return;
        }
        if(!content){
            setError("Please enter the content");
            return;
        }
        setError("");

        if(type === 'edit'){
            editNote();
        }else{
            addNewNote();
        }

    }
    

  return (
    <div className='relative'>
        <button onClick={onClose} className='w-10 cursor-pointer h-10 rounded-full flex items-center justify-center absolute -top-1 -right-3 hover:bg-gray-800'>
            <MdClose className='text-xl text-white'/>
        </button>

        <div className='flex flex-col gap-2'>
            <label className='input-label'>TITLE</label>
            <input onChange={(e)=> setTitle(e.target.value)} value={title} type="text" placeholder='Go To Gym At 5' className='text-2xl text-white outline-none'/>
        </div>
        <div className='flex flex-col gap-2 mt-4'>
            <label className='input-label'>CONTENT</label>
            <textarea onChange={(e)=> setContent(e.target.value)} value={content} type= "text" className='text-sm text-slate-200 outline-none bg-[#141a1f] p-2 rouned' rows={10}></textarea>
        </div>
        <div className='mt-3'>
            <label className='input-label'>TAGS</label>
            <TagInput tags={tags} setTags={setTags}/>
        </div>
        {Error && <p className='text-red-500 text-xs pt-4'>{Error}</p>}
        <button onClick={handleAddNote} className='btn-primary mt-5 p-3 font-bold text-xl cursor-pointer'>ADD</button>
    </div>
  )
}

export default AddEditNote

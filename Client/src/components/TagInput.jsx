import React from 'react'
import { MdAdd, MdClose } from 'react-icons/md'
import { useState } from 'react'

const TagInput = ({tags, setTags}) => {

    const [inputValue, setInputValue]= useState("");
    const handleInputChange= (e)=>{
        setInputValue(e.target.value);
    }
    const addNewTag = ()=>{
        if(!inputValue.trim() !== ""){
            setTags([...tags, inputValue.trim()]);
            setInputValue("");
        }
    }
    const handleKeyDown = (e)=>{
        if(e.key === "Enter"){
            addNewTag();
        }
    }
    const handleRemoveTag= (tagToRemove)=>{
        setTags(tags.filter((tag)=> tag !== tagToRemove))
    }

  return (
    <div>

        {tags?.length > 0 && (
            <div className='flex items-center gap-2 flex-wrap mt-2'>
                {tags.map((tag, index)=>(
                    <span className='text-white flex items-center gap-2 text-sm px-2 py-1 rounded bg-[#293036]' key={index}># {tag}
                        <button onClick={()=>{handleRemoveTag(tag)}}>
                            <MdClose className='cursor-pointer'/>
                        </button>
                    </span>
                ))}
            </div>
        )}

        <div className='flex items-center gap-4 mt-3'>
            <input onChange={handleInputChange}  value={inputValue} placeholder='Add tags' type="text" className='text-white text-sm bg-transparent border-1 border-white rounded outline-none p-2' />
            <button onClick={()=> {addNewTag()}} className='border-1 border-blue-600 rounded p-2'>
                <MdAdd className='text-2xl text-blue-700 hover:text-white cursor-pointer'/>
            </button>
        </div>
    </div>
  )
}

export default TagInput

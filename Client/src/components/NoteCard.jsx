import React from "react";
import { MdOutlinePushPin } from "react-icons/md";
import { MdCreate, MdDelete } from "react-icons/md";
export const NoteCard = ({
    title,
    date,
    content,
    tags,
    isPinned,
    onEdit,
    onDelete,
    onPinNote
})=>{
    return(
        <div className="border rounded p-4 bg-white hover:shadow-xl transition-all ease-in-out">
            <div className="flex items-center justify-between">
                <div>
                    <h6 className="text-sm font-bold">{title}</h6>
                    <span className="text-xs text-slate-800">{date}</span>
                </div>
                <MdOutlinePushPin onClick={onPinNote} className= {`icon-btn ${isPinned ? 'text-primary' : 'text-slate-300'}`} />
            </div>
            <p className="text-xs text-slate-600 mt-2">{content?.slice(0,60)}</p>

            <div className="flex items-center justify-between mt-2">
                <div className="text-xs text-slate-800">{tags}</div>
                <div className="flex items-center gap-2">
                    <MdCreate onClick={onEdit} className="icon-btn hover:text-green-600 cursor-pointer"/>
                    <MdDelete onClick={onDelete} className="icon-btn hover:text-red-500 cursor-pointer"/>
                </div>
            </div>
        </div>
    )
}
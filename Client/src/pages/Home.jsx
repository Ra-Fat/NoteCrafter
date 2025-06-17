import Navbar from "../components/navbar.jsx";
import { NoteCard } from "../components/NoteCard.jsx";
import { MdAdd } from "react-icons/md";
import AddEditNote from "./AddEditNote.jsx";
import { useState, useEffect } from "react";
import Modal from "react-modal";

export default function Home() {
  const [openAddEditModel, setOpenAddEditModal] = useState({
    isShown: false,
    type: "add",
    data: null,
  });

  useEffect(() => {
    Modal.setAppElement("#root");
  }, []);

  return (
    <div className="w-screen h-screen bg-[#171c20] flex flex-col">
      <Navbar />
      <div className="grid grid-cols-3 gap-4 mt-8 px-20 py-2">
        <NoteCard
          title="Meeting on the 7th April"
          date="3rd Apr 2025"
          content="Meeting on 7th April"
          tags="#Meeting"
          isPinned={true}
          onEdit={() => {}}
          onDelete={() => {}}
          onPinNote={() => {}}
        />
      </div>
      <button
        className="w-16 h-16 flex items-center justify-center rounded-2xl bg-blue-500 hover:bg-blue-700 absolute right-10 bottom-10 cursor-pointer"
        onClick={() => {
          setOpenAddEditModal({ isShown: true, type: "add", data: null });
        }}
      >
        <MdAdd className="text-white font-bold text-3xl" />
      </button>

      <Modal
        isOpen={openAddEditModel.isShown}
        onRequestClose={() =>
          setOpenAddEditModal({ isShown: false, type: "add", data: null })
        }
        style={{ overlay: { backgroundColor: "rgba(0,0,0,0.2)" } 
        }}
        contentLabel=""
        className="w-[40%] max-h-3/4 bg-[#171c20] rounded-md mx-auto mt-25 p-5"
      >
        <AddEditNote onClose= {()=>{
            setOpenAddEditModal({ isShown: false, type: "add", data: null })
        }} />
      </Modal>
    </div>
  );
}

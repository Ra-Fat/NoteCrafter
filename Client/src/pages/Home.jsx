import Navbar from "../components/navbar.jsx"
import { NoteCard } from "../components/NoteCard.jsx"
export default function Home(){
    return(
        <div className="w-screen h-screen bg-[#171c20] flex flex-col">
            <Navbar/>
            <div className="grid grid-cols-3 gap-4 mt-8 px-20 py-2">
                <NoteCard
                    title="Meeting on the 7th April"
                    date= "3rd Apr 2025"
                    content= "Meeting on 7th April"
                    tags= "#Meeting"
                    isPinned={true}
                    onEdit={()=> {}}
                    onDelete={()=> {}}
                    onPinNote={()=> {}}
                />
                <NoteCard
                    title="Meeting on the 7th April"
                    date= "3rd Apr 2025"
                    content= "Meeting on 7th April"
                    tags= "#Meeting"
                    isPinned={true}
                    onEdit={()=> {}}
                    onDelete={()=> {}}
                    onPinNote={()=> {}}
                /><NoteCard
                    title="Meeting on the 7th April"
                    date= "3rd Apr 2025"
                    content= "Meeting on 7th April"
                    tags= "#Meeting"
                    isPinned={true}
                    onEdit={()=> {}}
                    onDelete={()=> {}}
                    onPinNote={()=> {}}
                /><NoteCard
                    title="Meeting on the 7th April"
                    date= "3rd Apr 2025"
                    content= "Meeting on 7th April"
                    tags= "#Meeting"
                    isPinned={true}
                    onEdit={()=> {}}
                    onDelete={()=> {}}
                    onPinNote={()=> {}}
                />
            </div>
        </div>
    )
}
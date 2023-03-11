import { useEffect, useState } from "react";
import Notes from "./Components/Notes/Notes";
import SideNav from "./Components/SideNav/SideNav";
import './App.css'
export default function App() {

  
  const items = JSON.parse(localStorage.getItem("notes") || '[]');

  const [addNote, setAddNote] = useState(items);
  const [favorite, setFavorite] = useState(false)
  const [delAlert, setDeletAlert] = useState(false)

  const handleAlert = () =>{
    setDeletAlert(true)
  }
  
  const handleAdd = (color) => {
    setAddNote([
      ...addNote,
      {
        note: "",
        color: color,
        currDate: new Date().toLocaleString('en-GB'),
        favorite: false,
        pinned: false
      }
    ]);
  };
  const handleAddText = (e, index) => {
    
    addNote[index].note = e.target.value;
    localStorage.setItem("notes", JSON.stringify(addNote));
    
  };
  const handleFavorite = (index) =>{
    if(!addNote[index].favorite){
      addNote[index].favorite = true
    }
    else{
      addNote[index].favorite = false
    }
    setFavorite(!favorite)
}

  const handlePin = (notes, index) => {
    if(!addNote.pinned){
      addNote[index].pinned = true
      let pinned = addNote.filter((item) => item.notes !== notes);
      pinned.unshift(addNote[index]);
      pinned.splice(index + 1, 1);
      setAddNote(pinned);
    }
    else{
      addNote[index].pinned = false
    }
  };

  const handleDelete = (index) => {
    console.log('ls', items[index])
    // const deleteItem = items[index]
    addNote.splice(index, 1);
    items.splice(index, 1);
    handleAlert()
  };

  useEffect(() => {
    setTimeout(()=>{
      setDeletAlert(false)
    },2000)
    localStorage.setItem("notes", JSON.stringify(addNote));
  }, [addNote, favorite, delAlert]);
  return (
    <div className="App">
      {
        delAlert ? <div className="deleteAlert">Note Deleted</div> : null
      }
      
      <SideNav handleAdd={handleAdd}/>
      <Notes noteItems={addNote} handleAddText={handleAddText} handleFavorite={handleFavorite} handleDelete={handleDelete} handlePin={handlePin}/>
    </div>
  );
}

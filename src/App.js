import "./App.css";
import React,{useState} from 'react'
import MemberTable from './componets/MemberTable'
import FormInput from "./componets/FormInput";
import { Routes,Route} from "react-router-dom";
function App() {
 
  const [members,setmembers]=useState([
  ])

  return (
    <>
    <Routes>
  
      <Route path="/" element={<FormInput members={members
      } setmembers={setmembers} />}/>
      <Route path="/member" element={<MemberTable  members={members
      }/>}/>
    
    </Routes>
    </>
  );
}

export default App;
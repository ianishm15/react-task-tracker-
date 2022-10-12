import { useState } from "react";

import Header from "./components/Header"
import Tasks from "./components/Tasks"
import AddTask from "./components/AddTask"
import Footer from "./components/Footer";


function App() {
  const [showAddTask,setShowAddTask]=useState
  (false)
  const [tasks,setTasks]=useState([
    {
        id:1,
        text:"Doctor's appointment",
        day:"Feb 5th at 02:30pm",
        reminder:true
    },
    {
        id:2,
        text:"Meeting at school",
        day:"Feb 6th at 12:30pm",
        reminder:true
    },
    {
        id:3,
        text:"Food shooping",
        day:"Feb 6th at 06:30pm",
        reminder:false
    }
])

// Add Task
 const addTask =(task)=>{
   const id=Math.floor(Math.random()*10000)+1
   const newTask ={id,...task}
   setTasks([...tasks,newTask])
 }
// Delete task
const deleteTask=(id)=>{
  setTasks(tasks.filter((task)=>task.id !==id ))
}
// Toggle Reminder
const ToggleReminder=(id)=>{
  setTasks(
    tasks.map((task)=>
    task.id=== id ? {...task,reminder:
      !task.reminder} : task
    )
  )
}
  return (
    <div className="container">
    <Header onAdd={()=>setShowAddTask
      (!showAddTask)}
      showAdd={showAddTask}
      />
   {showAddTask &&<AddTask onAdd={addTask}/>} 
   {tasks.length>0 ?(
    <Tasks tasks={tasks} 
    onDelete={deleteTask}
    onToggle={ToggleReminder}
    />)
   :('No tasks to show')}
   
   </div>
  );
}

export default App;

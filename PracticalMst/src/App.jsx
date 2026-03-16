import { useState,useEffect } from 'react'
import './App.css';

function App() {
  const [activities,setActivities]=useState([]);

  const initialActivity=[
  { name: "Cycling", category: "Travel", carbon: 2 },
  { name: "Solar Usage", category: "Energy", carbon: 5 }
  ];

  const [activity,setActivity]=useState({
    name:"",
    category:"",
    carbon:"",
  });

  useEffect(()=>{
    setActivities(initialActivity);
  },[]);

  const handleChange=(e)=>{
    const {name,value}=e.target;
    setActivity({...activity, [name]:name==="carbon"?Number(value):value})
  }

  const handleSubmit=(e)=>{
    e.preventDefault();
    setActivities([...activities,activity]);
    setActivity({
      name:"",
      category:"",
      carbon:"",
    })
  }

  const viewActivities=()=>{
    console.log(activities);
  }
  return (
   <form onSubmit={handleSubmit}>
    <input 
     type='text'
     name='name' 
     value={activity.name} 
     onChange={handleChange}
     placeholder='Enter Activity Name'
     />
     <select
     name='category' 
     value={activity.category} 
     onChange={handleChange}
     >
      <option value="">Select activity</option>
      <option value="Travel">Travel</option>
      <option value="Energy">Energy</option>
      <option value="Waste">Waste</option>
     </select>
     <input 
     type='number'
     name='carbon' 
     value={activity.carbon} 
     onChange={handleChange}
     placeholder='Enter Carbon Value'
     />
     <button type="submit">Add activity</button>
     <button type="button" onClick={viewActivities}>View activities</button>
   </form>
  )
}

export default App;

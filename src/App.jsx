import { useState } from 'react'
import './App.css'

function App() {
  
 let [cnt,setCnt] =useState(0);

 const addVal=()=>{
  setCnt(cnt+1);
 }

 const decVal=()=>{
  setCnt(cnt-1);
 }

 const reset=()=>{
  setCnt(0);
 }
  return (
    <>
      <h1> Counter App</h1>
      <h2> Counter value is : {cnt}</h2>
      <button onClick={addVal}> Increase Value : {cnt}</button>
      <br/>
      <button onClick={decVal}> Decrease value : {cnt}</button>
      <br/>
      <button onClick={reset}> Reset Counter</button>
    </>
  )
}

export default App

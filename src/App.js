import React,{useState} from'react'
import useList from './components/useList'
export default function App(){
  const {list,push,pull}=useList()
  const [todo,setTodo]=useState("")
  const onsubmitbutton=(event)=>{
    event.preventDefault()
    push(todo)
    setTodo("")}
  
  
    return(
    <div className='border'>
      <h1 style={{color: "blue"}}>To Do List Application</h1> 
      <h3 style={{color: "blue"}}>By Aparna Dwivedi</h3> 
      <header>
        <form onSubmit={onsubmitbutton}>
          <label><h5>Add a Item</h5></label> <br/>
          <input className="text" type="text" value={todo} placeholder={"Enter here..."} onChange={(e)=>{setTodo(e.target.value)}}/>
          <button className="button2" type='submit'>Add!!</button>
        </form>
    
        <h3>
          {list.map((listItem,index)=>{
            return(
            <>
              <ol style={{listStyle:'none'}}>
              <li key ={index} className="text1"> {listItem}</li>
              </ol>
              <button className = "button" onClick={()=>{pull(index)}}>Remove</button>
              </>
            )
          })}
        </h3>
      </header>
    </div>
  )
}
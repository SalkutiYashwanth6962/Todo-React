import React, { Fragment, useState } from 'react'
import './Todo.css'

const ToDoList = () => {

let [data,setData] = useState("")

let [items,setItems]=useState([])
let[editindex,setEditIndex]=useState(null)


let handleSubmit=(e)=>{
  e.preventDefault()

  if(data!==''){
    if(editindex!==null){
        items[editindex]=data
        setEditIndex(null)
    }else{
        setItems([...items,data])
    }
  
  setData('')
  }
}
let handleChange=(e)=>{
e.preventDefault()
setData(e.target.value)
}

let handleClearAll=()=>{
  setItems([])
}
let handleEdit=(id)=>{
  setData(items[id])
  setEditIndex(id)
}
let handleDelete=(index)=>{
let updated = items.filter((val,ind)=>{
  if(index!=ind){
    return val
   
  }
})
setItems(updated)
}
  return (
    <>
     <div className="container">
     <h1 style={{color:'orangered'}}>To Do App</h1>
     <form action=""  onSubmit={handleSubmit}>
      <div className="head">
     <input type="text" name="" id="" value={data} placeholder='To-do....' onChange={handleChange} />
     <button className='Add_Items' >{editindex!=null?"Update item":"add item"}</button>
     </div>
     </form>
     <div className="body">
     {
      items.map((value,index)=>{
        return(
          <Fragment key={index}>
            <div className="li_part">
          <span>{value}</span>
          <div className="button_part">
          <button onClick={()=>{handleEdit(index)}}>edit</button>
          <button id="btn2" onClick={()=>{handleDelete(index)}}>delete</button>
          </div>
          </div>
          </Fragment>
        )
      })
     }
     </div>
     <button onClick={handleClearAll} className='clear'> clear all</button>
     </div>
    </>
  )
}

export default ToDoList

import React from 'react'
import edit from '../assets/imgs/edit.png'
import del from '../assets/imgs/delete.png'

export default function TodoCard(props) {
  const {children, handleDeleteTodo, index, handleEditTodo} = props

  return (
    <li className='todoItem'>
      {children}
      <div className='actionsContainer'>
        <button onClick={()=>{
          handleEditTodo(index)
        }}>
          <img src={edit}/>
        </button>
        
        <button onClick={()=>{
          handleDeleteTodo(index)
        }}>
         <img src={del}/>
        </button>
        

      </div>
      
    </li>
  )
}


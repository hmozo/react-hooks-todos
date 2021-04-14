import React from 'react'
import nextId from 'react-id-generator'

function Todos(){

    const [ input, setInput ]= React.useState('')
    const [ todos, setTodos ]= React.useState([])

    const add= ()=>{
        input!=='' &&
        setTodos((todos)=>todos.concat({
            text: input,
            id: nextId()
        }))
        setInput('')
    }

    const remove= (id)=>{
        setTodos((todos)=>todos.filter((todo)=>todo.id!==id))
    }

    return(
        <div className='todo'>
            <input 
                type='text'
                value={input}
                placeholder='Enter todo'
                onChange={(e)=>setInput(e.target.value)}
            />
            <button onClick={add}>Add todo</button>
            <ul>
            {todos.map(({ text, id })=>(
                <li key={id}>{id}: {text}<button onClick={()=>remove(id)}>x</button></li>
                
            ))}
            </ul>
        </div>
    )
}

function generateId(){

}

export default Todos
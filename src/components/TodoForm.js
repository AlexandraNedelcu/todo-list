import React, {useState} from 'react'

export const TodoForm = ({addToDo}) => {
    const [value, setValue] = useState('')
    const handleSubmit = e => {
        e.preventDefault();
        addToDo(value);
        setValue('');
    }
  return (
    <form className='todo-form' onSubmit={handleSubmit}>
        <input 
        type="text" 
        className='todo-input' 
        placeholder='What is the task today?' 
        value={value}
        onChange={(e) => setValue(e.target.value)} />
        <button type="submit" className='todo-btn'>Add task</button>
    </form>
  )
}

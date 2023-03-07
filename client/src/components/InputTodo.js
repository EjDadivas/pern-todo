import React, {Fragment} from 'react'

const InputTodo = () => {
  return (
    <Fragment>
    
    <div>
      <h1>Todo List</h1>
      <form className='d-flex mt-5'>
        <input className='form-control' type="text"></input>
        <button className='btn btn-success'>Add</button>
      </form>
    </div>
    </Fragment >
  )
}

export default InputTodo;

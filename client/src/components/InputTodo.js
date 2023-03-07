import React, {Fragment, useState} from 'react'

const InputTodo = () => {
  const [description, setDescription] = useState("Hello");

  const onSubmit = async e => {
    e.preventDefault();
    try {
      const body = description;
      const response = fetch(

      {
        //"Content-Type" : "application/JSON"
        //JSON.stringify
      }
      )
    } catch (err) {
      console.log(err.message)
    }
  }
  return (
    <Fragment>
      

      <h1 className='text-center mt-5'>Todo List</h1>
      <form className='d-flex mt-5'>
        <input className='form-control' type="text" value={description} onChange={e => setDescription(e.target.value)}></input>
        <button className='btn btn-success'>Add</button>
      </form>

    </Fragment >
  )
}

export default InputTodo;

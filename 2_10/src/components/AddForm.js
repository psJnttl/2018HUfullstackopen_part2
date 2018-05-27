import React from 'react'

const AddForm = ({nameValue, handleNameChange, numberValue, handleNumberChange,
                  handleSubmit, clearButton}) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        nimi: <input
          value={nameValue}
          onChange={handleNameChange} />
        {clearButton}
      </div>
      <div>numero:
        <input
          value={numberValue}
          onChange={handleNumberChange} />
      </div>
      <div>
        <button type="submit">lisää</button>
      </div>
    </form>
  )
}

export default AddForm;

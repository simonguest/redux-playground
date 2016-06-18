import React from 'react'

const Header = ({add}) => {
  let input;
  return (
    <div>
      <form onSubmit={ e => {
          e.preventDefault();
          add(input.value);
          input.value = '';
        }}>
        <input ref={ node => {
             input = node;
          }}/>
        <button type="submit">
          Add
        </button>
      </form>
    </div>
  )
}

export default Header
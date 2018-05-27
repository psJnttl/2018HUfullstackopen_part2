import React from 'react';

const TheNote = ({note, style}) => {
  if (!note) {
    return null;
  }
  return (
    <div className={style}>
      {note}
    </div>
  )
}
export default TheNote;

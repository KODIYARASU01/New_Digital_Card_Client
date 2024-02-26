import React from 'react'
import './Form.scss';
const Forms = ({slideClose,setSlideShow}) => {
  return (
  <>
  <div className="forms_container" id={slideClose ? 'Formclose':'Formopen'}>
Hello
  </div>
  </>
  )
}

export default Forms;

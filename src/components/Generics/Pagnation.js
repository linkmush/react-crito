import React from 'react'
import { Link } from 'react-router-dom'

const Pagination = () => {
  return (
    <div className="pagination center-content">
      <Link to='/'><i className="fa-regular fa-less-than"></i></Link>
      <Link to='/' className="active">1</Link>
      <Link to='/'>2</Link>
      <Link to='/'>3</Link>
      <Link to='/'>...</Link>
      <Link to='/'>9</Link>
      <Link to='/'><i className="fa-regular fa-greater-than"></i></Link>     
    </div>
  )
}

export default Pagination
import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function Gallery() {
  return (
   <>
   <div className="row">
    <div className="col-xl-2">
        <ul>
            <li><Link to="">Web</Link></li>
            <li><Link to="mobile">Mobile</Link></li>
        </ul>
    </div>
    <div className="col-xl-10">
      <Outlet></Outlet>
    </div>
   </div>
   </>
  )
}

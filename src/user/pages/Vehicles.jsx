import React from 'react'
import UserMain from '../UserMain'



const Vehicles = () => {
  return (
   <>
    <UserMain/>

   <main id="main" className="main">

   <div className="pagetitle pt-4">
  <h1 className="theme-text2">Vehicles</h1>
  <nav>
    <ol className="breadcrumb">
      <li className="breadcrumb-item"><a href="/"><i className="bi bi-house-door"></i></a></li>
      <li className="breadcrumb-item active">Vehicle Page</li>
    </ol>
  </nav>
</div>
{/* <!-- End Page Title --> */}

    <div className=" manage-user overflow-auto">


 
  </div>
   </main>
   </>
  )
}

export default Vehicles
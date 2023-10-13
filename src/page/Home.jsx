import React, { useState } from 'react'
import Add from '../components/Add'
import { Link } from 'react-router-dom'
import View from '../components/View'
import Category from '../components/Category'
function Home() {
  const [uploadVideoServerResponse,setUploadVideoServerResponse]=useState({})
  return (
<>
<div className="container mt-5 mb-5 d-flex justify-content-between align-items-center">
  <Add  setUploadVideoServerResponse={setUploadVideoServerResponse}/>
  <Link to={'/watch-history'} style={{textDecoration:'none',color:'white',fontSize:'35px'}}>Watch History</Link>
</div>
<div className="container-fluid d-flex justify-content-between  mt-5 mb-5">
  <div className="all-videos col-lg=8">
    <h3>All videos</h3>
<View  uploadVideoServerResponse={uploadVideoServerResponse} />
  </div>
<div className='col-lg-3'><Category/></div>
</div>
</>  )
}

export default Home
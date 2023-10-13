import React, { useEffect, useState } from 'react'
import VideoCard from './VideoCard'
import { Col,Row } from 'react-bootstrap'
import { getAllvideo } from '../services/allApi'

function View(uploadVideoServerResponse) {
const [allvideos,setAllVideos]=useState([])
const [deletevideoStatus,setdeletevideoStatus]=useState(0)
  const getAllUploadedVideo=async()=>{
    const{data}=await getAllvideo()
    setAllVideos(data)
  } 
  useEffect(()=>{
    getAllUploadedVideo()
  },[uploadVideoServerResponse,deletevideoStatus])
  return (
<>
<Row >
{
allvideos.length>0?
allvideos.map((video)=>( <Col sm={12} md={6} lg={4} xl={3}>
      <VideoCard displayData={video} setdeletevideoStatus={setdeletevideoStatus}/>
      </Col> )):<p className='fw-bolder fs-5 text-danger mt-5'>Sorry Nothing to display</p>}
 
  

</Row>
</>  )
}

export default View
import React from 'react'
import { Card,Modal } from 'react-bootstrap'
import { useState } from 'react';
import { addToHistory, deleteAvideo } from '../services/allApi';
function VideoCard({displayData,setdeletevideoStatus,insideCategory}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = async () => {
    setShow(true);
    // to get time stamp for playing video
    let today = new Date()
    let timeStamp = Intl.DateTimeFormat('en-US',{year:'numeric',month:'2-digit',day:'2-digit',hour:'2-digit',minute:'2-digit',second:'2-digit'}).format(today)
    const {caption,embbedlink} = displayData
    // video History
    const videoHistory = {
      caption,embbedlink,timeStamp
    }

    // make api call
    await addToHistory(videoHistory)
  }

  const removevideo =async(id)=>{
    const response= await deleteAvideo(id)
    setdeletevideoStatus((s)=>s+1)
  }

  const dragStarted = (e,id)=>{
    console.log("Drag started...");
    e.dataTransfer.setData("cardId",id)
  }
  return (
  <> 
  
   {
   displayData&&
   <Card className='ms-5' style={{ width: '13rem'}} draggable onDragStart={(e)=>dragStarted(e,displayData?.id)}>
      <Card.Img onClick={handleShow}
      variant="top" style={{width:'100%' , height:'200px'}} src={displayData?.url} fluid/>
      <Card.Body>
        <Card.Title className='d-flex justify-content-between align-items-center'> 
<h5>{displayData?.caption}</h5>  
{insideCategory?"":<button onClick={() => removevideo(displayData?.id) } className='btn' ><i className='fa-solid fa-trash fs-5' style={{color:'red'}}></i></button>
}         </Card.Title>
  
      </Card.Body>
    </Card> }

    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{displayData?.caption}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <iframe width={"100%"} height={"400px"} src={`${displayData?.embbedlink}?autoplay=1`} title="React JS Tutorial - Basic to Advance (2023)"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </Modal.Body>
 
      </Modal>
  </> )
}

export default VideoCard
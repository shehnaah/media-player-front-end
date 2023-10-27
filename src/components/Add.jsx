import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { uploadVideo } from '../services/allApi';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Add({setUploadVideoServerResponse}) {

  const [video,setVideo]=useState({
    id:"",caption:"",url:"",embbedlink:""
  })

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
 
  const extractLink =(e)=>{
    const {value} = e.target
    if(value){
      const embbed=`https://www.youtube.com/embed/${value.slice(-11)}`
setVideo({...video,embbedlink:embbed})
    }else{
setVideo({...video,embbedlink:""})
    }
  }

  const handleUpload = async ()=>{
    const {id,caption,url,embbedlink}=video
    console.log(video);
    if(!id||!caption||!url||!embbedlink){
      toast.warning("please fill the form completely!!")
    }else{
      const response = await uploadVideo(video)
if(response.status>=200 && response.status<300 ){
  // reset state
  setVideo({
    id:"",caption:"",url:"",embbedlink:""

  })
  // set server response
  setUploadVideoServerResponse(response.data)
      // modal hide
      handleClose()
      toast.success(`"${response.data.caption}" video uploaded successfully`)
}else{
  toast.info("Uploading error!!! Please try after sometime...")
}

    }
  }
  return (
    <>
      <div className="d-flex align-items-center">
        <h3>Add New Video</h3>
        <button className='btn' onClick={handleShow}>
          <i class="fa-solid fa-circle-plus fa-2xl ms-2" style={{ color: 'white' }}></i>
        </button>
      </div>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title> Upload A video</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         <Form className='border p-3 rounded border-secondary'>

         <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="text" placeholder="Enter video ID" onChange={(e)=>setVideo({...video,id:e.target.value})} />
      </Form.Group>

      
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="text" placeholder="Enter video Caption" onChange={(e)=>setVideo({...video,caption:e.target.value})}/>
      </Form.Group>

      
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="text" placeholder="Enter video Image URL" onChange={(e)=>setVideo({...video,url:e.target.value})}/>
      </Form.Group>

      
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="text" placeholder="Enter Youtube Video Link" onChange={extractLink} />
      </Form.Group>

         </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            cancel
          </Button>
          <Button variant="primary" onClick={handleUpload}>Upload</Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer
position="top-center"
autoClose={3000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="colored"
/>
    </>)
}

export default Add

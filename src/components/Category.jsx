import React, { useEffect } from 'react'
import { useState } from 'react';
import {Button,Row,Col} from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';

import { Modal } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { addCategory, deleteCategory, getAllCategory, getAvideo, updateCategory } from '../services/allApi';
import VideoCard from './VideoCard';
function Category() { 
  const [categories,setCategories]=useState([])
  const [category,setCategory] = useState("")
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const insertCategory = async ()=>{
    if(category){
      let body = {
        category,allVideos:[]
      }
const response =await addCategory(body)
if(response.status>=200 && response.status<300){
    // reset state
    setCategory("")
    handleClose()
  getCategories()
}
else{
  toast.warning("Uploading error!!! please try after sometime...")
}
    }
    else{
      toast.info("Please fill the form completely")

    }
  }

  const getCategories = async()=>{
    const {data} = await getAllCategory()
    setCategories(data)
  }
  const removeCategory = async (id)=>{
    // make api call
    await deleteCategory(id)
    // get all category
    getCategories()
  }



  useEffect(()=>{
    getCategories()},[])
  
  const dragOverCategory = (e)=>{
    console.log("Dragging over  category");
    e.preventDefault()
  }

  const videoDrop = async (e,categoryId)=>{
    console.log("Inside drop function");
    console.log("Category id "+categoryId );
    const videoCardId = e.dataTransfer.getData("cardId")
    console.log("video card id "+videoCardId );

    // get video details
    const {data} = await getAvideo(videoCardId)
    let selectedCategory = categories.find(item=>item.id===categoryId)
    console.log(typeof(selectedCategory));
    selectedCategory.allVideos.push(data)
    console.log(selectedCategory);
    await updateCategory(categoryId,selectedCategory)
    getCategories()

  }

  return (
    <>
<div className='d-grid'>
  <button onClick={handleShow}className='btn btn-danger'> Add New Category</button>
  
</div>
{
  categories?categories.map(item=>(
  <div className="border p-3 rounded mt-3 mb-3" droppable onDragOver={(e)=>dragOverCategory(e)}
  onDrop={(e)=>videoDrop(e,item?.id)}>
<div className="d-flex justify-content-between">
  <h5>{item?.category}</h5>
  <button onClick={()=>removeCategory(item?.id)} className='btn'><i className='fa-solid fa-trash text-danger'></i></button>
</div>
<Row>
{
  item?.allVideos&&item?.allVideos.map(card=>(
    <Col sm={12}  className='p-1 mb-2'>
      <VideoCard displayData={card} insideCategory={true}/>
    </Col>
  ))
}
</Row>
  </div>
  )):<p className='fw-bolder fs-5 text-danger mt-5'>Sorry Nothing to display</p>
}
<Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title> Add New Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Please fill the following Details!!</p>
         <Form className='border p-3 rounded border-secondary'>


      
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="text" placeholder="Enter Category Name" onChange={e=>setCategory(e.target.value)} />
      </Form.Group>

      
        

         </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            cancel
          </Button>
          <Button variant="primary" onClick={insertCategory}>Add</Button>
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

    </>
  )
}

export default Category

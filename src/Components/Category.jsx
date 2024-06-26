import React, { useEffect } from 'react'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import VideoCard from './VideoCard';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { AvideoApi, addCategoryApi, allCategoryApi, deleteCategoryApi, updateCategoryApi } from '../services/allapi';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Col, Row } from 'react-bootstrap';

function Category({dragStatus, setDragStatus}) {
  const [show, setShow] = useState(false);
  const [CategoryName, setCategoryName] = useState("")
  const [allCategory, setAllCategory] = useState([])
  const [addStatus, setAddStatus] =  useState(false)


  const handleClose = () => {
    setShow(false)
    setCategoryName("")
  };
  const handleShow = () => setShow(true);

  const addCategory = async() =>{
    if(CategoryName){
      const reqBody = {
        CategoryName, //bcz key and values are same
        allVideo : []
      }
    
    const result = await addCategoryApi(reqBody)
    if(result.status>=200 && result.status<300){
      setAddStatus(true)
      handleClose()
      toast.success('Category added successfully')
    }
    else{
      console.log(result);
    }
  } 
  else{
    toast.info('please add the category name')
  }
  }

  const getAllCategory = async () =>{
    const result = await allCategoryApi()
    console.log(result);
    if(result.status>=200 && result.status<300){
      setAllCategory(result.data)
    }
  }
  const delCategory = async (id) =>{
    const result = await deleteCategoryApi(id)
    console.log(result);
    getAllCategory()
  }

  const DragOver = (e) =>{
    e.preventDefault()
  }

  const videoDrop = async(e, categoryId) =>{
    console.log(`category id is : ${categoryId}`);
    //access the video id from view component
    const videoId = e.dataTransfer.getData("videoId")
    console.log("video id is",videoId);
    //get the video details from backend
    const {data} = await AvideoApi(videoId)
    console.log(data);

    const selectedCategory = allCategory.find((item)=>item.id==categoryId)
    if(selectedCategory.allVideo.find((item)=>item.id==data.id)){
      toast.warning('video already exist in category')
    }
    else{
      selectedCategory.allVideo.push(data)
    }

  await updateCategoryApi(categoryId,selectedCategory)
  getAllCategory() 


  }

  const DragStart = (e,videoId,categoryId) =>{
    console.log(videoId);
    console.log(categoryId);
    let dataShare = {
      videoId, categoryId
    }
    e.dataTransfer.setData('dataShared',JSON.stringify(dataShare))

  }
  useEffect(()=>{
    setAddStatus(false)
    getAllCategory()
    setDragStatus(false)
  },[addStatus, dragStatus])
  return (
    <>

      <div className='w-100 mt-1 p-4'>
        <button className='btn btn-warning w-75 ' onClick={handleShow}>Add New Category+</button>
        </div>

        {allCategory?.length>0?
         allCategory?.map((item)=>(
         <div className='mt-2 mt-md-5'>
          <div className='border border-secondary mt-3 rounded p-3 ms-4 ms-md-0' droppable onDragOver={(e)=>DragOver(e)} onDrop={(e)=>videoDrop(e,item.id)}>
            <div className='d-flex'>
              <h6>{item.CategoryName}</h6>
              <button className='btn btn-danger ms-auto' onClick={()=>delCategory(item.id)}><FontAwesomeIcon icon={faTrashCan} /></button>
            </div>
            <Row>
            {
            item?.allVideo?.length>0? 
            item?.allVideo?.map((videoItem)=>(
              <Col sm={12} draggable onDragStart={(e)=>DragStart(e, videoItem.id,item.id)}>
              <VideoCard displayVideo={videoItem} isPresent={true}/>
              </Col> 
            )) 
            : null
            }     
            </Row>
            
          </div>

        </div>))
          :null
        }
      
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className='text-warning'>Add New Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className='border rounded p-3 border-secondary'>
            <input type="text" placeholder='Category Name' className='form-control'  onChange={(e)=>setCategoryName(e.target.value)} />
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="warning" onClick={addCategory}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer theme='colored' position='top-center' autoClose={2000}/>

    </>
  )
}

export default Category

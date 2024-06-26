import { faCloudArrowUp, faFilm } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { addVideoApi } from '../services/allapi';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Add({setAddStatus}) {
   //create a state to hold data from input field
    const [video, setVideo] = useState({
      caption:"",
      image:"",
      url:""
    })
    const [show, setShow] = useState(false);

    const handleClose = () =>{ 
      setShow(false)
      setVideo({
        caption:"",
        image:"",
        url:""
      })
    };
    const handleShow = () => setShow(true);
   
    const validateLink = (e) =>{
      console.log(e.target.value);
      const link = e.target.value
      if(link.endsWith('?feature=shared')){
        const ykey = link.slice(-26,-15)
        let embedLink = `https://www.youtube.com/embed/${ykey}`
        setVideo({...video,url:embedLink})
      }
      else if(link.startsWith('https://youtu.be')){
        const ykey = link.slice(17,28)
        console.log(ykey);
        let embedLink = `https://www.youtube.com/embed/${ykey}`
        setVideo({...video,url:embedLink})
      }
      else {
        const ykey = link.slice(-11)
        let embedLink = `https://www.youtube.com/embed/${ykey}`
        setVideo({...video,url:embedLink})
      }
      
    }
    console.log(video);
    const handleUpload = async (e) => {
      e.preventDefault()
      const { caption, image, url} = video
      if(!caption || !image || !url){
        toast.info('please fill the form completely')
      }
      else{
      const result =  await addVideoApi(video)
      console.log(result);
      if(result.status>=200 && result.status<300){
        toast.success('video Uploaded successfully')
        setAddStatus(result.data)
        handleClose()
      }
      else{
        toast.error('something went wrong')
        handleClose()
      }
      }
    }
  return (

    <>

      <div className="d-flex align-items-center">
        <h5 id='h'>Upload New Video</h5>
        <button className='btn mb-2' onClick={handleShow}><FontAwesomeIcon icon={faCloudArrowUp} size='xl'/></button>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className='text-warning'><FontAwesomeIcon  className='me-2' icon={faFilm} />Upload Videos</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         <p>please fill the following details</p>
         <form className='border rounded p-3' >
            <input type="text" placeholder='Video Caption' className='form-control' onChange={(e)=>setVideo({...video,caption:e.target.value})} />
            <input type="text" placeholder='Video Image' className='form-control mt-3' onChange={(e)=>setVideo({...video,image:e.target.value})} />
            <input type="text" placeholder='Video url' className='form-control mt-3' onChange={(e)=>validateLink(e)}  />
         </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleUpload}>
            Upload
          </Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer theme='colored' position='top-center' autoClose={2000}/>

    </>
  )
}

export default Add

//rafce
import React, {useState} from 'react'
import { Modal,Button,Form,FloatingLabel } from 'react-bootstrap';
import { saveVideoAPI } from '../services/allAPI';

const Add = ({setAddResponseFromHome}) => {
  const [videoDetails,  setVideoDetails] = useState(
    {caption:"",imgUrl:"",youtubeLink:""
    });
    
  const [invalidYtLink,setInvalidYtLink] = useState(false);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  console.log(videoDetails);
  const extractYt = (inputYtVideo) => {
    //steps to create an embedded link from yt link
    if(inputYtVideo.includes("https://www.youtube.com/watch?v=")){
      //steps creating embed link from yt link
      console.log(inputYtVideo.split("v=")[1].slice(0,11));
      const videoId = inputYtVideo.split("v=")[1].slice(0,11)
      setInvalidYtLink(false)
      setVideoDetails({...videoDetails,youtubeLink:`https://www.youtube.com/embed/${videoId}`})
    }else{
      //alert("Invalid yt link!!")
      setInvalidYtLink(true)
      setVideoDetails({videoDetails,youtubeLink:""})
    }
  }

  const handleUploadVideo = async()=>{
    //object destructuring
    const {caption,imgUrl,youtubeLink} = videoDetails;
    if(caption && imgUrl && youtubeLink){
      // alert("Form submitted!!")
      try{
          const result =await saveVideoAPI(videoDetails)
          console.log(result);
          if(result.status>=200&&result.status<300){
            alert("Video uploaded successfully!")
            handleClose()
            //pass result to view component
            setAddResponseFromHome(result)
          }else{
            console.log(result);
          }
      }catch(err){
        console.log(err);
        
      }
    }else{
      alert("Please fill all fields!!")

    }
  }
  
  return (
    <>
      <div className='d-flex align-items-center'>
        <h5>Upload New Video</h5>
        <button onClick={handleShow} className="btn btn-warning ms-3 rounded-circle fw-bolder fs-5">+</button>
      </div>

      <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>Uploading Video Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="border rounded p-3">
            <FloatingLabel controlId="floatingCaption" label="Video Caption">
              <Form.Control onChange={e=>setVideoDetails({...videoDetails,caption:e.target.value})} type="text" placeholder="Video Caption" />
            </FloatingLabel>

            <FloatingLabel className='mt-2' controlId="floatingUrl" label="Video Image URL">
              <Form.Control onChange={e=>setVideoDetails({...videoDetails,imgUrl:e.target.value})} type="text" placeholder="Video Image URL" />
            </FloatingLabel>

            <FloatingLabel className='mt-2' controlId="floatingLink" label="Video Youtube Link">
              <Form.Control onChange={e=>extractYt(e.target.value)} type="text" placeholder="Video Youtube Link" />
            </FloatingLabel>
            {
              invalidYtLink &&
              <div className='text-danger fw-bolder mt-2'>Invalid Youtube Link!! Try again.</div>
            }
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleUploadVideo} className='btn btn-info' variant="primary">Add</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Add
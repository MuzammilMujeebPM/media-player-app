import React, { useState } from 'react'
import { Card, Modal } from 'react-bootstrap'
import { removeVideoAPI, saveHistoryAPI } from '../services/allAPI'

const VideoCard = ({ displayData, handleDeleteVideo,insideCategory }) => {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = async () => {
    setShow(true)
    // Store history in JSON
    const { caption, youtubeLink } = displayData
    const sysDateTime = new Date()
    const timeStamp = sysDateTime.toLocaleString('en-US', { timeZoneName: 'short' })
    const historyDetails = { caption, youtubeLink, timeStamp }
    try {
      await saveHistoryAPI(historyDetails)
    } catch (err) {
      console.log(err)
    }
  }

  const deleteVideo = async (id) => {
    try {
      const result = await removeVideoAPI(id)
      if (result.status >= 200 && result.status < 300) {
        handleDeleteVideo(id) // Update the list in the parent component
      }
    } catch (err) {
      console.log(err)
    }
  }

  const videoCardDragStarted = (e,dragVideoDetails)=>{
    console.log("Inside videoCardDragStarted eith video id"+dragVideoDetails?.id);
    //share data using event drag start
    e.dataTransfer.setData("videoDetails",JSON.stringify(dragVideoDetails))
  }

  return (
    <>
      <Card draggable={true} onDragStart={e=>videoCardDragStarted(e,displayData)} style={{ height: '250px' }}>
        <Card.Img onClick={handleShow} variant="top" height="150px" src={displayData?.imgUrl} />
        <Card.Body>
          <Card.Text className="d-flex justify-content-between">
            <p>{displayData?.caption}</p>
            {!insideCategory&&<button onClick={() => deleteVideo(displayData?.id)} className="btn">
              <i className="fa-solid fa-trash text-danger"></i>
            </button>}
          </Card.Text>
        </Card.Body>
      </Card>

      <Modal size="lg" centered show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Caption</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <iframe
            width="100%"
            height="438"
            src={`${displayData?.youtubeLink}?autoplay=1`}
            title="caption"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default VideoCard

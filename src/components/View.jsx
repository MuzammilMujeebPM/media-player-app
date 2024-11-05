import React, { useEffect, useState } from 'react'
import { Row, Col } from 'react-bootstrap'
import { getAllVideosAPI } from '../services/allAPI'
import VideoCard from './VedioCard'
const View = (addResponseFromHome,deleteResponseFromCategory) => {
  const [allVideos, setAllVideos] = useState([])

  // Fetch all videos when the page loads
  useEffect(() => {
    getAllVideos()
  }, [addResponseFromHome,deleteResponseFromCategory])

  const getAllVideos = async () => {
    try {
      const result = await getAllVideosAPI()
      if (result.status > 199 && result.status < 300) {
        setAllVideos(result.data)
      }
    } catch (err) {
      console.log(err)
    }
  }

  // Function to handle deletion of a video
  const handleDeleteVideo = (id) => {
    setAllVideos(allVideos.filter(video => video.id !== id))
  }

  return (
    <Row>
      {allVideos.length > 0 ? (
        allVideos.map(video => (
          <Col key={video.id} className='mb-2' sm={12} md={6} lg={4}>
            <VideoCard handleDeleteVideo={handleDeleteVideo} displayData={video} />
          </Col>
        ))
      ) : (
        <div className="fw-bolder text-danger fs-5">No videos are available!!</div>
      )}
    </Row>
  )
}

export default View

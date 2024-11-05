import React from 'react'
import { Link } from 'react-router-dom'
import landingImg from '../assets/image1.png'
import cardimg1 from   '../assets/image2.png'
import cardimg2 from  '../assets/image3.png'
import cardimg3 from   '../assets/image4.png'
import { Card } from 'react-bootstrap'

const Landing = () => {
  return (
    <div style={{paddingTop:'100px'}} className='container'>
      <div className="row align-items center">
        <div className="col-lg-5">
          <h3 className="mb-3">Welcome to <span className='text-warning'>Media Player</span></h3>
          <p style={{textAlign:'justify'}}>Media Player App will allow user to add or remove their uploaded videos from youTube and also allow them to arrange it in different categories by drag and drop. User can also have the provision to manage their watch history as well. What are you waiting for, let starts exploring our site!!!</p>
          <Link to={'/home'} className='btn btn-info rounded'>Get Started</Link>
        </div>
        <div className="col"></div>
        <div className="col-lg-6">
          <img className='img-fluid ms-5' src={landingImg} alt="LandingIMage" />
        </div>
      </div>
      {/* features */}
      <div className="my-5">
          <h3 className="text-center">Features</h3>
          <div className="row mt-5">
            <div className="col-lg-4">
          <Card className='p-2' style={{ width: '20rem' }}>
               <Card.Img height={'250px'} variant="top" src={cardimg1 } />
                 <Card.Body>
                  <Card.Title>Managing videos</Card.Title>
                  <Card.Text>
                    You can add or remove your uploaded videos from youTube and also arrange it in different categories by
                  </Card.Text>
                </Card.Body>
          </Card>
            </div>
            <div className="col-lg-4">
          <Card className='p-2' style={{ width: '20rem' }}>
               <Card.Img height={'250px'} variant="top" src={cardimg3 } />
                 <Card.Body>
                  <Card.Title>Managing videos</Card.Title>
                  <Card.Text>
                    You can add or remove your uploaded videos from youTube and also arrange it in different categories by
                  </Card.Text>
                </Card.Body>
          </Card>
            </div>
            <div className="col-lg-4">
          <Card className='p-2' style={{ width: '20rem' }}>
               <Card.Img height={'250px'} variant="top" src={cardimg2 } />
                 <Card.Body>
                  <Card.Title>Managing videos</Card.Title>
                  <Card.Text>
                    You can add or remove your uploaded videos from youTube and also arrange it in different categories by
                  </Card.Text>
                </Card.Body>
          </Card>
            </div>
          </div>
      </div>
      {/* last */}
      <div className="my-5 row align-items-center border rounded p-5">
        <div className="col-lg-5">
          <h3 className="text-warning">Simple,Fast and powerfull</h3>
          <p style={{textAlign:'justify'}}><span className='fs-5 fw-bolder'>Play Everything</span> :Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate quam facere provident quidem cupiditate quod error itaque ipsa omnis. Necessitatibus similique perspiciatis, nam laboriosam voluptatem deserunt totam ipsum iste hic!</p>
          <p style={{textAlign:'justify'}}><span className='fs-5 fw-bolder'>Categories Videos</span> :Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate quam facere provident quidem cupiditate quod error itaque ipsa omnis. Necessitatibus similique perspiciatis, nam laboriosam voluptatem deserunt totam ipsum iste hic!</p>
          <p style={{textAlign:'justify'}}><span className='fs-5 fw-bolder'>Managing History</span> :Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate quam facere provident quidem cupiditate quod error itaque ipsa omnis. Necessitatibus similique perspiciatis, nam laboriosam voluptatem deserunt totam ipsum iste hic!</p>
        </div>
        <div className="col"></div>
        <div className="col-lg-6">
      <iframe width="100%" height="360" src="https://www.youtube.com/embed/uU3AIBmXF1o" title="Tom und Jerry auf Deutsch | Klassischer Cartoon 115 | WB Kids" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
      </div>
    </div>
  )
}

export default Landing
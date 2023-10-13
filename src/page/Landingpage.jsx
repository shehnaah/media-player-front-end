import React from 'react'
import { Card } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
function Landingpage() {

  const navigateByUrl=useNavigate()
  const navigate=()=>
  {
navigateByUrl('/home')
  }
  return (
    <>

      <div className="container d-flex align-items-center justify-content-center " >
        <div className="content flex-column" style={{ width: '60%' }} >
          <div className="heading">
            <h2>Welcome to <span className='text-warning'>Media player</span></h2>
            <h6 style={{ fontFamily: 'cursive' }}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus illo laboriosam maxime, delectus neque explicabo quod assumenda voluptates vitae molestias maiores dolorem iusto eaque harum unde, ex veritatis tempore voluptatibus?</h6>
          </div>
          <div className="but">
            <button style={{ width: '200px', color: 'white' }} className='btn btn-danger btn-outline-light' onClick={navigate}>Get started</button>
          </div>
        </div>
        <div className="image" style={{ width: '40%' }}>
          <img className="img-fluid" src="https://play-lh.googleusercontent.com/Q-OIjX_BxHiXyZYx9G25-MP6W5GPoMTww8MyAJwtNcgOFE5_RmJyuMBCT6qFdGrEVic" alt="o image" />
        </div>
      </div>
      <div className="features ">
        <h2 className='d-flex justify-content-center'>Features  </h2>
        <div className="d-flex justify-content-evenly align-items-center">
          <div className='cards border rounded p-2 border-tertiery shadow'>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="https://www.pngitem.com/pimgs/m/142-1427972_settings-icon-hd-png-download.png" />
              <Card.Body>
                <Card.Title>Manage videos</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className='cards border rounded p-2 border-tertiery shadow'>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="https://w7.pngwing.com/pngs/611/260/png-transparent-arrow-category-arrow-classification-title.png " />
              <Card.Body>
                <Card.Title>Categories videos </Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className='cards border rounded p-2 border-tertiery shadow'>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="https://static.vecteezy.com/system/resources/previews/010/986/668/original/3d-rendering-of-history-icons-png.png" />
              <Card.Body>
                <Card.Title>Watch History</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>

        </div>
      </div>
      <div className='container border border-light features d-flex' >
        <div className='p-5' style={{ width: '55%', marginRight: '10px' }}>
          <h2 className=' text-warning'>Simple,fast and Powerful</h2>

          <h4>Play everything : <span style={{ fontSize: '18px' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, perferendis odit dolore veniam amet voluptatem eaque corporis commodi.</span></h4>
          <h4>Categories videos: <span style={{ fontSize: '18px' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, perferendis odit dolore veniam amet voluptatem eaque corporis commodi. </span></h4>
          <h4>Manage History : <span style={{ fontSize: '18px' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, perferendis odit dolore veniam amet voluptatem eaque corporis commodi. </span></h4>
        </div>
        <div className="video justify-content-center align-items-center" style={{ width: '45%', marginTop: '50Px' }}>
          <iframe width="460" height="300" src="https://www.youtube.com/embed/KDjmKFjxXt0?si=JQH18g_NhtcBhPf9" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
      </div>

    </>
  )
}

export default Landingpage
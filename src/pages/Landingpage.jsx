import React from 'react'
import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom'

function Landingpage() {
  return (
    <>
     <div className="row mt-5 w-100 d-flex justify-content-center align-items-center">
      <div className="col-md-1"></div>
      <div className="col-md-5 p-5">
        <h3>Welcome to <span className='text-warning'>Media Fusion</span></h3>
        <p style={{textAlign:'justify'}}>Experience seamless entertainment with Media Fusion, the ultimate media player. Enjoy crystal-clear audio and stunning video quality, customizable playlists, and robust subtitle support. Discover new favorites with smart recommendations and enjoy offline access anywhere, anytime. Download Media Fusion today and elevate your media experience.</p>
        <button className='btn btn-warning mt-5'><Link to={'/home'} style={{textDecoration:'none',color:'white'}}>Get Started</Link></button>
      </div>
      <div className="col-md-1"></div>
      <div className="col-md-5 d-flex justify-content-center align-items-center p-md-5">
        <img src="https://media.tenor.com/lhlDEs5fNNEAAAAC/music-beat.gif" alt="no image" className='w-75'/>
      </div>
     </div>
 
    <div className="row w-100 mt-5">
      <h3 className='mt-5 text-center mb-5'>Features</h3>
      <div className="col-md-1"></div>
      <div className="col-md-3 d-flex justify-content-center align-items-center px-5 px-md-4 mt-4">
      <Card style={{ width: '100%' }} className='p-3'>
      <Card.Img variant="top" src="	https://i.pinimg.com/originals/ad/d2/31/add23123b088c3301cc2c71f7767048d.gif" className='w-100' height={'300px'}  />
      <Card.Body>
        <Card.Title>Crystal-clear audio</Card.Title>
        <Card.Text>
        Experience crystal-clear audio with Media Fusion, the ultimate media player.
        </Card.Text>
      </Card.Body>
    </Card>
      </div>
      <div className="col-md-4 d-flex justify-content-center align-items-center px-5 px-md-4 mt-4">
      <Card style={{ width: '100%' }} className='p-3'>
      <Card.Img variant="top" src="https://i.pinimg.com/originals/2d/2d/51/2d2d51ba3d86b27b221abb162c24edc0.gif" className='w-100' height={'300px'}  />
      <Card.Body>
        <Card.Title>Customizable playlists</Card.Title>
        <Card.Text>
        Create your perfect soundtrack with Media Fusion's customizable playlists.
        </Card.Text>
      </Card.Body>
    </Card>
      </div>
      <div className="col-md-3 d-flex justify-content-center align-items-center px-5 px-md-4 mt-4">
      <Card style={{ width: '100%' }} className='p-3'>
      <Card.Img variant="top" src="https://i.pinimg.com/originals/48/c6/12/48c61262980bb7dbf2557940d41c7d0b.gif" className='w-100' height={'300px'} />
      <Card.Body>
        <Card.Title>Robust subtitle support</Card.Title>
        <Card.Text>
        Enjoy seamless viewing with Media Fusion's robust subtitle support.
        </Card.Text>
      </Card.Body>
    </Card>
      </div>
      <div className="col-md-1"></div>
      </div>  

    <div className="row w-100 mt-5 ms-1 ms-md-0 p-4 p-md-0">
      <div className="col-md-1"></div>
      <div className="col-md-9 border p-5 m-md-5 rounded">
        <div className="row w-100">
          <div className="col-md-6">
            <h3 className='text-warning mt-3'>Simple fast and Powerful</h3>
            <p className='mt-4'><span className='fs-5'>Play Everything</span>:Unlock the freedom to play everything seamlessly with Media Fusion—a versatile, powerful media player for all your needs.</p>
            <p className='mt-4'><span className='fs-5'>Universal compatibility</span>:Media Fusion effortlessly plays all media formats, ensuring you can enjoy your favorite content without any compatibility issues.</p>
            <p className='mt-4'><span className='fs-5'>Quick downloads</span>: Download your preferred media quickly and efficiently, so you can enjoy it offline whenever and wherever you want.</p>
          </div>
          <div className="col-md-6">
          <iframe width="100%" height="100%" src="https://www.youtube.com/embed/nWI00u-tivs" title="Bahara (4K Video) | I Hate Luv Storys | Sonam Kapoor, Imran Khan | Shreya Ghoshal 🌌💔  🌌💔" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>
        </div>
      </div>
      <div className="col-md-2"></div>
      </div> 
    </>
  )
}

export default Landingpage

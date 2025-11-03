import React from 'react'

import './footer.css'
const footer = () => {
  return (
    <div id='footer' className='footer'>
        <div className='footer-content'>
            <div className="footer-content-left">
                <img src="" alt="" />
                <p>By offering these services, you’ll not only enhance your students' learning experiences but also contribute positively to the overall educational environment. Tailor these offerings to fit your teaching style and the needs of your students for maximum impact!</p>
                <div className='footer-social-icon'>
                    
                </div>
            </div>
            <div className="footer-content-center">
            <h2>PAGES</h2>
                <ul>
                   <li>Home</li>
                   <li>About Me</li>
                   <li>Qualifications</li>
                   <li>Services</li>
                   <li>Contact</li>
                </ul>

            </div>
            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+263 71 340 4839</li>
                    <li>+263 77 911 3200</li>
                    <li> jpchiriwa@gmail.com</li>
                </ul>
            </div>

        </div>
        <hr />
        <p className='footer-copyright'>Copyright 2025 <a href="">MicahTadiwanashe</a>-All right reserved.</p>
      
    </div>
  )
}

export default footer

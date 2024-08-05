import React from 'react';
import './App.css';
import Skills from './components/skills';


const App = () => {
  return (
    <>
      <section id="home" className='home'>
        <div className='home-div'>
          <nav className='navbar'>
            <ul style={{ display: 'flex', listStyle: 'none', padding: 0 }}>
              <li style={{ margin: '0 10px' }}><a href="#home">Home</a></li>
              <li style={{ margin: '0 10px' }}><a href="#about">About Us</a></li>
              <li style={{ margin: '0 10px' }}><a href="#skill">Skills</a></li>
              <li style={{ margin: '0 10px' }}><a href="#certificates">Certificates</a></li>
              <li style={{ margin: '0 10px' }}><a href="#contact">Contact</a></li>
            </ul>
          </nav>
        </div>
        <h2 className='sai'>Home</h2>
        <div className='home-1'>
          <div className='kumar'>
            <p className='font0'>Hi All</p>
            <p className='font'>This is Sai Kumar</p><br />
            <p className='font1'>Junior Developer Intern.</p><br />
            <p className='font11'>At k-Hub</p>
            <div className='social-icons'>
              <i className="fa-brands fa-linkedin"></i>
              {/* <a href="https://github.com/np" target="_blank" rel="noopener noreferrer"> */}
              <i className="fa-brands fa-github"></i>
              <i className="fa-brands fa-facebook"></i>
              <i className="fa-brands fa-instagram"></i>
            </div>
          </div>
          <div className='kannuru'>
            <img src="IMG_1425 (1).jpg" alt="" className='sai-img' />
          </div>
        </div>
      </section>
      <section id="about" className='about'>
        <h2 className='sai'>About Us</h2>
        <div className='about-10'>
          <div className='about-10-1'>
            <img src="snap-removebg-preview.png" alt="sai-snapimg" />
          </div>
          <div className='about-11'>
            <p style={{ color: '#931F1D' }}>Welcome to my portfolio.</p><br />
            <p>I am a passionate and dedicated individual with a strong foundation in Artificial Intelligence and Machine Learning</p><br />
            <p>And earned through a 6-week internship with IBM SkillsBuild in collaboration with Andhra Pradesh State Skill Development Corporation (APSSDC) and Edunet Foundation</p><br />
            <p>I have honed my skills in developing innovative solutions and leveraging cutting-edge technologies.</p>
          </div>
        </div>
      </section>
      <section id="skill" className='projects'>
        <h2 className='sai'>Skills</h2>
        <div className='skill'>
          <p className="bold-large-text">Here are my skills:</p>
          <Skills/>
        </div>
      </section>
      <section id="certificates" className='certificates'>
        <h2 className='sai'>Certificates</h2>
        <div className="certificates-container">
          <div className="certificates-scroll">
            <img src="img1.png" alt="" className="certificate-img" />
            <img src="img2.png" alt="" className="certificate-img" />
          </div>
        </div>
      </section>
      <section id="contact" className='contact'>
        <div className='contact-div'>
          <h2 className='sai'>Contact Me</h2>
          <p>Phone: <a href="tel:+8008030674">800-803-0674</a></p>
          <p>Email: <a href="mailto:ksai33393@gmail.com">ksai33393@gmail.com</a></p>
          <form className='contact-form'>
            {/* <li>
              <a href="https://wa.me/918008030674" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-whatsapp"> WhatsApp</i>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/sai-kumar-kannuru-661673287" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i>LinkedIn
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/saikumar_kannuru" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>Instagram
              </a>
            </li> */}
            <div className='contact-icons'>
              <i className="fa-brands fa-linkedin"></i>
              <i className="fa-brands fa-github"></i>
              <i className="fa-brands fa-facebook"></i>
              <i className="fa-brands fa-instagram"></i>
            </div>

            <button type="submit">FEEL FREE TO DM</button>
          </form>
        </div>
      </section>
    </>
  );
}

export default App;

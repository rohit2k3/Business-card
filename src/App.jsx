import './App.css'
import { React } from "react";
import Image from "./components/Image"
import Detail from "./components/Detail"
import About from "./components/About"

function App() {
  return (
    <>
      <div className='container'>
        <Image />
        <div className='second-container'>
          <Detail />
          <div className='button'>
            <button className='btn-1'><i class="fa-solid fa-envelope"></i>Email</button>
            <button className='btn-2'><i class="fa-brands fa-linkedin"></i>Linkedin</button>

          </div>
          <div className='about-container'>
            <About />
          </div>
          <div className='social-div'>
            <i class=" social-icon fa-brands fa-square-twitter"></i>
            <i class="social-icon fa-brands fa-square-facebook"></i>
            <i class="social-icon fa-brands fa-square-instagram"></i>
            <i class="social-icon fa-brands fa-square-github"></i>
          </div>
        </div>
      </div>
    </>
  )
}

export default App;
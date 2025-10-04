import React from 'react'
import './Navbar.css'

const Navbar = () => {
    return (
        <nav>
        <ul class="nav">
          <li><a href="#">About</a></li>
          <li><a href="#">Services</a>
            <ul>
              <li><a href="#">Developer</a></li>
              <li><a href="#">Programer</a></li>
              <li><a href="#">Web3</a></li>
              <li><a href="#">Blockchain</a></li>
            </ul>
          </li>
          <li><a href="#">Experince</a>
            <ul>
              <li><a href="#">React</a></li>
              <li><a href="#">Coding</a>
                <ul>
                  <li><a href="#">C++</a></li>
                  <li><a href="#">C</a></li>
                  <li><a href="#">JAVA</a></li>
                  <li><a href="#">Python</a></li>
                </ul>
              </li>
              <li><a href="#">Html</a></li>
              <li><a href="#">CSS</a></li>
            </ul>
          </li>
          <li><a href="#">Download</a></li>
          <li><a href="#">Websites</a>
            <ul>
              <li><a href="#">Netflix Clone</a></li>
              <li><a href="#">Portfolio</a></li>
              <li><a href="#">Gym site</a></li>
              <li><a href="#">To do app</a></li>
            </ul>
          </li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
    )
}

export default Navbar

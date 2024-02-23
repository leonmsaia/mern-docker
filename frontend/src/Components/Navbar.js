// Styles
import './Navbar.css';

export default function Navbar() {
  return (
    <>
      <nav className="navbar-expand-md navbar fixed-top" id="navbar">
          <a className="navbar-brand" data-scroll="" href="#home-area">
              <img className="img-fluid" src="img/img-kitzu-logo.png" alt="Logo" />
          </a>
          <span className="navbar-menu ml-auto" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" role="button">
            <span className="btn-line"></span>
          </span>
          <div className="collapse navbar-collapse order-1 order-lg-0" id="navbarSupportedContent">

              <ul className="navbar-nav ml-auto">
                  <li className="nav-item"><a className="nav-link" href="#about">About</a></li>
                  <li className="nav-item"><a className="nav-link" href="#resume">Resume</a></li>
                  <li className="nav-item"><a className="nav-link" href="#portfolio">Portfolio</a></li>
                  <li className="nav-item"><a className="nav-link" href="#blog">Blog</a></li>
                  <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
              </ul>
              
          </div>
      </nav>
    </>
  )
}
// Styles
import './Preloader.css';

export default function Preloader() {
  return (
    <>
      <div className="preloader">
          <div className="preloader-block">
              <div className="preloader-icon">
                  <span className="loading-dot loading-dot-1"></span>
                  <span className="loading-dot loading-dot-2"></span>
                  <span className="loading-dot loading-dot-3"></span>
              </div>
          </div>
      </div>
      <div id="overlay-effect"></div>
    </>
  )
}
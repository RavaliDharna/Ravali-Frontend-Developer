import React from "react";
import "./Homepage.css";
import Navbar from "../Navbar/Navbar";

const Homepage = () => {
  return (
    <div className="container">
      <div className="first-section">
        <Navbar />
        <div className="reWatch">
          <h4 className="animate">Recent Launch</h4>
          <h2 className="missionHeader">Starlink Mission</h2>
          <div className="btn">
            <a class="reWatchBtn" tabindex="0" href="/launches/sl4-31/">
              <button class="custom-btn btn-17 text">REWATCH</button>

            </a>
          </div>
        </div>
      </div>
      <div>
        <div className="second-section">
          <div className="completedMission">
            <h4 className="animate">Completed Mission</h4>
            <h2 className="missionHeader">Crew-4 Returns to Earth</h2>
            <div className="btn">
              <a class="reWatchBtn" tabindex="0" href="/launches/sl4-31/">
               <button class="custom-btn btn-17 text">REWATCH</button>
              </a>
            </div>
          </div>
        </div>
        <div className="Third-section">
        </div>
      </div>
      <footer className="footer">
        <div className="footer-content">
          <div>
            <ul>
              <li>
                <a style={{"color": "#979797"}} href="//#">SPACEX @2022</a>
              </li>
            </ul>
          </div>
          <div>
            <ul>
              <li>
                <a href="//#">TWITTER</a>
              </li>
            </ul>
          </div>
          <div>
            <ul>
              <li>
                <a href="//#">YOUTUBE</a>
              </li>
            </ul>
          </div>
          <div>
            <ul>
              <li>
                <a href="//#">INSTAGRAM</a>
              </li>
            </ul>
          </div>
          <div>
            <ul>
              <li>
                <a href="//#">FLICKR</a>
              </li>
            </ul>
          </div>
          <div>
            <ul>
              <li>
                <a href="//#">LINKEDIN</a>
              </li>
            </ul>
          </div>
          <div>
            <ul>
              <li>
                <a href="/#">PRIVACY POLICY</a>
              </li>
            </ul>
          </div>
          <div>
            <ul>
              <li>
                <a href="/#">SUPPLIERS</a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Homepage;

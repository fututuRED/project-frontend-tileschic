import React from "react";
import "../css/Home.css";

function HomePage() {
  return (
    <>
      <div className="home">
        <h1>TILES |so| CHIC</h1>
        <p>
          Ever thought, when watching at an abstract paintin,
          <br />
          wouldnt it be nice to have it as a floor-tile in the bathroom? <br />
          If this has cross your mind, WELCOME! <br />
        </p>
        <div className="rules">
          <h2>And then?</h2>
          <p>We Invite you to have a look at the gallery and...</p>
          <ul>
            <li>
              <strong>CHOOSE</strong>by clicking on details and <br />
              <strong>DISCOVER</strong>a short introduction to the piece
            </li>
            <li>
              Feel free to <strong>COMMENT</strong> the artwork by using your
              own pseudonym
            </li>
            <li>
              <strong>ADD IT</strong>to YOUR gallery
            </li>
            <li>
              In your gallery the different pieces you'll add will be DISPLAYED,
              <br /> in our creepy way,
              <br /> like a bathroom wall, ARTISTICALLY TILED!
            </li>
            <li>
              CREATE an artwork from the tile you like the most // WORK IN
              PROGRESS
            </li>
            <br />
          </ul>
        </div>
        <div className="last-section">
          <p>
            Hope youll enjoy them and who knows, end up with remodeling you are
            whole...
            <br />
            bathroom! <br />
            OR, at least, having a different perspective while browsing in
            museums or galleries!
          </p>
          <br />{" "}
          <p>
            Thanks a lot to the AIofChicago for letting me use some of their
            wonderful artworks, do not hesitate to check more of these:
            <a
              href="https://www.artic.edu/"
              target="_blank"
              rel="noopener noreferrer"
              alt="AIofChicago-site"
            >
              🌐
            </a>
          </p>
        </div>
      </div>
    </>
  );
}

export default HomePage;

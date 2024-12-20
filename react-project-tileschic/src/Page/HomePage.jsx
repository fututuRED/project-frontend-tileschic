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
              CHOOSE by clicking on details and DISCOVER a short introduction to
              the piece;
            </li>
            <li>
              Feel free to COMMENT the artwork by using your own pseudonym;
            </li>
            <li>ADD IT to YOUR gallery;</li>
            <li>
              In your gallery the different pieces you'll add will be DISPLAYED
              on something like a bathroom wall, ARTISTICALLY TILED!
            </li>
            <li>
              CREATE and EXPERIENCE a modelised TILES OF CHICago from one of the
              different artworks at your disposal!
            </li>
          </ul>
        </div>
        <div className="last-section">
          <p>
            Hope youll enjoy them and with this fantastic opportunity,
            <br />
            who knows...
            <br /> ending up remodeling you're whole bathroom! <br />
            OR, at least, having a different perspective while browsing in
            museums or galleries!
          </p>
          <br />{" "}
          <p>
            Thanks a lot to the AIofChicago for letting me use some of their
            wonderful artworks, do not hesitate to check more of these:
            <a
              href="https://www.artic.edu/"
              data-tooltip="ArtInstituteOfChicago"
              data-placement="bottom"
              target="_blank"
              rel="noopener noreferrer"
              alt="Art-Institute-of-Chicago-website"
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

import React from "react";
import NavbarPage from "./NavbarPage";

import "../css/Home.css";
function HomePage() {
  return (
    <>
      <NavbarPage />
      <div className="home">
        <h1>TILES |so| CHIC</h1>
        <p>
          Ever thought, when watching at an abstract paintin,
          <br />
          wouldnt it be nice to have it as a floor-tile in the bathroom? <br />
          If this has cross your mind, WELCOME! <br />
        </p>
        <h2>And then?</h2>
        <ul>
          We Invite you to have a look at the gallery and...
          <li>
            <strong>Chose</strong>by clicking on details
          </li>
          <li>
            Feel free to <strong>comment</strong> the artwork by using your own
            pseudonym
          </li>
          <li>
            <strong>Add it</strong>to YOUR gallery
          </li>
          <li>
            In your gallery the different pieces you'll add will be displayed,
            <br /> in our creepy way,
            <br /> like a bathroom wall, tiled artistically!
          </li>
          <li>
            Create an artwork from the tile you like the most // WORK IN
            PROGRESS
          </li>
        </ul>
        <p>
          Hope youll enjoy them and who knows, end up with remodeling you are
          whole...
          <br />
          bathroom! <br />
          OR, at least, having a different perspective while browsing in museums
          or galleries!
        </p>
        <br />{" "}
        <p>
          Thanks a lot to the AIofChicago for letting me use some of their
          wonderful artworks, do not hesitate to check more of these:
          <a
            href="https://www.artic.edu/"
            target="_blank"
            rel="noopener noreferrer"
          >
            🌐
          </a>
        </p>
      </div>
    </>
  );
}

export default HomePage;

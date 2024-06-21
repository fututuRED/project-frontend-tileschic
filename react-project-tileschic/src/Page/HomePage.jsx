import React from "react";
import NavbarPage from "./NavbarPage";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import "../css/Home.css";
function HomePage() {
  return (
    <>
      <NavbarPage />
      <div className="home">
        <h1>TILES |so| CHIC</h1>
        <p>
          Always thought, this painting, well wouldnt it be nice to have it as a
          floor-tile in my bathroom <br />
          If this has cross your mind, WELCOME! <br />
          Here you are now, have a look at some artworks from different artist
          picked by your host!
        </p>
        <h2>About</h2>
        <p>
          By displaying some of the finest, in our opinion, artworks from the
          Art Institute of Chicago;
          <br />
          We invite you to post what you thing of them,
          <br />
          To create your favorites page where you will find them in a floor-tile
          fashion, and just to give you a brief idea of what an artwork could be
          like if it were a tile!
        </p>
        <p>
          Hope youll enjoy them and who knows, end up with remodeling you are
          whole...
          <br />
          bathroom! <br />
          OR, at least, having a different perspective while browsing in museums
          or galleries!
        </p>
      </div>

      <div className="about-container">
        <h4>About Me</h4>
        <img
          src="https://cdn.vox-cdn.com/thumbor/pRci-DNLZez5I-eoQuY5u6_oJwo=/78x0:1322x933/1520x1013/filters:focal(78x0:1322x933):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/55912251/1_tQM0hcRiO1ZWEAj_if-Tzw.0.jpeg"
          alt="Avatar"
          className="avatar"
        />

        <p>
          Hello! Im Reda, a passionate developer. Feel free to have a look ath
          those: the following platforms:
        </p>

        <div className="social-links">
          <a
            href="https://:www.linkedin.com/in/reda-d-76b0942b9"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="icon" />
          </a>
          <a
            href="https://github.com/fututuRED"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="icon" />
          </a>
        </div>
      </div>
    </>
  );
}

export default HomePage;

import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import "../css/Home.css";
function Footer() {
  return (
    <>
      <div>
        <footer>
          <div className="footer">
            <p>©2024 Short-so-short. Site designed by Reda.</p>
            <p>About Me</p>
            <img
              src="https://cdn.vox-cdn.com/thumbor/pRci-DNLZez5I-eoQuY5u6_oJwo=/78x0:1322x933/1520x1013/filters:focal(78x0:1322x933):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/55912251/1_tQM0hcRiO1ZWEAj_if-Tzw.0.jpeg"
              alt="Avatar"
              className="avatar"
            />
            <p>
              Hello! Im Reda, a passionate developer. Feel free to have a look
              at those:
            </p>
            <a
              href="https://linkedin.com/in/reda-d-76b0942b9"
              target="_blank"
              rel="noopener noreferrer"
              alt="linkedin-link"
            >
              <FaLinkedin className="icon" />
            </a>
            <a
              href="https://github.com/fututuRED"
              target="_blank"
              rel="noopener noreferrer"
              alt="github-link"
            >
              <FaGithub className="icon" />
            </a>
          </div>
        </footer>
      </div>
    </>
  );
}

export default Footer;

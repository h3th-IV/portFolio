import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import useNav from "./useNav";
import coverlyImg from "./img/coverly.png";
import smapp from "./img/sm-app.png";
import blackTrustImg from "./img/blacktrust.png";
import swiftwingsImg from "./img/swiftwings.png";
import juwsheyajImg from "./img/juwsheyaj.png";
import cuttLive from "./img/cutt-live.png";

function Projects() {
  const { navValue } = useNav(true);
  return (
    <div className="Projects">
      <Header navValue={navValue} />
      <div className="main">
        <h1 className="projects__header">Projects</h1>
        <p className="contribution">
          These are projects I've worked on or contributed to.
        </p>
        <div className="projects__container">
          <div className="projects__cardWrapper">
            <div>
              <h1>Swiftwingsjet</h1>
              <p>A website for private jets hire.</p>
            </div>
            <a
              href="https://www.swiftwingsjet.com/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={swiftwingsImg} alt="openAI-ask cover img" />
            </a>
            <div>
              <div className="projects__active">ACTIVE</div>
              <div className="projects__buttons">
                <a
                  href="https://www.swiftwingsjet.com/"
                  target="_blank"
                  rel="noreferrer"
                  id="project__website"
                >
                  Website
                </a>

                <a
                  href="https://github.com/codeAmbivert/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github
                </a>
              </div>
            </div>
          </div>
          <div className="projects__cardWrapper">
            <div>
              <h1>Cutt.live</h1>
              <p>A URL shortener with QR Codes for users</p>
            </div>
            <a href="cutt.live" target="_blank" rel="noreferrer">
              <img src={cuttLive} alt="blackTrust" />
            </a>
            <div>
              <div className="projects__active">ACTIVE</div>
              <div className="projects__buttons">
                <a
                  href="cutt.live"
                  target="_blank"
                  rel="noreferrer"
                  id="project__website"
                >
                  Website
                </a>

                <a
                  href="https://github.com/codeAmbivert/scissor"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github
                </a>
              </div>
            </div>
          </div>
          <div className="projects__cardWrapper">
            <div>
              <h1>Juwsheyaj Residence</h1>
              <p>A modern hotel website designed for booking rooms</p>
            </div>

            <a
              href="https://www.juwsheyaj.com/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={juwsheyajImg} alt="juwsheyaj" />
            </a>
            <div>
              <div className="projects__active">ACTIVE</div>
              <div className="projects__buttons">
                <a
                  href="https://www.juwsheyaj.com/"
                  target="_blank"
                  rel="noreferrer"
                  id="project__website"
                >
                  Website
                </a>

                <a
                  href="https://github.com/codeAmbivert/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github
                </a>
              </div>
            </div>
          </div>

          <div className="projects__cardWrapper">
            <div>
              <h1>Social media app</h1>
              <p>A social app where users can meet and communicate....</p>
            </div>
            <a
              href="https://smedia.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={smapp} alt="social media app img" />
            </a>
            <div>
              <div className="projects__active">ACTIVE</div>
              <div className="projects__buttons">
                <a
                  href="https://smedia.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                  id="project__website"
                >
                  Website
                </a>

                <a
                  href="https://github.com/codeAmbivert/social-media-app"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github
                </a>
              </div>
            </div>
          </div>
          {/* <div className="projects__cardWrapper">
            <div>
              <h1>Coverly</h1>
              <p>A web app that help users generate cover letters using AI</p>
            </div>
            <a href="https://coverly.app" target="_blank" rel="noreferrer">
              <img src={coverlyImg} alt="coverlyImage" />
            </a>
            <div>
              <div className="projects__active">ACTIVE</div>
              <div className="projects__buttons">
                <a
                  href="https://coverly.app"
                  target="_blank"
                  rel="noreferrer"
                  id="project__website"
                >
                  Website
                </a>

                <a
                  href="https://github.com/codeAmbivert/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github
                </a>
              </div>
            </div>
          </div> */}
        </div>
      </div>
      <Footer navValue={navValue} />
    </div>
  );
}

export default Projects;

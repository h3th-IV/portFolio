import React, { useState } from "react";
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
  const [projectUrls, setProjectUrls] = useState({
    url1: "",
    url2: "",
    url3: "",
  });

  const handleUrlChange = (field, value) => {
    setProjectUrls((prev) => ({
      ...prev,
      [field]: value,
    }));
  };
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
              <h1>Capitalwise Dynamic Pay</h1>
              <p>A comprehensive finance and loan management system with intelligent loan product matching based on credit checks. Full customer and staff-side applications.</p>
            </div>
            <a
              href="http://www.preview.capitalwisepayment.com"
              target="_blank"
              rel="noreferrer"
            >
              <img src={blackTrustImg} alt="Capitalwise Dynamic Pay" />
            </a>
            <div>
              <div className="projects__active">ACTIVE</div>
              <div className="projects__buttons">
                <a
                  href="http://www.preview.capitalwisepayment.com"
                  target="_blank"
                  rel="noreferrer"
                  id="project__website"
                >
                  Website
                </a>

                <a
                  href="https://github.com/h3th-iv/"
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
                  href="https://github.com/h3th-iv/"
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
              <h1>Invoicer</h1>
              <p>A comprehensive invoicing system with AI-powered insights, built with Node.js, React, MongoDB, and OpenAI integration. Features invoice management, client tracking, inventory control, and intelligent business analytics.</p>
            </div>
            <a href="https://github.com/h3th-IV/invoicer-demo_app" target="_blank" rel="noreferrer">
              <img src={cuttLive} alt="Invoicer Demo App" />
            </a>
            <div>
              <div className="projects__active">ACTIVE</div>
              <div className="projects__buttons">
                <a
                  href="https://github.com/h3th-IV/invoicer-demo_app"
                  target="_blank"
                  rel="noreferrer"
                  id="project__website"
                >
                  Repository
                </a>

                <a
                  href="https://github.com/h3th-IV/invoicer-demo_app"
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
                  href="https://github.com/h3th-iv/"
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
                  href="https://github.com/h3th-iv/social-media-app"
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
                  href="https://github.com/heth-iv/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github
                </a>
              </div>
            </div>
          </div> */}
        </div>
        
        {/* <div className="projects__urlsSection">
          <h2 className="projects__urlsHeader">Notable Project URLs</h2>
          <p className="projects__urlsDescription">
            Add URLs for your notable backend projects:
          </p>
          <div className="projects__urlsContainer">
            <div className="projects__urlInputWrapper">
              <label htmlFor="project-url-1">Project URL 1:</label>
              <input
                type="url"
                id="project-url-1"
                className="projects__urlInput"
                placeholder="https://example.com"
                value={projectUrls.url1}
                onChange={(e) => handleUrlChange("url1", e.target.value)}
              />
            </div>
            <div className="projects__urlInputWrapper">
              <label htmlFor="project-url-2">Project URL 2:</label>
              <input
                type="url"
                id="project-url-2"
                className="projects__urlInput"
                placeholder="https://example.com"
                value={projectUrls.url2}
                onChange={(e) => handleUrlChange("url2", e.target.value)}
              />
            </div>
            <div className="projects__urlInputWrapper">
              <label htmlFor="project-url-3">Project URL 3:</label>
              <input
                type="url"
                id="project-url-3"
                className="projects__urlInput"
                placeholder="https://example.com"
                value={projectUrls.url3}
                onChange={(e) => handleUrlChange("url3", e.target.value)}
              />
            </div>
          </div>
        </div> */}
      </div>
      <Footer navValue={navValue} />
    </div>
  );
}

export default Projects;

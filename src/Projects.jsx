import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import useNav from "./useNav";

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
              <h1>Metabnb</h1>
              <p>
                A responsive website where you can rent aparts on the metaverse
              </p>
            </div>
            <div>
              <div className="projects__active">ACTIVE</div>
              <div className="projects__buttons">
                <a
                  href="https://meta-bnb-ten.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                  id="project__website"
                >
                  Website
                </a>

                <a
                  href="https://github.com/codingAmbivert/meta-bnb"
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
              <h1>Amazon-Clone</h1>
              <p>A Clone of Amazon website</p>
            </div>
            <div>
              <div className="projects__active">ACTIVE</div>
              <div className="projects__buttons">
                <a
                  href="https://amazon-clone-ebon-six.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                  id="project__website"
                >
                  Website
                </a>

                <a
                  href="https://github.com/codingAmbivert/amazon-clone"
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
              <h1>Coverly</h1>
              <p>
                A website that uses AI to generate a cover letter using the
                infromation a user gives
              </p>
            </div>
            <div>
              <div className="projects__active">ACTIVE</div>
              <div className="projects__buttons">
                <a
                  href="https://coverly.app"
                  target="_blank"
                  id="project__website"
                  rel="noreferrer"
                >
                  Website
                </a>

                <a
                  href="https://github.com/codingAmbivert/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer navValue={navValue} />
    </div>
  );
}

export default Projects;

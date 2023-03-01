import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import useNav from "./useNav";

function Links() {
  const { navValue } = useNav(true);
  return (
    <div className="Links">
      <div className="main">
        <Header navValue={navValue} />
        <h1 className="Links__header">Links</h1>

        <p>You can reach me using any of the following links.</p>
        <a className="bodyNavLink" href="https://twitter.com/codeAmbivert">
          <span className="linkLines"></span>
          <span className="linkLinesText">Twitter</span>
        </a>
        <a className="bodyNavLink" href="https://github.com/codeAmbivert">
          <span className="linkLines"></span>
          <span className="linkLinesText">Github</span>
        </a>
        <a
          className="bodyNavLink"
          href="https://www.linkedin.com/in/titilope-chisom-onifade-7372681b2/"
        >
          <span className="linkLines"></span>
          <span className="linkLinesText">LinkedIn</span>
        </a>
        <a
          className="bodyNavLink"
          href="https://docs.google.com/document/d/1FNvukv2D9fQC95fbYjf8lHgKM8fqO9fqgV2A2pcrSWg/edit?usp=sharing"
        >
          <span className="linkLines"></span>
          <span className="linkLinesText">Resume</span>
        </a>
        <a className="bodyNavLink" href="mailto:titilopechisom20@gmail.com">
          <span className="linkLines"></span>
          <span className="linkLinesText">Gmail</span>
        </a>
      </div>
      <Footer navValue={navValue} />
    </div>
  );
}

export default Links;

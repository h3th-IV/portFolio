import React from "react";

function Footer(props) {
  return (
    <div>
      {props.navValue && (
        <div className="Footer">
          &#169; {new Date().getFullYear()} codeAmbivert.
        </div>
      )}
    </div>
  );
}

export default Footer;

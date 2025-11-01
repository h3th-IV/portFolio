import React from "react";

function Footer(props) {
  return (
    <div>
      {props.navValue && (
        <div className="Footer">
          &#169; {new Date().getFullYear()} heth-iv.
        </div>
      )}
    </div>
  );
}

export default Footer;

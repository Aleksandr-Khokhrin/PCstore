import FooterFirst from "./first/index";
import FooterSecond from "./second/index";
import FooterThirth from "./thirth/index";

import "./style.css";

const Footer = () => {
  return (
    // <div style={{marginTop: '200px', position: 'absolute', bottom: '0', backgroundColor: 'black'}}>

    // </div>
    <div className="mainFooter">
      <FooterFirst />
      <div className="overflowSecond">
        <FooterSecond />
      </div>
      <FooterThirth />
    </div>
  );
};

export default Footer;

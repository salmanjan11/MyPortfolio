import React, {useContext} from "react";
import "./Footer.scss";
import {Fade} from "react-reveal";
//import emoji from "react-easy-emoji";
import StyleContext from "../../contexts/StyleContext";

export default function Footer() {
  const {isDark} = useContext(StyleContext);
  return (
    <Fade bottom duration={1000} distance="5px">
      
      <div className="">


        <p className={isDark ? "dark-mode footer-text" : "footer-text"}>
          Theme by{" "}
          <a href="https://github.com/saadpasta/developerFolio">
            developerFolio
          </a>
        </p>
      </div>
    </Fade>
  );
}

/*  You can write this code back in the like 13/14 if needed in the future
        <p className={isDark ? "dark-mode footer-text" : "footer-text"}>
          {emoji("Made with ❤️ by DeveloperFolio Team")}
        </p>
        */ 
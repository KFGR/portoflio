import "./Photography.css";
import React from "react";
import AppHeader from "../../Components/AppHeader";

function template() {
  return (
    <div className="photography">
      <AppHeader></AppHeader>

      {/* Profile card, personal information */}
      <section id="intro" className="container-fluid">
        <div className="introduction-container">
          <div className="introduction-card">
            <div className="intrduction-image">
              <img src={require("./PhotographyAssets/ERROR_IMG.webp")} alt=''></img>
            </div>
            <div className="introduction-information">
              <h1 className="introduction-title" style={{fontWeight: 'bold'}}>4 0 4 ERROR</h1>
              <p className="introduction-text"style={{fontWeight: 'bold'}}>
                Sorry for the inconvinience, this page is currently under development, come back in a couple of days to see more content.
              </p>
              <p className="introduction-text"style={{fontWeight: 'bold'}}>See my old portfolio in my old Template: <a href="https://inezki.com/photography.html#" target="__blank">Inezki.com</a></p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default template;

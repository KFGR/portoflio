import "./Photography.css";
import React from "react";
// import AppHeader from "../../Components/AppHeader";

function template() {
  return (
    <div className="photography">
      <div className="gallery">
        <div className="container-fluid">

        <div className="photo-box">
        <img src="https://inezkiphotos.s3.amazonaws.com/Cuba1.jpg" alt=""/>
          <div className="transparent-box">
            <div className="caption">
              <p>Old Havana</p> <p className="opacity-low">Cuba</p>
            </div>
          </div>
        </div>

        <div className="photo-box">
          <img src="https://inezkiphotos.s3.amazonaws.com/Cuba2.jpg" alt=""/>
          <div className="transparent-box">
            <div className="caption">
              <p>Old Havana</p> <p className="opacity-low">Cuba</p>
            </div>
          </div>
        </div>

        <div className="photo-box">
          <img src="https://inezkiphotos.s3.amazonaws.com/Cuba3.jpg" alt=""/>
          <div className="transparent-box">
            <div className="caption">
              <p>{"Viñales"}</p> <p className="opacity-low">Cuba</p>
            </div>
          </div>
        </div>

        <div className="photo-box">
          <img src="https://inezkiphotos.s3.amazonaws.com/60mph.jpg" alt=""/>
          <div className="transparent-box">
            <div className="caption">
              <p>{"Malecón"}</p><p>Cuba</p>
            </div>
          </div>
        </div>

        <div className="photo-box">
          <img src="https://inezkiphotos.s3.amazonaws.com/MoonC.jpg" alt=""/>
          <div className="transparent-box">
            <div className="caption">
              <p>{"Old Havana"}</p><p>Cuba</p>
            </div>
          </div>
        </div>

        {/* Second ROW ---------------------------------------- */}
        <div className="photo-box">
          <img src="https://inezkiphotos.s3.amazonaws.com/Beach.jpg" alt=""/>
          <div className="transparent-box">
            <div className="caption">
              <p>{"Cabo Rojo"}</p><p>Puerto Rico</p>
            </div>
          </div>
        </div>

        <div className="photo-box">
          <img src="https://inezkiphotos.s3.amazonaws.com/feet.jpg" alt=""/>
          <div className="transparent-box">
            <div className="caption">
              <p>{"Cabo Rojo"}</p><p>Puerto Rico</p>
            </div>
          </div>
        </div>

        <div className="photo-box">
          <img src="https://inezkiphotos.s3.amazonaws.com/Beach2.jpg" alt=""/>
          <div className="transparent-box">
            <div className="caption">
              <p>{"Toa Baja"}</p><p>Puerto Rico</p>
            </div>
          </div>
        </div>

        <div className="photo-box">
          <img src="https://inezkiphotos.s3.amazonaws.com/Nature.jpg" alt=""/>
          <div className="transparent-box">
            <div className="caption">
              <p>{"Toa Baja"}</p><p>Puerto Rico</p>
            </div>
          </div>
        </div>

        <div className="photo-box">
          <img src="https://inezkiphotos.s3.amazonaws.com/flor1.jpg" alt=""/>
          <div className="transparent-box">
            <div className="caption">
              <p>{"Toa Baja"}</p><p>Puerto Rico</p>
            </div>
          </div>
        </div>
        </div>
        </div>
    </div>
  );
};

export default template;

import "./AppFooter.css";
import React from "react";



function template() {
  return (
    <div className="app-footer">
      <div className="container" style={{alignContent: 'center'}}>
      <footer>
        <ul className="footer-icons" style={{justifyContent: 'center'}}>
          <li><a href="https://www.linkedin.com/in/kelvin-figueroa-b39a15187/" target="_blank" rel="noreferrer" style={{textDecoration:'none', color:'black'}}><ion-icon name="logo-linkedin"></ion-icon>LinkedIn</a></li>
          <li><a href="https://www.instagram.com/kelvin_fgr/" target="_blank" rel="noreferrer" style={{textDecoration:'none', color:'black'}}><ion-icon name="logo-instagram"></ion-icon>Instagram</a></li>
          <li><a href="https://github.com/KFGR" target="_blank" rel="noreferrer" style={{textDecoration:'none', color:'black'}}><ion-icon name="logo-github"></ion-icon>GitHub</a></li>
        </ul>
      </footer>
     </div>
    </div>
  );
};

export default template;

import "./Home.css";
import React from "react";
// import AppHeader from '../../Components/AppHeader';
// import AppFooter from '../../Components/AppFooter';
function template() {
  return (
    <div className="home">
      {/* <AppHeader></AppHeader> */}

      {/* Profile card, personal information */}
      <section id="intro" className="container-fluid">
        <div className="introduction-container">
       

           
          <div className="introduction-card">
            <div className="intrduction-image ">
              <img src={require("./HomeAssets/IMG_6891.JPG")} alt=''/>
            </div>
            <div className="introduction-information">
              <h1 className="introduction-title" style={{fontWeight: 'bold'}}>Kelvin Figueroa</h1> 
              <p className="introduction-text"style={{fontWeight: 'bold'}}>
                Graduated Computer Engineer that has over a year of experience as an IT Administrator and expertise on Azure Services and AWS.
                I have transitioned from academia to a professional role as Cloud Engineer with AWS. Additionally, I have experience as a web 
                and embedded developer, with a total of one year in these roles.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* End of Profile card, personal information */}


      {/* Timeline for jobs and projects */}
      <div className="container" style={{marginTop:'5%', marginBottom:'5%'}}>
        <div className="row">
          {/* Begins Timeline for jobs */}
          <section className="col">
            <header className="title">
            <h2>College and Jobs</h2>
            </header>
            <div className="contents">
              <div className="box">
                <h4>2017 - 2023</h4>
                {/* <h3>Polytechnic University of Puerto Rico</h3> */}
                <h3>Computer Engineering Bachelor's Degree</h3>
                <p>Through my years of studies I learned about embedded programming
                  with C, Python and Assembly and created several projects with arduino modules. I also participated 
                  as active member of the Cyber Castors chapter, where I learned and helped other to understand the basic 
                  functionalities of networking and hacking using programs such as Packet Tracer and Kali.
                </p>
              </div>
              <div className="box">
                <h4>2021 - 2022</h4>
                <h3>IT Administrator at Inteldot</h3>
                {/* <h2>Inteldot</h2> */}
                <p>{"Global administrator for Office 365, HubsPot, Ring Central, QuickBooks and the company's Knowledge Base. As IT I had the opportunity to create and develop workflows to automate daily and weekly tasks for the different departments within the company and also to add layers of security to the employees."}</p>
              </div>
              <div className="box">
                <h4>2021 - 2022</h4>
                <h3>JR. Web Developer at Inteldot</h3>
                <p>{"As an Entry Level Programmer I've worked with python and AWS, specifically on the  backend of a serverless application project. I had the opportunity  to create, read and modify code to work with the basic functions of DynamoDB, using the Boto3 library and also creating HTTP responses for the web application."}</p>
              </div>
              <div className="box">
                <h4>2022 - 2023</h4>
                <h3>Backend Developer (Self Employed)</h3>
                <p>{"As a Backend developer I was working on creating API endpoints using DynamoDB on AWS and sending data to Odoo. Hence, I was able to review, modify and create code based on Odoo Schema's to send data from the database to the client's Administrator dashboard using tags on current and new records."}</p>
              </div>
              <div className="box" >
                <h4 >2022 - 2022</h4>
                <h3>Cloud Support Internship at AWS</h3>
                <p>
                  Internship experience based on creating, managing and troubleshooting networking architectures with services found on Amazon Web Service.
                   During the internship I had the opportunity to work with several cases which included serverless, compute and storage services 
                   such as Lambda, EC2, CloudFront and more. Also had a little project which was to create a simple website using an EC2 instant
                   running apache server, MariaDB and wordpress.
                </p>
              </div>
              <div className="box" >
                <h4 >2023 - Current</h4>
                <h3>Cloud Support Engineer at AWS</h3>
                <p>
                  As a Cloud Engineer I work directly with client's to better their application's performance and availability while working with high demand services on AWS. 
                  Additionally, I work on troubleshooting customer's servers issues and help them migrate their On-Premises servers to AWS.

                  I have also worked to provide internal documentation for AWS, that help new hires and current engineers to be better and faster at solving customer's problems.
                </p>
              </div>
            </div>

          </section>
          {/* Ends Timeline for jobs */}

          {/* Begins Timeline for projects */}
          <section className="col">
            <header className="title">
             <h2>Projects</h2>
            </header>
            <div className="contents">
              <div className="box">
                <h4>2020 - 2020</h4>
                <h3>Sorting GUI</h3>
                <p>This project uses an Object Oriented design and had the scope of allowing students to see the real process of 
                  sorting algorithms. It was made in python using Page framework for GUI's, 
                  Graphics, Tkinter and Random modules. It allows students to select a variety of sorting
                  algorithms and see the process with colors. In addition students can see information about the algorithms used on the project
                  by clicking on an Informatin button.
                </p>
              </div>
              <div className="box">
                <h4>2020 - 2020</h4>
                <h3><a href="https://github.com/KFGR/Pong" target="__blank" style={{textDecoration:'none', color:'black'}}>Pong Game</a></h3>
                <p>Python game based on the PONG game made by Allan Alcorn in 1972, it was made with John Zelle Graphic module. It uses an Object Oriented design for the paddles and the ball.
                  This game allows users to enter their name, see instructions and the score in real time and then it creates a file to store the score of the game along with the winner.
                </p>
              </div>
              <div className="box">
                <h4>2022 - 2022</h4>
                <h3><a href="https://drive.google.com/drive/folders/1uoO8GOMcAsdKziJJ0-k4BEyb6sge2CE2" target="__blank" style={{textDecoration:'none', color:'black'}}>Geographic Location with Arduino</a></h3>
                <p>Using Arduino IDE, a GPS Neo, and ESP8266, I was able to create a dashboard using an online application in order to 
                  obtain on demand live location, by sending data from the ESP8266 module to my phone via WiFi.</p>
              </div>
              <div className="box">
                <h4>2021 - 2021</h4>
                <h3><a href="https://drive.google.com/drive/folders/1ZQSCez5YNTFtAsCw11oyJdTiR5Ka0PmV" target="__blank" style={{textDecoration:'none', color:'black'}}>Christmas Tree Automation</a></h3>
                <p>Using Arduino IDE, a module named ESP8266MOD and Arduino Iot Cloud, I created an app to turn 
                  ON and OFF the lights of a Christmas Tree. </p>
              </div>
              <div className="box">
                <h4>2023 - 2023</h4>
                <h3><a href="https://github.com/KFGR/RestAPI" target="__blank" style={{textDecoration:'none', color:'black'}}>Python RestAPI</a></h3>
                <p>Rest API created in python using the framework called FastAPI and MySQL as database. 
                  The main goal of the project is to be able to retrieve data from the database by a series of functions, 
                  so that the customer does not have to manage the database directly.</p>
              </div>
            </div>

          </section>
          {/* Ends Timeline for projects */}
        </div>
      </div>
      {/* <AppFooter></AppFooter> */}
    </div>
  );
};

export default template;



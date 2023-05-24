import React, { useState, useEffect } from "react";
import "./descp.css";
import Go from "../../assets/go.svg";
import studl from "../../assets/studl.svg";
import info from "../../assets/info.svg";
import plus from "../../assets/plus.svg";
import building from "../../assets/building.svg";
import { Link } from "react-router-dom";
import code from "../../assets/code.png";

function go() {
  return (
    <div className="container-descp">
      <div className="items-center">
        <div className="flex-grow">
          <div className="intro-sec">
            <img className="icons" src={Go} />
            <div className="descp-cont">
              <p className="descp">Go</p>
              {/* <div className="student">
                <img className="stud-icons" src={studl} />
                <span>118,536 student </span>
              </div> */}
            </div>
          </div>
          <div className="tabs">
            <Link className="tabs-1">
              <img className="icons-tab" src={info} />
              <span className="tab-intro">About</span>
            </Link>
            {/* <Link to="/Roadmap" className="tabs-1">
              <img className="icons-tab" src={building} />
              <span className="tab-intro">Roadmap</span>
            </Link> */}
          </div>
        </div>
      </div>
      <div className="track-headerr">
        <div className="track-container">
          <div className="track-flex">
            <h1 className="track-h1"> Contribute in Go Community?</h1>
            <p>
              <span className="track-p">Join Go Community</span> go track that
              help you learn more about python programming by providing access
              to a network of experienced developers who are willing to share
              their knowledge and expertise.
            </p>

            <div className="join">
              <Link to="/post" className="join-button">
                <img className="join-btn" src={plus} />
                <span className="join-span">Join the Go Community</span>
              </Link>
              {/* <button className="join-road">Explore RoadMap</button> */}
            </div>
          </div>
          <div className="graphics">
            <img className="graph-icon" src={Go} />
          </div>
        </div>
      </div>
      <div className="Java-section">
        <div className="java-container">
          <div className="java-descp">
            <div className="java-descp2">
              <h2 className="java-h2">About Go</h2>
              <div className="java-expander">
                <div className="content">
                  <p className="content-pp">
                    Fans of Go (called gophers) describe Go as having the
                    expressiveness of dynamic languages like Python or Ruby,
                    with the performance of compiled languages like C or C++.
                    The language is open source, and was started by engineers at
                    Google. It's written using a C-style syntax, has statically
                    typed variables, manages memory using garbage collection,
                    and is compiled into stand-alone executables. Go is noted
                    for the concurrent programming features built into the
                    language core, the networking packages in the standard
                    library (such as a web server), fast compilation and
                    execution speed.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="pre">
            <code className="code-pre">
              <img className="code-tab" src={code} />
            </code>
          </div>
        </div>
      </div>
    </div>
  );
}

export default go;

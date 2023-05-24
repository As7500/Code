import React, { useState, useEffect } from "react";
import "./descp.css";
import python from "../../assets/python.svg";
import studl from "../../assets/studl.svg";
import info from "../../assets/info.svg";
import plus from "../../assets/plus.svg";
import building from "../../assets/building.svg";
import { Link } from "react-router-dom";
import code from "../../assets/code.png";

function Python() {
  return (
    <div className="container-descp">
      <div className="items-center">
        <div className="flex-grow">
          <div className="intro-sec">
            <img className="icons" src={python} />
            <div className="descp-cont">
              <p className="descp">Python</p>
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
            <h1 className="track-h1"> Contribute in Python Community?</h1>
            <p>
              <span className="track-p">Join Python Community</span> python
              track that help you learn more about python programming by
              providing access to a network of experienced developers who are
              willing to share their knowledge and expertise.
            </p>

            <div className="join">
              <Link to="/post" className="join-button">
                <img className="join-btn" src={plus} />
                <span className="join-span">Join the Python Community</span>
              </Link>
              {/* <button className="join-road">Explore RoadMap</button> */}
            </div>
          </div>
          <div className="graphics">
            <img className="graph-icon" src={python} />
          </div>
        </div>
      </div>
      <div className="Java-section">
        <div className="java-container">
          <div className="java-descp">
            <div className="java-descp2">
              <h2 className="java-h2">About python</h2>
              <div className="java-expander">
                <div className="content">
                  <p className="content-pp">
                    Python is a high-level, interpreted programming language
                    that emphasizes code readability and ease of use. It is
                    designed to be simple and straightforward, with a syntax
                    that is easy to read and understand. Python supports
                    multiple programming paradigms, including object-oriented,
                    functional, and procedural programming, and has a vast
                    standard library that makes it easy to perform a wide range
                    of tasks, from web development to scientific computing.
                    Python is used in many industries, including finance, data
                    science, artificial intelligence, and web development, and
                    is known for its versatility, flexibility, and ease of
                    learning.
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

export default Python;
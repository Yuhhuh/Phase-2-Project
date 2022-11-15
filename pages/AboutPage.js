import "./css/AboutPage.css";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function AboutPage() {
  return (
    <div className="About">
      <header>
        <p>About</p>
        <div className="Main-Desc">
          <p>
            This website is designed so that people like you can view the
            Screenshots I've taken from some of my favorite games!
          </p>
          <p>
            All of the Screenshots you see are taken by myself. However, you may
            notice that the Author of the pictures does not quite match
          </p>
          <p>
            This is because I have opted to use my In Game Username instead of
            my actual name.
          </p>
          <p>
            Some of the Buildings in the Screenshots are not mine. These
            buildings are made by my friends, however, they have requested to
            remain annonymous.
          </p>
          <p>
            The Games Featured within the Pictures are Minecraft and Talespire.
          </p>
        </div>
      </header>
    </div>
  );
}

export default AboutPage;

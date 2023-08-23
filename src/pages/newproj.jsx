import React, { useEffect, useState } from "react";
import "../projectstyles.css";


export default function Projects() {

  function Features() {
    const featuresData = [
      {
        heading: "Personal Website",
        image: "/img/placeholder.png",
        text:
          "The website you're on right now!.",
        technologies: ["C#", ".NET Core"],
        link: "https://example.com/repo",
      },
      {
        heading: "Auction House",
        image: "/img/placeholder.png",
        text:
          "An auction application written in C#. It's missing some of the features promised.",
        technologies: ["C#", ".NET Core"],
        link: "https://example.com/repo",
      },
      {
        heading: "Convention Connection",
        image: "/img/placeholder.png",
        text:
          "A site for finding conventions",
        technologies: ["C#", ".NET Core"],
        link: "https://example.com/repo",
      },
      {
        heading: "Moviematic",
        image: "path/to/image.jpg",
        text:
          "A site for finding movies",
        technologies: ["C#", ".NET Core"],
        link: "https://example.com/repo",
      },
      {
        heading: "Moviematic API",
        image: "path/to/image.jpg",
        text:
          "The API for the aformentioned Moviematic",
        technologies: ["C#", ".NET Core"],
        link: "https://example.com/repo",
      },
      {
        heading: "Bonus: A text game I made in 9th grade",
        image: "path/to/image.jpg",
        text:
          "A sci-fi text game written in basic python. It's influences are pretty obvious.",
        technologies: ["C#", ".NET Core"],
        link: "https://example.com/repo",
      }
    ];

    return (
      <article>
        <div className="features__box2-wrapper">
          {
            featuresData.map((feature) => (
              <FeatureBox feature={feature} />
            ))
          }
        </div>
      </article>
    );
  }

  const FeatureBox = ({ feature }) => (
    <div className="box2">
      <h3>{feature.heading}</h3>
      <div className="box2-content">
        <div className="column">
          <img src={feature.image} alt={feature.heading} />
        </div>
        <div className="column">
        <h4>Description:</h4>
          <p>{feature.text}</p>
        </div>
        <div className="column">
          <h4>Technologies:</h4>
          <ul>
            {feature.technologies.map((technology) => (
              <li key={technology}>{technology}</li>
            ))}
            <a href={feature.link}>Link to repo</a>
          </ul>
        </div>
      </div>
    </div>
  );



  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Projects</h1>
      <div className="section-inner">
        <h4 style={{ textAlign: "center" , paddingBottom: "10px" }}>A selection of projects I've worked on.</h4>
        <Features />
      </div>
    </div>
  );
}
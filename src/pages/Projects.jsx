import React, { useEffect, useState } from "react";
import "../project.css";
import { AiFillGithub } from 'react-icons/ai';
import { FaGlobeAmericas } from 'react-icons/fa';



export default function Projects() {

  function Features() {
    const featuresData = [
      {
        heading: "Personal Website",
        image: "/img/homepage.png",
        text:
          "The website you're on right now! I intend to add more to it.",
        technologies: ["React, JavaScript, JSX, HTML, CSS"],
      },
      {
        heading: "Auction House",
        image: "/img/auction.png",
        text:
          "A console application to be used to hold Auctions. It's missing some of the features promised. Would not recommend usage for an actual auction.",
        technologies: ["C#", ".NET Core"],
        link: "https://github.com/biney999/Csharp-auctionhouse-project/tree/main",
      },
      {
        heading: "Convention Connection",
        image: "/img/placeholder.png",
        text:
          "A site for finding conventions. It's made with bootstrap, allowing it to be used on mobile devices. Currently I'm going through it and revamping it as it exposes some personal details. When it's ready it will be uploaded here. For now, here is an image of ARPANET.",
        technologies: [" Python (Flask), HTML, CSS/Bootstrap, SQLite"],

      },
      {
        heading: "Moviematic",
        image: "/img/movie.png",
        text:
          "A site for finding movies. It's made with react! Currently the login feature doesn't work (and by extension the view IMDb details feature) due to a discrpency between the API and site as they were developed seperately. I may go back and fix it.",
        technologies: ["React, JavaScript, JSX, HTML, CSS/Bootstrap"],
        siteLink: "https://moviematic.bineware.dev/",
      },
      {
        heading: "Moviematic API",
        image: "/img/api.png",
        text:
          "The REST API node express app for the aformentioned Moviematics site, with the purpose of displaying data and handling login operations. The API performs CRUD operations with an SQL database. It also communicates via POST, PUT and GET requests in JSON. The index page is handled using a Swagger UI.",
        technologies: [" Node.js, knex, mySQL"],
        siteLink: "https://moviematicapi.bineware.dev/",
      },
      {
        heading: "Bonus: A text game I made in 10th grade",
        image: "/img/textgam.png",
        text:
          "A sci-fi text game written in basic python. It's influences are pretty obvious. It has numerous bugs, among other issues, but I think it's not bad for a first attempt at coding at 13 years old. ",
        technologies: ["Python"],
        link: "https://github.com/biney999/python-text-game",
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
      <div className="row">
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
          <p>{feature.technologies.join(", ")}</p>      
            {feature.link && (
            <div>
              <a href={feature.link}><AiFillGithub />Link to repo</a>
            </div>
          )}
          {feature.siteLink && (
            <div>
              <a href={feature.siteLink}><FaGlobeAmericas />Link to site</a>
            </div>
          )}
          </ul>

        </div>
      </div>
    </div>
  );
  
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Projects</h1>
      <div className="section-project">
        <h4 style={{ textAlign: "center" , paddingBottom: "20px" }}>A selection of projects I've worked on.</h4>
        <Features />
      </div>
    </div>
  );
}
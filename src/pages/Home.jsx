import React from "react";
//renders homepage
export default function Home() {

  function Features() {
    const featuresData = [
      {
        heading: "Stuff I'm learning",
        text:
          "Javascript, React, Java, Project Management, Internet of Things."
      },
      {
        heading: "Stuff I've learnt",
        text:
          "Python, Figma, Bash/Unix, HTML, CSS, SQL, C, C#, Assembly (\u{1F92E}), Django, Flask."
      },
      {
        heading: "Stuff I plan to learn",
        text:
          "Rust."
      },
      {
        heading: "Other Stuff I like",
        text:
          "Gaming (particularly story games). Cooking. Good books and film."
      }
    ];

    return (
      <article>
        <div>
        <h2 style={{ fontSize: '30pt', marginTop: '90px', textAlign: 'center' }}>A bit about me:</h2>
        </div>

        <div className="features__box-wrapper">
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
    <div className="box">
      <h3>{feature.heading}</h3>
      <p>{feature.text}</p>
    </div>
  );



  return (
    <main>
      <section>
        <div className="section-inner">
          <h4>Hi, I'M</h4>
          <h2>Binary</h2>
          <h4>I'm a Computer Science student and programmer. I created this website as both a fun project as well as a way for any prospective employers to get to know me a little better than what a typical resume affords. If that's you, welcome!<br />
          This site is made with React and is being hosted on a Raspberry Pi 3A+.</h4>
        </div>
        <Features />
      </section>
    </main>
  );
}
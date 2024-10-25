import React from "react";
import "./experience.css";

import htmlIcon from "../../assets/html.png";
import cssIcon from "../../assets/css.png";
import jsIcon from "../../assets/js.png";
import reactIcon from "../../assets/react.png";
import bootstrapIcon from "../../assets/bootstrap.png";
import vscodeIcon from "../../assets/vscode.png";
import gitIcon from "../../assets/git.png";
import githubIcon from "../../assets/github.png";
import postmanIcon from "../../assets/postman.png";
import figmaIcon from "../../assets/figma.png";

const Experience = () => {
  return (
    <section id="experience">
      <div className="container experience__container">
        <section className="experience__techstack">
          <h3>Tech Stack</h3>
          <p>Technologies I've been working with recently</p>
          <div className="experience__techstack-content">
            <img src={htmlIcon} alt="HTML5" title="HTML5" />
            <img src={cssIcon} alt="CSS3" title="CSS3" />
            <img src={jsIcon} alt="JavaScript" title="JavaScript" />
            <img src={reactIcon} alt="React" title="React" />
            <img src={bootstrapIcon} alt="Bootstrap" title="Bootstrap" />
          </div>
        </section>

        <section className="experience__tools">
          <h3>Tools</h3>
          <div className="experience__tools-content">
            <img src={vscodeIcon} alt="VS Code" title="VS Code" />
            <img src={gitIcon} alt="Git" title="Git" />
            <img src={githubIcon} alt="GitHub" title="GitHub" />
            <img src={figmaIcon} alt="Figma" title="Figma" />
            <img src={postmanIcon} alt="Postman" title="Postman" />
          </div>
        </section>
      </div>
    </section>
  );
};

export default Experience;

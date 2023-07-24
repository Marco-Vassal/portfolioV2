import { Fragment, useContext, useState } from "react";
import Image from "next/image";
import NavContext from "../context/navContext";
import {
  ImgSideBar,
  SliderSideBar,
  VideoSideBar,
  YoutubeSideBar,
} from "./WorkSideBar";

const workData = [
  {
    img: "img/projects/project-1.jpg",
    name: "Fête Votive d'Ardèche",
    format: "img",
    project: "Site d'informations",
    client: "Projet Personnel",
    duration: "1 semaine",
    technologies: ["REACTjs", " / TAILWINDCSS"],
    lien: "https://fetevotive.fr",
  },
  {
    img: "img/projects/project-2.jpg",
    name: "Trading-IA",
    format: "img",
    project: "Site d'informations",
    client: "Trading-IA",
    duration: "2 ans",
    technologies: ["Wordpress"],
    lien: "",
  },
  {
    img: "img/projects/project-3.jpg",
    name: "Gite le Cade",
    format: "img",
    project: "Location d'un gîte",
    client: "LMNP Le Cade",
    duration: "3 Jours",
    technologies: ["Wordpress"],
    lien: "https://gitelecade.fr",
    
  },
  {
    img: "img/projects/project-4.jpg",
    name: "Age Calculator",
    format: "img",
    project: "Calculateur d'age",
    client: "projet personnel",
    duration: "1 journée",
    technologies: ["React", " / tailwind"],
    lien: "https://marco-vassal.github.io/age-calculator/",
  },
  {
    img: "img/projects/project-5.jpg",
    name: "Projet API",
    format: "img",
    project: "Interaction avec une API",
    client: "Projet d'études",
    duration: "2 Semaines",
    technologies: ["HTML", " / JAVASCRIPT", " / CSS"],
    lien: "https://jojo-jrd.github.io/m4103c-projet-josseraj-guicluca-vassalm/",
  },
  {
    img: "img/projects/project-6.jpg",
    name: "E-commerce",
    format: "img",
    project: "Challenge Front end mentor",
    client: "Projet personnel",
    duration: "1/2 journée",
    technologies: ["HTML", " / css"],
    lien: "https://marco-vassal.github.io/product-preview-card-component-main/",
  },
];

const Work = () => {
  const { nav } = useContext(NavContext);
  const [active, setActive] = useState(null);
  return (
    <Fragment>
      <section id="portfolio" className={`${nav === "portfolio" ? "active" : ""}`}>
        <div
          className={`portfolio-container ${active ? "slide-out overflow-hidden" : ""
            }`}
        >
          {/* Main Heading Starts */}
          <div className="container page-title text-center">
            <h2 className="text-center">
              mon <span>portfolio</span>
            </h2>
            <span className="title-head-subtitle">
            Quelques projets récents que j&apos;ai réalisés.
            </span>
          </div>
          {/* Main Heading Ends */}
          <div className="portfolio-section">
            <div className="container cd-container">
              <div>
                {/* Portfolio Items Starts */}
                <ul className="row" id="portfolio-items">
                  {workData.map((work, i) => (
                    <li className="col-12 col-md-6 col-lg-4" key={i}>
                      <a
                        href="#"
                        data-type="project-1"
                        onClick={() => setActive(i + 1)}
                      >
                        <Image
                          src={work.img}
                          alt="Project"
                          className="img-fluid"
                        />
                        <div>
                          <span>{work.name}</span>
                        </div>
                      </a>
                    </li>
                  ))}
                </ul>
                {/* Portfolio Items Ends */}
              </div>
            </div>
          </div>
          {/* PORTFOLIO OVERLAY STARTS */}
          <div className="portfolio-overlay" onClick={() => setActive(null)} />
          {/* PORTFOLIO OVERLAY ENDS */}
        </div>
        {workData.map((work, i) => (
          <div
            key={i}
            className={`project-info-container project-1 ${active === i + 1 ? "slide-in" : ""
              }`}
          >
            {/* Main Content Starts */}
            <div className="project-info-main-content">
              {work.format == "img" ? (
                <ImgSideBar img={work.img} />
              ) : work.format == "youtube" ? (
                <YoutubeSideBar playing={active} />
              ) : work.format == "slider" ? (
                <SliderSideBar />
              ) : (
                <VideoSideBar playing={active} />
              )}
            </div>
            {/* Main Content Ends */}
            {/* Project Details Starts */}
            <div className="projects-info row">
              <div className="col-12 col-sm-6 p-none">
                <h3 className="font-weight-600 uppercase">{work.name}</h3>
                <ul className="project-details">
                  <li>
                    <i className="fa fa-file-text-o" />
                    <span className="font-weight-400 project-label">
                      {" "}
                      Project{" "}
                    </span>
                    :{" "}
                    <span className="font-weight-600 uppercase">
                      {work.project}
                    </span>
                  </li>
                  <li>
                    <i className="fa fa-user-o" />
                    <span className="font-weight-400 project-label">
                      {" "}
                      Client{" "}
                    </span>
                    :{" "}
                    <span className="font-weight-600 uppercase">
                      {work.client}
                    </span>
                  </li>
                  <li>
                    <i className="fa fa-hourglass-o" />
                    <span className="font-weight-400 project-label">
                      {" "}
                      Temps de réalisation{" "}
                    </span>
                    :{" "}
                    <span className="font-weight-600 uppercase">
                      {work.duration}
                    </span>
                  </li>
                  <li>
                    <i className="fa fa-code" />{" "}
                    <span className="font-weight-400 project-label">
                      {" "}
                      Technologies
                    </span>{" "}
                    :{" "}
                    <span className="font-weight-600 uppercase">
                      {work.technologies.map((technologie, i) => (
                        <Fragment key={i}>{technologie}</Fragment>
                      ))}
                    </span>
                  </li>
                </ul>
                {work.lien !== "" && (
                  <a href={work.lien} target="_blank" rel="noreferrer" className="btn">
                    <span>
                      <i className="fa fa-external-link" />
                      aperçu
                    </span>
                  </a>
                )}
              </div>
              <div className="col-6 p-none text-right">
                <a
                  href="#"
                  className="btn btn-secondary close-project"
                  onClick={() => setActive(null)}
                >
                  <span>
                    <i className="fa fa-close" />
                    Fermer
                  </span>
                </a>
              </div>
            </div>
            {/* Project Details Ends */}
          </div>
        ))}
      </section>
      {active && (
        <span
          className={`back-mobile ${active ? "is-visible" : ""}`}
          onClick={() => setActive(null)}
        >
          <i className="fa fa-arrow-left" />
        </span>
      )}
    </Fragment>
  );
};
export default Work;

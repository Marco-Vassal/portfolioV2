import { useContext } from "react";
import Image from "next/image";
import NavContext from "../context/navContext";
const About = () => {
  const { nav } = useContext(NavContext);
  return (
    <section id="A propos" className={`${nav === "about" ? "active" : ""}`}>
      {/* Main Heading Starts */}
      <div className="container page-title text-center">
        <h2 className="text-center">
          À propos de <span>moi</span>
        </h2>
        <span className="title-head-subtitle">
          J&apos;aime créer pour partager ma passion
        </span>
      </div>
      {/* Main Heading Ends */}
      <div className="container infos">
        <div className="row personal-info">
          {/* Personal Infos Starts */}
          <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
            <div className="image-container">
              <Image
                className="img-fluid d-block"
                src="img/dark-about.jpg"
                alt=""
              />
            </div>
            <p className="d-block d-md-none">
            Je suis un développeur frontend freelance français. Je crée des sites internet sur mesure qui répondent aux besoins du client, tout en conservant une interface claire et intuitive.
            </p>
          </div>
          <div className="row col-xl-6 col-lg-6 col-md-12">
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
              <ul className="list-1">
                <li>
                  <h6>
                    <span className="font-weight-600">Prénom</span>
                    Marco
                  </h6>
                </li>
                <li>
                  <h6>
                    <span className="font-weight-600">Nom</span>
                    Vassal
                  </h6>
                </li>
                <li>
                  <h6>
                    <span className="font-weight-600">Nationalité</span>
                    Française
                  </h6>
                </li>
                <li>
                  <h6>
                    <span className="font-weight-600">Experience</span>1 an
                  </h6>
                </li>
                <li>
                  <h6>
                    <span className="font-weight-600">Addresse</span>
                    07110 Valgorge, Ardèche, France
                  </h6>
                </li>
              </ul>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
              <ul className="list-2">
                <li>
                  <h6>
                    <span className="font-weight-600">Freelance</span>
                    Disponible
                  </h6>
                </li>
                <li>
                  <h6>
                    <span className="font-weight-600">Langages</span>
                    Français/Anglais B2
                  </h6>
                </li>
                <li>
                  <h6>
                    <span className="font-weight-600">Téléphone</span>+33 6 44 87 04 71
                  </h6>
                </li>
                <li>
                  <h6>
                    <span className="font-weight-600">Email</span>
                    marco.vassal07@gmail.com
                  </h6>
                </li>
              </ul>
            </div>
            <div className="col-12 resume-btn-container">
              <a href="/img/CV Marco Vassal Développeur Front End_compressed.pdf" target="_blank" className="btn btn-resume">
                <span>
                  <i className="fa fa-download" />
                  Télécharger mon CV
                </span>
              </a>
            </div>
            <div className="col-12 resume-btn-container">
              <a href="https://calendly.com/marco-vassal/30min" target="_blank" rel="noreferrer" className="btn btn-call">
                <span>
                  <i className="fa fa-phone" />
                  Réserver un appel 100% gratuit
                </span>
              </a>
            </div>
          </div>
          {/* Personal Infos Ends */}
        </div>
      </div>
      {/* Download CV Starts */}
      <div className="container col-12 mx-auto text-center">
        <hr className="about-section" />
      </div>
      {/* Download CV Ends */}
      {/* Resume Starts */}
      <div className="resume-container">
        <div className="container">
          <div className="row">
            {/* Experience Starts */}
            <div className="col-xl-6 col-lg-6 col-md-6">
              <h2 className="font-weight-600 uppercase title-section">
                experience
              </h2>
              <div className="resume-items">
                {/* Item Starts */}
                <div className="item">
                  <span className="bullet" />
                  <div className="card">
                    <div className="card-header">
                      <span className="year">
                        <i className="fa fa-calendar" />
                        <i className="fa fa-caret-right" />
                        2022 - présent
                      </span>
                      <span className="d-block font-weight-400 uppercase">
                        DEVELOPPEUR FRONT-END
                        <span className="separator" />
                        <span className="font-weight-700">FREELANCE</span>
                      </span>
                    </div>
                    <div className="card-body">
                      <p>
                        Je crée des sites internet sur mesure, répondant aux besoins du client.
                        <br />· Site vitrine
                        <br />· E-commerce
                        <br />· Portfolio
                        <br />· Seo & Optimisation
                      </p>
                    </div>
                  </div>
                </div>
                {/* Item Ends */}
                {/* Item Starts */}
                <div className="item">
                  <span className="bullet" />
                  <div className="card">
                    <div className="card-header">
                      <span className="year">
                        <i className="fa fa-calendar" />
                        <i className="fa fa-caret-right" />
                        2021 - 2023
                      </span>
                      <span className="d-block font-weight-400 uppercase">
                        co-fondateur
                        <span className="separator" />
                        <span className="font-weight-700">trading-ia</span>
                      </span>
                    </div>
                    <div className="card-body">
                      <p>
                        Création de contenu informatif
                        <br />Analyse de marchés financiers
                        <br />Développement web
                      </p>
                    </div>
                  </div>
                </div>
                {/* Item Ends */}
                {/* Item Starts */}
                <div className="item">
                  <span className="bullet" />
                  <div className="card">
                    <div className="card-header">
                      <span className="year">
                        <i className="fa fa-calendar" />
                        <i className="fa fa-caret-right" />
                        Avril - Juillet 2022
                      </span>
                      <span className="d-block font-weight-400 uppercase">
                        Stagiaire DEVELOPPEUR WEB
                        <span className="separator" />
                        <span className="font-weight-700">Objectif-pi</span>
                      </span>
                    </div>
                    <div className="card-body">
                      <p>
                        Développement de l&apos;ERP
                        <br />Modification de l&apos;interface utilisateur
                        <br /> Migration vers la nouvelle version d&apos;Odoo
                      </p>
                    </div>
                  </div>
                </div>
                {/* Item Ends */}
              </div>
            </div>
            {/* Experience Ends */}
            {/* Education Starts */}
            <div className="col-xl-6 col-lg-6 col-md-6 skills-container">
              <h2 className="font-weight-600 uppercase title-section">
                Formation
              </h2>
              <div className="resume-items">
                {/* Item Starts */}
                <div className="item">
                  <span className="bullet" />
                  <div className="card">
                    <div className="card-header">
                      <span className="year">
                        <i className="fa fa-calendar" />
                        <i className="fa fa-caret-right" />
                        2020 - 2022
                      </span>
                      <span className="d-block font-weight-400 uppercase">
                        DUT Informatique
                        <span className="separator" />
                        <span className="font-weight-700">
                          IUT2, UGA, Grenoble(38)
                        </span>
                      </span>
                    </div>
                    <div className="card-body">
                      <p>
                        Réalisation d&apos;un dîplome universitaire technologique informatique sur 2 ans.
                        <br />Nombreux langages de programation abordé:
                        <br />· PHP / SQL / HTML / CSS / JS / C++ / JAVA / ADA
                      </p>
                    </div>
                  </div>
                </div>
                {/* Item Ends */}
                {/* Item Starts */}
                <div className="item">
                  <span className="bullet" />
                  <div className="card">
                    <div className="card-header">
                      <span className="year">
                        <i className="fa fa-calendar" />
                        <i className="fa fa-caret-right" />
                        2022
                      </span>
                      <span className="d-block font-weight-400 uppercase">
                        Statut étudiant entrepreneur
                        <span className="separator" />
                        <span className="font-weight-700">
                          Pepite oZer, Grenoble (38)
                        </span>
                      </span>
                    </div>
                    <div className="card-body">
                      <p>
                        Diplôme lié à la création de mon entreprise pendant mon cycle universitaire.
                      </p>
                    </div>
                  </div>
                </div>
                {/* Item Ends */}
                {/* Item Starts */}
                <div className="item">
                  <span className="bullet" />
                  <div className="card">
                    <div className="card-header">
                      <span className="year">
                        <i className="fa fa-calendar" />
                        <i className="fa fa-caret-right" />
                        2020
                      </span>
                      <span className="d-block font-weight-400 uppercase">
                        BAC S science de l’ingénieur
                        <span className="separator" />
                        <span className="font-weight-700">
                          Lycée Astier, Aubeans (07)
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
                {/* Item Ends */}
              </div>
            </div>
            {/* Education Ends */}
          </div>
          {/* Skills Starts */}
          <div className="row">
            {/* Skill Bar Starts */}
            <div className="col-12">
              <h2 className="font-weight-600 uppercase title-section skills-title">
                Compétences
              </h2>
            </div>
            {/* Skill Bar Starts */}
            <div className="col-12 col-sm-6 col-md-4">
              <span className="skill-text">html5 / css3</span>
              <div className="chart-bar">
                <span
                  className="item-progress"
                  data-percent={90}
                  style={{ width: "90%" }}
                />
                <span className="percent" style={{ right: "calc(10% - 21px)" }}>
                  90%
                  <b className="arrow" />
                </span>
              </div>
            </div>
            {/* Skill Bar Ends */}
            {/* Skill Bar Starts */}
            <div className="col-12 col-sm-6 col-md-4">
              <span className="skill-text">React.JS</span>
              <div className="chart-bar">
                <span
                  className="item-progress"
                  data-percent={65}
                  style={{ width: "65%" }}
                />
                <span className="percent" style={{ right: "calc(35% - 21px)" }}>
                  65%
                  <b className="arrow" />
                </span>
              </div>
            </div>
            {/* Skill Bar Ends */}
            {/* Skill Bar Starts */}
            <div className="col-12 col-sm-6 col-md-4">
              <span className="skill-text">Tailwindcss / scss</span>
              <div className="chart-bar">
                <span
                  className="item-progress"
                  data-percent={90}
                  style={{ width: "90%" }}
                />
                <span className="percent" style={{ right: "calc(10% - 21px)" }}>
                  90%
                  <b className="arrow" />
                </span>
              </div>
            </div>
            {/* Skill Bar Ends */}
            {/* Skill Bar Starts */}
            <div className="col-12 col-sm-6 col-md-4">
              <span className="skill-text">javascript</span>
              <div className="chart-bar">
                <span
                  className="item-progress"
                  data-percent={70}
                  style={{ width: "70%" }}
                />
                <span className="percent" style={{ right: "calc(30% - 21px)" }}>
                  70%
                  <b className="arrow" />
                </span>
              </div>
            </div>
            {/* Skill Bar Ends */}
            {/* Skill Bar Starts */}
            <div className="col-12 col-sm-6 col-md-4">
              <span className="skill-text">wordpress</span>
              <div className="chart-bar">
                <span
                  className="item-progress"
                  data-percent={90}
                  style={{ width: "90%" }}
                />
                <span className="percent" style={{ right: "calc(10% - 21px)" }}>
                  90%
                  <b className="arrow" />
                </span>
              </div>
            </div>
            {/* Skill Bar Ends */}
            {/* Skill Bar Starts */}
            <div className="col-12 col-sm-6 col-md-4">
              <span className="skill-text">shopify</span>
              <div className="chart-bar">
                <span
                  className="item-progress"
                  data-percent={75}
                  style={{ width: "75%" }}
                />
                <span className="percent" style={{ right: "calc(25% - 21px)" }}>
                  75%
                  <b className="arrow" />
                </span>
              </div>
            </div>
            {/* Skill Bar Ends */}
            {/* Skill Bar Starts */}
            <div className="col-12 col-sm-6 col-md-4">
              <span className="skill-text">Wix</span>
              <div className="chart-bar">
                <span
                  className="item-progress"
                  data-percent={85}
                  style={{ width: "85%" }}
                />
                <span className="percent" style={{ right: "calc(15% - 21px)" }}>
                  85%
                  <b className="arrow" />
                </span>
              </div>
            </div>
            {/* Skill Bar Ends */}
            {/* Skill Bar Starts */}
            <div className="col-12 col-sm-6 col-md-4">
              <span className="skill-text">figma</span>
              <div className="chart-bar">
                <span
                  className="item-progress"
                  data-percent={70}
                  style={{ width: "70%" }}
                />
                <span className="percent" style={{ right: "calc(30% - 21px)" }}>
                  70%
                  <b className="arrow" />
                </span>
              </div>
            </div>
            {/* Skill Bar Ends */}
            {/* Skill Bar Starts */}
            <div className="col-12 col-sm-6 col-md-4">
              <span className="skill-text">photoshop</span>
              <div className="chart-bar">
                <span
                  className="item-progress"
                  data-percent={80}
                  style={{ width: "80%" }}
                />
                <span className="percent" style={{ right: "calc(20% - 21px)" }}>
                  80%
                  <b className="arrow" />
                </span>
              </div>
            </div>
            {/* Skill Bar Ends */}
          </div>
          {/* Skills Starts */}
        </div>
        {/* Resume Ends */}
      </div>
    </section>
  );
};
export default About;

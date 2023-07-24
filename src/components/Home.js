import { useContext } from "react";
import NavContext from "../context/navContext";
import AnimationText from "./AnimationText";
import Image from "next/image";
const Home = ({ leftImg, video, leftImgSrc }) => {
  const { nav, changeNav } = useContext(NavContext);
  return (
    <section id="home" className={`${nav === "home" ? "active" : ""}`}>
      {/* Text Rotator Starts */}
      <div className="main-text-container">
        {leftImg && (
          <Image
            className="leftimagepicture"
            src={`${leftImgSrc ? leftImgSrc : "img/leftimage-dark.jpg"}`}
            alt=""
          />
        )}
        <div className="main-text" id="selector">
          <h3>Bienvenue !</h3>
          <AnimationText />
          <p>
            Je suis un développeur frontend freelance français. Je crée des sites internet sur mesure qui répondent aux besoins du client, tout en conservant une interface claire et intuitive.
          </p>
          <div className="call-to-actions-home">
            <div className="text-left">
              <a
                href="#about"
                onClick={() => changeNav("about")}
                className="btn link-portfolio-one"
              >
                <span>
                  <i className="fa fa-user" />
                  Plus à propos de moi
                </span>
              </a>
              <a
                href="#portfolio"
                onClick={() => changeNav("portfolio")}
                className="btn btn-secondary link-portfolio-two"
              >
                <span>
                  <i className="fa fa-suitcase" />
                  portfolio
                </span>
              </a>
              <a
                href="https://calendly.com/marco-vassal/30min"
                className="btn btn-secondary appel-free link-portfolio-two"
                target="_blank"
                rel="noreferrer"
              >
                <span>
                  <i className="fa fa-phone" />
                  Réserver un appel 100% gratuit
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Text Rotator Ends */}
    </section>
  );
};
export default Home;

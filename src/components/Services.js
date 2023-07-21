import { Fragment, useContext, useState } from "react";
import NavContext from "../context/navContext";
import BlogPopup from "./BlogPopup";
const data = [
  {
    title: "E-commerce",
    img: "img/blog/blog-post-1.jpg",
    tag: "Développement front end",
    des: [
      "Un site e-commerce est une plateforme qui permet aux entreprises de vendre des produits et/ou des services sur Internet. Les caractéristiques courantes d'un site e-commerce incluent : ",
      "- Catalogue de produits",
      "- Panier d'achat",
      "- Paiement en ligne",
      "- Sécurité",
      "- Gestion des commandes",
      "- Système de notation et d'avis",
      "- Support client",
      "Les entreprises de toutes tailles, des petites boutiques en ligne aux grandes marques mondiales, utilisent les sites e-commerce pour étendre leur portée et accéder à un marché mondial.",
    ],
  },
  {
    title: "Site vitrine",
    img: "img/blog/blog-post-2.jpg",
    tag: "Développement front end",
    des: [
      "Un site vitrine est un type de site web qui vise principalement à présenter une entreprise, une organisation, un produit ou un service sur Internet. Contrairement à un site e-commerce qui permet des transactions en ligne, un site vitrine n'a pas de fonctionnalité de vente directe. Son objectif principal est d'informer les visiteurs sur l'activité, les produits ou services offerts, la mission de l'entreprise, et de fournir des informations pertinentes.",
      "Caractéristiques d'un site vitrine :",
      "- Présentation de l'entreprise ou de l'organisation",
      "- Description des produits ou services",
      "- Contact et coordonnées",
      "- Présentation visuelle",
      "- Présence des réseaux sociaux",
      "- Appel à l'action",
      "- Responsive design",
      "Le site vitrine est souvent utilisé comme une carte de visite en ligne, permettant à une entreprise ou une organisation de se présenter à un large public sur le Web. Il peut également servir de point de départ pour les prospects qui souhaitent en savoir plus sur une entreprise avant de décider de les contacter ou de faire affaire avec elles.",
    ],
  },
  {
    title: "Portfolio",
    img: "img/blog/blog-post-3.jpg",
    tag: "Développement front end",
    des: [
      "Un portfolio est un type de site web utilisé par les professionnels créatifs pour présenter leurs travaux, projets, compétences et réalisations. Il s'agit essentiellement d'une vitrine numérique qui permet à une personne ou à un artiste de mettre en valeur son talent et son savoir-faire auprès d'un public potentiel, comme des clients potentiels, des employeurs ou des partenaires commerciaux.",
      "Caractéristiques d'un site portfolio :",
      " - Présentation des travaux",
      " - Organisation et navigation",
      " - Description et contexte",
      " - Mise en valeur des compétences",
      " - Design et esthétique",
      " - Contact et informations professionnelles",
      " - Responsive design",
      "Les artistes, designers, photographes, développeurs web, écrivains, professionnels du marketing et bien d'autres personnes créatives utilisent des sites portfolio pour démontrer leur expertise et leur talent dans leur domaine respectif. Ces sites sont un excellent moyen de se faire remarquer, de créer des opportunités professionnelles et de développer sa présence en ligne dans un monde de plus en plus connecté.",
     ],
  },
  {
    title: "SEO & optimisation",
    img: "img/blog/blog-post-4.jpg",
    tag: "Modification",
    des: [
      "Le SEO (Search Engine Optimization) est l'ensemble des pratiques et des techniques visant à optimiser un site web pour améliorer sa visibilité et son classement dans les résultats des moteurs de recherche tels que Google, Bing, Yahoo, etc. L'objectif du SEO est d'attirer un trafic qualifié, c'est-à-dire des visiteurs intéressés par le contenu ou les produits/services du site, en les positionnant le plus haut possible dans les résultats de recherche pertinents.",
      "Le SEO peut intervenir à différents niveaux, notamment :",
      "- Optimisation du contenu",
      "- Optimisation technique",
      "- Optimisation des méta-informations",
      "- Analyse des performances",
      "Il est important de noter que le SEO est un processus continu et évolutif, car les algorithmes des moteurs de recherche sont régulièrement mis à jour pour offrir une meilleure expérience aux utilisateurs. Les sites qui maintiennent un bon niveau d'optimisation et qui fournissent un contenu de qualité ont plus de chances d'obtenir un meilleur classement dans les résultats de recherche et donc d'attirer un trafic plus pertinent et plus important.",
    ],
  },
  {
    title: "Maitenance",
    img: "img/blog/blog-post-5.jpg",
    tag: "250€/mois",
    des: [
      "La maintenance correspond à l'ensemble des activités visant à assurer le bon fonctionnement, la stabilité et la performance continue d'une application web ou d'un site web après sa mise en production. La maintenance est essentielle pour garantir que l'expérience utilisateur reste optimale et que le site web continue de répondre aux besoins des utilisateurs au fil du temps.",
      "Les tâches courantes de maintenance pour un développeur frontend incluent :",
      "- Correction des bugs",
      "- Mises à jour et optimisation du code",
      "- Mises à jour de dépendances",
      "- Gestion des performances",
      "- Sécurité",
      "- Modification du contenu",
      "Une bonne maintenance frontend contribue à la satisfaction des utilisateurs, à l'amélioration de la réputation du site web et à la pérennité de l'application ou du site sur le long terme.",
    ],
    tarif: "250€ / mois"
  },
  {
    title: "Taux Journalier",
    img: "img/blog/blog-post-6.jpg",
    tag: "250€/jour",
    des: [
      "Le taux journalier est le montant facturé pour une journée complète de développement.",
      "Le taux journalier peut varier en fonction de différents facteurs :",
      "- Type de projet",
      "- Durée du contrat",
      "- Récurence des missions",
    ],
    tarif: "250€ / jour"
  },
];

const Blog = () => {
  const { nav } = useContext(NavContext);
  const [modal, setModal] = useState(false);
  const [activeData, setActiveData] = useState({});
  const onClick = (value) => {
    setModal(true);
    setActiveData(data[value]);
  };
  return (
    <Fragment>
      <BlogPopup open={modal} close={() => setModal(false)} data={activeData} />
      <section id="blog" className={`${nav === "services" ? "active" : ""}`}>
        <div className="container page-title text-center">
          <h2 className="text-center">
            <span>Services</span>
          </h2>
          <span className="title-head-subtitle">
            Offrir un service de qualité est ma priorité
          </span>
        </div>
        <div className="container">
          <div className="row">
            {data.map((data, i) => (
              <div className="col-12 col-sm-6" key={i}>
                <article>
                  {/* Figure Starts */}
                  <figure className="blog-figure">
                    <a href="#" onClick={() => onClick(i)}>
                      <img className="img-fluid" src={data.img} alt="" />
                    </a>
                  </figure>
                  {/* Figure Ends */}
                  <a href="#" onClick={() => onClick(i)}>
                    <h4>{data.title}</h4>
                    <p className="font-blod">{data.tarif}</p>
                  </a>
                  {/* Excerpt Starts */}
                  <div className="blog-excerpt">
                    <a
                      href="#"
                      onClick={() => onClick(i)}
                      className="btn readmore"
                    >
                      <span>En savoir plus</span>
                    </a>
                  </div>
                  {/* Excerpt Ends */}
                </article>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Fragment>
  );
};
export default Blog;

import Image from "next/image";

const BlogPopup = ({ open, close, data }) => {
  return (
    <div className="modal__container">
      <div className={`istambul_tm_modalbox ${open ? "opened" : ""}`}>
        <div className="box_inner">
          <div className="close">
            <a href="#" onClick={() => close()}>
              <i className="fa fa-times" />
            </a>
          </div>
          <div className="description_wrap">
            <div className="news_popup_details">
              <div className="top_image">
                <Image src="img/4-2.jpg" alt="" />
                <div
                  className="main"
                  data-img-url={data && data.img}
                  style={{ backgroundImage: `url(${data && data.img})` }}
                />
              </div>
              <div className="news_main_title">
                <h3>{data && data.title ? data.title : "title"}</h3>
                <span>
                  <a href="#">{data && data.tag}</a>
                </span>
                <div />
              </div>
              <div className="text">
                {data &&
                  data.des &&
                  data.des.map((des, i) => <p key={i}>{des}</p>)}
              </div>
              <div className="col-12 call-btn-container">
                <a href="https://calendly.com/marco-vassal/30min" target="_blank" rel="noreferrer" className="btn btn-call">
                  <span>
                    <i className="fa fa-phone" />
                    Réserver un appel 100% gratuit
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default BlogPopup;

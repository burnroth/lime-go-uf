import React from "react";

const Video = () => {
  return (
    <section id="video">
      <div className="container">
        <div style={{ display: "flex", justifyContent: "center" }} className="row">
          <div
            
            className="col-12 col-md-10"
          >
            <div className="embed-responsive embed-responsive-16by9">
              <iframe
                className="embed-responsive-item"
                src="https://www.youtube.com/embed/US8ulGibiMk"
                frameBorder="0"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Video;

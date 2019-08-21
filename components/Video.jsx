import React from "react";

const Video = () => {
  return (
    <section id="video">
      <div className="container">
        <div className="row">
          <div style={{ display: "flex", justifyContent: "center" }} className="col-12">
            <iframe
              
              src="https://www.youtube.com/embed/US8ulGibiMk"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Video;
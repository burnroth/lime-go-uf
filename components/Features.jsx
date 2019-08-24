import React from "react";

const Features = () => {
  return (
    <section id="features">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-5">
            <h2
              style={{
                marginBottom: 70
              }}
            >
              Det här ingår
            </h2>
            <ul style={{
              paddingLeft:22
            }}>
              <li> 
                Kontaktuppgifter och företagsinformation för 1,3 miljoner
                svenska företag.
              </li>
              <li>
                Ringlistor, påminnelser, ”att göra”-listor, anteckningar och
                andra funktioner som effektiviserar B2B-försäljningen.
              </li>
              <li>
                Allt är webbaserat och du kan logga in på vilken enhet som
                helst.
              </li>
              <li>Eget användarkonto för alla i företaget.</li>
              <li>Introduktionsfilmer på Youtube och stor FAQ.</li>
            </ul>
            <a className="btn" style={{marginTop:20}} href="#form">
              Aktivera nu
            </a>
          </div>
          <div className="col-12 d-none d-md-block order-md-first order-lg-last col-lg-7">
            <img
              style={{ width: "100%" }}
              src="/static/images/cards.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;

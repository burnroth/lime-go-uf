import React from "react";

const Features = () => {
  return (
    <section style={{ marginTop: 60 }} id="features">
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-12 col-md-5">
            <h2
              style={{
                marginBottom: 40
              }}
            >
              Det här ingår
            </h2>
            <ul>
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
          </div>
          <div className="col-12 col-md-5">
            <img
              style={{ width: "100%" }}
              src="/static/images/cards.png"
              alt=""
            />
          </div>
          <div
            style={{ margin: "40px 0px", display: "flex" }}
            className="col-12"
          >
            <a className="btn mx-auto" href="#form">
              Aktivera nu
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;

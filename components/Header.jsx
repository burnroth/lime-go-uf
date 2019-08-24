import React from "react";

const Header = () => {
  return (
    <header
      style={{
        backgroundColor: "#f76b07",
        padding: "140px 8px"
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-8 mx-auto">
            <h1
              style={{ color: "white", textAlign: "center" }}
              className="text-center"
            >
              <strong>Lime Go ❤ UF</strong>
            </h1>
            <p style={{ color: "white", textAlign: "center", marginTop: 20 }}>
              Vi på Lime älskar försäljning och entreprenörskap! Därför ger vi
              alla UF-företagare, alumner* och lärare** fri tillgång till
              säljverktyget Lime Go.
            </p>
            <p
              style={{
                fontSize: 12,
                color: "white",
                marginTop: 40,
                textAlign: "center"
              }}
            >
              *Du som startar eget bolag inom ett år efter att du avslutat ditt
              UF-företag får ytterligare 1 års gratis användning av Lime Go.
              <br />
              **Du som lärare kan läggas till som användare i elevernas Lime
              Go-applikationer och blir på så vis kopplade till de UF-företag
              som du handleder.
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;

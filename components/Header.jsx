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
          <div className="col-12 col-md-6 mx-auto">
            <h1
              style={{ color: "white", textAlign: "center" }}
              className="text-center"
            >
              Lime Go  ♥ UF{" "}
            </h1>
            <p style={{color: "white", textAlign: "center", marginTop: 20 }}>
              Vi på Lime älskar försäljning och entreprenörskap! Därför ger vi
              alla UF-företagare, alumner* och lärare** fri tillgång till
              säljverktyget Lime Go.
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
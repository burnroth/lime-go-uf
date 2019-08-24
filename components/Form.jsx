import React, { Component } from "react";
import DataTerms from "./DataTerms";

export default class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      lastName: "",
      identity: "",
      companyName: "",
      phone: "",
      email: "",
      showDataTerms: false,
      dataTerms: false,
      userTerms: false
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleIdentity = this.handleIdentity.bind(this);
    this.showDataTerms = this.showDataTerms.bind(this);
    this.handleDataTerms = this.handleDataTerms.bind(this);
    this.handleUserTerms = this.handleUserTerms.bind(this);
  }

  handleSubmit(e) {
    const url = "https://hooks.zapier.com/hooks/catch/517930/gh268d/silent/";
    const payload = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      identity: this.state.identity,
      companyName: this.state.companyName,
      phone: this.state.phone,
      email: this.state.email,
      dataTerms: this.state.dataTerms ? "Data terms accepted" : null,
      userTerms: this.state.userTerms ? "User terms accepted" : null,
      tags: [this.state.identity]
    };

    fetch(url, {
      method: "POST",
      body: JSON.stringify(payload)
    });
    e.preventDefault();
  }

  handleInputChange(e) {
    let name = e.target.name;
    let value = e.target.value;
    this.setState({
      [name]: value
    });
  }

  handleIdentity(e) {
    this.setState({
      identity: e.target.value
    });
  }

  showDataTerms() {
    this.setState(prevState => ({
      showDataTerms: !prevState.showDataTerms
    }));
  }

  handleDataTerms() {
    this.setState(prevState => ({
      dataTerms: !prevState.dataTerms
    }));
  }

  handleUserTerms() {
    this.setState(prevState => ({
      userTerms: !prevState.userTerms
    }));
  }

  render() {
   const userIdentity = () => {
      switch (this.state.identity) {
        case "UF-elev":
          return "Jag är UF-elev och vill använda Lime Go gratis under mitt UF-år. Kontot kommer upphöra den 1:a Juli.";
          break;
        case "UF-alumn":
          return "Jag är UF-alumn och det är mindre än ett år sedan jag avslutade mitt UF-år. Nu har jag startat eget och vill använda Lime Go gratis i 12 månader, efter det till en kostnad på 329 kr/mån.";
          break;
        case "Lärare":
          return 'Jag är lärare/mentor åt UF-elever och vill skapa ett konto för att själv prova Lime Go. (Vill jag se vad mina elever gör och hjälpa dem i deras Lime Go, ber jag dem istället att <a style="color:white;" href="https://faq.lime-technologies.com/hc/sv/articles/208197545-Hur-l%C3%A4gger-jag-till-nya-anv%C3%A4ndare-">lägga till mig som användare</a> ).';
      }
    };

    const UserTerms = () => {
      return (
        <div className="input-wrapper">
          <input
            style={{ marginTop: 10 }}
            checked={this.state.userTerms}
            onChange={this.handleUserTerms}
            type="checkbox"
            required
          />
          <a
            style={{color: "white", marginLeft: 4, cursor:"pointer" }}
            dangerouslySetInnerHTML={{ __html: userIdentity() }}
            onClick={this.handleUserTerms}
          />
        </div>
      );
    };

    return (
      <section
        style={{
          backgroundColor: "#f76b07",
          paddingTop:120
        }}
        id="form"
      >
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-10">
              <h1 style={{ color: "white", marginBottom: 40 }}>
                {" "}
                <strong>Starta ditt Lime Go-konto nu!</strong>
              </h1>
              <form onSubmit={this.handleSubmit} action="#">
                <div style={{ width: "49%" }} className="input-wrapper">
                  <input
                    onChange={this.handleInputChange}
                    name="firstName"
                    type="text"
                    required
                    placeholder="Förnamn"
                  />
                </div>
                <div style={{ width: "49%" }} className="input-wrapper">
                  <input
                    onChange={this.handleInputChange}
                    name="lastName"
                    type="text"
                    required
                    placeholder="Efternamn"
                  />
                </div>
                <div className="input-wrapper">
                  <input
                    onChange={this.handleInputChange}
                    name="companyName"
                    type="text"
                    required
                    placeholder="UF-företagets namn"
                  />
                </div>
                <div className="input-wrapper">
                  <input
                    onChange={this.handleInputChange}
                    name="phone"
                    type="phone"
                    placeholder="Telefonnummer"
                  />
                </div>
                <div className="input-wrapper">
                  <input
                    onChange={this.handleInputChange}
                    name="email"
                    type="email"
                    required
                    placeholder="Mailadress"
                  />
                </div>
                <div className="input-wrapper">
                  <select required onChange={this.handleIdentity} name="" id="">
                    <option value="">Jag är..</option>
                    <option name="pupil" value="UF-elev">
                      UF-elev
                    </option>
                    <option name="alumnus" value="UF-alumn">
                      UF-alumn
                    </option>
                    <option name="teacher" value="Lärare">
                      Lärare
                    </option>
                  </select>
                </div>
                <div style={{ marginTop: 20 }} className="input-wrapper">
                  <input
                    checked={this.state.dataTerms}
                    onChange={this.handleDataTerms}
                    type="checkbox"
                    required
                  />

                  <a
                    style={{ cursor: "pointer", color: "white", marginLeft: 4 }}
                    onClick={this.handleDataTerms}
                  >
                    Jag accepterar hur Lime{" "}
                  </a>
                  <u
                    style={{ cursor: "pointer", color: "white" }}
                    onClick={this.showDataTerms}
                  >
                    hanterar kunduppgifter
                  </u>
                  {this.state.showDataTerms ? <DataTerms /> : null}
                </div>
                {this.state.identity ? <UserTerms /> : null}
                <div>
                  {" "}
                  <input
                    style={{
                      marginTop: 20
                    }}
                    className="btn-white"
                    type="submit"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

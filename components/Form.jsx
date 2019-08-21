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
      dataTerms: false
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleIdentity = this.handleIdentity.bind(this);
    this.showDataTerms = this.showDataTerms.bind(this);
    this.handleDataTerms = this.handleDataTerms.bind(this);
  }

  handleSubmit(e) {
    const url = "https://hooks.zapier.com/hooks/catch/3105435/obwyarb/";
    const payload = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      identity: this.state.identity,
      companyName: this.state.companyName,
      phone: this.state.phone,
      email: this.state.email,
      dataTerms: this.state.dataTerms ? "Data terms accepted" : null
    };

    fetch(url, {
      method: "POST",
      body: payload
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

  render() {
    return (
      <section
        style={{
          backgroundColor: "#f76b07"
        }}
        id="form"
      >
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-8 mx-auto">
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
                    style={{ cursor: "pointer", color: "white" }}
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
                <input style={{
                  marginTop: 20
                }} className="btn-white" type="submit" />
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

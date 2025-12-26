import "./index.css";
import { Component } from "react";
import { Navigate } from "react-router-dom";

class Register extends Component {
  state = {
    fullName: "",
    phone: "",
    email: "",
    password: "",
    company: "",
    isAgency: "yes",
    errorMessage: "",
    users: [],
  };

  onSubmitForm = (event) => {
    event.preventDefault();

    const { fullName, phone, email, password, company, isAgency, users } =
      this.state;

    // universal validation for required fields (*)
    if (
      fullName === "" ||
      phone === "" ||
      email === "" ||
      password === "" ||
      isAgency === ""
    ) {
      this.setState({
        errorMessage: "Please fill all required fields marked with *",
      });
      return;
    }

    const newUser = {
      fullName,
      phone,
      email,
      password,
      company,
      isAgency,
    };

    const updatedUsers = [...users, newUser];

    // store array of users
    localStorage.setItem("popxUsers", JSON.stringify(updatedUsers));

    this.setState({
      users: updatedUsers,
      errorMessage: "",
    });

    this.props.navigate("/login");
  };

  render() {
    const {
      fullName,
      phone,
      email,
      password,
      company,
      isAgency,
      errorMessage,
    } = this.state;

    const token = localStorage.getItem("popxToken");

    if (token) {
      return <Navigate to="/profile" replace />;
    }

    return (
      <div className="register-container">
        <h1 className="register-title">Create your PopX account</h1>

        <form className="register-form" onSubmit={this.onSubmitForm}>
          <div className="input-group">
            <label>Full Name*</label>
            <input
              type="text"
              placeholder="Enter Name"
              value={fullName}
              onChange={(e) => this.setState({ fullName: e.target.value })}
            />
          </div>

          <div className="input-group">
            <label>Phone Number*</label>
            <input
              type="text"
              placeholder="Enter Phone Number"
              value={phone}
              onChange={(e) => this.setState({ phone: e.target.value })}
            />
          </div>

          <div className="input-group">
            <label>Email Address*</label>
            <input
              type="email"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => this.setState({ email: e.target.value })}
            />
          </div>

          <div className="input-group">
            <label>Password*</label>
            <input
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => this.setState({ password: e.target.value })}
            />
          </div>

          <div className="input-group">
            <label>Company Name</label>
            <input
              type="text"
              value={company}
              onChange={(e) => this.setState({ company: e.target.value })}
            />
          </div>

          <div className="agency-group">
            <p>Are you an Agency?*</p>
            <div className="agency-options">
              <label>
                <input
                  type="radio"
                  name="agency"
                  value="yes"
                  checked={isAgency === "yes"}
                  onChange={(e) => this.setState({ isAgency: e.target.value })}
                />
                Yes
              </label>

              <label>
                <input
                  type="radio"
                  name="agency"
                  value="no"
                  checked={isAgency === "no"}
                  onChange={(e) => this.setState({ isAgency: e.target.value })}
                />
                No
              </label>
            </div>
          </div>

          {errorMessage && <p className="error-msg">{errorMessage}</p>}
          <div className="create-account-btn">
            <button type="submit" className="create-btn">
              Create Account
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Register;

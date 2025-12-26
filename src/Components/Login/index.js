import { Component } from "react";
import "./index.css";
import { Navigate } from "react-router-dom";

class Login extends Component {
  state = {
    email: "",
    password: "",
    errorMessage: "",
  };

  onSubmitForm = (event) => {
    event.preventDefault();

    const { email, password } = this.state;

    if (email === "" || password === "") {
      this.setState({
        errorMessage: "Both Email and Password are Required",
      });
    } else {
      const storedUsers = JSON.parse(localStorage.getItem("popxUsers")) || [];

      if (storedUsers.length === 0) {
        this.setState({
          errorMessage: "No user found, please register",
        });
        return;
      }

      const matchedUser = storedUsers.find(
        (eachUser) => eachUser.email === email && eachUser.password === password
      );

      if (matchedUser) {
        const token = btoa(email + ":" + Date.now());
        localStorage.setItem("popxToken", token);

        // optionally store logged-in user
        localStorage.setItem("loggedInUser", JSON.stringify(matchedUser));

        this.setState({ errorMessage: "" });
        this.props.navigate("/profile");
      } else {
        this.setState({
          errorMessage: "Invalid Email or Password",
        });
      }
    }
  };

  onChangeEmail = (event) => {
    this.setState({ email: event.target.value });
  };

  onChangePassword = (event) => {
    this.setState({ password: event.target.value });
  };

  render() {
    const { email, password, errorMessage } = this.state;
    const token = localStorage.getItem("popxToken");

    if (token) {
      return <Navigate to="/profile" replace />;
    }
    return (
      <div className="sign-in-page">
        <h1>Signin to your PopX Account</h1>
        <p>Welcome back! Log in to access your PopX account.</p>
        <form onSubmit={this.onSubmitForm}>
          <label>Email</label>
          <input type="email" value={email} onChange={this.onChangeEmail} />

          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={this.onChangePassword}
          />

          {errorMessage && <p className="error-msg">{errorMessage}</p>}
          <div className="login-btn">
            <button type="submit">Login</button>
          </div>
        </form>
      </div>
    );
  }
}

export default Login;

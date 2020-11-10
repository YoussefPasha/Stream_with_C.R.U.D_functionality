import React, { Component } from "react";

class GoogleAuth extends Component {
  state = { isSignedIn: null };

  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId:
            "356470165382-geqmcv7pph4f22irajappe7bvfgbkqp0.apps.googleusercontent.com",
          scope: "email",
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          this.setState({ isSignedIn: this.auth.isSignedIn.get() });
        });
    });
  }

  renderAuthButton() {
    if (this.state.isSignedIn === null) {
      return (
        <div>
          <h1>I Don't Know If You Are Signed in Or NOT</h1>
        </div>
      );
    } else if (this.state.isSignedIn === true) {
      return (
        <div>
          <h1>I am Signed In ! !</h1>
        </div>
      );
    } else {
      return (
        <div>
          <h1>I am Not Signed IN</h1>
        </div>
      );
    }
  }

  render() {
    return <div>{this.renderAuthButton()}</div>;
  }
}

export default GoogleAuth;

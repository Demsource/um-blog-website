import React from "react";
import { Link } from "react-router";
import "./ErrorPage.css";

const ErrorPage = () => {
  return (
    <div className="error-page">
      <h2>404</h2>
      <h3>Page Not Found</h3>
      <p>
        The page you are looking for does not exists or another error has
        occured.
      </p>
      <p className="go-home">
        Go to <Link to="/">Home Page</Link>
      </p>
    </div>
  );
};

export default ErrorPage;

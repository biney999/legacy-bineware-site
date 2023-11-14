import { Link } from "react-router-dom";
// import "../404.css";


import "../404.css";

const NotFound = () => {
  return (
    <div className="container">
      <div className="logoContainer">
        <div className="newlogo">4</div>
        <img src="/img/logo.png" alt="Logo" className="logoImage" />
        <div className="newlogo">4</div>
      </div>
      <div className="notFoundText">Page Not Found</div>
    </div>
  );
};

export default NotFound;

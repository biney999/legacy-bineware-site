import { Link } from "react-router-dom";
// import "../404.css";


// export default function NotFound() {
// return (
//     <div className="container">
//       {/* Replace "your-logo.png" with the actual path to your circle logo */}
//       <img src="your-logo.png" alt="Logo" className="logo" />
//       <h1 className="error-code">404</h1>
//       <p className="error-message">Page Not Found</p>
//     </div>
//   );
// }



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
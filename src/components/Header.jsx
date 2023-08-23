import { Link } from "react-router-dom";
import "../styles.css";


export default function Header() {

  return (
    <header className ="main-header">
      <div className="logo">
      <Link to="/" className="logo">
            <img src="/img/logo.png" alt="mylogo" />
          </Link>
      </div>
      <nav className="desktop-main-menu">
        <ul>
        <li><Link to="/"><a>Home</a></Link></li>
        <li><Link to="/projects"><a>Projects</a></Link></li>
        </ul>
      </nav>
    </header>
  );
}


import "./Navbar.css";

function Navbar() {
  return (
    <header className="navbar">
      <div className="nav-logo">
        <h2>Nikhil</h2>
      </div>

      <nav>
        <ul className="nav-links">
          <li>
            <a href="#home">Home</a>
          </li>

          <li>
            <a href="#about">About</a>
          </li>

          <li>
            <a href="#skills">Skills</a>
          </li>

          <li>
            <a href="#projects">Projects</a>
          </li>

          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
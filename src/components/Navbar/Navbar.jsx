import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo-section">
        <div className="logo-circle">M</div>
        
        <div>
          <h2 className="logo-title">Movatuit</h2>
          <p className="logo-tagline">
            Clean books. Smart processes. Confident decisions.
          </p>
        </div>
      </div>

      <button className="book-a-call-button">
        Book a call
      </button>
    </nav>
  );
}

export default Navbar;
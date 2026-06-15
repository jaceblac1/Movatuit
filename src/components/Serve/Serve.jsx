import "./Serve.css";

function Serve() {
  return (
    <section className="serve">
      <div className="serve-container">
        <div className="serve-header">
          <span className="serve-tag">Who We Serve</span>
          <h2 className="serve-title">Built for Ambitious Businesses</h2>
          <p className="serve-description">
            Whether you're just starting out or scaling fast, we've got your
            finances covered
          </p>
        </div>

        <div className="serve-grid">
          <div className="serve-card serve-blue-card">
            <div className="serve-icon">
              <img src="/rocket.png" alt="" />
            </div>

            <h3>Early-Stage Startups</h3>
            <p>Get your financial foundations right from day one</p>
          </div>

          <div className="serve-card serve-blue-card">
            <div className="serve-icon">
              <img src="/building-2.png" alt="" />
            </div>

            <h3>Growing SMEs</h3>
            <p>Scale your operations without financial bottlenecks</p>
          </div>

          <div className="serve-card serve-orange-card">
            <div className="serve-icon">
              <img src="/laptop.png" alt="" />
            </div>

            <h3>Tech-Enabled Businesses</h3>
            <p>Integrate modern finance tools with your tech stack</p>
          </div>

          <div className="serve-card serve-orange-card">
            <div className="serve-icon">
              <img src="/users.png" alt="" />
            </div>

            <h3>Founders Without Finance Teams</h3>
            <p>Get expert support without the full-time hire</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Serve;

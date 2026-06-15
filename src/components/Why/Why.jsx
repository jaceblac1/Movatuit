import "./Why.css";

function Why() {
  return (
    <section className="why">
      <div className="why-container">
        <div className="why-left">
          <span className="why-tag">WHY MOVATUIT</span>

          <h2 className="why-title">
            Your Strategic Finance Partner for Growth
          </h2>

          <p className="why-description">
            We're not just accountants, we're growth partners who combine deep
            financial expertise with cutting-edge technology to help your
            business thrive.
          </p>
          <ul className="why-list">
            <li>
              <img src="/check.png" alt="" className="why-check" />
              <span>10+ years combined experience</span>
            </li>

            <li>
              <img src="/check.png" alt="" className="why-check" />
              <span>Serving 50+ businesses</span>
            </li>

            <li>
              <img src="/check.png" alt="" className="why-check" />
              <span>99% client satisfaction</span>
            </li>
          </ul>
        </div>

        <div className="why-right">
          <div className="feature-card">

            <div className="feature-icon-box">
              <img src="/target-black.png" alt="" />
            </div>
            <h3>Startup-Focused Experts</h3>
            <p>
              We understand the unique financial challenges startups face and
              speak your language
            </p>
          </div>

          <div className="feature-card">

            <div className="feature-icon-box">
              <img src="/bot.png" alt="" />
            </div>
            <h3>AI-Powered Efficiency</h3>
            <p>
              Leverage cutting-edge automation to do more with less and scale
              faster
            </p>
          </div>

          <div className="feature-card">

            <div className="feature-icon-box">
              <img src="/fingerprint-pattern.png" alt="" />
            </div>
            <h3>Tailored Solutions</h3>
            <p>
              No cookie-cutter approaches, every solution is customized to your
              specific needs
            </p>
          </div>

          <div className="feature-card">

            <div className="feature-icon-box">
              <img src="/lightbulb.png" alt="" />
            </div>
            <h3>Actionable Insights</h3>
            <p>
              We don't just crunch numbers, we provide insights that drive real
              business decisions
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Why;

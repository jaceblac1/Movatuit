import "./About.css";

function About() {
  return (
    <section className="about">
      <div className="about-container">
        <span className="about-us">ABOUT US</span>
        <h2 className="about-title">
          Building Financial Foundations Since 2021
        </h2>

        <div className="about-content">
          <div className="about-left">
            <div className="about-description">
              <p>
                Movatuit was founded after seeing too many startups fail not
                because they lacked ideas, but because they lacked financial
                clarity. Movatuit helps founders have visibility and control
                before it's too late.
              </p>
              <p>
                Since 2021, Movatuit Advisory has been on a mission to transform
                the way businesses manage their finances. We understand that
                behind every successful company is a solid financial foundation.
              </p>
              <p>
                We have supported businesses across Fintech, e-commerce, FMCG
                industries by offering end-to-end strategic financial services
                covering financial reporting, process implementation, budgeting
                and forecasting, payroll management, and business strategy,
                helping businesses streamline operations, make informed
                decisions, and scale their business.
              </p>
            </div>
          </div>

          <div className="about-right">
            <div className="about-card about-card-blue">
              <div className="about-card-header">
                <img
                  src="/target.png"
                  alt="Our Mission"
                  className="about-card-icon card-icon-blue"
                />

                <h3>Our Mission</h3>
              </div>
              <p>
                To help businesses build strong financial foundations through
                smart bookkeeping, finance process development, and reliable
                accounting advisory.
              </p>
            </div>

            <div className="about-card about-card-yellow">
              <div className="about-card-header">
                <img
                  src="/eye.png"
                  alt="Our Vision"
                  className="about-card-icon card-icon-yellow"
                />
                <h3>Our Vision</h3>
              </div>
              <p>
                To become the most trusted financial advisory partner for
                startups and SMEs across Africa, empowering businesses with
                clarity, structure, and strategic financial insight.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="chaos-section">
        <div className="chaos-container">
          <h2 className="chaos-title">From Financial Chaos to Clarity</h2>

          <div className="chaos-cards">
            <div className="chaos-card problem-card">
              <span className="card-label problem-label">The Problem</span>

              <h3>Startups Struggle With Finances</h3>

              <ul>
                <li>
                  <span className="icon-circle red-icon">
                    <img
                      src="/circle-x.png"
                      alt="Problem"
                      className="list-icon"
                    />
                  </span>
                  Poor financial processes slowing growth
                </li>
                <li>
                  <span className="icon-circle red-icon">
                    <img
                      src="/circle-x.png"
                      alt="Problem"
                      className="list-icon"
                    />
                  </span>
                  Inaccurate bookkeeping causing costly errors
                </li>
                <li>
                  <span className="icon-circle red-icon">
                    <img
                      src="/circle-x.png"
                      alt="Problem"
                      className="list-icon"
                    />
                  </span>
                  Lack of real-time financial visibility
                </li>
                <li>
                  <span className="icon-circle red-icon">
                    <img
                      src="/circle-x.png"
                      alt="Problem"
                      className="list-icon"
                    />
                  </span>
                  Too much time spent on manual finance tasks
                </li>
              </ul>
            </div>

            <div className="chaos-card solution-card">
              <span className="card-label solution-label">The Solution</span>

              <h3>Clarity, Control & Confidence</h3>

              <ul>
                <li>
                  <span className="icon-circle blue-icon">
                    <img
                      src="/circle-check.png"
                      alt="Problem"
                      className="list-icon"
                    />
                  </span>
                  Streamlined processes that scale with you
                </li>
                <li>
                  <span className="icon-circle blue-icon">
                    <img
                      src="/circle-check.png"
                      alt="Problem"
                      className="list-icon"
                    />
                  </span>
                  Accurate, automated bookkeeping systems
                </li>
                <li>
                  <span className="icon-circle blue-icon">
                    <img
                      src="/circle-check.png"
                      alt="Problem"
                      className="list-icon"
                    />
                  </span>
                  Real-time dashboards and insights
                </li>
                <li>
                  <span className="icon-circle blue-icon">
                    <img
                      src="/circle-check.png"
                      alt="Problem"
                      className="list-icon"
                    />
                  </span>
                  AI automation freeing up your time
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;

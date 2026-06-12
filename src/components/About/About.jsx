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
    </section>
  );
}

export default About;

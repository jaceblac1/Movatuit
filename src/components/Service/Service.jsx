import "./Service.css";

function Service() {
  return (
    <section id="services" className="services">
      <div className="services-container">
        <div className="services-header">
          <span className="services-tag">WHAT WE OFFER</span>

          <h2 className="services-title">Comprehensive Financial Services</h2>

          <p className="services-description">
            Everything you need to transform your financial operations from a
            burden to a competitive advantage
          </p>
        </div>

        <div className="services-grid">
          {/*Card 1*/}
          <div className="service-card light-blue-card">
            <div className="service-icon light-blue-icon">
              <img src="/settings.png" alt="" />
            </div>

            <div className="service-heading">
              <h3>Financial Process Implementation</h3>

              <span className="service-arrow">
                &#8599;
              </span>
            </div>

            <p>
              Design and implement robust financial processes that scale with
              your business growth
            </p>
          </div>

          {/*Card 2*/}
          <div className="service-card light-orange-card">
            <div className="service-icon light-orange-icon">
              <img src="/book-open.png" alt="" />
            </div>

            <div className="service-heading">
              <h3>Bookkeeping & Accounting</h3>

              <span className="service-arrow">
                &#8599;
              </span>
            </div>
            <p>
              Accurate, timely bookkeeping that keeps your records clean and
              compliant
            </p>
          </div>

          {/*Card 3*/}
          <div className="service-card deep-blue-card">
            <div className="service-icon deep-blue-icon">
              <img src="/chart-column.png" alt="" />
            </div>

            <div className="service-heading">
              <h3>Financial Reporting & Analysis</h3>

              <span className="service-arrow">
                &#8599;
              </span>
            </div>
            <p>
              Clear, actionable reports that help you make data-driven decisions
            </p>
          </div>

          {/*Card 4*/}
          <div className="service-card orange-card">
            <div className="service-icon orange-icon">
              <img src="/file-check.png" alt="" />
            </div>

            <div className="service-heading">
              <h3>Tax Compliance & Audit Support</h3>

              <span className="service-arrow">
                &#8599;
              </span>
            </div>
            <p>
              Stay compliant with tax regulations and be audit-ready with expert
              support
            </p>
          </div>

          {/*Card 5*/}
          <div className="service-card gradient-card">
            <div className="service-icon gradient-icon">
              <img src="/cpu.png" alt="" />
            </div>

            <div className="service-heading">
              <h3>AI Automation & Optimization</h3>

              <span className="service-arrow">
                &#8599;
              </span>
            </div>
            <p>
              Leverage AI to automate repetitive tasks and optimize your finance
              operations
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Service;

import "./Process.css";

function Process() {
  return (
    <section className="process">
      <div className="process-container">
        <span className="process-tag">OUR PROCESS</span>

        <h2 className="process-title">How It Works</h2>

        <p className="process-description">
          A proven four-step approach to transform your financial operations
        </p>

        <div className="process-timeline">
          <div className="timeline-line"></div>

          <div className="process-step">
            <div className="process-icon">
              <img src="/message-square.png" alt="" />
              <span className="step-number">01</span>
            </div>

            <h3>Consultation & Assessment</h3>

            <p>
              We start with a deep dive into your current financial processes,
              challenges, and goals
            </p>
          </div>

          <div className="process-step">
            <div className="process-icon">
              <img src="/pencil.png" alt="" />
              <span className="step-number">02</span>
            </div>

            <h3>Process Design</h3>

            <p>
              We design customized financial workflows tailored to your business
              needs and growth stage
            </p>
          </div>

          <div className="process-step">
            <div className="process-icon">
              <img src="/zap.png" alt="" />
              <span className="step-number">03</span>
            </div>

            <h3>AI Automation</h3>

            <p>
              We implement AI-powered tools to automate repetitive tasks and
              streamline operations
            </p>
          </div>

          <div className="process-step">
            <div className="process-icon">
              <img src="/trending-up.png" alt="" />
              <span className="step-number">04</span>
            </div>

            <h3>Ongoing Reporting & Insights</h3>

            <p>
              Receive regular reports and actionable insights to drive better
              business decisions
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Process;

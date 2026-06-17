import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-badge">
        <img
          className="hero-badge-icon"
          src="/sparkles.svg"
          alt="Sparkle Icon"
        />
        AI-Powered Financial Advisory
      </div>

      <h1 className="hero-title">
        <div>Empowering Startups with</div>

        <div className="gradient-text">Smart Financial Processes</div>

        <div>& AI Automation</div>
      </h1>

      <p className="hero-description">
        Helping businesses streamline bookkeeping, gain financial clarity and
        scale using expert advisory and AI-powered financial system
      </p>

      <div className="hero-buttons">
        <button
          className="primary-button"
          onClick={() => {
            document
              .getElementById("cta")
              .scrollIntoView({ behavior: "smooth" });
          }}
        >
          Book a Free Strategy Call
        </button>

        <button
          className="secondary-button"
          onClick={() => {
            document
              .getElementById("services")
              .scrollIntoView({ behavior: "smooth" });
          }}
        >
          Explore Services
        </button>
      </div>

      <div className="hero-divider"></div>

      <div className="hero-company">
        <p>Trusted by innovative companies</p>
      </div>

      <div className="hero-company-list">
        <div>TechStart</div>

        <div>GrowthLab</div>

        <div>ScaleUp.io</div>

        <div>FinanceFirst</div>
      </div>
    </section>
  );
}

export default Hero;

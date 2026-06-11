import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      
      <div className="hero-badge">
        <img className="hero-badge-icon" src="/sparkles.svg" alt="Sparkle Icon" />
        AI-Powered Financial Advisory
      </div>

      <h1 className="hero-title">
        <div>Empowering Startups with</div>
        
        <div>Smart Financial Processes</div>
        
        <div>& AI Automation</div>
      </h1>

      <p className="hero-description">
        Helping businesses streamline bookkeeping, gain financial clarity and
        scale using expert advisory and AI-powered financial system
      </p>

      <div className="hero-buttons">
        <button className="primary-button">
          Book a Free Strategy Call
        </button>

        <button className="secondary-button">
          Explore Services
        </button>
      </div>
    </section>
  );
}

export default Hero;

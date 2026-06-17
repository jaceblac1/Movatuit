import "./Cta.css";

function Cta() {
  return (
    <section className="cta" id="cta">
      <div className="cta-container">
        <span className="cta-tag">
          <img src="/calendar.png" alt="" />
          Limited Spots Available
        </span>

        <h2 className="cta-title">
          Ready to Transform Your
          <br />
          <span>Financial Operations</span>?
        </h2>

        <p className="cta-description">
          Book a free 30-minute strategy call with our team. No obligations, just
          actionable insights for your business
        </p>

        <a href="https://wa.me/+234 707 949 8062"
          target="_blank"
          rel="noopener noreferrer"
          className="cta-button" 
        >
          Book Your Free Strategy Call
          <img src="/arrow-right.png" alt="" />
        </a>

        <div className="cta-divider"></div>

        <p className="cta-contact-title">Or reach out directly</p>

        <div className="cta-contact">
          <a href="">
            <img src="/mail.png" alt="" />
            hello@movatuit.com
          </a>

          <a href="tel: +234 707 949 8062">
            <img src="/phone.png" alt="" />
            +234 707 949 8062
          </a>
        </div>
      </div>
    </section>
  );
}

export default Cta;

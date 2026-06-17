import { FaLinkedin, FaXTwitter } from "react-icons/fa6";
import "./Footer.css";

function Footer() {
  return (
      <footer className="footer">

        <div className="footer-container">
          <div className="footer-left">
            <div className="footer-brand">M</div>

            <div>
              <h3>Movatuit Advisory</h3>
              <p>Clean books. Smart processes. Confident decision</p>
            </div>
          </div>

          <div className="footer-right">
            <a href="#" className="privacy">
              Privacy
            </a>

            <a href="#" className="terms">
              Terms
            </a>

            <div className="socials">
              <span>
                <a href="#" target="_blank" rel="noreferrer">
                  <FaLinkedin />
                </a>
              </span>
              <span>
                <a href="#" target="_blank" rel="noreferrer">
                  <FaXTwitter />
                </a>
              </span>
            </div>
          </div>
        </div>

        <div className="footer-divider"></div>

        <p className="copyright">
          © 2026 Movatuit Advisory. All rights reserved
        </p>
      </footer>
  );
}

export default Footer;

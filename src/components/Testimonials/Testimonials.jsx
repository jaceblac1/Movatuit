import { useState } from "react";
import { FaStar } from "react-icons/fa";
import "./Testimonials.css";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "CEO, TechStart Solutions",
    image: "/Serah.png",
    quote:
      "Movatuit transformed our chaotic bookkeeping into a streamlined system. We now have real-time visibility into our finances and can make decisions with confidence.",
    stat: "80% time saved on financial tasks",
  },

  {
    name: "Michael Brooks",
    role: "Founder, GrowthLab",
    image: "/michael.png",
    quote:
      "The AI automation they implemented has freed up hours each week. What used to take days now happens automatically. Game changer for our growing team",
    stat: "10+ hours saved weekly",
  },

  {
    name: "Emily Rodriguez",
    role: "COO, ScaleUp.io",
    image: "/Emilly.png",
    quote:
      "Finally, a finance partner who understands startups. They dont just give us numbers, they give us insights we can actually act on.",
    stat: "3x faster financial reporting",
  },
];

function Testimonial() {
  const [current, setCurrent] = useState(0);
  const [fade, setFade] = useState(true);
  const [direction, setDirection] = useState("right");

  const nextSlide = () => {
    setDirection("right");
    setFade(false);

    setTimeout(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
      setFade(true);
    }, 300);
  };

  const prevSlide = () => {
    setDirection("left");
    setFade(false);

    setTimeout(() => {
      setCurrent(
        (prev) => (prev - 1 + testimonials.length) % testimonials.length,
      );
      setFade(true);
    }, 300);
  };

  return (
    <section className="testimonials">
      <div className="testimonials-container">
        <span className="testimonial-tag">SOCIAL PROOF</span>

        <h2 className="testimonial-title">Trusted by Founders</h2>

        <div
          className={`testimonial-card ${
            fade
              ? "slide-in"
              : direction === "right"
                ? "slide-out-right"
                : "slide-out-left"
          }`}
        >
          <div className="quote-icon">
            <img src="/quote.png" alt="" />
          </div>

          <div className="stars">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>

          <p className="testimonial-quote">"{testimonials[current].quote}"</p>

          <div className="testimonial-footer">
            <div className="founder-info">
              <img src={testimonials[current].image} alt="Founders" />

              <div className="founder-text">
                <h4>{testimonials[current].name}</h4>

                <span>{testimonials[current].role}</span>
              </div>
            </div>
            <div className="testimonial-stat">{testimonials[current].stat}</div>
          </div>
        </div>

        <div className="testimonial-controls">
          <button className="nav-btn" onClick={prevSlide}>
            {"<"}
          </button>

          <div className="control-pill">
            <div className="dots">
              {testimonials.map((_, index) => (
                <span
                  key={index}
                  className={current === index ? "dot active" : "dot"}
                  onClick={() => setCurrent(index)}
                ></span>
              ))}
            </div>
          </div>

          <button className="nav-btn" onClick={nextSlide}>
            {">"}
          </button>
        </div>
      </div>
    </section>
  );
}

export default Testimonial;

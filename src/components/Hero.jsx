import { useEffect, useState } from "react";

export default function Hero() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      i += 5;
      if (i >= 120) {
        i = 120;
        clearInterval(interval);
      }
      setCount(i);
    }, 30);
  }, []);

  return (
    <section style={styles.hero}>
      <div style={styles.glow}></div>

      <div style={styles.container}>
        <div style={styles.badge}>AZ • Marketing System</div>

        <h1 style={styles.title}>
          Маркетинг и AI-автоматизация<br />
          для роста бизнеса
        </h1>

        <p style={styles.subtitle}>
          Я создаю системы рекламы, аналитики и автоматизации,
          которые превращают трафик в клиентов.
        </p>

        <div style={styles.buttons}>
          <button style={styles.primary}>Оставить заявку</button>
          <button style={styles.secondary}>Услуги</button>
        </div>

        <div style={styles.stats}>
          <div>
            <b>{count}+</b>
            <br />
            проектов
          </div>

          <div>
            <b>AI</b>
            <br />
            автоматизация
          </div>

          <div>
            <b>ROI x7</b>
            <br />
            рост
          </div>
        </div>
      </div>
    </section>
  );
}

const styles = {
  hero: {
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    textAlign: "center",
    overflow: "hidden",
  },

  glow: {
    position: "absolute",
    width: "600px",
    height: "600px",
    background:
      "radial-gradient(circle, rgba(0,255,200,0.12), transparent 60%)",
    top: "-200px",
    left: "50%",
    transform: "translateX(-50%)",
    filter: "blur(40px)",
  },

  container: {
    maxWidth: "800px",
    zIndex: 2,
  },

  badge: {
    display: "inline-block",
    padding: "6px 12px",
    border: "1px solid rgba(255,255,255,0.2)",
    borderRadius: "20px",
    fontSize: "12px",
    marginBottom: "20px",
    opacity: 0.8,
  },

  title: {
    fontSize: "48px",
    fontWeight: "700",
    marginBottom: "20px",
    lineHeight: "1.2",
  },

  subtitle: {
    fontSize: "16px",
    opacity: 0.7,
    marginBottom: "30px",
  },

  buttons: {
    display: "flex",
    gap: "12px",
    justifyContent: "center",
    marginBottom: "40px",
  },

  primary: {
    padding: "12px 20px",
    background: "white",
    color: "black",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
  },

  secondary: {
    padding: "12px 20px",
    background: "transparent",
    color: "white",
    border: "1px solid rgba(255,255,255,0.3)",
    borderRadius: "8px",
    cursor: "pointer",
  },

  stats: {
    display: "flex",
    gap: "30px",
    justifyContent: "center",
    opacity: 0.7,
    fontSize: "14px",
  },
};
import Hero from "../components/Hero";
import "../styles/global.css";

export default function MainLayout() {
  return (
    <div className="app">
      <header className="header">
        <div className="logo">AZ</div>

        <nav>
          <a href="#services">Услуги</a>
          <a href="#cases">Кейсы</a>
          <a href="#about">Обо мне</a>
        </nav>

        <button className="btn">Связаться</button>
      </header>

      <Hero />

      <footer className="footer">
        © AZ — Аркадий Жилкин
      </footer>
    </div>
  );
}
import Hero from "../components/Hero.jsx";

export default function MainLayout() {
  return (
    <div style={styles.page}>
      <Hero />
    </div>
  );
}

const styles = {
  page: {
    margin: 0,
    padding: 0,
    minHeight: "100vh",
    background: "#0b0f17",
    color: "white",
    fontFamily: "Arial, sans-serif",
  },
};
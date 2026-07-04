export default function Services() {
  return (
    <section style={{ padding: "80px 20px", textAlign: "center" }}>
      <h2>Что я делаю</h2>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "20px",
        marginTop: "40px"
      }}>
        <div>Яндекс Директ</div>
        <div>Яндекс Метрика</div>
        <div>AI автоматизация</div>
        <div>Telegram боты</div>
        <div>Лидогенерация</div>
        <div>CRM интеграции</div>
      </div>
    </section>
  );
}
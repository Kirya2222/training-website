function Morphology() {
  return (
    <main className="container px-4 py-4">
      <article>
        <section>
          <h3 className="h3 text-success">Зовнішній вигляд</h3>
          <p>Слон — ссавець роду Слон (Elephas ) з ряду хоботних (Proboscidea). Це друга за величиною наземна тварина.</p>
        </section>
        <section>
          <h3 className="h3 text-success">Особливості будови</h3>
          <ul>
            <li>Довжина тіла: 5,5—6,4 м, висота в загривку: 3 м, маса: 3—5 т.</li>
            <li>Нормальна температура тіла у слона — 35,9 °C.</li>
            <li>Характерною рисою є те, що бивні є лише у самців, а максимальна довжина, до якої ці бивні виростають — це 1,5 м і важать 20—25 кг.</li>
          </ul>
        </section>
        <figure className="text-center">
          <img src="../images/k9M2ndDdyFwPy43chxnq.webp" alt="Грайливі слони" className="img-fluid rounded my-4"/>
          <figcaption className="text-muted">Молоді слони</figcaption>
        </figure>
      </article>
    </main>
  );
}

export default Morphology;
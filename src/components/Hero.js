export function Hero() {

    return `

<section class="hero">

    <div class="container hero__container">

        <!-- LEFT CONTENT -->
        <div class="hero__content" data-reveal>

            <span class="hero__label">
                Интернет-маркетинг нового поколения
            </span>

            <h1>
                Помогаю бизнесу расти
                через аналитику,
                стратегию
                и систему.
            </h1>

            <p>
                Я не продаю рекламу.
                Я строю систему, где каждый канал,
                каждое решение и каждый рубль
                работают на прибыль бизнеса.
            </p>

            <div class="hero__buttons">

                <a href="#contacts" class="button">
                    Получить консультацию
                </a>

                <a href="#services" class="button button--secondary">
                    Направления
                </a>

            </div>

        </div>

        <!-- RIGHT VISUAL -->
        <div class="hero__visual" data-reveal>

            <div class="hero__circle"></div>
            <div class="hero__circle hero__circle--small"></div>

        </div>

    </div>

</section>

`;
}
import "./styles/reset.css";
import "./styles/variables.css";
import "./styles/global.css";

/* sections */
import "./styles/header.css";
import "./styles/hero.css";
import "./styles/problems.css";
import "./styles/approach.css";
import "./styles/services.css";
import "./styles/process.css";
import "./styles/cases.css";
import "./styles/faq.css";
import "./styles/cta.css";
import "./styles/footer.css";

/* premium UI layers */
import "./styles/progress.css";
import "./styles/cursor.css";
import "./styles/noise.css";

/* app core */
import { MainLayout } from "./layouts/MainLayout.js";
import { initApp } from "./js/app.js";

/* effects */
import { initScrollProgress } from "./js/progress.js";
import { initCursor } from "./js/cursor.js";
import { initMagneticButtons } from "./js/magnetic.js";

document.querySelector("#app").innerHTML = MainLayout();

/* init */
initApp();
initScrollProgress();
initCursor();
initMagneticButtons();
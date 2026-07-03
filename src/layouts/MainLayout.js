import { Noise } from "../components/Noise.js";
import { ScrollProgress } from "../components/ScrollProgress.js";
import { Cursor } from "../components/Cursor.js";

import { Header } from "../components/Header.js";
import { Hero } from "../components/Hero.js";
import { Problems } from "../components/Problems.js";
import { Approach } from "../components/Approach.js";
import { Services } from "../components/Services.js";
import { Process } from "../components/Process.js";
import { Cases } from "../components/Cases.js";
import { FAQ } from "../components/FAQ.js";
import { CTA } from "../components/CTA.js";
import { Footer } from "../components/Footer.js";

export function MainLayout() {

    return `

        ${Noise()}
        ${ScrollProgress()}
        ${Cursor()}
        ${Header()}

        <main>

            ${Hero()}

            ${Problems()}

            ${Approach()}

            ${Services()}

            ${Process()}

            ${Cases()}

            ${FAQ()}

            ${CTA()}

        </main>

        ${Footer()}

    `;

}
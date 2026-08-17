import { hero } from '../../data/home.js';

/* The signature device: a static medallion inside a slowly turning ring of
   inscribed capitals. The ring stops for visitors who prefer reduced
   motion (handled globally in styles/index.css). */
export function Seal() {
  return (
    <div className="relative mx-auto aspect-square w-[min(100%,26rem)] max-[900px]:w-[min(78%,20rem)]">
      <span
        aria-hidden="true"
        className="absolute inset-[8%] rounded-full bg-[radial-gradient(circle,rgba(198,160,62,0.20)_0%,transparent_68%)]"
      />

      <svg
        viewBox="0 0 400 400"
        aria-hidden="true"
        focusable="false"
        className="absolute inset-0 animate-turn"
      >
        <defs>
          <path
            id="sealRing"
            d="M200,200 m-168,0 a168,168 0 1,1 336,0 a168,168 0 1,1 -336,0"
          />
        </defs>
        <circle cx="200" cy="200" r="186" fill="none" stroke="rgba(198,160,62,0.35)" strokeWidth="1" />
        <circle cx="200" cy="200" r="150" fill="none" stroke="rgba(198,160,62,0.35)" strokeWidth="1" />
        <text className="fill-gold font-seal text-[15.5px] font-semibold uppercase tracking-[0.32em] opacity-85">
          <textPath href="#sealRing" startOffset="0" textLength="1055" lengthAdjust="spacing">
            {hero.inscription}
          </textPath>
        </text>
      </svg>

      <img
        src="/assets/img/logo.png"
        alt="The Global Welfare Foundation seal"
        width="512"
        height="512"
        className="absolute inset-[16%] h-[68%] w-[68%] drop-shadow-[0_18px_40px_rgba(0,0,0,0.55)]"
      />
    </div>
  );
}

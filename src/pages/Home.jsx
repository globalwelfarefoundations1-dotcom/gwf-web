import { useMemo } from 'react';
import { Band } from '../components/ui/Band.jsx';
import { Rule } from '../components/ui/Rule.jsx';
import { Label } from '../components/ui/Label.jsx';
import { Reveal } from '../components/ui/Reveal.jsx';
import { Body } from '../components/ui/Prose.jsx';
import { TextLink } from '../components/ui/TextLink.jsx';
import { SectionHead } from '../components/ui/SectionHead.jsx';
import { Hero } from '../components/sections/Hero.jsx';
import { Charter } from '../components/sections/Charter.jsx';
import { ObjectClause } from '../components/sections/ObjectClause.jsx';
import { PillarGrid } from '../components/sections/PillarGrid.jsx';
import { GoalRegister } from '../components/sections/GoalRegister.jsx';
import { ApproachGrid } from '../components/sections/ApproachGrid.jsx';
import { WaysGrid } from '../components/sections/WaysGrid.jsx';
import { CtaBand } from '../components/sections/CtaBand.jsx';
import { useSeo } from '../hooks/useSeo.js';
import { seo, organisationSchema } from '../data/seo.js';
import { contact } from '../data/site.js';
import { pillars } from '../data/pillars.js';
import {
  mandate,
  pillarsIntro,
  registerIntro,
  approachIntro,
  approach,
  waysIntro,
  ways,
  homeCta,
} from '../data/home.js';

export default function Home() {
  const schema = useMemo(() => organisationSchema(contact), []);
  useSeo(seo['/'], schema);

  return (
    <>
      <Hero />

      {/* The mandate */}
      <Band tone="raised">
        <Charter>
          <Reveal>
            <Label>{mandate.eyebrow}</Label>

            <h2 className="mb-[1.1rem] mt-[0.9rem] font-voice text-h2 font-light leading-[1.3] tracking-[-0.01em]">
              {mandate.title}
            </h2>

            {mandate.paragraphs.map((paragraph) => (
              <Body key={paragraph}>{paragraph}</Body>
            ))}

            <TextLink to={mandate.link.to} className="mt-2">
              {mandate.link.label}
            </TextLink>
          </Reveal>

          <Reveal>
            <ObjectClause documentLabel={mandate.documentLabel} source={mandate.source} />
          </Reveal>
        </Charter>
      </Band>

      <Rule />

      {/* Five pillars */}
      <Band tone="seal">
        <SectionHead
          eyebrow={pillarsIntro.eyebrow}
          title={pillarsIntro.title}
          standfirst={pillarsIntro.standfirst}
        />
        <PillarGrid items={pillars} five />
      </Band>

      {/* The fourteen goals */}
      <Band tone="paper">
        <SectionHead
          eyebrow={registerIntro.eyebrow}
          title={registerIntro.title}
          standfirst={registerIntro.standfirst}
        />

        <GoalRegister />

        <p className="mt-[2.4rem]">
          <TextLink to={registerIntro.link.to} onPaper>
            {registerIntro.link.label}
          </TextLink>
        </p>
      </Band>

      <Rule />

      {/* How we work */}
      <Band tone="seal">
        <SectionHead eyebrow={approachIntro.eyebrow} title={approachIntro.title} />
        <ApproachGrid items={approach} columns="two" />
      </Band>

      {/* Ways to help */}
      <Band tone="paper-2">
        <SectionHead
          eyebrow={waysIntro.eyebrow}
          title={waysIntro.title}
          standfirst={waysIntro.standfirst}
          centred
        />
        <WaysGrid items={ways} />
      </Band>

      <CtaBand {...homeCta} />
    </>
  );
}

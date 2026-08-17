import { Band } from '../components/ui/Band.jsx';
import { Rule } from '../components/ui/Rule.jsx';
import { SectionHead } from '../components/ui/SectionHead.jsx';
import { PageHead } from '../components/sections/PageHead.jsx';
import { FocusBlock } from '../components/sections/FocusBlock.jsx';
import { GoalRegister } from '../components/sections/GoalRegister.jsx';
import { ApproachGrid } from '../components/sections/ApproachGrid.jsx';
import { CtaBand } from '../components/sections/CtaBand.jsx';
import { useSeo } from '../hooks/useSeo.js';
import { seo } from '../data/seo.js';
import { pillars } from '../data/pillars.js';
import { workHead, registerIntro, firstYearIntro, firstYear, workCta } from '../data/whatWeDo.js';

export default function WhatWeDo() {
  useSeo(seo['/what-we-do']);

  return (
    <>
      <PageHead {...workHead} />

      <Rule />

      {/* The five pillars in detail */}
      <Band tone="seal">
        {pillars.map((pillar, index) => (
          <FocusBlock key={pillar.id} pillar={pillar} first={index === 0} />
        ))}
      </Band>

      {/* The fourteen goals, mapped */}
      <Band tone="paper">
        <SectionHead
          eyebrow={registerIntro.eyebrow}
          title={registerIntro.title}
          standfirst={registerIntro.standfirst}
        />
        <GoalRegister showPillar />
      </Band>

      <Rule />

      {/* First year */}
      <Band tone="raised">
        <SectionHead
          eyebrow={firstYearIntro.eyebrow}
          title={firstYearIntro.title}
          standfirst={firstYearIntro.standfirst}
        />
        <ApproachGrid items={firstYear} columns="two" />
      </Band>

      <CtaBand {...workCta} />
    </>
  );
}

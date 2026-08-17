import { Band } from '../components/ui/Band.jsx';
import { Rule } from '../components/ui/Rule.jsx';
import { Label } from '../components/ui/Label.jsx';
import { Reveal } from '../components/ui/Reveal.jsx';
import { Body, Prose } from '../components/ui/Prose.jsx';
import { DefList } from '../components/ui/DefList.jsx';
import { SectionHead } from '../components/ui/SectionHead.jsx';
import { PageHead } from '../components/sections/PageHead.jsx';
import { Charter } from '../components/sections/Charter.jsx';
import { ObjectClause } from '../components/sections/ObjectClause.jsx';
import { ApproachGrid } from '../components/sections/ApproachGrid.jsx';
import { PillarGrid } from '../components/sections/PillarGrid.jsx';
import { CtaBand } from '../components/sections/CtaBand.jsx';
import { useSeo } from '../hooks/useSeo.js';
import { seo } from '../data/seo.js';
import {
  aboutHead,
  whoWeAre,
  mandateSection,
  positioning,
  commitmentsIntro,
  commitments,
  governance,
  aboutCta,
} from '../data/about.js';

export default function About() {
  useSeo(seo['/about']);

  return (
    <>
      <PageHead {...aboutHead} />

      <Rule />

      {/* Who we are */}
      <Band tone="seal">
        <Charter>
          <Reveal>
            <Label>{whoWeAre.eyebrow}</Label>

            <h2 className="mb-[1.2rem] mt-[0.9rem] font-voice text-h2 font-light leading-[1.3] tracking-[-0.01em]">
              {whoWeAre.title}
            </h2>

            <Prose>
              {whoWeAre.paragraphs.map((paragraph) => (
                <Body key={paragraph}>{paragraph}</Body>
              ))}
            </Prose>
          </Reveal>

          <Reveal>
            <DefList rows={whoWeAre.facts} />
          </Reveal>
        </Charter>
      </Band>

      {/* Mandate */}
      <Band tone="paper" id="mandate">
        <SectionHead
          eyebrow={mandateSection.eyebrow}
          title={mandateSection.title}
          standfirst={mandateSection.standfirst}
        />

        <Reveal>
          <ObjectClause
            documentLabel={mandateSection.documentLabel}
            source={mandateSection.source}
            full
            className="max-w-[52rem]"
          />
        </Reveal>
      </Band>

      <Rule />

      {/* Vision, mission, method + commitments */}
      <Band tone="raised">
        <ApproachGrid items={positioning} />

        <SectionHead
          eyebrow={commitmentsIntro.eyebrow}
          title={commitmentsIntro.title}
          className="mt-[clamp(3rem,6vw,4.5rem)]"
        />

        <PillarGrid items={commitments} showIcon={false} />
      </Band>

      {/* Governance */}
      <Band tone="paper-2" id="governance">
        <SectionHead
          eyebrow={governance.eyebrow}
          title={governance.title}
          standfirst={governance.standfirst}
        />

        <Reveal>
          <DefList rows={governance.rows} className="max-w-[52rem]" />
        </Reveal>
      </Band>

      {/* The "Legal status" band sat here. It is hidden while the
          registrations are in process — see src/data/about.js. */}

      <CtaBand {...aboutCta} />
    </>
  );
}

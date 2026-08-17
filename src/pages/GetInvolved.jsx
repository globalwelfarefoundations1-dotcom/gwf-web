import { Band } from '../components/ui/Band.jsx';
import { Rule } from '../components/ui/Rule.jsx';
import { Label } from '../components/ui/Label.jsx';
import { Reveal } from '../components/ui/Reveal.jsx';
import { DefList } from '../components/ui/DefList.jsx';
import { SectionHead } from '../components/ui/SectionHead.jsx';
import { DocumentCard, DocumentSource } from '../components/ui/DocumentCard.jsx';
import { PageHead } from '../components/sections/PageHead.jsx';
import { Charter } from '../components/sections/Charter.jsx';
import { ApproachGrid } from '../components/sections/ApproachGrid.jsx';
import { WaysGrid } from '../components/sections/WaysGrid.jsx';
import { CtaBand } from '../components/sections/CtaBand.jsx';
import { MailtoForm } from '../components/forms/MailtoForm.jsx';
import { DonationForm } from '../components/forms/DonationForm.jsx';
import { useSeo } from '../hooks/useSeo.js';
import { seo } from '../data/seo.js';
import { contact, bankDetails } from '../data/site.js';
import {
  involvedHead,
  donateIntro,
  donateNotes,
  volunteerIntro,
  volunteerRoles,
  volunteerFields,
  volunteerFormNote,
  partnerIntro,
  partnerOptions,
  partnerFields,
  involvedCta,
} from '../data/getInvolved.js';

export default function GetInvolved() {
  useSeo(seo['/get-involved']);

  return (
    <>
      <PageHead {...involvedHead} />

      <Rule />

      {/* Donate */}
      <Band tone="paper" id="donate">
        <SectionHead
          eyebrow={donateIntro.eyebrow}
          title={donateIntro.title}
          standfirst={donateIntro.standfirst}
        />

        <Reveal>
          <Charter formFirst>
            <DonationForm />

            <DocumentCard>
              <Label onPaper>{donateNotes.documentLabel}</Label>

              <DefList rows={bankDetails} stacked className="mt-4" />

              <DocumentSource items={[donateNotes.receiptNote]} className="mt-[1.4rem]" />

              <p className="mt-[1.4rem] text-note leading-[1.75] text-ink-text/72">
                <strong>On tax deduction:</strong> {donateNotes.taxNote}
              </p>

              <p className="text-note leading-[1.75] text-ink-text/72">
                <strong>On foreign contributions:</strong> {donateNotes.foreignNote}
              </p>
            </DocumentCard>
          </Charter>
        </Reveal>
      </Band>

      <Rule onPaper />

      {/* Volunteer */}
      <Band tone="seal" id="volunteer">
        <SectionHead
          eyebrow={volunteerIntro.eyebrow}
          title={volunteerIntro.title}
          standfirst={volunteerIntro.standfirst}
        />

        <Reveal>
          <Charter>
            <ApproachGrid items={volunteerRoles} columns="one" />

            <DocumentCard as="div">
              <MailtoForm
                fields={volunteerFields}
                mailto={contact.email.volunteer}
                subject="Volunteer application from the website"
                submitLabel="Send application"
                note={volunteerFormNote}
              >
                <Label onPaper className="mb-[0.4rem]">
                  Volunteer with us
                </Label>
              </MailtoForm>
            </DocumentCard>
          </Charter>
        </Reveal>
      </Band>

      {/* Partner */}
      <Band tone="paper-2" id="partner">
        <SectionHead
          eyebrow={partnerIntro.eyebrow}
          title={partnerIntro.title}
          standfirst={partnerIntro.standfirst}
        />

        <WaysGrid items={partnerOptions} />

        <Reveal className="mt-[clamp(2.4rem,5vw,3.4rem)] max-w-[46rem]">
          <MailtoForm
            fields={partnerFields}
            mailto={contact.email.partnerships}
            subject="Partnership enquiry from the website"
            submitLabel="Start a conversation"
          />
        </Reveal>
      </Band>

      <CtaBand {...involvedCta} />
    </>
  );
}

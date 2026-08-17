import { Band } from '../components/ui/Band.jsx';
import { Rule } from '../components/ui/Rule.jsx';
import { Label } from '../components/ui/Label.jsx';
import { Reveal } from '../components/ui/Reveal.jsx';
import { DefList } from '../components/ui/DefList.jsx';
import { SectionHead } from '../components/ui/SectionHead.jsx';
import { DocumentCard } from '../components/ui/DocumentCard.jsx';
import { PageHead } from '../components/sections/PageHead.jsx';
import { Charter } from '../components/sections/Charter.jsx';
import { ApproachGrid } from '../components/sections/ApproachGrid.jsx';
import { MailtoForm } from '../components/forms/MailtoForm.jsx';
import { useSeo } from '../hooks/useSeo.js';
import { seo } from '../data/seo.js';
import { contact } from '../data/site.js';
import {
  contactHead,
  contactIntro,
  contactRows,
  grievanceNote,
  contactFields,
  contactFormNote,
  faqIntro,
  faqs,
} from '../data/contact.js';

export default function Contact() {
  useSeo(seo['/contact']);

  return (
    <>
      <PageHead {...contactHead} />

      <Rule />

      <Band tone="paper">
        <Charter>
          <Reveal>
            <Label onPaper>{contactIntro.eyebrow}</Label>

            <h2 className="mb-[1.6rem] mt-[0.9rem] font-voice text-h2 font-light leading-[1.3] tracking-[-0.01em]">
              {contactIntro.title}
            </h2>

            <DefList rows={contactRows} />

            <p className="mt-[1.8rem] text-note text-ink-text/72">
              {grievanceNote.before}
              <a className="text-gold-ink" href={`mailto:${contact.email.general}`}>
                {contact.email.general}
              </a>
              {grievanceNote.after}
            </p>
          </Reveal>

          <Reveal>
            <DocumentCard as="div">
              <MailtoForm
                fields={contactFields}
                mailto={contact.email.general}
                subject="Website enquiry"
                submitLabel="Send message"
                note={contactFormNote}
              >
                <Label onPaper className="mb-[0.4rem]">
                  Send a message
                </Label>
              </MailtoForm>
            </DocumentCard>
          </Reveal>
        </Charter>
      </Band>

      <Rule onPaper />

      <Band tone="seal">
        <SectionHead eyebrow={faqIntro.eyebrow} title={faqIntro.title} />
        <ApproachGrid items={faqs} />
      </Band>
    </>
  );
}

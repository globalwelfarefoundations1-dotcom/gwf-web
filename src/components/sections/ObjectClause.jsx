import { DocumentCard, DocumentSource } from '../ui/DocumentCard.jsx';
import { Label } from '../ui/Label.jsx';
import { objectClause } from '../../data/site.js';

/* The object clause of the Memorandum of Association, set as a document.
   `full` adds the statutory tail used on the About page. */
export function ObjectClause({ documentLabel, source, full = false, className }) {
  return (
    <DocumentCard className={className}>
      <Label onPaper>{documentLabel}</Label>

      <p className="mb-[1.8rem] mt-[1.4rem] font-voice text-h3 font-light leading-[1.42] tracking-[-0.005em]">
        {objectClause.lead}
        <strong className="font-medium text-gold-ink">{objectClause.emphasis}</strong>
        {full ? objectClause.tailFull : objectClause.tail}
      </p>

      <DocumentSource items={source} />
    </DocumentCard>
  );
}

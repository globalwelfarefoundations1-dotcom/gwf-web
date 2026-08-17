import { cn } from '../../utils/cn.js';
import { useOnPaper } from './Band.jsx';

/* Key/value register used for contact details, governance and legal
   status. Two columns on wide screens, stacked below 560px. Inside the
   narrow document card there is no room for a key column, so `stacked`
   collapses it everywhere. */

export function DefList({ rows, stacked = false, className }) {
  const onPaper = useOnPaper();

  return (
    <dl className={cn('grid', className)}>
      {rows.map((row) => (
        <div
          key={row.key}
          className={cn(
            'grid gap-x-6 gap-y-[0.4rem] border-b py-[0.95rem]',
            stacked
              ? 'grid-cols-1 gap-y-1'
              : 'grid-cols-1 sm:grid-cols-[minmax(7rem,10rem)_1fr]',
            onPaper ? 'border-hairline-ink' : 'border-hairline'
          )}
        >
          <dt
            className={cn(
              'font-mono text-meta uppercase tracking-[0.12em]',
              onPaper ? 'text-gold-ink' : 'text-gold'
            )}
          >
            {row.key}
          </dt>
          <dd className="m-0 leading-[1.7]">
            {row.mailto ? (
              <a
                className="border-b border-current no-underline"
                href={`mailto:${row.value}`}
              >
                {row.value}
              </a>
            ) : row.tel ? (
              <a className="border-b border-current no-underline" href={`tel:${row.tel}`}>
                {row.value}
              </a>
            ) : (
              row.value
            )}
          </dd>
        </div>
      ))}
    </dl>
  );
}

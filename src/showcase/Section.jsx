/* ── 개별 케이스 래퍼 ────────────────────────────────────────── */
export function Case({ label, children, center = false }) {
  return (
    <div style={{
      display:        'flex',
      flexDirection:  'column',
      gap:            'var(--spacing-8)',
      alignItems:     center ? 'center' : 'flex-start',
    }}>
      {children}
      {label && (
        <p style={{
          fontSize:      'var(--font-size-caption-1)',
          lineHeight:    'var(--line-height-caption-1)',
          letterSpacing: 'var(--letter-spacing-caption-1)',
          fontWeight:    'var(--font-weight-regular)',
          color:         'var(--color-label-assistive)',
          textAlign:     center ? 'center' : 'left',
          whiteSpace:    'pre-line',
        }}>{label}</p>
      )}
    </div>
  )
}

/* ── 섹션 래퍼 ───────────────────────────────────────────────── */
export default function Section({
  title,
  description,
  background,
  gap     = 'var(--spacing-16)',
  wrap    = true,
  column  = false,
  children,
}) {
  return (
    <section style={{ marginBottom: 'var(--spacing-48)' }}>
      <h3 style={{
        fontSize:      'var(--font-size-headline-2)',
        lineHeight:    'var(--line-height-headline-2)',
        letterSpacing: 'var(--letter-spacing-headline-2)',
        fontWeight:    'var(--font-weight-semibold)',
        color:         'var(--color-label-normal)',
        marginBottom:  description ? 'var(--spacing-8)' : 'var(--spacing-16)',
        paddingBottom: 'var(--spacing-12)',
        borderBottom:  '1px solid var(--color-line-normal)',
      }}>{title}</h3>

      {description && (
        <p style={{
          fontSize:      'var(--font-size-body-2)',
          lineHeight:    'var(--line-height-body-2-normal)',
          letterSpacing: 'var(--letter-spacing-body-2)',
          color:         'var(--color-label-alternative)',
          marginBottom:  'var(--spacing-16)',
        }}>{description}</p>
      )}

      <div style={{
        display:        'flex',
        flexDirection:  column ? 'column' : 'row',
        flexWrap:       wrap && !column ? 'wrap' : 'nowrap',
        gap,
        alignItems:     column ? 'stretch' : 'flex-start',
        ...(background ? {
          padding:         'var(--spacing-24)',
          borderRadius:    'var(--spacing-12)',
          backgroundColor: background,
        } : {}),
      }}>
        {children}
      </div>
    </section>
  )
}

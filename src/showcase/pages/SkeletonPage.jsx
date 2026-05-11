import SkeletonText   from '../../design-system/components/SkeletonText/SkeletonText'
import SkeletonRect   from '../../design-system/components/SkeletonRect/SkeletonRect'
import SkeletonCircle from '../../design-system/components/SkeletonCircle/SkeletonCircle'
import Section, { Case } from '../Section'

/* ── Text 섹션 ─────────────────────────────────────────────── */
function TextContent() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-32)' }}>
      <Section title="Length" gap="var(--spacing-16)" column>
        <Case label='length="100%" (기본)'>
          <div style={{ width: '320px' }}>
            <SkeletonText length="100%" />
          </div>
        </Case>
        <Case label='length="75%"'>
          <div style={{ width: '320px' }}>
            <SkeletonText length="75%" />
          </div>
        </Case>
        <Case label='length="50%"'>
          <div style={{ width: '320px' }}>
            <SkeletonText length="50%" />
          </div>
        </Case>
        <Case label='length="25%"'>
          <div style={{ width: '320px' }}>
            <SkeletonText length="25%" />
          </div>
        </Case>
      </Section>

      <Section title="Align" gap="var(--spacing-24)">
        {(['leading', 'center', 'trailing']).map(align => (
          <Case key={align} label={`align="${align}"`}>
            <div style={{ width: '240px', display: 'flex', flexDirection: 'column', gap: 'var(--spacing-16)' }}>
              <SkeletonText length="100%" align={align} />
              <SkeletonText length="75%"  align={align} />
              <SkeletonText length="50%"  align={align} />
              <SkeletonText length="25%"  align={align} />
            </div>
          </Case>
        ))}
      </Section>

      <Section title="Height" gap="var(--spacing-16)" column>
        {[14, 18, 22, 28].map(h => (
          <Case key={h} label={`height={${h}}`}>
            <div style={{ width: '240px' }}>
              <SkeletonText length="80%" height={h} />
            </div>
          </Case>
        ))}
      </Section>

      <Section title="Card">
        <div style={{
          display:         'flex',
          flexDirection:   'column',
          gap:             'var(--spacing-12)',
          width:           '280px',
          padding:         'var(--spacing-16)',
          backgroundColor: 'var(--color-bg-elevated)',
          borderRadius:    'var(--spacing-12)',
          border:          '1px solid var(--color-line-neutral)',
        }}>
          <SkeletonRect aspectRatio="16/9" radius={8} />
          <div style={{ display: 'flex', gap: 'var(--spacing-12)', alignItems: 'center' }}>
            <SkeletonCircle size={40} />
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 'var(--spacing-8)' }}>
              <SkeletonText length="80%" height={18} />
              <SkeletonText length="50%" height={14} />
            </div>
          </div>
          <SkeletonText length="100%" height={14} />
          <SkeletonText length="90%"  height={14} />
          <SkeletonText length="60%"  height={14} />
        </div>
      </Section>
    </div>
  )
}

/* ── Rectangle 섹션 ────────────────────────────────────────── */
function RectangleContent() {
  return (
    <Section title="Rectangle">
      <SkeletonRect color="normal" width={64} height={64} />
    </Section>
  )
}

/* ── Circle 섹션 ───────────────────────────────────────────── */
function CircleContent() {
  return (
    <Section title="Circle">
      <SkeletonCircle size={64} color="normal" />
    </Section>
  )
}

/* ── 페이지 ─────────────────────────────────────────────────── */
export default function SkeletonPage() {
  return (
    <div>
      <h2 style={{
        fontSize:     'var(--font-size-title-3)',
        lineHeight:   'var(--line-height-title-3)',
        fontWeight:   'var(--font-weight-bold)',
        color:        'var(--color-label-normal)',
        marginBottom: 'var(--spacing-24)',
      }}>Skeleton</h2>

      <TextContent />
      <RectangleContent />
      <CircleContent />
    </div>
  )
}

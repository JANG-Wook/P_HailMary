import Tooltip from '../../design-system/components/Tooltip/Tooltip'
import Section, { Case } from '../Section'

/* ── 앵커 박스 (포지션/얼라인 데모용) ─────────────────────────── */
function AnchorBox() {
  return (
    <div style={{
      width:        '96px',
      height:       '96px',
      border:       '1px dashed var(--color-line-normal)',
      borderRadius: 'var(--spacing-8)',
      flexShrink:   0,
    }} />
  )
}

export default function TooltipPage() {
  return (
    <div>
      <h2 style={{
        fontSize:     'var(--font-size-title-3)',
        lineHeight:   'var(--line-height-title-3)',
        fontWeight:   'var(--font-weight-bold)',
        color:        'var(--color-label-normal)',
        marginBottom: 'var(--spacing-32)',
      }}>Tooltip</h2>

      {/* ── size ─────────────────────────────────────────────── */}
      <Section title="Size" gap="var(--spacing-24)">
        <Case label='size="medium" (default)' center>
          <Tooltip size="medium" label="메시지에 마침표를 찍어요." position="bottom" />
        </Case>
        <Case label='size="small"' center>
          <Tooltip size="small" label="역할" position="bottom" />
        </Case>
      </Section>

      {/* ── position ─────────────────────────────────────────── */}
      <Section title="Position">
        <div style={{
          display:         'flex',
          flexDirection:   'column',
          alignItems:      'center',
          gap:             'var(--spacing-24)',
          backgroundColor: 'var(--color-fill-alternative)',
          borderRadius:    'var(--spacing-16)',
          padding:         'var(--spacing-48)',
          width:           '100%',
          boxSizing:       'border-box',
        }}>
          {/* top */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Tooltip position="top" label="툴팁" />
            <AnchorBox />
          </div>

          {/* middle row: left · spacer · right */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-24)' }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <Tooltip position="left" label="툴팁" />
              <AnchorBox />
            </div>
            <div style={{ width: '96px', height: '96px', flexShrink: 0 }} />
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <AnchorBox />
              <Tooltip position="right" label="툴팁" />
            </div>
          </div>

          {/* bottom */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <AnchorBox />
            <Tooltip position="bottom" label="툴팁" />
          </div>
        </div>
      </Section>

      {/* ── align — arrow = vertical (position = top, bottom) ── */}
      <Section title="Align  —  arrow = vertical" gap="var(--spacing-32)">
        {['start', 'center', 'end'].map(align => (
          <Case key={align} label={`align="${align}"`} center>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'var(--spacing-24)' }}>
              {/* position=top */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Tooltip position="top" align={align} label="툴팁" />
                <AnchorBox />
              </div>
              {/* position=bottom */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <AnchorBox />
                <Tooltip position="bottom" align={align} label="툴팁" />
              </div>
            </div>
          </Case>
        ))}
      </Section>

      {/* ── align — arrow = horizontal (position = left, right) ─ */}
      <Section title="Align  —  arrow = horizontal" gap="var(--spacing-48)">
        {['start', 'center', 'end'].map(align => {
          const wrapAlign =
            align === 'start' ? 'flex-start' :
            align === 'end'   ? 'flex-end'   : 'center'
          return (
            <Case key={align} label={`align="${align}"`} center>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-24)' }}>
                {/* position=right */}
                <div style={{ display: 'flex', alignItems: wrapAlign }}>
                  <AnchorBox />
                  <Tooltip position="right" align={align} label={"툴팁\n레이블"} />
                </div>
                {/* position=left */}
                <div style={{ display: 'flex', alignItems: wrapAlign }}>
                  <Tooltip position="left" align={align} label={"툴팁\n레이블"} />
                  <AnchorBox />
                </div>
              </div>
            </Case>
          )
        })}
      </Section>

      {/* ── shortcut ──────────────────────────────────────────── */}
      <Section title="Shortcut" column gap="var(--spacing-24)">
        {/* medium */}
        <div style={{ display: 'flex', gap: 'var(--spacing-24)', flexWrap: 'wrap', alignItems: 'flex-start' }}>
          <Case label='size="medium"  shortcut=false (default)' center>
            <Tooltip label="메시지에 마침표를 찍어요." position="bottom" />
          </Case>
          <Case label='size="medium"  shortcut=true  shortcutText="⌘C"' center>
            <Tooltip label="메시지에 마침표를 찍어요." position="bottom" shortcut shortcutText="⌘C" />
          </Case>
        </div>
        {/* small */}
        <div style={{ display: 'flex', gap: 'var(--spacing-24)', flexWrap: 'wrap', alignItems: 'flex-start' }}>
          <Case label='size="small"  shortcut=false (default)' center>
            <Tooltip size="small" label="역할" position="bottom" />
          </Case>
          <Case label='size="small"  shortcut=true  shortcutText="⌘C"' center>
            <Tooltip size="small" label="역할" position="bottom" shortcut shortcutText="⌘C" />
          </Case>
        </div>
      </Section>
    </div>
  )
}

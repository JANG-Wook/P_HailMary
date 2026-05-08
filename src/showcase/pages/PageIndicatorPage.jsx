import PageIndicatorCounter from '../../design-system/components/PageIndicatorCounter/PageIndicatorCounter'
import Section, { Case } from '../Section'

export default function PageIndicatorPage() {
  return (
    <div>
      <h2 style={{
        fontSize:     'var(--font-size-title-3)',
        lineHeight:   'var(--line-height-title-3)',
        fontWeight:   'var(--font-weight-bold)',
        color:        'var(--color-label-normal)',
        marginBottom: 'var(--spacing-8)',
      }}>Counter</h2>
      <p style={{
        fontSize:      'var(--font-size-body-2)',
        lineHeight:    'var(--line-height-body-2-normal)',
        color:         'var(--color-label-alternative)',
        marginBottom:  'var(--spacing-32)',
      }}>페이지 번호를 숫자 형태로 표시하는 페이지네이션 방식입니다.</p>

      {/* ── size ──────────────────────────────────────────────── */}
      <Section title="Size" background="var(--color-bg-normal-alternative)" gap="var(--spacing-24)">
        <Case label='size="small"' center>
          <PageIndicatorCounter current="1" total="10" size="small" />
        </Case>
        <Case label='size="medium"  default' center>
          <PageIndicatorCounter current="1" total="10" size="medium" />
        </Case>
      </Section>

      {/* ── alternative ───────────────────────────────────────── */}
      <Section title="Alternative" background="var(--color-bg-normal-alternative)" gap="var(--spacing-24)">
        <Case label='alternative=false  default' center>
          <PageIndicatorCounter current="1" total="10" />
        </Case>
        <Case label='alternative=true' center>
          <PageIndicatorCounter current="1" total="10" alternative />
        </Case>
      </Section>
    </div>
  )
}

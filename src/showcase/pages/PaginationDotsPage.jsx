import PaginationDots from '../../design-system/components/PaginationDots/PaginationDots'
import Section, { Case } from '../Section'

export default function PaginationDotsPage() {
  return (
    <div>
      <h2 style={{
        fontSize:     'var(--font-size-title-3)',
        lineHeight:   'var(--line-height-title-3)',
        fontWeight:   'var(--font-weight-bold)',
        color:        'var(--color-label-normal)',
        marginBottom: 'var(--spacing-8)',
      }}>Dot</h2>
      <p style={{
        fontSize:      'var(--font-size-body-2)',
        lineHeight:    'var(--line-height-body-2-normal)',
        color:         'var(--color-label-alternative)',
        marginBottom:  'var(--spacing-32)',
      }}>페이지를 작은 점(dot) 형태로 표시하여 사용자가 현재 페이지와 다른 페이지로 쉽게 이동할 수 있도록 돕습니다.</p>

      {/* ── variant ─────────────────────────────────────────── */}
      <Section title="variant" background="var(--color-bg-normal-alternative)" gap="var(--spacing-24)">
        <Case label='variant="normal"  default' center>
          <PaginationDots count={5} value={0} variant="normal" />
        </Case>
        <Case label='variant="white"' center>
          <PaginationDots count={5} value={0} variant="white" />
        </Case>
      </Section>

      {/* ── size ────────────────────────────────────────────── */}
      <Section title="size" background="var(--color-bg-normal-alternative)" gap="var(--spacing-24)">
        <Case label='size="small"' center>
          <PaginationDots count={5} value={0} size="small" />
        </Case>
        <Case label='size="medium"  default' center>
          <PaginationDots count={5} value={0} size="medium" />
        </Case>
      </Section>

      {/* ── Resource ────────────────────────────────────────── */}
      <Section title="Resource" background="var(--color-bg-normal-alternative)" gap="var(--spacing-16)">
        <Case label='size="medium"  variant="normal"' center>
          <PaginationDots count={2} value={0} size="medium" variant="normal" />
        </Case>
        <Case label='size="medium"  variant="white"' center>
          <PaginationDots count={2} value={0} size="medium" variant="white" />
        </Case>
        <Case label='size="small"  variant="normal"' center>
          <PaginationDots count={2} value={0} size="small" variant="normal" />
        </Case>
        <Case label='size="small"  variant="white"' center>
          <PaginationDots count={2} value={0} size="small" variant="white" />
        </Case>
      </Section>
    </div>
  )
}

import { useState } from 'react'
import Avatar from '../../design-system/components/Avatar/Avatar'
import Section, { Case } from '../Section'
import profileImg from '/T1_parksy/Profile.png'

const SIZES = ['xsmall', 'small', 'medium', 'large', 'xlarge']

function PushBadge() {
  return (
    <div style={{
      width: 'var(--spacing-10)', height: 'var(--spacing-10)', borderRadius: '50%',
      backgroundColor: 'var(--color-primary-normal)',
      border: '2px solid var(--color-bg-elevated)',
    }} />
  )
}

/* ── 상단 테스트 영역 ─────────────────────────────────── */
function TestArea() {
  const [log, setLog] = useState('')

  const handleClick = (label) => setLog(`clicked: ${label}`)

  return (
    <div style={{
      marginBottom:    'var(--spacing-48)',
      padding:         'var(--spacing-24)',
      borderRadius:    'var(--spacing-12)',
      border:          '1px dashed var(--color-line-alternative)',
      display:         'flex',
      flexDirection:   'column',
      gap:             'var(--spacing-16)',
    }}>
      <p style={{
        fontSize:    'var(--font-size-label-1)',
        fontWeight:  'var(--font-weight-semibold)',
        color:       'var(--color-label-assistive)',
        lineHeight:  'var(--line-height-label-1)',
        letterSpacing: 'var(--letter-spacing-label-1)',
      }}>Test — hover / click / focus 해보세요</p>

      <div style={{ display: 'flex', gap: 'var(--spacing-24)', alignItems: 'center' }}>
        {SIZES.map(s => (
          <Avatar
            key={s}
            variant="person"
            size={s}
            interaction
            onClick={() => handleClick(s)}
          />
        ))}
      </div>

      {log && (
        <p style={{
          fontSize:  'var(--font-size-caption-1)',
          color:     'var(--color-label-alternative)',
          lineHeight: 'var(--line-height-caption-1)',
        }}>{log}</p>
      )}
    </div>
  )
}

export default function AvatarPage() {
  return (
    <div>
      <h2 style={{
        fontSize:     'var(--font-size-title-3)',
        lineHeight:   'var(--line-height-title-3)',
        fontWeight:   'var(--font-weight-bold)',
        color:        'var(--color-label-normal)',
        marginBottom: 'var(--spacing-32)',
      }}>Person</h2>

      <TestArea />

      {/* variant */}
      <Section title="Variant" gap="var(--spacing-24)" background="var(--color-fill-alternative)">
        <Case label='variant="person" (기본)' center>
          <Avatar variant="person" size="medium" />
        </Case>
        <Case label='variant="company"' center>
          <Avatar variant="company" size="medium" />
        </Case>
        <Case label='variant="academy"' center>
          <Avatar variant="academy" size="medium" />
        </Case>
      </Section>

      {/* size */}
      <Section title="Size">
        <div style={{
          display:         'flex',
          alignItems:      'center',
          gap:             'var(--spacing-24)',
          backgroundColor: 'var(--color-fill-alternative)',
          borderRadius:    'var(--spacing-12)',
          padding:         'var(--spacing-24)',
          width:           '100%',
          boxSizing:       'border-box',
        }}>
          {SIZES.map(s => (
            <Case key={s} label={`size="${s}"`} center>
              <Avatar variant="person" size={s} />
            </Case>
          ))}
        </div>
      </Section>

      {/* placeholder */}
      <Section title="Placeholder" gap="var(--spacing-24)" background="var(--color-fill-alternative)">
        <Case label="placeholder=false (기본, src 있음)" center>
          <Avatar variant="person" size="medium" src={profileImg} alt="프로필" />
        </Case>
        <Case label="placeholder=true (src 없음)" center>
          <Avatar variant="person" size="medium" />
        </Case>
      </Section>

      {/* interaction */}
      <Section title="Interaction" column background="var(--color-fill-alternative)" gap="var(--spacing-24)">
        {/* interaction=false vs true 비교 */}
        <div style={{ display: 'flex', gap: 'var(--spacing-24)', alignItems: 'flex-start' }}>
          <Case label='interaction=false (기본)' center>
            <Avatar variant="person" size="medium" src={profileImg} alt="프로필" />
          </Case>
          <Case label='interaction=true (hover/focus/press 확인)' center>
            <Avatar variant="person" size="medium" src={profileImg} alt="프로필" interaction />
          </Case>
        </div>

        {/* 크기별 */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-24)' }}>
          {SIZES.map(s => (
            <Case key={s} label={`size="${s}"`} center>
              <Avatar variant="person" size={s} src={profileImg} alt="프로필" interaction />
            </Case>
          ))}
        </div>

        {/* placeholder 상태도 interaction 가능 */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-24)' }}>
          {SIZES.map(s => (
            <Case key={s} label={`size="${s}" · placeholder`} center>
              <Avatar variant="person" size={s} interaction />
            </Case>
          ))}
        </div>
      </Section>

      {/* with badge */}
      <Section title="With Badge (pushBadge)" column background="var(--color-fill-alternative)" gap="var(--spacing-24)">
        {SIZES.map(s => (
          <div key={s} style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-24)' }}>
            <Case label={`size="${s}" · badge=false`} center>
              <Avatar variant="person" size={s} src={profileImg} alt="프로필" interaction />
            </Case>
            <Case label={`size="${s}" · badge=true`} center>
              <Avatar variant="person" size={s} src={profileImg} alt="프로필" interaction badge={<PushBadge />} />
            </Case>
          </div>
        ))}
      </Section>
    </div>
  )
}

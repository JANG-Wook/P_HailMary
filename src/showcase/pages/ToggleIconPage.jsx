import { useState } from 'react'
import ToggleIcon from '../../design-system/components/ToggleIcon/ToggleIcon'
import Icon from '../../design-system/components/Icon/Icon'
import Section, { Case } from '../Section'

/* ── 정적 인터랙션 상태 표시용 ──────────────────────────────── */
function StateBox({ label, opacity, active }) {
  const overlayColor = active ? 'var(--color-primary-normal)' : 'var(--color-label-normal)'
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-6)', alignItems: 'center' }}>
      <div style={{ position: 'relative', display: 'inline-flex', borderRadius: '50%', overflow: 'hidden' }}>
        <ToggleIcon
          icon={<Icon name="heart" size={24} />}
          activeIcon={<Icon name="heartFill" size={24} />}
          active={active}
          aria-label="좋아요"
        />
        <div style={{
          position:        'absolute',
          inset:           0,
          borderRadius:    '50%',
          backgroundColor: `color-mix(in srgb, ${overlayColor} ${Math.round(opacity * 100)}%, transparent)`,
          pointerEvents:   'none',
        }} />
      </div>
      <span style={{
        fontSize:   'var(--font-size-label-2)',
        lineHeight: 'var(--line-height-label-2)',
        color:      'var(--color-label-alternative)',
      }}>{label}</span>
    </div>
  )
}

/* ════════════════════════════════════════════════════════════ */
export default function ToggleIconPage() {
  const [liked,      setLiked]      = useState(false)
  const [bookmarked, setBookmarked] = useState(false)

  return (
    <div>
      <h2 style={{
        fontSize:     'var(--font-size-title-3)',
        lineHeight:   'var(--line-height-title-3)',
        fontWeight:   'var(--font-weight-bold)',
        color:        'var(--color-label-normal)',
        marginBottom: 'var(--spacing-32)',
      }}>Toggle Icon</h2>

      {/* ── 인터랙션 데모 ── */}
      <Section title="Test" gap="var(--spacing-24)">
        <Case label="클릭해서 활성/비활성을 전환해보세요">
          <div style={{ display: 'flex', gap: 'var(--spacing-32)', alignItems: 'center' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'var(--spacing-8)' }}>
              <ToggleIcon
                icon={<Icon name="heart" size={24} />}
                activeIcon={<Icon name="heartFill" size={24} />}
                active={liked}
                aria-label={liked ? '좋아요 취소' : '좋아요'}
                onClick={() => setLiked(v => !v)}
              />
              <span style={{ fontSize: 'var(--font-size-label-2)', color: 'var(--color-label-alternative)' }}>
                {liked ? '활성' : '비활성'}
              </span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'var(--spacing-8)' }}>
              <ToggleIcon
                icon={<Icon name="bookmark" size={24} />}
                activeIcon={<Icon name="bookmarkFill" size={24} />}
                active={bookmarked}
                aria-label={bookmarked ? '북마크 해제' : '북마크'}
                onClick={() => setBookmarked(v => !v)}
              />
              <span style={{ fontSize: 'var(--font-size-label-2)', color: 'var(--color-label-alternative)' }}>
                {bookmarked ? '활성' : '비활성'}
              </span>
            </div>
          </div>
        </Case>
      </Section>

      {/* ── Active ── */}
      <Section title="Active" gap="var(--spacing-24)">
        <Case label="active=false">
          <ToggleIcon
            icon={<Icon name="heart" size={24} />}
            activeIcon={<Icon name="heartFill" size={24} />}
            active={false}
            aria-label="좋아요"
          />
        </Case>
        <Case label="active=true">
          <ToggleIcon
            icon={<Icon name="heart" size={24} />}
            activeIcon={<Icon name="heartFill" size={24} />}
            active
            aria-label="좋아요 취소"
          />
        </Case>
      </Section>

      {/* ── Dual Icon ── */}
      <Section title="Dual Icon" gap="var(--spacing-24)">
        <Case label="icon / activeIcon 별도 지정 — active 상태에 따라 아이콘 전환">
          <div style={{ display: 'flex', gap: 'var(--spacing-24)', alignItems: 'center' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'var(--spacing-6)' }}>
              <ToggleIcon
                icon={<Icon name="bookmark" size={24} />}
                activeIcon={<Icon name="bookmarkFill" size={24} />}
                active={false}
                aria-label="북마크"
              />
              <span style={{ fontSize: 'var(--font-size-label-2)', color: 'var(--color-label-alternative)' }}>active=false</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'var(--spacing-6)' }}>
              <ToggleIcon
                icon={<Icon name="bookmark" size={24} />}
                activeIcon={<Icon name="bookmarkFill" size={24} />}
                active
                aria-label="북마크 해제"
              />
              <span style={{ fontSize: 'var(--font-size-label-2)', color: 'var(--color-label-alternative)' }}>active=true</span>
            </div>
          </div>
        </Case>
      </Section>

      {/* ── Interaction ── */}
      <Section title="Interaction" gap="var(--spacing-24)">
        <Case label="4가지 인터랙션 상태">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-24)' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-8)' }}>
              <span style={{ fontSize: 'var(--font-size-label-2)', color: 'var(--color-label-assistive)' }}>active=false</span>
              <div style={{ display: 'flex', gap: 'var(--spacing-32)', alignItems: 'flex-start' }}>
                <StateBox label="Normal"  opacity={0}    active={false} />
                <StateBox label="Hovered" opacity={0.05} active={false} />
                <StateBox label="Focused" opacity={0.08} active={false} />
                <StateBox label="Pressed" opacity={0.12} active={false} />
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-8)' }}>
              <span style={{ fontSize: 'var(--font-size-label-2)', color: 'var(--color-label-assistive)' }}>active=true</span>
              <div style={{ display: 'flex', gap: 'var(--spacing-32)', alignItems: 'flex-start' }}>
                <StateBox label="Normal"  opacity={0}    active />
                <StateBox label="Hovered" opacity={0.05} active />
                <StateBox label="Focused" opacity={0.08} active />
                <StateBox label="Pressed" opacity={0.12} active />
              </div>
            </div>
          </div>
        </Case>
      </Section>
    </div>
  )
}

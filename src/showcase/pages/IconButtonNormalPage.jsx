import { useState } from 'react'
import IconButtonNormal from '../../design-system/components/IconButton/IconButtonNormal'
import Icon from '../../design-system/components/Icon/Icon'
import Section, { Case } from '../Section'

/* ── 인터랙션 상태 표시용 래퍼 ───────────────────────────────── */
function StateDemo({ label, opacity }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-6)', alignItems: 'center' }}>
      <div style={{ position: 'relative', display: 'inline-flex', borderRadius: '50%', overflow: 'hidden' }}>
        <IconButtonNormal
          icon={<Icon name="bell" size={20} color="var(--color-label-normal)" />}
          aria-label="알림"
        />
        <div style={{
          position:        'absolute',
          inset:           0,
          backgroundColor: `color-mix(in srgb, var(--color-label-normal) ${Math.round(opacity * 100)}%, transparent)`,
          pointerEvents:   'none',
          borderRadius:    '50%',
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

export default function IconButtonNormalPage() {
  const [clicked, setClicked] = useState(0)

  return (
    <div>
      <h2 style={{
        fontSize:     'var(--font-size-title-3)',
        lineHeight:   'var(--line-height-title-3)',
        fontWeight:   'var(--font-weight-bold)',
        color:        'var(--color-label-normal)',
        marginBottom: 'var(--spacing-32)',
      }}>Normal</h2>

      <Section title="Test" gap="var(--spacing-24)">
        <Case label="마우스를 올리거나 클릭해보세요">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-16)', width: 'fit-content' }}>
            <div style={{ display: 'flex', gap: 'var(--spacing-32)', alignItems: 'center' }}>
              <IconButtonNormal
                icon={<Icon name="bell" size={20} color="var(--color-label-normal)" />}
                aria-label="알림"
                onClick={() => setClicked(c => c + 1)}
              />
              <IconButtonNormal
                icon={<Icon name="search" size={20} color="var(--color-label-normal)" />}
                aria-label="검색"
                onClick={() => setClicked(c => c + 1)}
              />
              <IconButtonNormal
                icon={<Icon name="bookmark" size={20} color="var(--color-label-normal)" />}
                aria-label="북마크"
                onClick={() => setClicked(c => c + 1)}
              />
            </div>
            <div style={{ fontSize: 'var(--font-size-body-2)', color: 'var(--color-label-alternative)' }}>
              클릭 횟수: <strong style={{ color: 'var(--color-label-normal)' }}>{clicked}회</strong>
            </div>
            <div style={{ fontSize: 'var(--font-size-label-2)', color: 'var(--color-label-assistive)' }}>
              마우스를 올리거나 클릭해보세요
            </div>
          </div>
        </Case>
      </Section>

      <Section title="Disabled" gap="var(--spacing-24)">
        <Case label="disabled=false">
          <IconButtonNormal
            icon={<Icon name="bell" size={20} color="var(--color-label-normal)" />}
            aria-label="알림"
            onClick={() => {}}
          />
        </Case>
        <Case label="disabled=true">
          <IconButtonNormal
            icon={<Icon name="bell" size={20} color="var(--color-label-normal)" />}
            disabled
            aria-label="알림 (비활성)"
          />
        </Case>
      </Section>

      <Section title="Badge" gap="var(--spacing-24)">
        <Case label="badge=false">
          <IconButtonNormal
            icon={<Icon name="bell" size={20} color="var(--color-label-normal)" />}
            aria-label="알림"
            onClick={() => {}}
          />
        </Case>
        <Case label="badge=true">
          <IconButtonNormal
            icon={<Icon name="bell" size={20} color="var(--color-label-normal)" />}
            badge
            aria-label="알림 (새 메시지 있음)"
            onClick={() => {}}
          />
        </Case>
      </Section>

      <Section title="Interaction" gap="var(--spacing-24)">
        <Case label="4가지 인터랙션 상태">
          <div style={{ display: 'flex', gap: 'var(--spacing-32)', alignItems: 'flex-start' }}>
            <StateDemo label="Normal"  opacity={0}    />
            <StateDemo label="Hovered" opacity={0.05} />
            <StateDemo label="Focused" opacity={0.08} />
            <StateDemo label="Pressed" opacity={0.12} />
          </div>
        </Case>
      </Section>
    </div>
  )
}

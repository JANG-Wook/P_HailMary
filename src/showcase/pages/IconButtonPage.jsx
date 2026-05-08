import { useState } from 'react'
import IconButtonOutlined from '../../design-system/components/IconButton/IconButtonOutlined'
import IconButtonSolid    from '../../design-system/components/IconButton/IconButtonSolid'
import Icon from '../../design-system/components/Icon/Icon'
import Tab  from '../../design-system/components/Tab/Tab'
import Section, { Case } from '../Section'

/* ── 정적 인터랙션 상태 래퍼 ─────────────────────────────────── */
function StateBox({ label, opacity, children }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-6)', alignItems: 'center' }}>
      <div style={{ position: 'relative', display: 'inline-flex', borderRadius: '50%', overflow: 'hidden' }}>
        {children}
        <div style={{
          position:        'absolute',
          inset:           0,
          borderRadius:    '50%',
          backgroundColor: `color-mix(in srgb, var(--color-label-normal) ${Math.round(opacity * 100)}%, transparent)`,
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

/* ── Outlined 탭 콘텐츠 ─────────────────────────────────────── */
function OutlinedContent() {
  const [clicked, setClicked] = useState(0)
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-32)' }}>

      <Section title="Test" gap="var(--spacing-24)">
        <Case label="마우스를 올리거나 클릭해보세요">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-16)', width: 'fit-content' }}>
            <div style={{ display: 'flex', gap: 'var(--spacing-24)', alignItems: 'center' }}>
              <IconButtonOutlined
                icon={<Icon name="search"   size={20} color="var(--color-label-normal)" />}
                size="medium" aria-label="검색"
                onClick={() => setClicked(c => c + 1)}
              />
              <IconButtonOutlined
                icon={<Icon name="bell"     size={16} color="var(--color-label-normal)" />}
                size="small"  aria-label="알림"
                onClick={() => setClicked(c => c + 1)}
              />
              <IconButtonOutlined
                icon={<Icon name="bookmark" size={20} color="var(--color-label-normal)" />}
                aria-label="북마크"
                onClick={() => setClicked(c => c + 1)}
              />
            </div>
            <div style={{ fontSize: 'var(--font-size-body-2)', color: 'var(--color-label-alternative)' }}>
              클릭 횟수: <strong style={{ color: 'var(--color-label-normal)' }}>{clicked}회</strong>
            </div>
          </div>
        </Case>
      </Section>

      <Section title="Size" gap="var(--spacing-24)">
        <Case label='size="medium" (40px, 기본)'>
          <IconButtonOutlined icon={<Icon name="search" size={20} color="var(--color-label-normal)" />} size="medium" aria-label="검색" />
        </Case>
        <Case label='size="small" (32px)'>
          <IconButtonOutlined icon={<Icon name="search" size={16} color="var(--color-label-normal)" />} size="small" aria-label="검색" />
        </Case>
        <Case label='size="custom" customSize={28}'>
          <IconButtonOutlined icon={<Icon name="search" size={14} color="var(--color-label-normal)" />} size="custom" customSize={28} aria-label="검색" />
        </Case>
      </Section>

      <Section title="Disabled" gap="var(--spacing-24)">
        <Case label="disabled=false">
          <IconButtonOutlined icon={<Icon name="search" size={20} color="var(--color-label-normal)" />} aria-label="검색" />
        </Case>
        <Case label="disabled=true">
          <IconButtonOutlined icon={<Icon name="search" size={20} color="var(--color-label-normal)" />} disabled aria-label="검색 (비활성)" />
        </Case>
      </Section>

      <Section title="Interaction" gap="var(--spacing-24)">
        <Case label="4가지 인터랙션 상태">
          <div style={{ display: 'flex', gap: 'var(--spacing-32)', alignItems: 'flex-start' }}>
            <StateBox label="Normal"  opacity={0}>
              <IconButtonOutlined icon={<Icon name="search" size={20} color="var(--color-label-normal)" />} aria-label="검색" />
            </StateBox>
            <StateBox label="Hovered" opacity={0.05}>
              <IconButtonOutlined icon={<Icon name="search" size={20} color="var(--color-label-normal)" />} aria-label="검색" />
            </StateBox>
            <StateBox label="Focused" opacity={0.08}>
              <IconButtonOutlined icon={<Icon name="search" size={20} color="var(--color-label-normal)" />} aria-label="검색" />
            </StateBox>
            <StateBox label="Pressed" opacity={0.12}>
              <IconButtonOutlined icon={<Icon name="search" size={20} color="var(--color-label-normal)" />} aria-label="검색" />
            </StateBox>
          </div>
        </Case>
      </Section>

      <Section title="Customize" gap="var(--spacing-24)">
        <Case label="color: label-normal (기본)">
          <IconButtonOutlined icon={<Icon name="bell" size={20} color="var(--color-label-normal)" />} aria-label="알림" />
        </Case>
        <Case label="color: primary-normal">
          <IconButtonOutlined icon={<Icon name="bell" size={20} color="var(--color-primary-normal)" />} color="var(--color-primary-normal)" aria-label="알림" />
        </Case>
        <Case label="color: status-negative">
          <IconButtonOutlined icon={<Icon name="bell" size={20} color="var(--color-status-negative)" />} color="var(--color-status-negative)" aria-label="알림" />
        </Case>
      </Section>
    </div>
  )
}

/* ── Solid 탭 콘텐츠 ─────────────────────────────────────────── */
function SolidContent() {
  const [clicked, setClicked] = useState(0)
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-32)' }}>

      <Section title="Test" gap="var(--spacing-24)">
        <Case label="마우스를 올리거나 클릭해보세요">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-16)', width: 'fit-content' }}>
            <div style={{ display: 'flex', gap: 'var(--spacing-24)', alignItems: 'center' }}>
              <IconButtonSolid
                icon={<Icon name="search" size={20} color="var(--color-static-white)" />}
                size="medium" aria-label="검색"
                onClick={() => setClicked(c => c + 1)}
              />
              <IconButtonSolid
                icon={<Icon name="bell"   size={16} color="var(--color-static-white)" />}
                size="small"  aria-label="알림"
                onClick={() => setClicked(c => c + 1)}
              />
              <IconButtonSolid
                icon={<Icon name="heart"  size={20} color="var(--color-static-white)" />}
                backgroundColor="var(--color-status-negative)" aria-label="좋아요"
                onClick={() => setClicked(c => c + 1)}
              />
            </div>
            <div style={{ fontSize: 'var(--font-size-body-2)', color: 'var(--color-label-alternative)' }}>
              클릭 횟수: <strong style={{ color: 'var(--color-label-normal)' }}>{clicked}회</strong>
            </div>
          </div>
        </Case>
      </Section>

      <Section title="Size" gap="var(--spacing-24)">
        <Case label='size="medium" (40px, 기본)'>
          <IconButtonSolid icon={<Icon name="search" size={20} color="var(--color-static-white)" />} size="medium" aria-label="검색" />
        </Case>
        <Case label='size="small" (32px)'>
          <IconButtonSolid icon={<Icon name="search" size={16} color="var(--color-static-white)" />} size="small" aria-label="검색" />
        </Case>
        <Case label='size="custom" customSize={28}'>
          <IconButtonSolid icon={<Icon name="search" size={14} color="var(--color-static-white)" />} size="custom" customSize={28} aria-label="검색" />
        </Case>
      </Section>

      <Section title="Disabled" gap="var(--spacing-24)">
        <Case label="disabled=false">
          <IconButtonSolid icon={<Icon name="search" size={20} color="var(--color-static-white)" />} aria-label="검색" />
        </Case>
        <Case label="disabled=true">
          <IconButtonSolid icon={<Icon name="search" size={20} color="var(--color-static-white)" />} disabled aria-label="검색 (비활성)" />
        </Case>
      </Section>

      <Section title="Interaction" gap="var(--spacing-24)">
        <Case label="4가지 인터랙션 상태">
          <div style={{ display: 'flex', gap: 'var(--spacing-32)', alignItems: 'flex-start' }}>
            <StateBox label="Normal"  opacity={0}>
              <IconButtonSolid icon={<Icon name="search" size={20} color="var(--color-static-white)" />} aria-label="검색" />
            </StateBox>
            <StateBox label="Hovered" opacity={0.05}>
              <IconButtonSolid icon={<Icon name="search" size={20} color="var(--color-static-white)" />} aria-label="검색" />
            </StateBox>
            <StateBox label="Focused" opacity={0.08}>
              <IconButtonSolid icon={<Icon name="search" size={20} color="var(--color-static-white)" />} aria-label="검색" />
            </StateBox>
            <StateBox label="Pressed" opacity={0.12}>
              <IconButtonSolid icon={<Icon name="search" size={20} color="var(--color-static-white)" />} aria-label="검색" />
            </StateBox>
          </div>
        </Case>
      </Section>

      <Section title="Customize" gap="var(--spacing-24)">
        <Case label="backgroundColor: primary-normal (기본)">
          <IconButtonSolid icon={<Icon name="search" size={20} color="var(--color-static-white)" />} aria-label="검색" />
        </Case>
        <Case label="backgroundColor: status-negative">
          <IconButtonSolid icon={<Icon name="heart" size={20} color="var(--color-static-white)" />} backgroundColor="var(--color-status-negative)" aria-label="좋아요" />
        </Case>
        <Case label="backgroundColor: label-strong">
          <IconButtonSolid icon={<Icon name="bookmark" size={20} color="var(--color-static-white)" />} backgroundColor="var(--color-label-strong)" aria-label="북마크" />
        </Case>
      </Section>
    </div>
  )
}

/* ════════════════════════════════════════════════════════════ */
const TAB_ITEMS = [{ label: 'Outlined' }, { label: 'Solid' }]

export default function IconButtonPage() {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <div>
      <h2 style={{
        fontSize:     'var(--font-size-title-3)',
        lineHeight:   'var(--line-height-title-3)',
        fontWeight:   'var(--font-weight-bold)',
        color:        'var(--color-label-normal)',
        marginBottom: 'var(--spacing-24)',
      }}>Icon Button</h2>

      <div style={{ marginBottom: 'var(--spacing-40)' }}>
        <Tab items={TAB_ITEMS} value={activeTab} onChange={setActiveTab} />
      </div>

      {activeTab === 0 ? <OutlinedContent /> : <SolidContent />}
    </div>
  )
}

import { useState } from 'react'
import Chip from '../../design-system/components/Chip/Chip'
import Icon from '../../design-system/components/Icon/Icon'
import Section, { Case } from '../Section'

/* ── 정적 인터랙션 상태 표시용 ──────────────────────────────── */
function ChipStateBox({ label, opacity, variant, active }) {
  const overlayColor = (variant === 'outlined' && active)
    ? 'var(--color-primary-normal)'
    : 'var(--color-label-normal)'
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-6)', alignItems: 'center' }}>
      <div style={{
        position:     'relative',
        display:      'inline-flex',
        borderRadius: 'var(--spacing-10)',
        overflow:     'hidden',
      }}>
        <Chip label="칩" variant={variant} active={active} />
        <div style={{
          position:        'absolute',
          inset:           0,
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

function InteractionRow({ rowLabel, variant, active }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-8)' }}>
      <span style={{
        fontSize:   'var(--font-size-label-2)',
        lineHeight: 'var(--line-height-label-2)',
        color:      'var(--color-label-assistive)',
      }}>{rowLabel}</span>
      <div style={{ display: 'flex', gap: 'var(--spacing-16)', alignItems: 'flex-start' }}>
        <ChipStateBox label="Normal"  opacity={0}    variant={variant} active={active} />
        <ChipStateBox label="Hovered" opacity={0.05} variant={variant} active={active} />
        <ChipStateBox label="Focused" opacity={0.08} variant={variant} active={active} />
        <ChipStateBox label="Pressed" opacity={0.12} variant={variant} active={active} />
      </div>
    </div>
  )
}

/* ════════════════════════════════════════════════════════════ */
export default function ChipPage() {
  const [activeChip, setActiveChip] = useState(0)
  const demoLabels = ['전체', '인기', '최신', '추천']

  return (
    <div>
      <h2 style={{
        fontSize:     'var(--font-size-title-3)',
        lineHeight:   'var(--line-height-title-3)',
        fontWeight:   'var(--font-weight-bold)',
        color:        'var(--color-label-normal)',
        marginBottom: 'var(--spacing-32)',
      }}>Chip</h2>

      {/* ── 인터랙션 데모 ── */}
      <Section title="Test" gap="var(--spacing-24)">
        <Case label="칩을 클릭해서 활성/비활성을 전환해보세요">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-16)' }}>
            <div style={{ display: 'flex', gap: 'var(--spacing-8)', flexWrap: 'wrap' }}>
              {demoLabels.map((label, i) => (
                <Chip
                  key={label}
                  label={label}
                  active={activeChip === i}
                  onClick={() => setActiveChip(i)}
                />
              ))}
            </div>
            <div style={{ fontSize: 'var(--font-size-body-2)', color: 'var(--color-label-alternative)' }}>
              선택된 칩: <strong style={{ color: 'var(--color-label-normal)' }}>{demoLabels[activeChip]}</strong>
            </div>
          </div>
        </Case>
      </Section>

      {/* ── Size ── */}
      <Section title="Size" gap="var(--spacing-24)">
        <Case label="xsmall (24px) / small (32px) / medium (36px) / large (40px)">
          <div style={{ display: 'flex', gap: 'var(--spacing-12)', alignItems: 'flex-end' }}>
            <Chip size="xsmall" label="XSmall" />
            <Chip size="small"  label="Small"  />
            <Chip size="medium" label="Medium" />
            <Chip size="large"  label="Large"  />
          </div>
        </Case>
      </Section>

      {/* ── Variant ── */}
      <Section title="Variant" gap="var(--spacing-24)">
        <Case label='variant="outlined" (기본)'>
          <div style={{ display: 'flex', gap: 'var(--spacing-8)' }}>
            <Chip label="비활성" variant="outlined" active={false} />
            <Chip label="활성"   variant="outlined" active />
          </div>
        </Case>
        <Case label='variant="solid"'>
          <div style={{ display: 'flex', gap: 'var(--spacing-8)' }}>
            <Chip label="비활성" variant="solid" active={false} />
            <Chip label="활성"   variant="solid" active />
          </div>
        </Case>
      </Section>

      {/* ── Active ── */}
      <Section title="Active" gap="var(--spacing-24)">
        <Case label="outlined">
          <div style={{ display: 'flex', gap: 'var(--spacing-8)' }}>
            <Chip label="active=false" variant="outlined" active={false} />
            <Chip label="active=true"  variant="outlined" active />
          </div>
        </Case>
        <Case label="solid">
          <div style={{ display: 'flex', gap: 'var(--spacing-8)' }}>
            <Chip label="active=false" variant="solid" active={false} />
            <Chip label="active=true"  variant="solid" active />
          </div>
        </Case>
      </Section>

      {/* ── Content ── */}
      <Section title="Content" gap="var(--spacing-24)">
        {['outlined', 'solid'].map(variant => (
          <Case key={variant} label={`variant="${variant}" — none / leadingContent / trailingContent / both`}>
            <div style={{ display: 'flex', gap: 'var(--spacing-8)', flexWrap: 'wrap' }}>
              <Chip
                label="텍스트"
                variant={variant}
              />
              <Chip
                label="텍스트"
                variant={variant}
                leadingContent={<Icon name="bookmark" size={14} color="var(--color-label-alternative)" />}
              />
              <Chip
                label="텍스트"
                variant={variant}
                trailingContent={<Icon name="close" size={14} color="var(--color-label-alternative)" />}
              />
              <Chip
                label="텍스트"
                variant={variant}
                leadingContent={<Icon name="bookmark" size={14} color="var(--color-label-alternative)" />}
                trailingContent={<Icon name="close"    size={14} color="var(--color-label-alternative)" />}
              />
            </div>
          </Case>
        ))}
      </Section>

      {/* ── Disabled ── */}
      <Section title="Disabled" gap="var(--spacing-24)">
        <Case label='outlined / disabled=false'>
          <div style={{ display: 'flex', gap: 'var(--spacing-8)' }}>
            <Chip label="비활성" variant="outlined" active={false} />
            <Chip label="활성"   variant="outlined" active />
          </div>
        </Case>
        <Case label='outlined / disabled=true'>
          <div style={{ display: 'flex', gap: 'var(--spacing-8)' }}>
            <Chip label="비활성" variant="outlined" active={false} disabled />
            <Chip label="활성"   variant="outlined" active          disabled />
          </div>
        </Case>
        <Case label='solid / disabled=false'>
          <div style={{ display: 'flex', gap: 'var(--spacing-8)' }}>
            <Chip label="비활성" variant="solid" active={false} />
            <Chip label="활성"   variant="solid" active />
          </div>
        </Case>
        <Case label='solid / disabled=true'>
          <div style={{ display: 'flex', gap: 'var(--spacing-8)' }}>
            <Chip label="비활성" variant="solid" active={false} disabled />
            <Chip label="활성"   variant="solid" active          disabled />
          </div>
        </Case>
      </Section>

      {/* ── Interaction ── */}
      <Section title="Interaction" gap="var(--spacing-24)">
        <Case label="4가지 인터랙션 상태">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-24)' }}>
            <InteractionRow rowLabel="outlined / active=false" variant="outlined" active={false} />
            <InteractionRow rowLabel="outlined / active=true"  variant="outlined" active={true}  />
            <InteractionRow rowLabel="solid / active=false"    variant="solid"    active={false} />
            <InteractionRow rowLabel="solid / active=true"     variant="solid"    active={true}  />
          </div>
        </Case>
      </Section>
    </div>
  )
}

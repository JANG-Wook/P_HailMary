import { useState } from 'react'
import Section    from '../Section'
import TextButton from '../../design-system/components/TextButton/TextButton'

/* ── 섹션 카드 배경 ─────────────────────────────────────────────── */
const CARD = {
  backgroundColor: 'var(--color-fill-normal)',
  borderRadius:    'var(--spacing-12)',
  padding:         'var(--spacing-32)',
  boxSizing:       'border-box',
}

/* ── 레이블 헬퍼 ────────────────────────────────────────────────── */
function SubLabel({ children }) {
  return (
    <span style={{
      fontSize:   'var(--font-size-label-2)',
      lineHeight: 'var(--line-height-label-2)',
      fontWeight: 'var(--font-weight-medium)',
      color:      'var(--color-label-alternative)',
    }}>
      {children}
    </span>
  )
}

/* ── 그룹 래퍼 ──────────────────────────────────────────────────── */
function Group({ label, children, row = true }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-8)' }}>
      {label && <SubLabel>{label}</SubLabel>}
      <div style={{
        display:       'flex',
        flexDirection: row ? 'row' : 'column',
        flexWrap:      'wrap',
        alignItems:    row ? 'center' : 'flex-start',
        gap:           'var(--spacing-12)',
      }}>
        {children}
      </div>
    </div>
  )
}

/* ── 다운로드 아이콘 ────────────────────────────────────────────── */
function DownloadIcon() {
  return (
    <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none">
      <path d="M11.9994 2.59961C12.4964 2.59961 12.8994 3.00255 12.8994 3.49961V12.8273L15.863 9.8637C16.2144 9.51223 16.7843 9.51223 17.1357 9.8637C17.4872 10.2152 17.4872 10.785 17.1357 11.1365L12.6358 15.6365C12.2843 15.988 11.7144 15.988 11.363 15.6365L6.86298 11.1365C6.51151 10.785 6.51151 10.2152 6.86298 9.8637C7.21445 9.51223 7.7843 9.51223 8.13577 9.8637L11.0994 12.8273V3.49961C11.0994 3.00255 11.5023 2.59961 11.9994 2.59961Z" fill="currentColor"/>
      <path d="M21.1496 14.8997C21.1496 14.4026 20.7466 13.9997 20.2496 13.9997C19.7525 13.9997 19.3496 14.4026 19.3496 14.8997V17.4498C19.3496 18.2644 19.3385 18.4582 19.2957 18.5897C19.1869 18.9246 18.9244 19.1872 18.5895 19.296C18.458 19.3387 18.2642 19.3498 17.4496 19.3498H6.54962C5.73506 19.3498 5.54123 19.3387 5.40971 19.296C5.07483 19.1872 4.81228 18.9246 4.70347 18.5897C4.66073 18.4582 4.64963 18.2644 4.64963 17.4498V14.8997C4.64963 14.4027 4.24668 13.9997 3.74962 13.9997C3.25256 13.9997 2.84961 14.4027 2.84961 14.8997V17.0852C2.8496 17.615 2.84959 18.0663 2.87985 18.4367C2.91165 18.8259 2.98128 19.2044 3.16569 19.5664C3.44373 20.112 3.88737 20.5557 4.43304 20.8337C4.79497 21.0181 5.17356 21.0878 5.56272 21.1196C5.93313 21.1498 6.38429 21.1498 6.91412 21.1498H17.085C17.6148 21.1498 18.066 21.1498 18.4365 21.1196C18.8256 21.0878 19.2042 21.0181 19.5661 20.8337C20.1118 20.5557 20.5554 20.112 20.8335 19.5664C21.0179 19.2044 21.0875 18.8259 21.1193 18.4367C21.1496 18.0663 21.1496 17.6151 21.1496 17.0853V14.8997Z" fill="currentColor"/>
    </svg>
  )
}

/* ── 인터랙션 데모 래퍼 ─────────────────────────────────────────── */
function InteractionDemo({ label, opacity, overlayColor, children }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-6)', alignItems: 'flex-start' }}>
      <SubLabel>{label}</SubLabel>
      <div style={{ position: 'relative', display: 'inline-flex', padding: '0 var(--spacing-8)' }}>
        {children}
        <div style={{
          position:        'absolute',
          inset:           0,
          backgroundColor: `color-mix(in srgb, ${overlayColor} ${Math.round(opacity * 100)}%, transparent)`,
          borderRadius:    'var(--spacing-6)',
          pointerEvents:   'none',
        }} />
      </div>
    </div>
  )
}

/* ── 인터랙션 행 ─────────────────────────────────────────────────── */
function InteractionRow({ label, color, overlayColor, opacities }) {
  const states = [
    { label: 'Normal',  opacity: opacities[0] },
    { label: 'Hovered', opacity: opacities[1] },
    { label: 'Focused', opacity: opacities[2] },
    { label: 'Pressed', opacity: opacities[3] },
  ]
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-8)' }}>
      <SubLabel>{label}</SubLabel>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--spacing-24)', alignItems: 'center' }}>
        {states.map(s => (
          <InteractionDemo key={s.label} label={s.label} opacity={s.opacity} overlayColor={overlayColor}>
            <TextButton color={color} label="텍스트" />
          </InteractionDemo>
        ))}
      </div>
    </div>
  )
}

/* ═══════════════════════════════════════════════════════════════════ */
export default function TextButtonPage() {
  const [clicked, setClicked] = useState(0)
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-48)' }}>

      <h2 style={{
        fontSize:     'var(--font-size-title-3)',
        lineHeight:   'var(--line-height-title-3)',
        fontWeight:   'var(--font-weight-bold)',
        color:        'var(--color-label-normal)',
        marginBottom: 'var(--spacing-8)',
      }}>Text Button</h2>

      {/* ── 인터랙션 데모 ── */}
      <Section title="Test">
        <div style={{ ...CARD, display: 'flex', flexDirection: 'column', gap: 'var(--spacing-16)' }}>
          <SubLabel>마우스를 올리거나 클릭해보세요</SubLabel>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--spacing-24)', alignItems: 'center' }}>
            <TextButton color="primary"   label="Primary 텍스트버튼"   onClick={() => setClicked(c => c + 1)} />
            <TextButton color="assistive" label="Assistive 텍스트버튼" onClick={() => setClicked(c => c + 1)} />
          </div>
          <div style={{ fontSize: 'var(--font-size-body-2)', color: 'var(--color-label-alternative)' }}>
            총 클릭: <strong style={{ color: 'var(--color-label-normal)' }}>{clicked}회</strong>
          </div>
        </div>
      </Section>

      {/* ── 1. Color ── */}
      <Section title="Color">
        <div style={{ ...CARD, display: 'flex', flexWrap: 'wrap', gap: 'var(--spacing-24)' }}>
          <Group label="primary">
            <TextButton color="primary" label="텍스트" />
          </Group>
          <Group label="assistive">
            <TextButton color="assistive" label="텍스트" />
          </Group>
        </div>
      </Section>

      {/* ── 2. Size ── */}
      <Section title="Size">
        <div style={{ ...CARD, display: 'flex', flexWrap: 'wrap', gap: 'var(--spacing-24)', alignItems: 'flex-end' }}>
          <Group label="medium">
            <TextButton size="medium" label="텍스트" />
          </Group>
          <Group label="small">
            <TextButton size="small" label="텍스트" />
          </Group>
        </div>
      </Section>

      {/* ── 3. Icon ── */}
      <Section title="Icon">
        <div style={{ ...CARD, display: 'flex', flexWrap: 'wrap', gap: 'var(--spacing-24)' }}>
          <Group label="none">
            <TextButton label="텍스트" />
          </Group>
          <Group label="leadingIcon">
            <TextButton label="텍스트" leadingIcon={<DownloadIcon />} />
          </Group>
          <Group label="trailingIcon">
            <TextButton label="텍스트" trailingIcon={<DownloadIcon />} />
          </Group>
          <Group label="leadingIcon + trailingIcon">
            <TextButton label="텍스트" leadingIcon={<DownloadIcon />} trailingIcon={<DownloadIcon />} />
          </Group>
        </div>
      </Section>

      {/* ── 4. Disabled ── */}
      <Section title="Disabled">
        <div style={{ ...CARD, display: 'flex', flexDirection: 'column', gap: 'var(--spacing-24)' }}>
          <Group label="primary" row>
            <Group label="false">
              <TextButton color="primary" label="텍스트" />
            </Group>
            <Group label="true (disabled)">
              <TextButton color="primary" label="텍스트" disabled />
            </Group>
          </Group>
          <Group label="assistive" row>
            <Group label="false">
              <TextButton color="assistive" label="텍스트" />
            </Group>
            <Group label="true (disabled)">
              <TextButton color="assistive" label="텍스트" disabled />
            </Group>
          </Group>
        </div>
      </Section>

      {/* ── 5. Loading ── */}
      <Section title="Loading">
        <div style={{ ...CARD, display: 'flex', flexDirection: 'column', gap: 'var(--spacing-24)' }}>
          <Group label="primary" row>
            <Group label="false">
              <TextButton color="primary" label="텍스트" />
            </Group>
            <Group label="true (loading)">
              <TextButton color="primary" label="텍스트" loading />
            </Group>
          </Group>
          <Group label="assistive" row>
            <Group label="false">
              <TextButton color="assistive" label="텍스트" />
            </Group>
            <Group label="true (loading)">
              <TextButton color="assistive" label="텍스트" loading />
            </Group>
          </Group>
        </div>
      </Section>

      {/* ── 6. Interaction ── */}
      <Section title="Interaction">
        <div style={{ ...CARD, display: 'flex', flexDirection: 'column', gap: 'var(--spacing-32)' }}>
          <InteractionRow
            label="primary"
            color="primary"
            overlayColor="var(--color-primary-normal)"
            opacities={[0, 0.05, 0.08, 0.12]}
          />
          <InteractionRow
            label="assistive"
            color="assistive"
            overlayColor="var(--color-label-normal)"
            opacities={[0, 0.04, 0.06, 0.09]}
          />
        </div>
      </Section>

    </div>
  )
}

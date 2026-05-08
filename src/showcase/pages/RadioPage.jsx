import { useState } from 'react'
import Radio from '../../design-system/components/Radio/Radio'
import Section, { Case } from '../Section'

const OPTIONS = [
  { id: 1, label: '알림 이메일 수신에 동의합니다' },
  { id: 2, label: '마케팅 정보 수신에 동의합니다' },
  { id: 3, label: '개인정보 제3자 제공에 동의합니다' },
]

function RadioTest() {
  const [selected, setSelected] = useState(2)

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-4)' }}>
      {OPTIONS.map(opt => (
        <Radio
          key={opt.id}
          checked={selected === opt.id}
          label={opt.label}
          onChange={() => setSelected(opt.id)}
        />
      ))}
    </div>
  )
}

export default function RadioPage() {
  return (
    <div>
      <h2 style={{
        fontSize:     'var(--font-size-title-3)',
        lineHeight:   'var(--line-height-title-3)',
        fontWeight:   'var(--font-weight-bold)',
        color:        'var(--color-label-normal)',
        marginBottom: 'var(--spacing-32)',
      }}>Radio</h2>

      <Section title="Test" column gap="var(--spacing-16)">
        <RadioTest />
      </Section>

      <Section title="Size" gap="var(--spacing-24)">
        <Case label='size="small"'>
          <Radio checked size="small" label={"텍스트\n텍스트"} />
        </Case>
        <Case label='size="medium" (default)'>
          <Radio checked size="medium" label={"텍스트\n텍스트"} />
        </Case>
      </Section>

      <Section title="State" gap="var(--spacing-24)">
        <Case label='checked=false'>
          <Radio checked={false} label={"텍스트\n텍스트"} />
        </Case>
        <Case label='checked=true'>
          <Radio checked label={"텍스트\n텍스트"} />
        </Case>
      </Section>

      <Section title="Tight" gap="var(--spacing-24)">
        <Case label='tight=false (default)'>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-24)' }}>
            <Radio checked={false} size="medium" tight={false} label={"텍스트\n텍스트"} />
            <Radio checked       size="medium" tight={false} label={"텍스트\n텍스트"} />
            <Radio checked={false} size="small"  tight={false} label={"텍스트\n텍스트"} />
            <Radio checked       size="small"  tight={false} label={"텍스트\n텍스트"} />
          </div>
        </Case>
        <Case label='tight=true'>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-24)' }}>
            <Radio checked={false} size="medium" tight label={"텍스트\n텍스트"} />
            <Radio checked       size="medium" tight label={"텍스트\n텍스트"} />
            <Radio checked={false} size="small"  tight label={"텍스트\n텍스트"} />
            <Radio checked       size="small"  tight label={"텍스트\n텍스트"} />
          </div>
        </Case>
      </Section>

      <Section title="Label" gap="var(--spacing-24)">
        <Case label='label="텍스트" (default)'>
          <Radio checked label="텍스트" />
        </Case>
        <Case label='label={undefined}'>
          <Radio checked />
        </Case>
      </Section>

      <Section title="Disabled" gap="var(--spacing-24)">
        <Case label='disabled=false (default)'>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-24)' }}>
            <Radio checked={false} label="텍스트" />
            <Radio checked       label="텍스트" />
          </div>
        </Case>
        <Case label='disabled=true'>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-24)' }}>
            <Radio checked={false} disabled label="텍스트" />
            <Radio checked       disabled label="텍스트" />
          </div>
        </Case>
      </Section>

      {/* ── Resource / Control ─────────────────────────────────── */}
      <h2 style={{
        fontSize:     'var(--font-size-title-3)',
        lineHeight:   'var(--line-height-title-3)',
        fontWeight:   'var(--font-weight-bold)',
        color:        'var(--color-label-normal)',
        marginTop:    'var(--spacing-56)',
        marginBottom: 'var(--spacing-32)',
      }}>Resource / Control</h2>

      <Section title="Size" gap="var(--spacing-24)">
        <Case label='size="small"'>
          <Radio checked size="small" />
        </Case>
        <Case label='size="medium" (default)'>
          <Radio checked size="medium" />
        </Case>
      </Section>

      <Section title="State" gap="var(--spacing-24)">
        <Case label='checked=false'>
          <Radio checked={false} />
        </Case>
        <Case label='checked=true'>
          <Radio checked />
        </Case>
      </Section>

      <Section title="Tight" column gap="var(--spacing-24)">
        <div style={{ display: 'flex', gap: 'var(--spacing-24)', alignItems: 'center' }}>
          <Radio checked size="medium" tight={false} />
          <Radio checked size="medium" tight />
        </div>
        <div style={{ display: 'flex', gap: 'var(--spacing-24)', alignItems: 'center' }}>
          <Radio checked size="medium" tight={false} forceInteraction="pressed" />
          <Radio checked size="medium" tight       forceInteraction="pressed" />
        </div>
        <div style={{ display: 'flex', gap: 'var(--spacing-24)', alignItems: 'center' }}>
          <Radio checked size="small" tight={false} />
          <Radio checked size="small" tight />
        </div>
        <div style={{ display: 'flex', gap: 'var(--spacing-24)', alignItems: 'center' }}>
          <Radio checked size="small" tight={false} forceInteraction="pressed" />
          <Radio checked size="small" tight       forceInteraction="pressed" />
        </div>
      </Section>

      <Section title="Disabled" gap="var(--spacing-24)">
        <Case label='disabled=false (default)'>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-24)' }}>
            <Radio checked={false} />
            <Radio checked />
          </div>
        </Case>
        <Case label='disabled=true'>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-24)' }}>
            <Radio checked={false} disabled />
            <Radio checked       disabled />
          </div>
        </Case>
      </Section>

      <Section title="Interaction" gap="var(--spacing-24)">
        <Case label='interaction="normal"'>
          <Radio checked forceInteraction="normal" />
        </Case>
        <Case label='interaction="hovered"'>
          <Radio checked forceInteraction="hovered" />
        </Case>
        <Case label='interaction="focused"'>
          <Radio checked forceInteraction="focused" />
        </Case>
        <Case label='interaction="pressed"'>
          <Radio checked forceInteraction="pressed" />
        </Case>
      </Section>
    </div>
  )
}

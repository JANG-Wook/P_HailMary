import { useState } from 'react'
import CheckMark from '../../design-system/components/Checkbox/CheckMark'
import Checkbox from '../../design-system/components/Checkbox/Checkbox'
import Section, { Case } from '../Section'

const CM_ITEMS = [
  { id: 1, label: '알림 이메일 수신에 동의합니다' },
  { id: 2, label: '마케팅 정보 수신에 동의합니다' },
  { id: 3, label: '개인정보 제3자 제공에 동의합니다' },
]

function CheckMarkTest() {
  const [checked, setChecked] = useState({ 1: false, 2: true, 3: false })

  const values      = Object.values(checked)
  const allChecked  = values.every(Boolean)
  const someChecked = values.some(Boolean)
  const headerState = allChecked ? 'checked' : someChecked ? 'indeterminate' : 'unchecked'

  const toggleAll  = () => setChecked(Object.fromEntries(CM_ITEMS.map(i => [i.id, !allChecked])))
  const toggle     = (id) => setChecked(prev => ({ ...prev, [id]: !prev[id] }))

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-4)' }}>
      <Checkbox
        state={headerState}
        label="전체 동의"
        bold
        onChange={toggleAll}
      />
      <div style={{ height: '1px', backgroundColor: 'var(--color-line-normal)', margin: `var(--spacing-4) 0` }} />
      {CM_ITEMS.map(item => (
        <CheckMark
          key={item.id}
          checked={checked[item.id]}
          label={item.label}
          onChange={() => toggle(item.id)}
        />
      ))}
    </div>
  )
}

export default function CheckMarkPage() {
  return (
    <div>
      <h2 style={{
        fontSize:     'var(--font-size-title-3)',
        lineHeight:   'var(--line-height-title-3)',
        fontWeight:   'var(--font-weight-bold)',
        color:        'var(--color-label-normal)',
        marginBottom: 'var(--spacing-32)',
      }}>Check mark</h2>

      <Section title="Test" column gap="var(--spacing-16)">
        <CheckMarkTest />
      </Section>

      <Section title="Size" gap="var(--spacing-24)">
        <Case label='size="small"'>
          <CheckMark checked size="small" label={"텍스트\n텍스트"} />
        </Case>
        <Case label='size="medium" (default)'>
          <CheckMark checked size="medium" label={"텍스트\n텍스트"} />
        </Case>
      </Section>

      <Section title="State" gap="var(--spacing-24)">
        <Case label='checked=false'>
          <CheckMark checked={false} label={"텍스트\n텍스트"} />
        </Case>
        <Case label='checked=true'>
          <CheckMark checked label={"텍스트\n텍스트"} />
        </Case>
      </Section>

      <Section title="Tight" gap="var(--spacing-24)">
        <Case label='tight=false (default)'>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-24)' }}>
            <CheckMark checked size="medium" tight={false} label={"텍스트\n텍스트"} />
            <CheckMark checked size="small"  tight={false} label={"텍스트\n텍스트"} />
          </div>
        </Case>
        <Case label='tight=true'>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-24)' }}>
            <CheckMark checked size="medium" tight label={"텍스트\n텍스트"} />
            <CheckMark checked size="small"  tight label={"텍스트\n텍스트"} />
          </div>
        </Case>
      </Section>

      <Section title="Label" gap="var(--spacing-24)">
        <Case label='label="텍스트" (default)'>
          <CheckMark checked label="텍스트" />
        </Case>
        <Case label='label={undefined}'>
          <CheckMark checked />
        </Case>
      </Section>

      <Section title="Disabled" gap="var(--spacing-24)">
        <Case label='disabled=false (default)'>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-24)' }}>
            <CheckMark checked={false} label="텍스트" />
            <CheckMark checked       label="텍스트" />
          </div>
        </Case>
        <Case label='disabled=true'>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-24)' }}>
            <CheckMark checked={false} disabled label="텍스트" />
            <CheckMark checked       disabled label="텍스트" />
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
          <CheckMark checked size="small" />
        </Case>
        <Case label='size="medium" (default)'>
          <CheckMark checked size="medium" />
        </Case>
      </Section>

      <Section title="State" gap="var(--spacing-24)">
        <Case label='checked=false'>
          <CheckMark checked={false} />
        </Case>
        <Case label='checked=true'>
          <CheckMark checked />
        </Case>
      </Section>

      <Section title="Tight" column gap="var(--spacing-24)">
        <div style={{ display: 'flex', gap: 'var(--spacing-24)', alignItems: 'center' }}>
          <CheckMark checked size="medium" tight={false} />
          <CheckMark checked size="medium" tight />
        </div>
        <div style={{ display: 'flex', gap: 'var(--spacing-24)', alignItems: 'center' }}>
          <CheckMark checked size="medium" tight={false} forceInteraction="pressed" />
          <CheckMark checked size="medium" tight       forceInteraction="pressed" />
        </div>
        <div style={{ display: 'flex', gap: 'var(--spacing-24)', alignItems: 'center' }}>
          <CheckMark checked size="small" tight={false} />
          <CheckMark checked size="small" tight />
        </div>
        <div style={{ display: 'flex', gap: 'var(--spacing-24)', alignItems: 'center' }}>
          <CheckMark checked size="small" tight={false} forceInteraction="pressed" />
          <CheckMark checked size="small" tight       forceInteraction="pressed" />
        </div>
      </Section>

      <Section title="Disabled" gap="var(--spacing-24)">
        <Case label='disabled=false (default)'>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-24)' }}>
            <CheckMark checked={false} />
            <CheckMark checked />
          </div>
        </Case>
        <Case label='disabled=true'>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-24)' }}>
            <CheckMark checked={false} disabled />
            <CheckMark checked       disabled />
          </div>
        </Case>
      </Section>

      <Section title="Interaction" gap="var(--spacing-24)">
        <Case label='interaction="normal"'>
          <CheckMark checked forceInteraction="normal" />
        </Case>
        <Case label='interaction="hovered"'>
          <CheckMark checked forceInteraction="hovered" />
        </Case>
        <Case label='interaction="focused"'>
          <CheckMark checked forceInteraction="focused" />
        </Case>
        <Case label='interaction="pressed"'>
          <CheckMark checked forceInteraction="pressed" />
        </Case>
      </Section>
    </div>
  )
}

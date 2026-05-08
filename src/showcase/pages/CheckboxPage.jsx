import { useState } from 'react'
import Checkbox from '../../design-system/components/Checkbox/Checkbox'
import Section, { Case } from '../Section'

const ITEMS = [
  { id: 1, label: '알림 이메일 수신에 동의합니다' },
  { id: 2, label: '마케팅 정보 수신에 동의합니다' },
  { id: 3, label: '개인정보 제3자 제공에 동의합니다' },
]

function CheckboxTest() {
  const [checked, setChecked] = useState({ 1: false, 2: true, 3: false })

  const values      = Object.values(checked)
  const allChecked  = values.every(Boolean)
  const someChecked = values.some(Boolean)
  const headerState = allChecked ? 'checked' : someChecked ? 'indeterminate' : 'unchecked'

  const toggleAll  = () => setChecked(Object.fromEntries(ITEMS.map(i => [i.id, !allChecked])))
  const toggleItem = (id) => setChecked(prev => ({ ...prev, [id]: !prev[id] }))

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-4)' }}>
      <Checkbox
        state={headerState}
        label="전체 동의"
        bold
        onChange={toggleAll}
      />
      <div style={{ height: '1px', backgroundColor: 'var(--color-line-normal)', margin: `var(--spacing-4) 0` }} />
      {ITEMS.map(item => (
        <Checkbox
          key={item.id}
          state={checked[item.id] ? 'checked' : 'unchecked'}
          label={item.label}
          onChange={() => toggleItem(item.id)}
        />
      ))}
    </div>
  )
}

export default function CheckboxPage() {
  return (
    <div>
      <h2 style={{
        fontSize:     'var(--font-size-title-3)',
        lineHeight:   'var(--line-height-title-3)',
        fontWeight:   'var(--font-weight-bold)',
        color:        'var(--color-label-normal)',
        marginBottom: 'var(--spacing-32)',
      }}>Checkbox</h2>

      <Section title="Test" column gap="var(--spacing-16)">
        <CheckboxTest />
      </Section>

      <Section title="Size" gap="var(--spacing-24)">
        <Case label='size="small"'>
          <Checkbox state="checked" size="small" label={"텍스트\n텍스트"} />
        </Case>
        <Case label='size="medium" (default)'>
          <Checkbox state="checked" size="medium" label={"텍스트\n텍스트"} />
        </Case>
      </Section>

      <Section title="State" gap="var(--spacing-24)">
        <Case label='state="unchecked"'>
          <Checkbox state="unchecked" label={"텍스트\n텍스트"} />
        </Case>
        <Case label='state="checked"'>
          <Checkbox state="checked" label={"텍스트\n텍스트"} />
        </Case>
        <Case label='state="indeterminate"'>
          <Checkbox state="indeterminate" label={"텍스트\n텍스트"} />
        </Case>
      </Section>

      <Section title="Label" gap="var(--spacing-24)">
        <Case label='label="텍스트" (default)'>
          <Checkbox state="checked" label="텍스트" />
        </Case>
        <Case label='label={undefined}'>
          <Checkbox state="checked" />
        </Case>
      </Section>

      <Section title="Tight" gap="var(--spacing-24)">
        <Case label='tight=false (default)'>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-24)' }}>
            <Checkbox state="checked" size="medium" tight={false} label={"텍스트\n텍스트"} />
            <Checkbox state="checked" size="small"  tight={false} label={"텍스트\n텍스트"} />
          </div>
        </Case>
        <Case label='tight=true'>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-24)' }}>
            <Checkbox state="checked" size="medium" tight={true} label={"텍스트\n텍스트"} />
            <Checkbox state="checked" size="small"  tight={true} label={"텍스트\n텍스트"} />
          </div>
        </Case>
      </Section>

      <Section title="Bold" gap="var(--spacing-24)">
        <Case label='bold=false (default)'>
          <Checkbox state="checked" bold={false} label={"텍스트\n텍스트"} />
        </Case>
        <Case label='bold=true'>
          <Checkbox state="checked" bold label={"텍스트\n텍스트"} />
        </Case>
      </Section>

      <Section title="Disabled" gap="var(--spacing-24)">
        <Case label='disabled=false (default)'>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-24)' }}>
            <Checkbox state="unchecked"     label="텍스트" />
            <Checkbox state="checked"       label="텍스트" />
            <Checkbox state="indeterminate" label="텍스트" />
          </div>
        </Case>
        <Case label='disabled=true'>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-24)' }}>
            <Checkbox state="unchecked"     disabled label="텍스트" />
            <Checkbox state="checked"       disabled label="텍스트" />
            <Checkbox state="indeterminate" disabled label="텍스트" />
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
          <Checkbox state="checked" size="small" />
        </Case>
        <Case label='size="medium" (default)'>
          <Checkbox state="checked" size="medium" />
        </Case>
      </Section>

      <Section title="State" gap="var(--spacing-24)">
        <Case label='state="unchecked"'>
          <Checkbox state="unchecked" />
        </Case>
        <Case label='state="checked"'>
          <Checkbox state="checked" />
        </Case>
        <Case label='state="indeterminate"'>
          <Checkbox state="indeterminate" />
        </Case>
      </Section>

      <Section title="Tight" column gap="var(--spacing-24)">
        <div style={{ display: 'flex', gap: 'var(--spacing-24)', alignItems: 'center' }}>
          <Checkbox state="checked" size="medium" tight={false} />
          <Checkbox state="checked" size="medium" tight />
        </div>
        <div style={{ display: 'flex', gap: 'var(--spacing-24)', alignItems: 'center' }}>
          <Checkbox state="checked" size="medium" tight={false} forceInteraction="pressed" />
          <Checkbox state="checked" size="medium" tight       forceInteraction="pressed" />
        </div>
        <div style={{ display: 'flex', gap: 'var(--spacing-24)', alignItems: 'center' }}>
          <Checkbox state="checked" size="small" tight={false} />
          <Checkbox state="checked" size="small" tight />
        </div>
        <div style={{ display: 'flex', gap: 'var(--spacing-24)', alignItems: 'center' }}>
          <Checkbox state="checked" size="small" tight={false} forceInteraction="pressed" />
          <Checkbox state="checked" size="small" tight       forceInteraction="pressed" />
        </div>
      </Section>

      <Section title="Disabled" gap="var(--spacing-24)">
        <Case label='disabled=false (default)'>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-24)' }}>
            <Checkbox state="unchecked" />
            <Checkbox state="checked" />
            <Checkbox state="indeterminate" />
          </div>
        </Case>
        <Case label='disabled=true'>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-24)' }}>
            <Checkbox state="unchecked"     disabled />
            <Checkbox state="checked"       disabled />
            <Checkbox state="indeterminate" disabled />
          </div>
        </Case>
      </Section>

      <Section title="Interaction" gap="var(--spacing-24)">
        <Case label='interaction="normal"'>
          <Checkbox state="checked" forceInteraction="normal" />
        </Case>
        <Case label='interaction="hovered"'>
          <Checkbox state="checked" forceInteraction="hovered" />
        </Case>
        <Case label='interaction="focused"'>
          <Checkbox state="checked" forceInteraction="focused" />
        </Case>
        <Case label='interaction="pressed"'>
          <Checkbox state="checked" forceInteraction="pressed" />
        </Case>
      </Section>
    </div>
  )
}

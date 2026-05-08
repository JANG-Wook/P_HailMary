import { useState } from 'react'
import IconButtonBackground from '../../design-system/components/IconButton/IconButtonBackground'
import Icon from '../../design-system/components/Icon/Icon'
import Section, { Case } from '../Section'

/* ── 정적 인터랙션 상태 표시용 래퍼 ─────────────────────────── */
function StateDemo({ label, opacity, alternative }) {
  const color = alternative ? 'var(--color-static-white)' : 'var(--color-label-normal)'
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-6)', alignItems: 'center' }}>
      {/* padding으로 32×32 배경 원 영역 확보 후 오버레이 적용 */}
      <div style={{ position: 'relative', display: 'inline-flex', padding: 'var(--spacing-4)' }}>
        <IconButtonBackground
          icon={<Icon name="close" size={20} color={color} />}
          alternative={alternative}
          color={color}
          aria-label="닫기"
        />
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

/* ── 인터랙션 4상태 행 ───────────────────────────────────────── */
function InteractionRow({ alternative, rowLabel }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-8)' }}>
      <span style={{
        fontSize:   'var(--font-size-label-2)',
        lineHeight: 'var(--line-height-label-2)',
        color:      'var(--color-label-assistive)',
      }}>{rowLabel}</span>
      <div style={{ display: 'flex', gap: 'var(--spacing-32)', alignItems: 'flex-start' }}>
        <StateDemo label="Normal"  opacity={0}    alternative={alternative} />
        <StateDemo label="Hovered" opacity={0.05} alternative={alternative} />
        <StateDemo label="Focused" opacity={0.08} alternative={alternative} />
        <StateDemo label="Pressed" opacity={0.12} alternative={alternative} />
      </div>
    </div>
  )
}

export default function IconButtonBackgroundPage() {
  const [clicked, setClicked] = useState(0)

  return (
    <div>
      <h2 style={{
        fontSize:     'var(--font-size-title-3)',
        lineHeight:   'var(--line-height-title-3)',
        fontWeight:   'var(--font-weight-bold)',
        color:        'var(--color-label-normal)',
        marginBottom: 'var(--spacing-32)',
      }}>Background</h2>

      {/* ── 인터랙션 데모 ── */}
      <Section title="Test" gap="var(--spacing-24)">
        <Case label="마우스를 올리거나 클릭해보세요">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-16)', width: 'fit-content' }}>
            <div style={{ display: 'flex', gap: 'var(--spacing-32)', alignItems: 'center' }}>
              <IconButtonBackground
                icon={<Icon name="close" size={20} color="var(--color-label-normal)" />}
                aria-label="닫기"
                onClick={() => setClicked(c => c + 1)}
              />
              <IconButtonBackground
                icon={<Icon name="close" size={20} color="var(--color-static-white)" />}
                color="var(--color-static-white)"
                alternative
                aria-label="닫기 (alternative)"
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

      {/* ── Alternative ── */}
      <Section title="Alternative" gap="var(--spacing-24)">
        <Case label="alternative=false (frosted glass, 기본)">
          <IconButtonBackground
            icon={<Icon name="close" size={20} color="var(--color-label-normal)" />}
            aria-label="닫기"
            onClick={() => {}}
          />
        </Case>
        <Case label="alternative=true (dark solid)">
          <IconButtonBackground
            icon={<Icon name="close" size={20} color="var(--color-static-white)" />}
            color="var(--color-static-white)"
            alternative
            aria-label="닫기 (alternative)"
            onClick={() => {}}
          />
        </Case>
      </Section>

      {/* ── Disabled ── */}
      <Section title="Disabled" gap="var(--spacing-24)">
        <Case label="alternative=false">
          <div style={{ display: 'flex', gap: 'var(--spacing-32)', alignItems: 'center' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-6)', alignItems: 'center' }}>
              <IconButtonBackground
                icon={<Icon name="close" size={20} color="var(--color-label-normal)" />}
                aria-label="닫기"
                onClick={() => {}}
              />
              <span style={{ fontSize: 'var(--font-size-label-2)', color: 'var(--color-label-alternative)' }}>disabled=false</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-6)', alignItems: 'center' }}>
              <IconButtonBackground
                icon={<Icon name="close" size={20} color="var(--color-label-normal)" />}
                disabled
                aria-label="닫기 (비활성)"
              />
              <span style={{ fontSize: 'var(--font-size-label-2)', color: 'var(--color-label-alternative)' }}>disabled=true</span>
            </div>
          </div>
        </Case>
        <Case label="alternative=true">
          <div style={{ display: 'flex', gap: 'var(--spacing-32)', alignItems: 'center' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-6)', alignItems: 'center' }}>
              <IconButtonBackground
                icon={<Icon name="close" size={20} color="var(--color-static-white)" />}
                color="var(--color-static-white)"
                alternative
                aria-label="닫기"
                onClick={() => {}}
              />
              <span style={{ fontSize: 'var(--font-size-label-2)', color: 'var(--color-label-alternative)' }}>disabled=false</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-6)', alignItems: 'center' }}>
              <IconButtonBackground
                icon={<Icon name="close" size={20} color="var(--color-static-white)" />}
                color="var(--color-static-white)"
                alternative
                disabled
                aria-label="닫기 (비활성)"
              />
              <span style={{ fontSize: 'var(--font-size-label-2)', color: 'var(--color-label-alternative)' }}>disabled=true</span>
            </div>
          </div>
        </Case>
      </Section>

      {/* ── Interaction ── */}
      <Section title="Interaction" gap="var(--spacing-24)">
        <Case label="4가지 인터랙션 상태">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-24)' }}>
            <InteractionRow alternative={false} rowLabel="alternative=false" />
            <InteractionRow alternative={true}  rowLabel="alternative=true" />
          </div>
        </Case>
      </Section>

      {/* ── Preview ── */}
      <Section title="Preview" gap="var(--spacing-24)">
        <Case label="alternative=false — 컬러 배경 위">
          <div style={{
            background:     'linear-gradient(135deg, var(--color-primary-normal) 0%, var(--color-primary-normal) 45%, var(--color-status-positive) 55%, var(--color-status-positive) 100%)',
            borderRadius:   'var(--spacing-12)',
            padding:        'var(--spacing-32)',
            display:        'flex',
            justifyContent: 'center',
            alignItems:     'center',
            width:          '100%',
            boxSizing:      'border-box',
          }}>
            <IconButtonBackground
              icon={<Icon name="close" size={20} color="var(--color-label-normal)" />}
              aria-label="닫기"
              onClick={() => {}}
            />
          </div>
        </Case>
        <Case label="alternative=true — 어두운 배경 위">
          <div style={{
            background:     'var(--color-label-normal)',
            borderRadius:   'var(--spacing-12)',
            padding:        'var(--spacing-32)',
            display:        'flex',
            justifyContent: 'center',
            alignItems:     'center',
            width:          '100%',
            boxSizing:      'border-box',
          }}>
            <IconButtonBackground
              icon={<Icon name="close" size={20} color="var(--color-static-white)" />}
              color="var(--color-static-white)"
              alternative
              aria-label="닫기"
              onClick={() => {}}
            />
          </div>
        </Case>
      </Section>
    </div>
  )
}

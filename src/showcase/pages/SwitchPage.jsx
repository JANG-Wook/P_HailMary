import { useState } from 'react'
import Switch from '../../design-system/components/Switch/Switch'
import Section from '../Section'

/* ── test 영역 ───────────────────────────────────────────────── */
const TEST_ITEMS = [
  { id: 1, label: '알림 이메일 수신에 동의합니다' },
  { id: 2, label: '마케팅 정보 수신에 동의합니다' },
  { id: 3, label: '개인정보 제3자 제공에 동의합니다' },
]

function SwitchTest() {
  const [states, setStates] = useState({ 1: false, 2: true, 3: false })
  const toggle = (id) => setStates(prev => ({ ...prev, [id]: !prev[id] }))

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-4)' }}>
      {TEST_ITEMS.map(item => (
        <div
          key={item.id}
          style={{
            display:        'flex',
            justifyContent: 'space-between',
            alignItems:     'center',
            gap:            'var(--spacing-16)',
            padding:        `var(--spacing-8) 0`,
          }}
        >
          <span style={{
            fontSize:   'var(--font-size-body-2)',
            lineHeight: 'var(--line-height-body-2-normal)',
            color:      'var(--color-label-normal)',
          }}>{item.label}</span>
          <Switch active={states[item.id]} onChange={() => toggle(item.id)} />
        </div>
      ))}
    </div>
  )
}

/* ── 서브섹션 내부 배지 (prop 이름/값 표시) ───────────────────── */
function PropBadge({ children, isDefault = false }) {
  return (
    <span style={{
      display:         'inline-flex',
      alignItems:      'center',
      gap:             'var(--spacing-4)',
      padding:         'var(--spacing-2) var(--spacing-6)',
      backgroundColor: 'var(--color-fill-strong)',
      borderRadius:    'var(--spacing-4)',
      fontFamily:      'SF Mono, ui-monospace, monospace',
      fontSize:        'var(--font-size-caption-1)',
      lineHeight:      'var(--line-height-caption-1)',
      color:           'var(--color-label-normal)',
      whiteSpace:      'nowrap',
    }}>
      {children}
      {isDefault && (
        <span style={{
          fontSize:   'var(--font-size-caption-2)',
          lineHeight: 'var(--line-height-caption-2)',
          color:      'var(--color-label-alternative)',
        }}>default</span>
      )}
    </span>
  )
}

/* ── 서브리스트 헤딩 ─────────────────────────────────────────── */
function SubHeading({ propName, values }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-6)' }}>
      <span style={{
        fontSize:   'var(--font-size-label-1)',
        fontWeight: 'var(--font-weight-semibold)',
        color:      'var(--color-label-strong)',
        whiteSpace: 'nowrap',
      }}>{propName} =</span>
      {values.map(({ label, isDefault }) => (
        <PropBadge key={label} isDefault={isDefault}>{label}</PropBadge>
      ))}
    </div>
  )
}

/* ── 연회색 콘텐츠 박스 ──────────────────────────────────────── */
function ContentBox({ children, style }) {
  return (
    <div style={{
      display:         'flex',
      gap:             'var(--spacing-24)',
      alignItems:      'flex-start',
      padding:         'var(--spacing-24)',
      borderRadius: 'var(--spacing-16)',
      ...style,
    }}>
      {children}
    </div>
  )
}

/* ── 서브리스트 (헤딩 + 콘텐츠 박스) ────────────────────────── */
function SubList({ propName, values, children }) {
  return (
    <div style={{
      display:       'flex',
      flexDirection: 'column',
      gap:           'var(--spacing-16)',
      width:         '100%',
    }}>
      <SubHeading propName={propName} values={values} />
      {children}
    </div>
  )
}

/* ── 플랫폼별 내부 흰색 카드 ─────────────────────────────────── */
function InnerCard({ children }) {
  return (
    <div style={{
      display:         'flex',
      flexDirection:   'column',
      gap:             'var(--spacing-24)',
      padding:         'var(--spacing-24)',
      backgroundColor: 'var(--color-bg-normal)',
      border:          '1px solid var(--color-line-normal)',
      borderRadius:    'var(--spacing-16)',
      width:           '100%',
      boxSizing:       'border-box',
    }}>
      {children}
    </div>
  )
}

/* ── 플랫폼 서브프로퍼티 카드 (회색 외곽 + 배지 + 흰 내부) ────── */
function SubpropertyCard({ label, children }) {
  return (
    <div style={{
      display:         'flex',
      flexDirection:   'column',
      gap:             'var(--spacing-24)',
      padding:      'var(--spacing-24)',
      borderRadius: 'var(--spacing-16)',
      width:        '100%',
      boxSizing:    'border-box',
    }}>
      <PropBadge>{label}</PropBadge>
      <InnerCard>{children}</InnerCard>
    </div>
  )
}

/* ── disable 서브리스트용 2열 그리드 ────────────────────────── */
function DisableGrid({ platform }) {
  const p = platform
  return (
    <ContentBox>
      {/* disable=false 열 */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-24)' }}>
        <Switch active={false} platform={p} />
        <Switch active={true}  platform={p} />
      </div>
      {/* disable=true 열 */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-24)' }}>
        <Switch active={false} platform={p} disabled />
        <Switch active={true}  platform={p} disabled />
      </div>
    </ContentBox>
  )
}

/* ── 플랫폼별 서브리스트 묶음 (size / active / disable) ──────── */
function PlatformSubLists({ platform }) {
  const p = platform
  return (
    <>
      <SubList
        propName="size"
        values={[
          { label: 'small',  isDefault: false },
          { label: 'medium', isDefault: true  },
        ]}
      >
        <ContentBox>
          <Switch size="small"  platform={p} />
          <Switch size="medium" platform={p} />
        </ContentBox>
      </SubList>

      <SubList
        propName="active"
        values={[
          { label: 'false', isDefault: true  },
          { label: 'true',  isDefault: false },
        ]}
      >
        <ContentBox>
          <Switch active={false} platform={p} />
          <Switch active={true}  platform={p} />
        </ContentBox>
      </SubList>

      <SubList
        propName="disable"
        values={[
          { label: 'false', isDefault: true  },
          { label: 'true',  isDefault: false },
        ]}
      >
        <DisableGrid platform={p} />
      </SubList>
    </>
  )
}

/* ── 페이지 ─────────────────────────────────────────────────── */
export default function SwitchPage() {
  return (
    <div>
      <h2 style={{
        fontSize:     'var(--font-size-title-3)',
        lineHeight:   'var(--line-height-title-3)',
        fontWeight:   'var(--font-weight-bold)',
        color:        'var(--color-label-normal)',
        marginBottom: 'var(--spacing-32)',
      }}>Switch</h2>

      <Section title="Test" column gap="var(--spacing-16)">
        <SwitchTest />
      </Section>

      {/* ─── platform 비교 ─────────────────────────────────── */}
      <Section title="Platform" column gap="var(--spacing-16)">
        <ContentBox>
          {/* normal 열 */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-24)' }}>
            <Switch active={false} platform="normal" />
            <Switch active={true}  platform="normal" />
          </div>
          {/* ios 열 */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-24)' }}>
            <Switch active={false} platform="ios" />
            <Switch active={true}  platform="ios" />
          </div>
        </ContentBox>

        {/* ─── Subproperty: ios ──────────────────────────── */}
        <SubpropertyCard label="ios">
          <PlatformSubLists platform="ios" />
        </SubpropertyCard>

        {/* ─── Subproperty: normal ───────────────────────── */}
        <SubpropertyCard label="normal">
          <PlatformSubLists platform="normal" />
        </SubpropertyCard>
      </Section>
    </div>
  )
}

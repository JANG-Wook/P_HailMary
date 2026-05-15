// Chat Message 설정 패널 섹션 구분 방식 A/B/C/D/E 비교 테스트 페이지

import Switch from '../../design-system/components/Switch/Switch'

const SECTIONS = ['Message', 'Image', 'Text', 'Button', 'Message Banner', 'Quick Button']

/* ── 공통: Switch + 라벨 ─────────────────────────────────── */
function SwitchRow({ label }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-12)' }}>
      <Switch size="small" active />
      <span style={{
        fontSize:      'var(--font-size-label-1)',
        lineHeight:    'var(--line-height-label-1-normal)',
        fontWeight:    'var(--font-weight-semibold)',
        color:         'var(--color-label-normal)',
        letterSpacing: 'var(--letter-spacing-label-1)',
      }}>{label}</span>
    </div>
  )
}

function MiniCard() {
  return (
    <div style={{
      marginTop:    'var(--spacing-12)',
      border:       '1px solid var(--color-line-alternative)',
      borderRadius: 'var(--spacing-12)',
      padding:      'var(--spacing-20)',
      color:        'var(--color-label-alternative)',
      fontSize:     'var(--font-size-label-2)',
    }}>내부 카드 콘텐츠</div>
  )
}

function PanelShell({ title, children }) {
  return (
    <div style={{
      width:           '420px',
      padding:         'var(--spacing-24)',
      borderRadius:    'var(--spacing-12)',
      backgroundColor: 'var(--color-bg-elevated)',
      border:          '1px solid var(--color-line-solid-normal)',
      boxSizing:       'border-box',
    }}>
      <h3 style={{
        fontSize:      'var(--font-size-headline-2)',
        lineHeight:    'var(--line-height-headline-2)',
        letterSpacing: 'var(--letter-spacing-headline-2)',
        fontWeight:    'var(--font-weight-semibold)',
        color:         'var(--color-label-normal)',
        marginTop:     0,
        marginBottom:  'var(--spacing-16)',
        paddingBottom: 'var(--spacing-12)',
        borderBottom:  '1px solid var(--color-line-solid-normal)',
      }}>{title}</h3>
      {children}
    </div>
  )
}

function Caption({ children }) {
  return (
    <p style={{
      fontSize:      'var(--font-size-body-2)',
      lineHeight:    'var(--line-height-body-2-normal)',
      color:         'var(--color-label-alternative)',
      margin:        '0 0 var(--spacing-16) 0',
    }}>{children}</p>
  )
}

/* ── Option A: 빈 공간 + 미세 점선 ───────────────────────── */
function OptionA() {
  return (
    <PanelShell title="A · 빈 공간 + 미세 점선">
      <Caption>섹션 간 큰 간격 + 점선 1px 구분선</Caption>
      <div>
        {SECTIONS.map((s, i) => (
          <div key={s}>
            {i > 0 && (
              <div style={{
                height:      '1px',
                borderTop:   '1px dashed var(--color-line-alternative)',
                margin:      'var(--spacing-32) 0',
              }} />
            )}
            <SwitchRow label={s} />
            <MiniCard />
          </div>
        ))}
      </div>
    </PanelShell>
  )
}

/* ── Option B: 섹션 번호 칩 ──────────────────────────────── */
function OptionB() {
  return (
    <PanelShell title="B · 섹션 번호 칩">
      <Caption>왼쪽에 작은 원형 번호로 단계감 부여</Caption>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-24)' }}>
        {SECTIONS.map((s, i) => (
          <div key={s} style={{ display: 'flex', gap: 'var(--spacing-12)', alignItems: 'flex-start' }}>
            <div style={{
              width:           'var(--spacing-24)',
              height:          'var(--spacing-24)',
              borderRadius:    'var(--radius-full)',
              backgroundColor: 'var(--color-primary-normal)',
              color:           'var(--color-static-white)',
              fontSize:        'var(--font-size-caption-1)',
              fontWeight:      'var(--font-weight-semibold)',
              display:         'flex',
              alignItems:      'center',
              justifyContent:  'center',
              flexShrink:      0,
              marginTop:       'var(--spacing-2)',
            }}>{i + 1}</div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <SwitchRow label={s} />
              <MiniCard />
            </div>
          </div>
        ))}
      </div>
    </PanelShell>
  )
}

/* ── Option C: 헤더 배경 ────────────────────────────────── */
function OptionC() {
  return (
    <PanelShell title="C · 헤더 배경">
      <Caption>Switch 행에 옅은 배경 — 선 없이 영역 구분</Caption>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-16)' }}>
        {SECTIONS.map(s => (
          <div key={s}>
            <div style={{
              padding:         'var(--spacing-12) var(--spacing-16)',
              backgroundColor: 'var(--color-bg-normal-alternative)',
              borderRadius:    'var(--spacing-8)',
            }}>
              <SwitchRow label={s} />
            </div>
            <MiniCard />
          </div>
        ))}
      </div>
    </PanelShell>
  )
}

/* ── Option D: 카드 좌측 컬러 막대 ───────────────────────── */
function OptionD() {
  return (
    <PanelShell title="D · 카드 좌측 컬러 막대">
      <Caption>섹션 카드 좌측에 4px primary 색 막대</Caption>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-20)' }}>
        {SECTIONS.map(s => (
          <div key={s} style={{ display: 'flex', gap: 'var(--spacing-12)' }}>
            <div style={{
              width:           '4px',
              borderRadius:    'var(--radius-full)',
              backgroundColor: 'var(--color-primary-normal)',
              flexShrink:      0,
            }} />
            <div style={{ flex: 1, minWidth: 0 }}>
              <SwitchRow label={s} />
              <MiniCard />
            </div>
          </div>
        ))}
      </div>
    </PanelShell>
  )
}

/* ── Option E: 섹션 외곽 컨테이너 ────────────────────────── */
function OptionE() {
  return (
    <PanelShell title="E · 섹션 외곽 컨테이너">
      <Caption>각 섹션을 외곽 박스로 감쌈 (카드 in 카드)</Caption>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-16)' }}>
        {SECTIONS.map(s => (
          <div key={s} style={{
            padding:         'var(--spacing-16)',
            borderRadius:    'var(--spacing-12)',
            backgroundColor: 'var(--color-bg-normal)',
            border:          '1px solid var(--color-line-alternative)',
          }}>
            <SwitchRow label={s} />
            <MiniCard />
          </div>
        ))}
      </div>
    </PanelShell>
  )
}

/* ── Option F: B + D 조합 (뉴트럴 색) ─────────────────────── */
function OptionF({ chipBg = 'var(--color-label-normal)', chipFg = 'var(--color-static-white)', barBg = 'var(--color-line-neutral)', name = 'F' }) {
  return (
    <PanelShell title={`${name} · B + D 조합 (뉴트럴)`}>
      <Caption>번호 칩 + 좌측 막대 (chip: {chipBg.replace('var(--color-','').replace(')','')}, bar: {barBg.replace('var(--color-','').replace(')','')})</Caption>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-20)' }}>
        {SECTIONS.map((s, i) => (
          <div key={s} style={{ display: 'flex', gap: 'var(--spacing-12)' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0 }}>
              <div style={{
                width:           'var(--spacing-24)',
                height:          'var(--spacing-24)',
                borderRadius:    'var(--radius-full)',
                backgroundColor: chipBg,
                color:           chipFg,
                fontSize:        'var(--font-size-caption-1)',
                fontWeight:      'var(--font-weight-semibold)',
                display:         'flex',
                alignItems:      'center',
                justifyContent:  'center',
              }}>{i + 1}</div>
              <div style={{
                width:           '2px',
                flex:            1,
                marginTop:       'var(--spacing-4)',
                backgroundColor: barBg,
                borderRadius:    'var(--radius-full)',
              }} />
            </div>
            <div style={{ flex: 1, minWidth: 0, paddingBottom: 'var(--spacing-4)' }}>
              <SwitchRow label={s} />
              <MiniCard />
            </div>
          </div>
        ))}
      </div>
    </PanelShell>
  )
}

/* ────────────────────────────────────────────────────── */
export default function ChatMessageTestPage() {
  return (
    <>
      <h2 style={{
        fontSize:      'var(--font-size-title-3)',
        fontWeight:    'var(--font-weight-bold)',
        color:         'var(--color-label-normal)',
        letterSpacing: 'var(--letter-spacing-title-3)',
        marginBottom:  'var(--spacing-32)',
      }}>Section Divider Options</h2>

      <div style={{
        display:       'flex',
        flexWrap:      'wrap',
        gap:           'var(--spacing-24)',
        alignItems:    'flex-start',
      }}>
        <OptionA />
        <OptionB />
        <OptionC />
        <OptionD />
        <OptionE />
        <OptionF
          name="F-1"
          chipBg="var(--color-label-normal)"
          chipFg="var(--color-static-white)"
          barBg="var(--color-line-neutral)"
        />
        <OptionF
          name="F-2"
          chipBg="var(--color-fill-strong)"
          chipFg="var(--color-label-normal)"
          barBg="var(--color-line-neutral)"
        />
        <OptionF
          name="F-3"
          chipBg="var(--color-label-neutral)"
          chipFg="var(--color-static-white)"
          barBg="var(--color-line-alternative)"
        />
      </div>
    </>
  )
}

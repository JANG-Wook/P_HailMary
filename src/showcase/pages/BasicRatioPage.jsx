import { useState } from 'react'
import Tab     from '../../design-system/components/Tab/Tab'
import Section from '../Section'

/* ══════════════════════════════════════════════════════════════
   공용 상수 · 헬퍼
══════════════════════════════════════════════════════════════ */

const X_BG = `
  linear-gradient(to top right,
    transparent calc(50% - 0.5px),
    var(--color-line-normal) calc(50% - 0.5px),
    var(--color-line-normal) calc(50% + 0.5px),
    transparent calc(50% + 0.5px)
  ),
  linear-gradient(to bottom right,
    transparent calc(50% - 0.5px),
    var(--color-line-normal) calc(50% - 0.5px),
    var(--color-line-normal) calc(50% + 0.5px),
    transparent calc(50% + 0.5px)
  )
`.replace(/\n\s*/g, ' ')

function CodeBadge({ children, accent = false }) {
  return (
    <span style={{
      display:      'inline-flex',
      alignItems:   'center',
      fontSize:     'var(--font-size-caption-2)',
      fontWeight:   'var(--font-weight-semibold)',
      lineHeight:   1,
      borderRadius: 'var(--spacing-4)',
      padding:      'var(--spacing-2) var(--spacing-6)',
      whiteSpace:   'nowrap',
      position:     'relative',
    }}>
      <span style={{
        position:        'absolute',
        inset:           0,
        borderRadius:    'var(--spacing-4)',
        backgroundColor: accent ? 'var(--color-accent-bg-violet)' : 'var(--color-fill-strong)',
        opacity:         accent ? 0.12 : 1,
      }} />
      <span style={{
        position: 'relative',
        color:    accent ? 'var(--color-accent-bg-violet)' : 'var(--color-label-normal)',
      }}>{children}</span>
    </span>
  )
}

function RatioBoxFrame({ token, fixedH, fixedW, width, height }) {
  const extra = {}
  if (token) {
    extra.aspectRatio = `var(${token})`
    if (fixedH !== undefined) extra.height = `${fixedH}px`
    else if (fixedW !== undefined) extra.width = `${fixedW}px`
  } else {
    extra.width  = `${width}px`
    extra.height = `${height}px`
  }
  return (
    <div style={{
      backgroundColor: 'var(--color-fill-normal)',
      backgroundImage: X_BG,
      borderRadius:    'var(--spacing-4)',
      border:          '1px solid var(--color-line-alternative)',
      flexShrink:      0,
      ...extra,
    }} />
  )
}

function RatioBox({ token, fixedH, fixedW, width, height }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'var(--spacing-8)' }}>
      <RatioBoxFrame token={token} fixedH={fixedH} fixedW={fixedW} width={width} height={height} />
      <span style={{
        fontSize:      'var(--font-size-caption-2)',
        lineHeight:    'var(--line-height-caption-2)',
        letterSpacing: 'var(--letter-spacing-caption-2)',
        fontWeight:    'var(--font-weight-regular)',
        color:         'var(--color-label-assistive)',
        whiteSpace:    'nowrap',
      }}>{width} × {Math.round(height)}</span>
    </div>
  )
}

const CARD = {
  width:           '100%',
  backgroundColor: 'var(--color-fill-normal)',
  borderRadius:    'var(--spacing-12)',
  padding:         'var(--spacing-32)',
  boxSizing:       'border-box',
}

/* ══════════════════════════════════════════════════════════════
   Vertical 탭
══════════════════════════════════════════════════════════════ */

const VERTICAL_RATIOS = [
  { label: '1 : 1', w: 1, h: 1, token: '--ratio-vertical-1-1' },
  { label: '3 : 4', w: 3, h: 4, token: '--ratio-vertical-3-4' },
  { label: '2 : 3', w: 2, h: 3, token: '--ratio-vertical-2-3' },
  { label: '1 : 2', w: 1, h: 2, token: '--ratio-vertical-1-2' },
]
const FIXED_H      = 120
const HEIGHT_DEMOS = [60, 100, 140]

function HeightDemoCard({ height }) {
  return (
    <div style={{ position: 'relative', display: 'inline-flex', flexDirection: 'column', alignItems: 'center' }}>
      <RatioBoxFrame width={height} height={height} />
      {/* 높이 치수선 (우측) */}
      <div style={{
        position:  'absolute',
        top:       0,
        right:     '-28px',
        height:    `${height}px`,
        display:   'flex',
        alignItems: 'center',
      }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100%', justifyContent: 'space-between' }}>
          <div style={{ width: '6px', height: '1px', backgroundColor: 'var(--color-status-negative)' }} />
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flex: 1, justifyContent: 'center', gap: 'var(--spacing-2)' }}>
            <div style={{ width: '1px', flex: 1, backgroundColor: 'var(--color-status-negative)' }} />
            <span style={{
              fontSize: '9px', fontWeight: 'var(--font-weight-semibold)',
              color: 'var(--color-static-white)', backgroundColor: 'var(--color-status-negative)',
              borderRadius: '100px', padding: 'var(--spacing-1) var(--spacing-4)', whiteSpace: 'nowrap', lineHeight: 1,
            }}>{height}</span>
            <div style={{ width: '1px', flex: 1, backgroundColor: 'var(--color-status-negative)' }} />
          </div>
          <div style={{ width: '6px', height: '1px', backgroundColor: 'var(--color-status-negative)' }} />
        </div>
      </div>
    </div>
  )
}

function VerticalContent() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-32)' }}>
      <Section title="Ratio Types">
        <div style={CARD}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-6)', marginBottom: 'var(--spacing-24)' }}>
            <span style={{ fontSize: 'var(--font-size-label-2)', fontWeight: 'var(--font-weight-semibold)', color: 'var(--color-label-strong)' }}>ratio =</span>
            {VERTICAL_RATIOS.map(r => <CodeBadge key={r.label}>{r.w}/{r.h}</CodeBadge>)}
          </div>
          <div style={{ display: 'flex', alignItems: 'flex-end', gap: 'var(--spacing-32)', flexWrap: 'wrap' }}>
            {VERTICAL_RATIOS.map(r => {
              const w = Math.round(FIXED_H * r.w / r.h)
              return (
                <div key={r.label} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'var(--spacing-12)' }}>
                  <RatioBox token={r.token} fixedH={FIXED_H} width={w} height={FIXED_H} />
                  <span style={{ fontSize: 'var(--font-size-caption-1)', lineHeight: 'var(--line-height-caption-1)', fontWeight: 'var(--font-weight-semibold)', color: 'var(--color-label-normal)' }}>{r.label}</span>
                </div>
              )
            })}
          </div>
        </div>
      </Section>

      <Section title="Size Change by Height">
        <div style={CARD}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-6)', marginBottom: 'var(--spacing-24)' }}>
            <span style={{ fontSize: 'var(--font-size-label-2)', fontWeight: 'var(--font-weight-semibold)', color: 'var(--color-label-strong)' }}>customize =</span>
            <CodeBadge accent>height</CodeBadge>
          </div>
          <p style={{ fontSize: 'var(--font-size-caption-1)', lineHeight: 'var(--line-height-caption-1)', letterSpacing: 'var(--letter-spacing-caption-1)', fontWeight: 'var(--font-weight-regular)', color: 'var(--color-label-alternative)', marginBottom: 'var(--spacing-24)' }}>
            height가 변하면 width가 자동으로 비율에 맞게 조정됩니다. (ratio 1:1 기준)
          </p>
          <div style={{ display: 'flex', alignItems: 'flex-end', gap: 'var(--spacing-48)', paddingRight: 'var(--spacing-16)' }}>
            {HEIGHT_DEMOS.map(h => <HeightDemoCard key={h} height={h} />)}
          </div>
        </div>
      </Section>
    </div>
  )
}

/* ══════════════════════════════════════════════════════════════
   Horizontal 탭
══════════════════════════════════════════════════════════════ */

const FIXED_W    = 100
const RATIO_BASE = { badge: '1/1',    w: 1,    h: 1,     token: '--ratio-horizontal-1-1'      }
const LANDSCAPE  = [
  { badge: '5/4',     w: 5,    h: 4,    token: '--ratio-horizontal-5-4'    },
  { badge: '4/3',     w: 4,    h: 3,    token: '--ratio-horizontal-4-3'    },
  { badge: '3/2',     w: 3,    h: 2,    token: '--ratio-horizontal-3-2'    },
  { badge: '16/10',   w: 16,   h: 10,   token: '--ratio-horizontal-16-10'  },
  { badge: '1.618/1', w: 1.618,h: 1,    token: '--ratio-horizontal-golden' },
  { badge: '16/9',    w: 16,   h: 9,    token: '--ratio-horizontal-16-9'   },
  { badge: '2/1',     w: 2,    h: 1,    token: '--ratio-horizontal-2-1'    },
  { badge: '21/9',    w: 21,   h: 9,    token: '--ratio-horizontal-21-9'   },
]
const PORTRAIT = [
  { badge: '4/5',     w: 4,    h: 5,    token: '--ratio-horizontal-4-5'    },
  { badge: '3/4',     w: 3,    h: 4,    token: '--ratio-horizontal-3-4'    },
  { badge: '2/3',     w: 2,    h: 3,    token: '--ratio-horizontal-2-3'    },
  { badge: '10/16',   w: 10,   h: 16,   token: '--ratio-horizontal-10-16'  },
  { badge: '1/1.618', w: 1,    h: 1.618,token: '--ratio-horizontal-golden-v'},
  { badge: '9/16',    w: 9,    h: 16,   token: '--ratio-horizontal-9-16'   },
  { badge: '1/2',     w: 1,    h: 2,    token: '--ratio-horizontal-1-2'    },
  { badge: '9/21',    w: 9,    h: 21,   token: '--ratio-horizontal-9-21'   },
]
const WIDTH_DEMOS = [60, 100, 140]
const rh = ({ w, h }) => FIXED_W * h / w

function WidthDemoCard({ width }) {
  return (
    <div style={{ position: 'relative', display: 'inline-flex', flexDirection: 'column', alignItems: 'flex-start' }}>
      <RatioBoxFrame width={width} height={width} />
      {/* 너비 치수선 (하단) */}
      <div style={{ position: 'absolute', top: '100%', left: 0, width: `${width}px`, marginTop: 'var(--spacing-4)', display: 'flex', alignItems: 'center' }}>
        <div style={{ width: '1px', height: '6px', backgroundColor: 'var(--color-status-negative)', flexShrink: 0 }} />
        <div style={{ display: 'flex', alignItems: 'center', flex: 1, gap: 'var(--spacing-2)' }}>
          <div style={{ height: '1px', flex: 1, backgroundColor: 'var(--color-status-negative)' }} />
          <span style={{ fontSize: '9px', fontWeight: 'var(--font-weight-semibold)', color: 'var(--color-static-white)', backgroundColor: 'var(--color-status-negative)', borderRadius: '100px', padding: 'var(--spacing-1) var(--spacing-4)', whiteSpace: 'nowrap', lineHeight: 1 }}>{width}</span>
          <div style={{ height: '1px', flex: 1, backgroundColor: 'var(--color-status-negative)' }} />
        </div>
        <div style={{ width: '1px', height: '6px', backgroundColor: 'var(--color-status-negative)', flexShrink: 0 }} />
      </div>
    </div>
  )
}

function HorizontalContent() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-32)' }}>
      <Section title="Ratio Types">
        <div style={CARD}>
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: 'var(--spacing-6)', marginBottom: 'var(--spacing-24)' }}>
            <span style={{ fontSize: 'var(--font-size-label-2)', fontWeight: 'var(--font-weight-semibold)', color: 'var(--color-label-strong)', marginTop: '1px' }}>ratio =</span>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-6)' }}>
              <div style={{ display: 'flex', gap: 'var(--spacing-6)' }}>
                <CodeBadge>{RATIO_BASE.badge}</CodeBadge>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--spacing-6)' }}>
                {LANDSCAPE.map(r => <CodeBadge key={r.badge}>{r.badge}</CodeBadge>)}
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--spacing-6)' }}>
                {PORTRAIT.map(r => <CodeBadge key={r.badge}>{r.badge}</CodeBadge>)}
              </div>
            </div>
          </div>

          <div style={{ backgroundColor: 'var(--color-fill-alternative)', borderRadius: 'var(--spacing-12)', padding: 'var(--spacing-24)', display: 'flex', flexDirection: 'column', gap: 'var(--spacing-24)' }}>
            <div style={{ display: 'flex', alignItems: 'flex-start' }}>
              <RatioBox token={RATIO_BASE.token} fixedW={FIXED_W} width={FIXED_W} height={rh(RATIO_BASE)} />
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-start', gap: 'var(--spacing-24)' }}>
              {LANDSCAPE.map(r => <RatioBox key={r.badge} token={r.token} fixedW={FIXED_W} width={FIXED_W} height={rh(r)} />)}
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-start', gap: 'var(--spacing-24)' }}>
              {PORTRAIT.map(r => <RatioBox key={r.badge} token={r.token} fixedW={FIXED_W} width={FIXED_W} height={rh(r)} />)}
            </div>
          </div>
        </div>
      </Section>

      <Section title="Size Change by Width">
        <div style={CARD}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-6)', marginBottom: 'var(--spacing-24)' }}>
            <span style={{ fontSize: 'var(--font-size-label-2)', fontWeight: 'var(--font-weight-semibold)', color: 'var(--color-label-strong)' }}>customize =</span>
            <CodeBadge accent>width</CodeBadge>
          </div>
          <p style={{ fontSize: 'var(--font-size-caption-1)', lineHeight: 'var(--line-height-caption-1)', letterSpacing: 'var(--letter-spacing-caption-1)', fontWeight: 'var(--font-weight-regular)', color: 'var(--color-label-alternative)', marginBottom: 'var(--spacing-24)' }}>
            width가 변하면 height가 자동으로 비율에 맞게 조정됩니다. (ratio 1:1 기준)
          </p>
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: 'var(--spacing-48)', paddingBottom: 'var(--spacing-16)' }}>
            {WIDTH_DEMOS.map(w => <WidthDemoCard key={w} width={w} />)}
          </div>
        </div>
      </Section>
    </div>
  )
}

/* ══════════════════════════════════════════════════════════════
   페이지
══════════════════════════════════════════════════════════════ */

const TAB_ITEMS = [{ label: 'Vertical' }, { label: 'Horizontal' }]

export default function BasicRatioPage() {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <div>
      <h2 style={{
        fontSize:     'var(--font-size-title-3)',
        lineHeight:   'var(--line-height-title-3)',
        fontWeight:   'var(--font-weight-bold)',
        color:        'var(--color-label-normal)',
        marginBottom: 'var(--spacing-24)',
      }}>Basic Ratio</h2>

      <div style={{ marginBottom: 'var(--spacing-40)' }}>
        <Tab items={TAB_ITEMS} value={activeTab} onChange={setActiveTab} />
      </div>

      {activeTab === 0 ? <VerticalContent /> : <HorizontalContent />}
    </div>
  )
}

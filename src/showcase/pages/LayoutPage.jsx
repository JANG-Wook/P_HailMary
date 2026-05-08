import React, { useState } from 'react'
import Tab     from '../../design-system/components/Tab/Tab'
import Section from '../Section'

/* ══════════════════════════════════════════════════════════════
   공용 헬퍼
══════════════════════════════════════════════════════════════ */

function Measure({ value, type = 'margin' }) {
  const isMargin = type === 'margin'
  return (
    <span style={{
      display:         'inline-flex',
      alignItems:      'center',
      justifyContent:  'center',
      fontSize:        'var(--font-size-caption-2)',
      fontWeight:      'var(--font-weight-semibold)',
      lineHeight:      1,
      color:           isMargin ? 'var(--color-static-white)' : 'var(--color-label-alternative)',
      backgroundColor: isMargin ? 'var(--color-status-negative)' : 'var(--color-fill-strong)',
      borderRadius:    'var(--spacing-20)',
      padding:         'var(--spacing-2) var(--spacing-6)',
      whiteSpace:      'nowrap',
      flexShrink:      0,
      zIndex:          2,
    }}>{value}</span>
  )
}

function PreviewCard({ children, description }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-16)', width: '100%' }}>
      <div style={{
        backgroundColor: 'var(--color-fill-normal)',
        borderRadius:    'var(--spacing-12)',
        padding:         'var(--spacing-40)',
        display:         'flex',
        alignItems:      'center',
        justifyContent:  'center',
        gap:             'var(--spacing-32)',
        width:           '100%',
        boxSizing:       'border-box',
        overflowX:       'auto',
        flexWrap:        'nowrap',
      }}>
        {children}
      </div>
      {description && (
        <p style={{
          fontSize:      'var(--font-size-caption-1)',
          lineHeight:    'var(--line-height-caption-1)',
          letterSpacing: 'var(--letter-spacing-caption-1)',
          fontWeight:    'var(--font-weight-regular)',
          color:         'var(--color-label-alternative)',
        }}>{description}</p>
      )}
    </div>
  )
}

/* ══════════════════════════════════════════════════════════════
   Grid Column 탭
══════════════════════════════════════════════════════════════ */

function GridScreen({ viewportW, viewportH, gnbH, outerMargin = 0, colMargin, gutter, colCount, scale, spans }) {
  const realColW = (viewportW - outerMargin * 2 - colMargin * 2 - gutter * (colCount - 1)) / colCount
  const S = v => v * scale

  const groups = []
  let colsBefore = 0
  for (let i = 0; i < spans.length; i++) {
    const span = spans[i]
    const gx = outerMargin + colMargin + colsBefore * (realColW + gutter)
    const gw = span * realColW + (span - 1) * gutter
    groups.push({ span, x: gx, w: gw, num: i + 1 })
    colsBefore += span
  }

  const vH = S(viewportH)
  const gnbSH = S(gnbH)
  const cH = vH - gnbSH
  const showGutterBadge = S(gutter) >= 12
  const stripTop = gnbSH + cH / 2

  return (
    <div style={{ position: 'relative', flexShrink: 0, width: S(viewportW), height: vH }}>
      <div style={{
        position:        'absolute',
        inset:           0,
        backgroundColor: 'var(--color-bg-elevated)',
        border:          '1px solid var(--color-line-neutral)',
        borderRadius:    'var(--spacing-4)',
        overflow:        'hidden',
      }}>
        <div style={{ height: gnbSH, borderBottom: '1px solid var(--color-line-alternative)' }} />
        {groups.map((g, i) => (
          <div key={i} style={{ position: 'absolute', top: gnbSH, bottom: 0, left: S(g.x), width: S(g.w) }}>
            <div style={{ position: 'absolute', inset: 0, backgroundColor: 'var(--color-status-negative)', opacity: 0.12 }} />
          </div>
        ))}
      </div>

      <div style={{
        position:   'absolute',
        top:        stripTop,
        transform:  'translateY(-50%)',
        left:       S(outerMargin),
        right:      S(outerMargin),
        display:    'flex',
        alignItems: 'center',
        zIndex:     3,
        pointerEvents: 'none',
      }}>
        <div style={{ width: S(colMargin), display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
          <Measure value={colMargin} type="margin" />
        </div>
        {groups.map((g, i) => (
          <React.Fragment key={i}>
            <div style={{ width: S(g.w), display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <Measure value={g.num} type="column" />
            </div>
            {i < groups.length - 1 && (
              <div style={{ width: S(gutter), display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                {showGutterBadge && <Measure value={gutter} type="margin" />}
              </div>
            )}
          </React.Fragment>
        ))}
        <div style={{ width: S(colMargin), display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
          <Measure value={colMargin} type="margin" />
        </div>
      </div>
    </div>
  )
}

function GridColumnContent() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-32)' }}>
      <Section title="Mobile" column>
        <PreviewCard description="모바일에서는 2단 컬럼 그리드를 사용합니다.">
          <GridScreen viewportW={375} viewportH={560} gnbH={56} outerMargin={0} colMargin={20} gutter={20} colCount={2} scale={0.7} spans={[1, 1]} />
        </PreviewCard>
      </Section>

      <Section title="Tablet" column>
        <PreviewCard description="태블릿 대응이 필요한 경우에는 3단 컬럼 그리드를 쓰며, 컬럼을 묶어 사용할 수 있습니다.">
          <GridScreen viewportW={768} viewportH={480} gnbH={56} outerMargin={0} colMargin={20} gutter={20} colCount={3} scale={0.45} spans={[1, 1, 1]} />
          <GridScreen viewportW={768} viewportH={480} gnbH={56} outerMargin={0} colMargin={20} gutter={20} colCount={3} scale={0.45} spans={[1, 2]} />
        </PreviewCard>
      </Section>

      <Section title="Desktop" column>
        <PreviewCard>
          <GridScreen viewportW={1200} viewportH={400} gnbH={60} outerMargin={50} colMargin={20} gutter={20} colCount={12} scale={0.37} spans={[1,1,1,1,1,1,1,1,1,1,1,1]} />
          <GridScreen viewportW={1200} viewportH={400} gnbH={60} outerMargin={50} colMargin={20} gutter={20} colCount={12} scale={0.37} spans={[4, 1, 6, 1]} />
        </PreviewCard>
        <PreviewCard description="데스크톱에서는 12단 컬럼 그리드를 쓰며, 컬럼을 묶어 사용할 수 있습니다.">
          <GridScreen viewportW={1600} viewportH={400} gnbH={60} outerMargin={80} colMargin={20} gutter={20} colCount={12} scale={0.3} spans={[1,1,1,1,1,1,1,1,1,1,1,1]} />
          <GridScreen viewportW={1600} viewportH={400} gnbH={60} outerMargin={80} colMargin={20} gutter={20} colCount={12} scale={0.3} spans={[3, 1, 7, 1]} />
        </PreviewCard>
      </Section>
    </div>
  )
}

/* ══════════════════════════════════════════════════════════════
   Max-width 탭
══════════════════════════════════════════════════════════════ */

function HorizDimLine({ value, x, width, centerY, scale }) {
  const S = v => v * scale
  const TICK = 8
  return (
    <div style={{
      position:   'absolute',
      top:        S(centerY),
      left:       S(x),
      width:      S(width),
      transform:  'translateY(-50%)',
      display:    'flex',
      alignItems: 'center',
      zIndex:     3,
      pointerEvents: 'none',
    }}>
      <div style={{ width: '1px', height: TICK, backgroundColor: 'var(--color-status-negative)', flexShrink: 0 }} />
      <div style={{ flex: 1, height: '1px', backgroundColor: 'var(--color-status-negative)' }} />
      <Measure value={value} />
      <div style={{ flex: 1, height: '1px', backgroundColor: 'var(--color-status-negative)' }} />
      <div style={{ width: '1px', height: TICK, backgroundColor: 'var(--color-status-negative)', flexShrink: 0 }} />
    </div>
  )
}

function MaxWidthScreen({ viewportW, viewportH, gnbH, outerMargin, colMargin, scale }) {
  const containerW = viewportW - outerMargin * 2
  const contentW   = containerW - colMargin * 2
  const S          = v => v * scale
  const cH         = viewportH - gnbH
  const halfH      = cH / 2

  return (
    <div style={{ position: 'relative', flexShrink: 0, width: S(viewportW), height: S(viewportH) }}>
      <div style={{
        position:        'absolute',
        inset:           0,
        backgroundColor: 'var(--color-bg-elevated)',
        border:          '1px solid var(--color-line-neutral)',
        borderRadius:    'var(--spacing-4)',
        overflow:        'hidden',
      }}>
        <div style={{ height: S(gnbH), borderBottom: '1px solid var(--color-line-alternative)' }} />
        <div style={{
          position: 'absolute', top: S(gnbH), bottom: 0,
          left: S(outerMargin + colMargin), width: S(contentW),
          backgroundColor: 'var(--color-status-negative)', opacity: 0.12,
        }} />
        <div style={{ position: 'absolute', top: S(gnbH), bottom: 0, left: S(outerMargin), width: '1px', backgroundColor: 'var(--color-line-normal)' }} />
        <div style={{ position: 'absolute', top: S(gnbH), bottom: 0, right: S(outerMargin), width: '1px', backgroundColor: 'var(--color-line-normal)' }} />
      </div>

      <HorizDimLine value={containerW} x={outerMargin} width={containerW} centerY={gnbH + halfH / 2} scale={scale} />
      <HorizDimLine value={contentW} x={outerMargin + colMargin} width={contentW} centerY={gnbH + halfH + halfH / 2} scale={scale} />

      {[outerMargin, viewportW - outerMargin - colMargin].map((left, i) => (
        <div key={i} style={{
          position: 'absolute', top: S(gnbH + halfH), transform: 'translateY(-50%)',
          left: S(left), width: S(colMargin),
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          zIndex: 3, pointerEvents: 'none',
        }}>
          <Measure value={colMargin} />
        </div>
      ))}
    </div>
  )
}

function MaxWidthContent() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-32)' }}>
      <Section title="Desktop" column>
        <PreviewCard description="여백을 포함한 그리드의 최대 너비는 1100px입니다.">
          <MaxWidthScreen viewportW={1200} viewportH={480} gnbH={60} outerMargin={50} colMargin={20} scale={0.42} />
        </PreviewCard>
      </Section>

      <Section title="Desktop (XL)" column>
        <PreviewCard description="여백을 포함한 그리드의 최대 너비는 1440px입니다.">
          <MaxWidthScreen viewportW={1600} viewportH={480} gnbH={60} outerMargin={80} colMargin={20} scale={0.37} />
        </PreviewCard>
      </Section>
    </div>
  )
}

/* ══════════════════════════════════════════════════════════════
   페이지
══════════════════════════════════════════════════════════════ */

const TAB_ITEMS = [{ label: 'Grid Column' }, { label: 'Max-width' }]

export default function LayoutPage() {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <div>
      <h2 style={{
        fontSize:     'var(--font-size-title-3)',
        lineHeight:   'var(--line-height-title-3)',
        fontWeight:   'var(--font-weight-bold)',
        color:        'var(--color-label-normal)',
        marginBottom: 'var(--spacing-24)',
      }}>Layout</h2>

      <div style={{ marginBottom: 'var(--spacing-40)' }}>
        <Tab items={TAB_ITEMS} value={activeTab} onChange={setActiveTab} />
      </div>

      {activeTab === 0 ? <GridColumnContent /> : <MaxWidthContent />}
    </div>
  )
}

import { useState } from 'react'
import Tab     from '../../design-system/components/Tab/Tab'
import Section from '../Section'

const CARD = {
  width:           '100%',
  backgroundColor: 'var(--color-fill-normal)',
  borderRadius:    'var(--spacing-12)',
  padding:         'var(--spacing-32)',
  boxSizing:       'border-box',
}

/* ══════════════════════════════════════════════════════════════
   Gradient 탭
══════════════════════════════════════════════════════════════ */

const SOLID_DIRECTIONS = [
  { key: 'top',    token: '--gradient-solid-top',    label: 'Top'    },
  { key: 'right',  token: '--gradient-solid-right',  label: 'Right'  },
  { key: 'bottom', token: '--gradient-solid-bottom', label: 'Bottom' },
  { key: 'left',   token: '--gradient-solid-left',   label: 'Left'   },
]

const MULTIPLE_DIRECTIONS = [
  { key: 'top',    token: '--gradient-multiple-top',    label: 'Top'    },
  { key: 'right',  token: '--gradient-multiple-right',  label: 'Right'  },
  { key: 'bottom', token: '--gradient-multiple-bottom', label: 'Bottom' },
  { key: 'left',   token: '--gradient-multiple-left',   label: 'Left'   },
]

const SIZES = [
  { key: 'xsmall', token: '--gradient-mask-size-xsmall', px: 24,  label: 'XSmall' },
  { key: 'small',  token: '--gradient-mask-size-small',  px: 32,  label: 'Small'  },
  { key: 'medium', token: '--gradient-mask-size-medium', px: 40,  label: 'Medium' },
  { key: 'xlarge', token: '--gradient-mask-size-xlarge', px: 56,  label: 'XLarge' },
  { key: 'large',  token: '--gradient-mask-size-large',  px: 64,  label: 'Large'  },
]

function TokenLabel({ token }) {
  return (
    <span style={{
      fontSize:   'var(--font-size-caption-2)',
      lineHeight: 'var(--line-height-caption-2)',
      fontWeight: 'var(--font-weight-regular)',
      color:      'var(--color-label-assistive)',
    }}>var({token})</span>
  )
}

function CardLabel({ children }) {
  return (
    <span style={{
      fontSize:   'var(--font-size-label-2)',
      lineHeight: 'var(--line-height-label-2)',
      fontWeight: 'var(--font-weight-semibold)',
      color:      'var(--color-label-normal)',
    }}>{children}</span>
  )
}

function SolidDirectionCard({ token, label }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-12)' }}>
      <div style={{ width: '180px', height: '120px', borderRadius: 'var(--spacing-8)', overflow: 'hidden', flexShrink: 0, position: 'relative' }}>
        <div style={{
          position: 'absolute', inset: 0,
          backgroundColor: 'var(--color-primary-normal)',
          WebkitMaskImage: `var(${token})`,
          maskImage:       `var(${token})`,
        }} />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-4)' }}>
        <CardLabel>{label}</CardLabel>
        <TokenLabel token={token} />
      </div>
    </div>
  )
}

function MultipleDirectionCard({ token, label }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-12)' }}>
      <div style={{ position: 'relative', width: '180px', height: '120px', borderRadius: 'var(--spacing-8)', overflow: 'hidden', flexShrink: 0 }}>
        <div style={{ position: 'absolute', inset: 0, backgroundColor: 'var(--color-primary-normal)' }} />
        <div style={{
          position: 'absolute', inset: 0,
          backgroundColor: 'var(--color-label-strong)',
          WebkitMaskImage: `var(${token})`,
          maskImage:       `var(${token})`,
        }} />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-4)' }}>
        <CardLabel>{label}</CardLabel>
        <TokenLabel token={token} />
      </div>
    </div>
  )
}

function SizeCard({ token, label, px }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 'var(--spacing-8)' }}>
      <div style={{
        width:        `var(${token})`,
        height:       `var(${token})`,
        background:   'linear-gradient(to right, transparent, var(--color-label-strong))',
        borderRadius: 'var(--spacing-4)',
        flexShrink:   0,
      }} />
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-2)' }}>
        <CardLabel>{label}</CardLabel>
        <span style={{ fontSize: 'var(--font-size-caption-2)', lineHeight: 'var(--line-height-caption-2)', fontWeight: 'var(--font-weight-regular)', color: 'var(--color-label-assistive)' }}>{px}px</span>
      </div>
    </div>
  )
}

function GradientContent() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-32)' }}>
      <Section title="Solid">
        <div style={CARD}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--spacing-32)' }}>
            {SOLID_DIRECTIONS.map(d => <SolidDirectionCard key={d.key} token={d.token} label={d.label} />)}
          </div>
        </div>
      </Section>

      <Section title="Multiple">
        <div style={CARD}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--spacing-32)' }}>
            {MULTIPLE_DIRECTIONS.map(d => <MultipleDirectionCard key={d.key} token={d.token} label={d.label} />)}
          </div>
        </div>
      </Section>

      <Section title="Mask">
        <div style={CARD}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--spacing-24)', alignItems: 'flex-end' }}>
            {SIZES.map(s => <SizeCard key={s.key} token={s.token} label={s.label} px={s.px} />)}
          </div>
        </div>
      </Section>
    </div>
  )
}

/* ══════════════════════════════════════════════════════════════
   Interaction 탭
══════════════════════════════════════════════════════════════ */

const VARIANTS = [
  {
    key: 'normal', label: 'Normal',
    states: [
      { key: 'normal',  pct: null,  token: null                                    },
      { key: 'hovered', pct: '5%',  token: '--interaction-opacity-normal-hovered'  },
      { key: 'focused', pct: '8%',  token: '--interaction-opacity-normal-focused'  },
      { key: 'pressed', pct: '12%', token: '--interaction-opacity-normal-pressed'  },
    ],
  },
  {
    key: 'light', label: 'Light',
    states: [
      { key: 'normal',  pct: null,  token: null                                    },
      { key: 'hovered', pct: '4%',  token: '--interaction-opacity-light-hovered'   },
      { key: 'focused', pct: '6%',  token: '--interaction-opacity-light-focused'   },
      { key: 'pressed', pct: '9%',  token: '--interaction-opacity-light-pressed'   },
    ],
  },
  {
    key: 'strong', label: 'Strong',
    states: [
      { key: 'normal',  pct: null,  token: null                                    },
      { key: 'hovered', pct: '8%',  token: '--interaction-opacity-strong-hovered'  },
      { key: 'focused', pct: '12%', token: '--interaction-opacity-strong-focused'  },
      { key: 'pressed', pct: '18%', token: '--interaction-opacity-strong-pressed'  },
    ],
  },
]

const STATE_LABELS = ['Normal', 'Hovered', 'Focused', 'Pressed']

function InteractionCell({ pct, token }) {
  return (
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'var(--spacing-8)' }}>
      <div style={{
        position: 'relative', width: '64px', height: '64px',
        borderRadius: 'var(--spacing-8)', overflow: 'hidden',
        backgroundColor: 'var(--color-bg-elevated)',
        border: '1px solid var(--color-line-alternative)',
        flexShrink: 0,
      }}>
        <div style={{ position: 'absolute', inset: 0, backgroundColor: 'var(--color-label-normal)', opacity: token ? `var(${token})` : 0 }} />
      </div>
      {pct ? (
        <span style={{ fontSize: 'var(--font-size-caption-1)', lineHeight: 'var(--line-height-caption-1)', fontWeight: 'var(--font-weight-semibold)', color: 'var(--color-label-normal)' }}>{pct}</span>
      ) : (
        <span style={{ fontSize: 'var(--font-size-caption-1)', lineHeight: 'var(--line-height-caption-1)', fontWeight: 'var(--font-weight-regular)', color: 'var(--color-label-assistive)' }}>—</span>
      )}
    </div>
  )
}

function InteractionContent() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-32)' }}>
      <p style={{
        fontSize:     'var(--font-size-body-2)',
        lineHeight:   'var(--line-height-body-2)',
        fontWeight:   'var(--font-weight-regular)',
        color:        'var(--color-label-alternative)',
        margin:       0,
      }}>투명도를 규칙적인 수준으로 표현합니다. 이를 통해 디자인의 깊이감을 조절하고 조화를 유지할 수 있습니다.</p>

      <Section title="Types">
        <div style={CARD}>
          <div style={{ display: 'flex', marginBottom: 'var(--spacing-24)' }}>
            <div style={{ width: '72px', flexShrink: 0 }} />
            {STATE_LABELS.map(label => (
              <div key={label} style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
                <span style={{ fontSize: 'var(--font-size-caption-1)', lineHeight: 'var(--line-height-caption-1)', fontWeight: 'var(--font-weight-semibold)', color: 'var(--color-label-normal)' }}>{label}</span>
              </div>
            ))}
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-32)' }}>
            {VARIANTS.map(v => (
              <div key={v.key} style={{ display: 'flex', alignItems: 'flex-start' }}>
                <div style={{ width: '72px', flexShrink: 0, paddingTop: 'var(--spacing-16)' }}>
                  <span style={{ fontSize: 'var(--font-size-label-2)', lineHeight: 'var(--line-height-label-2)', fontWeight: 'var(--font-weight-semibold)', color: 'var(--color-label-normal)' }}>{v.label}</span>
                </div>
                {v.states.map(s => <InteractionCell key={s.key} pct={s.pct} token={s.token} />)}
              </div>
            ))}
          </div>
        </div>
      </Section>
    </div>
  )
}

/* ══════════════════════════════════════════════════════════════
   페이지
══════════════════════════════════════════════════════════════ */

const TAB_ITEMS = [{ label: 'Gradient' }, { label: 'Interaction' }]

export default function DecoratePage() {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <div>
      <h2 style={{
        fontSize:     'var(--font-size-title-3)',
        lineHeight:   'var(--line-height-title-3)',
        fontWeight:   'var(--font-weight-bold)',
        color:        'var(--color-label-normal)',
        marginBottom: 'var(--spacing-24)',
      }}>Decorate</h2>

      <div style={{ marginBottom: 'var(--spacing-40)' }}>
        <Tab items={TAB_ITEMS} value={activeTab} onChange={setActiveTab} />
      </div>

      {activeTab === 0 ? <GradientContent /> : <InteractionContent />}
    </div>
  )
}

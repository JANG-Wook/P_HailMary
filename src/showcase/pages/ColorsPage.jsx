import { useEffect, useState } from 'react'
import Section, { Case } from '../Section'

function useCssVar(name) {
  const [value, setValue] = useState('')
  useEffect(() => {
    const v = getComputedStyle(document.documentElement).getPropertyValue(name).trim()
    setValue(v)
  }, [name])
  return value
}

const COLOR_GROUPS = [
  {
    title: 'Primary',
    tokens: [
      { name: '--color-primary-normal', label: 'primary-normal' },
      { name: '--color-primary-strong', label: 'primary-strong' },
      { name: '--color-primary-heavy',  label: 'primary-heavy'  },
    ],
  },
  {
    title: 'Label',
    tokens: [
      { name: '--color-label-normal',      label: 'label-normal'      },
      { name: '--color-label-strong',      label: 'label-strong'      },
      { name: '--color-label-neutral',     label: 'label-neutral'     },
      { name: '--color-label-alternative', label: 'label-alternative' },
      { name: '--color-label-assistive',   label: 'label-assistive'   },
      { name: '--color-label-disable',     label: 'label-disable'     },
    ],
  },
  {
    title: 'Background',
    tokens: [
      { name: '--color-bg-normal',                  label: 'bg-normal'                  },
      { name: '--color-bg-normal-alternative',      label: 'bg-normal-alternative'      },
      { name: '--color-bg-elevated',                label: 'bg-elevated'                },
      { name: '--color-bg-elevated-alternative',    label: 'bg-elevated-alternative'    },
      { name: '--color-bg-transparent',             label: 'bg-transparent'             },
      { name: '--color-bg-transparent-alternative', label: 'bg-transparent-alternative' },
    ],
  },
  {
    title: 'Fill',
    tokens: [
      { name: '--color-fill-normal',      label: 'fill-normal'      },
      { name: '--color-fill-strong',      label: 'fill-strong'      },
      { name: '--color-fill-alternative', label: 'fill-alternative' },
    ],
  },
  {
    title: 'Line',
    tokens: [
      { name: '--color-line-normal',           label: 'line-normal'           },
      { name: '--color-line-strong',           label: 'line-strong'           },
      { name: '--color-line-neutral',          label: 'line-neutral'          },
      { name: '--color-line-alternative',      label: 'line-alternative'      },
      { name: '--color-line-solid-neutral',    label: 'line-solid-neutral'    },
      { name: '--color-line-solid-normal',     label: 'line-solid-normal'     },
      { name: '--color-line-solid-alternative',label: 'line-solid-alternative'},
    ],
  },
  {
    title: 'Interaction',
    tokens: [
      { name: '--color-interaction-inactive', label: 'interaction-inactive' },
      { name: '--color-interaction-disable',  label: 'interaction-disable'  },
    ],
  },
  {
    title: 'Status',
    tokens: [
      { name: '--color-status-positive',   label: 'status-positive'   },
      { name: '--color-status-cautionary', label: 'status-cautionary' },
      { name: '--color-status-negative',   label: 'status-negative'   },
    ],
  },
  {
    title: 'Inverse',
    tokens: [
      { name: '--color-inverse-primary',    label: 'inverse-primary'    },
      { name: '--color-inverse-background', label: 'inverse-background' },
      { name: '--color-inverse-label',      label: 'inverse-label'      },
    ],
  },
  {
    title: 'Static / Material',
    tokens: [
      { name: '--color-static-white',    label: 'static-white'    },
      { name: '--color-static-black',    label: 'static-black'    },
      { name: '--color-material-dimmer', label: 'material-dimmer' },
    ],
  },
  {
    title: 'Atomic',
    tokens: [
      { name: '--color-cool-neutral-30',   label: 'cool-neutral-30'   },
      { name: '--color-atomic-green-60',   label: 'atomic-green-60'   },
      { name: '--color-atomic-orange-60',  label: 'atomic-orange-60'  },
      { name: '--color-atomic-red-60',     label: 'atomic-red-60'     },
    ],
  },
  {
    title: 'Accent Background',
    tokens: [
      { name: '--color-accent-bg-red-orange', label: 'accent-bg-red-orange' },
      { name: '--color-accent-bg-lime',       label: 'accent-bg-lime'       },
      { name: '--color-accent-bg-cyan',       label: 'accent-bg-cyan'       },
      { name: '--color-accent-bg-light-blue', label: 'accent-bg-light-blue' },
      { name: '--color-accent-bg-violet',     label: 'accent-bg-violet'     },
      { name: '--color-accent-bg-purple',     label: 'accent-bg-purple'     },
      { name: '--color-accent-bg-pink',       label: 'accent-bg-pink'       },
    ],
  },
  {
    title: 'Accent Foreground',
    tokens: [
      { name: '--color-accent-fg-red',        label: 'accent-fg-red'        },
      { name: '--color-accent-fg-red-orange', label: 'accent-fg-red-orange' },
      { name: '--color-accent-fg-orange',     label: 'accent-fg-orange'     },
      { name: '--color-accent-fg-lime',       label: 'accent-fg-lime'       },
      { name: '--color-accent-fg-green',      label: 'accent-fg-green'      },
      { name: '--color-accent-fg-cyan',       label: 'accent-fg-cyan'       },
      { name: '--color-accent-fg-light-blue', label: 'accent-fg-light-blue' },
      { name: '--color-accent-fg-blue',       label: 'accent-fg-blue'       },
      { name: '--color-accent-fg-violet',     label: 'accent-fg-violet'     },
      { name: '--color-accent-fg-purple',     label: 'accent-fg-purple'     },
      { name: '--color-accent-fg-pink',       label: 'accent-fg-pink'       },
    ],
  },
  {
    title: 'Platform · iOS',
    tokens: [
      { name: '--color-ios-fill-secondary',   label: 'ios-fill-secondary'   },
      { name: '--color-ios-glass-background', label: 'ios-glass-background' },
    ],
  },
]

function Swatch({ name, label }) {
  const computedValue = useCssVar(name)

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-6)', width: '120px' }}>
      <div style={{
        width:           '120px',
        height:          '64px',
        borderRadius:    'var(--spacing-8)',
        backgroundColor: `var(${name})`,
        border:          '1px solid var(--color-line-neutral)',
        boxSizing:       'border-box',
        flexShrink:      0,
      }} />
      <p style={{
        fontSize:      'var(--font-size-caption-1)',
        lineHeight:    'var(--line-height-caption-1)',
        letterSpacing: 'var(--letter-spacing-caption-1)',
        fontWeight:    'var(--font-weight-semibold)',
        color:         'var(--color-label-normal)',
      }}>{label}</p>
      <p style={{
        fontSize:      'var(--font-size-caption-1)',
        lineHeight:    'var(--line-height-caption-1)',
        letterSpacing: 'var(--letter-spacing-caption-1)',
        fontWeight:    'var(--font-weight-regular)',
        color:         'var(--color-label-alternative)',
        fontVariantNumeric: 'tabular-nums',
      }}>{computedValue || '—'}</p>
      <p style={{
        fontSize:      'var(--font-size-caption-2)',
        lineHeight:    'var(--line-height-caption-2)',
        letterSpacing: 'var(--letter-spacing-caption-2)',
        fontWeight:    'var(--font-weight-regular)',
        color:         'var(--color-label-assistive)',
        wordBreak:     'break-all',
      }}>{name}</p>
    </div>
  )
}

export default function ColorsPage() {
  return (
    <div>
      <h2 style={{
        fontSize:      'var(--font-size-title-3)',
        lineHeight:    'var(--line-height-title-3)',
        letterSpacing: 'var(--letter-spacing-title-3)',
        fontWeight:    'var(--font-weight-bold)',
        color:         'var(--color-label-normal)',
        marginBottom:  'var(--spacing-32)',
      }}>Colors</h2>

      {COLOR_GROUPS.map(({ title, tokens }) => (
        <Section key={title} title={title}>
          {tokens.map(t => (
            <Swatch key={t.name} name={t.name} label={t.label} />
          ))}
        </Section>
      ))}
    </div>
  )
}

import logo from '/T1_parksy/Infobank_Logo_Color_CMYK_Dark Grey.png'

const NAV = [
  {
    group: 'Foundation',
    items: [
      { id: 'typography',  label: 'Typography' },
      { id: 'colors',      label: 'Color'      },
      { id: 'elevation',   label: 'Elevation'  },
    ],
  },
  {
    group: 'Foundation Screen',
    items: [
      { id: 'artboard',         label: 'Artboard'            },
      { id: 'breakpoint',       label: 'Breakpoint'          },
      { id: 'spacing',          label: 'Spacing'             },
      { id: 'layout',           label: 'Layout'              },
    ],
  },
  {
    group: 'Theme Icon',
    items: [
      { id: 'iconNormal', label: 'Normal' },
    ],
  },
  {
    group: 'Element',
    items: [
      { id: 'basicRatio',              label: 'Basic Ratio'                },
      { id: 'elementSafeArea',          label: 'Spacing Safe Area'          },
      { id: 'decorate',                 label: 'Decorate'                   },
    ],
  },
  {
    group: 'Component Layout',
    items: [
      { id: 'essential', label: 'Essential' },
      { id: 'divider',   label: 'Divider'    },
    ],
  },
  {
    group: 'Component Action Area',
    items: [
      { id: 'actionBottom',      label: 'Bottom'              },
      { id: 'button',            label: 'Button'              },
      { id: 'textButton',        label: 'Text Button'         },
      { id: 'actionNormal',      label: 'Normal'              },
      { id: 'actionBackground',  label: 'Background'          },
      { id: 'iconButton',        label: 'Icon Button'         },
      { id: 'chip',              label: 'Chip'                },
      { id: 'toggleIcon',        label: 'Toggle Icon'         },
    ],
  },
  {
    group: 'Component Selection and Input',
    items: [
      { id: 'textfield',        label: 'Text field'          },
      { id: 'textarea',         label: 'Text area'           },
      { id: 'select',           label: 'Select'              },
      { id: 'checkbox',         label: 'Checkbox'            },
      { id: 'radio',            label: 'Radio'               },
      { id: 'checkMark',        label: 'Check mark'          },
      { id: 'switch',           label: 'Switch'              },
      { id: 'segmentedControl', label: 'Segmented Control'   },
      { id: 'framedStyle',      label: 'Framed Style'        },
    ],
  },
  {
    group: 'Component Content',
    items: [
      { id: 'contentBadge', label: 'Content Badge'  },
      { id: 'thumbnail',    label: 'Thumbnail'      },
      { id: 'avatar',       label: 'Avatar Person'  },
      { id: 'listCell',     label: 'List Cell'      },
      { id: 'card',         label: 'Card'           },
    ],
  },
  {
    group: 'Component Loading',
    items: [
      { id: 'spinner',           label: 'Circular'           },
      { id: 'skeleton', label: 'Skeleton' },
    ],
  },
  {
    group: 'Component Navigation',
    items: [
      { id: 'tab',           label: 'Tab'                    },
      { id: 'category',      label: 'Category'               },
      { id: 'pageIndicator', label: 'Page Indicator Counter' },
      { id: 'paginationDots',label: 'Pagination_Dot'         },
      { id: 'paginationNav', label: 'Pagination_Navigation'  },
    ],
  },
  {
    group: 'Component Feedback',
    items: [
      { id: 'toast',    label: 'Toast'    },
      { id: 'snackbar', label: 'Snackbar' },
      { id: 'alert',    label: 'Alert'    },
    ],
  },
  {
    group: 'Component Presentation',
    items: [
      { id: 'tooltip', label: 'Tooltip' },
      { id: 'menu',    label: 'Menu'    },
    ],
  },
]

export default function Sidebar({ activePage, onNavigate }) {
  return (
    <nav className="sidebar-scroll" style={{
      width:           '220px',
      flexShrink:      0,
      height:          '100vh',
      overflowY:       'auto',
      backgroundColor: 'var(--color-bg-elevated)',
      borderRight:     '1px solid var(--color-line-solid-neutral)',
      paddingTop:      'var(--spacing-20)',
      paddingBottom:   'var(--spacing-20)',
      position:        'sticky',
      top:             0,
      boxSizing:       'border-box',
    }}>
      <div style={{
        paddingTop:    'var(--spacing-16)',
        paddingLeft:   'var(--spacing-16)',
        paddingRight:  'var(--spacing-16)',
        paddingBottom: 'var(--spacing-24)',
        marginBottom:  'var(--spacing-8)',
        borderBottom: '1px solid var(--color-line-solid-neutral)',
      }}>
        <img
          src={logo}
          alt="Infobank"
          draggable={false}
          style={{ width: '75%', height: 'auto', display: 'block' }}
        />
      </div>

      {NAV.map(({ group, items }) => (
        <div key={group} style={{ marginBottom: 'var(--spacing-8)' }}>
          <p style={{
            fontSize:      'var(--font-size-caption-2)',
            lineHeight:    'var(--line-height-caption-2)',
            letterSpacing: 'var(--letter-spacing-caption-2)',
            fontWeight:    'var(--font-weight-semibold)',
            color:         'var(--color-label-assistive)',
            padding:       'var(--spacing-8) var(--spacing-16) var(--spacing-4)',
            textTransform: 'uppercase',
          }}>{group}</p>

          {items.map(({ id, label }) => {
            const isActive = activePage === id
            return (
              <button
                key={id}
                onClick={() => onNavigate(id)}
                style={{
                  display:       'block',
                  textAlign:     'left',
                  padding:       'var(--spacing-8) var(--spacing-12)',
                  margin:        '1px var(--spacing-8)',
                  width:         'calc(100% - 16px)',
                  background:    isActive ? 'var(--color-primary-normal)' : 'none',
                  border:        'none',
                  borderRadius:  'var(--spacing-8)',
                  cursor:        'pointer',
                  fontSize:      'var(--font-size-body-2)',
                  lineHeight:    'var(--line-height-body-2-normal)',
                  letterSpacing: 'var(--letter-spacing-body-2)',
                  fontWeight:    isActive ? 'var(--font-weight-semibold)' : 'var(--font-weight-regular)',
                  color:         isActive ? 'var(--color-static-white)' : 'var(--color-label-normal)',
                  boxSizing:     'border-box',
                }}
              >
                {label}
              </button>
            )
          })}
        </div>
      ))}
    </nav>
  )
}

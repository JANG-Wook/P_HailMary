import Section from '../Section'

/* ── 플랫폼별 Safe Area 데이터 ───────────────────────────────── */
const STATUS_PLATFORMS = [
  { platform: 'iOS',     token: '--safe-area-status-ios',     height: 44 },
  { platform: 'Android', token: '--safe-area-status-android', height: 36 },
  { platform: 'Web',     token: null,                         height: 0  },
]

const BOTTOM_PLATFORMS = [
  { platform: 'iOS',     token: '--safe-area-bottom-ios',     height: 34 },
  { platform: 'Android', token: '--safe-area-bottom-android', height: 14 },
  { platform: 'Web',     token: null,                         height: 0  },
]

/* ── Safe Area 바 한 행 ──────────────────────────────────────── */
function SafeAreaRow({ platform, token, height }) {
  const isZero = height === 0
  const barH   = isZero ? 'var(--spacing-2)' : token ? `var(${token})` : `${height}px`
  return (
    <div style={{
      display:    'flex',
      alignItems: 'center',
      gap:        'var(--spacing-16)',
    }}>
      {/* 플랫폼 레이블 */}
      <span style={{
        fontSize:   'var(--font-size-label-2)',
        lineHeight: 'var(--line-height-label-2)',
        fontWeight: 'var(--font-weight-semibold)',
        color:      'var(--color-label-normal)',
        width:      '72px',
        flexShrink: 0,
      }}>{platform}</span>

      {/* 시각적 바 */}
      <div style={{ flex: 1, position: 'relative' }}>
        <div style={{
          width:        '100%',
          height:       barH,
          borderRadius: 'var(--spacing-4)',
          border:       '1.5px dashed var(--color-accent-fg-violet)',
          position:     'relative',
          overflow:     'hidden',
          opacity:      isZero ? 0.35 : 1,
        }}>
          {!isZero && (
            <div style={{
              position:        'absolute',
              inset:           0,
              backgroundColor: 'var(--color-accent-bg-violet)',
              opacity:         0.1,
            }} />
          )}
        </div>
      </div>

      {/* 높이 뱃지 */}
      <span style={{
        fontSize:        'var(--font-size-caption-2)',
        fontWeight:      'var(--font-weight-semibold)',
        color:           isZero ? 'var(--color-label-assistive)' : 'var(--color-static-white)',
        backgroundColor: isZero ? 'transparent'                  : 'var(--color-status-negative)',
        border:          isZero ? '1px solid var(--color-line-normal)' : 'none',
        borderRadius:    '100px',
        padding:         'var(--spacing-2) var(--spacing-6)',
        whiteSpace:      'nowrap',
        lineHeight:      1,
        flexShrink:      0,
        minWidth:        '40px',
        textAlign:       'center',
        boxSizing:       'border-box',
      }}>{height}px</span>
    </div>
  )
}

/* ── 페이지 ──────────────────────────────────────────────────── */
export default function ElementSafeAreaPage() {
  return (
    <div>
      <h2 style={{
        fontSize:     'var(--font-size-title-3)',
        lineHeight:   'var(--line-height-title-3)',
        fontWeight:   'var(--font-weight-bold)',
        color:        'var(--color-label-normal)',
        marginBottom: 'var(--spacing-32)',
      }}>Spacing_Safe Area</h2>

      {/* 섹션: Status */}
      <Section title="Status">
        <div style={{
          width:           '100%',
          backgroundColor: 'var(--color-fill-normal)',
          borderRadius:    'var(--spacing-12)',
          padding:         'var(--spacing-32)',
          boxSizing:       'border-box',
        }}>
          <p style={{
            fontSize:      'var(--font-size-caption-1)',
            lineHeight:    'var(--line-height-caption-1)',
            letterSpacing: 'var(--letter-spacing-caption-1)',
            fontWeight:    'var(--font-weight-regular)',
            color:         'var(--color-label-alternative)',
            marginBottom:  'var(--spacing-24)',
          }}>상단에 Status 여백을 고려해야 할 때 사용합니다.</p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-20)' }}>
            {STATUS_PLATFORMS.map(item => (
              <SafeAreaRow key={item.platform} platform={item.platform} token={item.token} height={item.height} />
            ))}
          </div>
        </div>
      </Section>

      {/* 섹션: Bottom */}
      <Section title="Bottom">
        <div style={{
          width:           '100%',
          backgroundColor: 'var(--color-fill-normal)',
          borderRadius:    'var(--spacing-12)',
          padding:         'var(--spacing-32)',
          boxSizing:       'border-box',
        }}>
          <p style={{
            fontSize:      'var(--font-size-caption-1)',
            lineHeight:    'var(--line-height-caption-1)',
            letterSpacing: 'var(--letter-spacing-caption-1)',
            fontWeight:    'var(--font-weight-regular)',
            color:         'var(--color-label-alternative)',
            marginBottom:  'var(--spacing-24)',
          }}>하단에 내비게이션 여백을 고려해야 할 때 사용합니다.</p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-20)' }}>
            {BOTTOM_PLATFORMS.map(item => (
              <SafeAreaRow key={item.platform} platform={item.platform} token={item.token} height={item.height} />
            ))}
          </div>
        </div>
      </Section>
    </div>
  )
}

import Section from '../Section'
import Icon from '../../design-system/components/Icon/Icon'

const SCALE = [
  { token: '--spacing-0-5', value: 0.5,  label: '.5'   },
  { token: '--spacing-1',   value: 1,    label: '1'    },
  { token: '--spacing-2',   value: 2,    label: '2'    },
  { token: '--spacing-3',   value: 3,    label: '3'    },
  { token: '--spacing-4',   value: 4,    label: '4'    },
  { token: '--spacing-5',   value: 5,    label: '5'    },
  { token: '--spacing-6',   value: 6,    label: '6'    },
  { token: '--spacing-7',   value: 7,    label: '7'    },
  { token: '--spacing-8',   value: 8,    label: '8'    },
  { token: '--spacing-10',  value: 10,   label: '10'   },
  { token: '--spacing-12',  value: 12,   label: '12'   },
  { token: '--spacing-14',  value: 14,   label: '14'   },
  { token: '--spacing-16',  value: 16,   label: '16'   },
  { token: '--spacing-20',  value: 20,   label: '20'   },
  { token: '--spacing-24',  value: 24,   label: '24'   },
  { token: '--spacing-32',  value: 32,   label: '32'   },
  { token: '--spacing-40',  value: 40,   label: '40'   },
  { token: '--spacing-48',  value: 48,   label: '48'   },
  { token: '--spacing-56',  value: 56,   label: '56'   },
]

const MAX_BAR_H = 120
const MAX_VAL   = 56

const ALTERNATING = [6, 10, 14]
const CORRECTION  = [0.5, 3, 5, 7]

function getBarColor(value, isBase) {
  if (isBase)                       return 'var(--color-primary-normal)'
  if (CORRECTION.includes(value))   return 'var(--color-status-negative)'
  if (value === 1)                  return 'var(--color-status-cautionary)'
  if (value === 2)                  return 'var(--color-accent-fg-cyan)'
  if (ALTERNATING.includes(value))  return 'var(--color-status-cautionary)'
  return 'var(--color-status-positive)'
}

/* ── 스케일 차트 ─────────────────────────────────────────── */
function ScaleChart() {
  const BAR_H_NORMAL = 120  // 일반 막대 높이
  const BAR_H_BASE   = 148  // 기준 막대 높이 (조금 더 김)
  const CONTAINER_H  = 200

  return (
    <div style={{
      backgroundColor: 'var(--color-fill-normal)',
      borderRadius:    'var(--spacing-12)',
      padding:         `0 var(--spacing-24)`,
      height:          `${CONTAINER_H}px`,
      width:           '100%',
      display:         'flex',
      alignItems:      'center',
      gap:             'var(--spacing-12)',
      overflowX:       'auto',
      boxSizing:       'border-box',
    }}>
      {SCALE.map(({ token, value, label }) => {
        const isBase = value === 4
        const barW   = Math.max(value, 1)   // 너비 = 실제 spacing 값 (px)
        const barH   = isBase ? BAR_H_BASE : BAR_H_NORMAL
        const color  = getBarColor(value, isBase)

        return (
          <div key={token} style={{
            flex:           1,
            height:         `${barH}px`,
            position:       'relative',
            display:        'flex',
            alignItems:     'center',
            justifyContent: 'center',
          }}>
            {/* 막대 — 너비=실제값, 컬럼 중앙 정렬 */}
            <div style={{
              width:           `${barW}px`,
              height:          '100%',
              backgroundColor: color,
              borderRadius:    'var(--spacing-4)',
              opacity:         0.3,
            }} />
            {/* 뱃지 — 막대 중앙에 고정 */}
            <div style={{
              position:        'absolute',
              top:             '50%',
              left:            '50%',
              transform:       'translate(-50%, -50%)',
              fontSize:        'var(--font-size-caption-2)',
              lineHeight:      'var(--line-height-caption-2)',
              fontWeight:      isBase ? 'var(--font-weight-bold)' : 'var(--font-weight-semibold)',
              color:           'var(--color-static-white)',
              backgroundColor: color,
              borderRadius:    'var(--spacing-20)',
              padding:         'var(--spacing-2) var(--spacing-6)',
              whiteSpace:      'nowrap',
              zIndex:          1,
            }}>{label}</div>
          </div>
        )
      })}
    </div>
  )
}

/* ── 훑어보기 카드 ────────────────────────────────────────── */
function OverviewCard({ children, description }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-16)', flex: '1 1 calc(50% - var(--spacing-12))', maxWidth: 'calc(50% - var(--spacing-12))' }}>
      <div style={{
        backgroundColor: 'var(--color-fill-normal)',
        borderRadius:    'var(--spacing-12)',
        height:          '240px',
        display:         'flex',
        alignItems:      'center',
        justifyContent:  'center',
        overflow:        'hidden',
        position:        'relative',
      }}>
        {children}
      </div>
      <p style={{
        fontSize:      'var(--font-size-caption-1)',
        lineHeight:    'var(--line-height-caption-1)',
        letterSpacing: 'var(--letter-spacing-caption-1)',
        fontWeight:    'var(--font-weight-regular)',
        color:         'var(--color-label-alternative)',
      }}>{description}</p>
    </div>
  )
}

function SpacingBadge({ value, color = 'var(--color-status-negative)' }) {
  return (
    <span style={{
      fontSize:        'var(--font-size-caption-2)',
      fontWeight:      'var(--font-weight-bold)',
      color:           'var(--color-static-white)',
      backgroundColor: color,
      borderRadius:    'var(--spacing-20)',
      padding:         'var(--spacing-2) var(--spacing-6)',
      whiteSpace:      'nowrap',
      lineHeight:      1,
    }}>{value}</span>
  )
}

/* 카드 1: 아이콘 + 8px 간격 + 텍스트 */
function Card1() {
  const H = 56

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      {/* 벨 아이콘 */}
      <div style={{ flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', height: `${H}px` }}>
        <Icon name="bellFill" size={H} color="var(--color-label-normal)" />
      </div>

      {/* 8px 간격 표시 */}
      <div style={{ position: 'relative', width: '8px', height: `${H}px`, flexShrink: 0 }}>
        <div style={{ position: 'absolute', inset: 0, backgroundColor: 'var(--color-status-negative)', opacity: 0.25 }} />
        <div style={{ position: 'absolute', bottom: '100%', left: '50%', transform: 'translateX(-50%)', paddingBottom: 'var(--spacing-4)' }}>
          <SpacingBadge value="8" />
        </div>
      </div>

      {/* 텍스트 */}
      <span style={{
        fontSize:   'var(--font-size-title-1)',
        lineHeight: 'var(--line-height-title-1)',
        fontWeight: 'var(--font-weight-bold)',
        color:      'var(--color-label-normal)',
        flexShrink: 0,
      }}>텍스트</span>
    </div>
  )
}

/* 카드 2: 2px/1px 시각 보정 */
function Card2() {
  return (
    <div style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'stretch', position: 'relative' }}>
      {/* 상단 2px 간격 바 */}
      <div style={{ position: 'relative', height: 'var(--spacing-2)' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundColor: 'var(--color-status-negative)', opacity: 0.3 }} />
        <div style={{ position: 'absolute', bottom: '100%', left: '50%', transform: 'translateX(-50%)', paddingBottom: 'var(--spacing-4)' }}>
          <SpacingBadge value="2" />
        </div>
      </div>

      {/* 중간 행: 좌 5px | 텍스트 | 우 5px */}
      <div style={{ display: 'flex', alignItems: 'center' }}>
        {/* 좌 5px 간격 바 */}
        <div style={{ position: 'relative', width: 'var(--spacing-5)', alignSelf: 'stretch' }}>
          <div style={{ position: 'absolute', inset: 0, backgroundColor: 'var(--color-status-negative)', opacity: 0.3 }} />
          <div style={{ position: 'absolute', right: '100%', top: '50%', transform: 'translateY(-50%)', paddingRight: 'var(--spacing-4)' }}>
            <SpacingBadge value="5" />
          </div>
        </div>

        {/* 텍스트 */}
        <span style={{
          fontSize:   'var(--font-size-title-1)',
          fontWeight: 'var(--font-weight-bold)',
          color:      'var(--color-label-normal)',
        }}>라벨</span>

        {/* 우 5px 간격 바 */}
        <div style={{ position: 'relative', width: 'var(--spacing-5)', alignSelf: 'stretch' }}>
          <div style={{ position: 'absolute', inset: 0, backgroundColor: 'var(--color-status-negative)', opacity: 0.3 }} />
          <div style={{ position: 'absolute', left: '100%', top: '50%', transform: 'translateY(-50%)', paddingLeft: 'var(--spacing-4)' }}>
            <SpacingBadge value="5" />
          </div>
        </div>
      </div>

      {/* 하단 2px 간격 바 */}
      <div style={{ position: 'relative', height: 'var(--spacing-2)' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundColor: 'var(--color-status-negative)', opacity: 0.3 }} />
        <div style={{ position: 'absolute', top: '100%', left: '50%', transform: 'translateX(-50%)', paddingTop: 'var(--spacing-4)' }}>
          <SpacingBadge value="2" />
        </div>
      </div>
    </div>
  )
}

/* 카드 3: 요상한 값 설명 */
function Card3() {
  return (
    <div style={{ width: '80%', position: 'relative' }}>
      {/* 상단 라인 */}
      <div style={{ height: '1px', backgroundColor: 'var(--color-accent-fg-light-blue)', marginBottom: '0' }} />
      {/* 컨텐츠 영역 */}
      <div style={{
        backgroundColor: 'var(--color-accent-bg-light-blue)',
        display:         'flex',
        alignItems:      'center',
        justifyContent:  'center',
        height:          '100px',
        position:        'relative',
      }}>
        <span style={{
          fontSize:   'var(--font-size-title-1)',
          fontWeight: 'var(--font-weight-bold)',
          color:      'var(--color-label-normal)',
        }}>제목</span>
        {/* 세로 선 */}
        <div style={{ position: 'absolute', top: 0, bottom: 0, left: '50%', width: '1px', backgroundColor: 'var(--color-status-negative)' }} />
        {/* 57 뱃지 */}
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-4px, -50%)' }}>
          <SpacingBadge value="57" />
        </div>
      </div>
      {/* 하단 라인 */}
      <div style={{ height: '1px', backgroundColor: 'var(--color-accent-fg-light-blue)' }} />
    </div>
  )
}

/* 카드 4: 56px + 1px */
function Card4() {
  return (
    <div style={{ width: '80%', position: 'relative' }}>
      {/* 상단 라인 */}
      <div style={{ height: '1px', backgroundColor: 'var(--color-accent-fg-light-blue)' }} />
      {/* 56px 컨텐츠 */}
      <div style={{
        backgroundColor: 'var(--color-accent-bg-light-blue)',
        display:         'flex',
        alignItems:      'center',
        justifyContent:  'center',
        height:          '100px',
        position:        'relative',
      }}>
        <span style={{
          fontSize:   'var(--font-size-title-1)',
          fontWeight: 'var(--font-weight-bold)',
          color:      'var(--color-label-normal)',
        }}>제목</span>
        {/* 세로 선 */}
        <div style={{ position: 'absolute', top: 0, bottom: 0, left: '50%', width: '1px', backgroundColor: 'var(--color-status-negative)' }} />
        {/* 56 뱃지 */}
        <div style={{ position: 'absolute', top: '40%', left: '50%', transform: 'translate(-4px, -50%)' }}>
          <SpacingBadge value="56" />
        </div>
      </div>
      {/* 1px 보더 라인 */}
      <div style={{ height: '3px', backgroundColor: 'var(--color-line-neutral)', position: 'relative' }}>
        <div style={{ position: 'absolute', right: '-20px', top: '50%', transform: 'translateY(-50%)' }}>
          <SpacingBadge value="1" />
        </div>
      </div>
    </div>
  )
}

export default function SpacingPage() {
  return (
    <div>
      <h2 style={{
        fontSize:     'var(--font-size-title-3)',
        lineHeight:   'var(--line-height-title-3)',
        fontWeight:   'var(--font-weight-bold)',
        color:        'var(--color-label-normal)',
        marginBottom: 'var(--spacing-32)',
      }}>Spacing</h2>

      <Section title="Base">
        <ScaleChart />
      </Section>

      <Section title="Overview" gap="var(--spacing-24)" wrap>
        <OverviewCard description="기본적으로는 4px을 기준으로 간격을 잡습니다.">
          <Card1 />
        </OverviewCard>
        <OverviewCard description="시각 보정이 필요한 경우에는 2px씩 쪼개 조정하고, 불가피하다면 1px씩 조정합니다.">
          <Card2 />
        </OverviewCard>
        <OverviewCard description="특정 요소로 요상한 값이 되어버린 경우에는 개발자에게 상황을 설명하면 좋습니다.">
          <Card3 />
        </OverviewCard>
        <OverviewCard description="이를테면 높이가 56px인 내비게이션 바깥에 1px 선이 추가된다는 식으로 안내하는 것입니다.">
          <Card4 />
        </OverviewCard>
      </Section>
    </div>
  )
}

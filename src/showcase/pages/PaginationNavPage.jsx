import PaginationNavigation from '../../design-system/components/PaginationNavigation/PaginationNavigation'
import Section, { Case } from '../Section'

/* ── 쇼케이스용 헬퍼 컴포넌트 ─────────────────────────────────── */
function Placeholder() {
  return (
    <div style={{
      width:           'var(--spacing-56)',
      height:          'var(--spacing-24)',
      borderRadius:    'var(--spacing-4)',
      backgroundColor: 'var(--color-fill-strong)',
      flexShrink:      0,
    }} />
  )
}

function PerPageSelector() {
  return (
    <div style={{
      display:       'inline-flex',
      alignItems:    'center',
      gap:           'var(--spacing-4)',
      padding:       'var(--spacing-4) var(--spacing-8)',
      border:        '1px solid var(--color-line-normal)',
      borderRadius:  'var(--spacing-4)',
      fontSize:      'var(--font-size-label-1)',
      lineHeight:    'var(--line-height-label-1-normal)',
      letterSpacing: 'var(--letter-spacing-label-1)',
      color:         'var(--color-label-normal)',
      whiteSpace:    'nowrap',
      cursor:        'pointer',
    }}>
      10 ▾ 씩 보기
    </div>
  )
}

function GoToPage() {
  return (
    <div style={{
      display:       'inline-flex',
      alignItems:    'center',
      gap:           'var(--spacing-8)',
      fontSize:      'var(--font-size-label-1)',
      lineHeight:    'var(--line-height-label-1-normal)',
      letterSpacing: 'var(--letter-spacing-label-1)',
      color:         'var(--color-label-normal)',
      whiteSpace:    'nowrap',
    }}>
      페이지 이동
      <span style={{
        display:        'inline-flex',
        alignItems:     'center',
        justifyContent: 'center',
        minWidth:       'var(--spacing-32)',
        padding:        'var(--spacing-4) var(--spacing-8)',
        border:         '1px solid var(--color-line-normal)',
        borderRadius:   'var(--spacing-4)',
        fontSize:       'var(--font-size-label-1)',
        color:          'var(--color-label-normal)',
        fontWeight:     'var(--font-weight-regular)',
      }}>23</span>
    </div>
  )
}

export default function PaginationNavPage() {
  return (
    <div>
      <h2 style={{
        fontSize:     'var(--font-size-title-3)',
        lineHeight:   'var(--line-height-title-3)',
        fontWeight:   'var(--font-weight-bold)',
        color:        'var(--color-label-normal)',
        marginBottom: 'var(--spacing-8)',
      }}>Navigation</h2>
      <p style={{
        fontSize:      'var(--font-size-body-2)',
        lineHeight:    'var(--line-height-body-2-normal)',
        color:         'var(--color-label-alternative)',
        marginBottom:  'var(--spacing-32)',
      }}>페이지의 위치를 숫자로 표시하고 이동할 수 있는 내비게이션 방식을 사용합니다.</p>

      {/* ── variant ─────────────────────────────────────────── */}
      <Section title="variant" background="var(--color-bg-normal-alternative)" gap="var(--spacing-24)" column>
        <Case label='variant="extended"  default'>
          <div style={{ width: '100%' }}>
            <PaginationNavigation
              count={11} value={0} variant="extended"
              leadingContent={<PerPageSelector />}
              trailingContent={<GoToPage />}
            />
          </div>
        </Case>
        <Case label='variant="compact"' center>
          <PaginationNavigation count={7} value={0} variant="compact" />
        </Case>
        <Case label='variant="minimize"' center>
          <PaginationNavigation count={10} value={0} variant="minimize" />
        </Case>
      </Section>

      {/* ── leadingContent ───────────────────────────────────── */}
      <Section title="leadingContent" background="var(--color-bg-normal-alternative)" gap="var(--spacing-24)" column>
        <Case label='leadingContent  none'>
          <div style={{ width: '100%' }}>
            <PaginationNavigation count={11} value={0} variant="extended"
              leadingContent={<Placeholder />}
            />
          </div>
        </Case>
        <Case label='leadingContent  씩 보기'>
          <div style={{ width: '100%' }}>
            <PaginationNavigation count={11} value={0} variant="extended"
              leadingContent={<PerPageSelector />}
            />
          </div>
        </Case>
        <Case label='leadingContent  페이지 이동'>
          <div style={{ width: '100%' }}>
            <PaginationNavigation count={11} value={0} variant="extended"
              leadingContent={<GoToPage />}
            />
          </div>
        </Case>
      </Section>

      {/* ── trailingContent ──────────────────────────────────── */}
      <Section title="trailingContent" background="var(--color-bg-normal-alternative)" gap="var(--spacing-24)" column>
        <Case label='trailingContent  none'>
          <div style={{ width: '100%' }}>
            <PaginationNavigation count={11} value={5} variant="extended"
              trailingContent={<Placeholder />}
            />
          </div>
        </Case>
        <Case label='trailingContent  씩 보기'>
          <div style={{ width: '100%' }}>
            <PaginationNavigation count={11} value={5} variant="extended"
              trailingContent={<PerPageSelector />}
            />
          </div>
        </Case>
        <Case label='trailingContent  페이지 이동'>
          <div style={{ width: '100%' }}>
            <PaginationNavigation count={11} value={5} variant="extended"
              trailingContent={<GoToPage />}
            />
          </div>
        </Case>
      </Section>

      {/* ── preview ──────────────────────────────────────────── */}
      <Section title="preview" background="var(--color-bg-normal-alternative)" gap="var(--spacing-24)" column>
        <Case label='extended  count=59  value=0'>
          <div style={{ width: '100%' }}>
            <PaginationNavigation count={59} value={0} variant="extended" />
          </div>
        </Case>
        <Case label='extended  count=99  value=8'>
          <div style={{ width: '100%' }}>
            <PaginationNavigation count={99} value={8} variant="extended" />
          </div>
        </Case>
        <Case label='extended  count=99  value=98'>
          <div style={{ width: '100%' }}>
            <PaginationNavigation count={99} value={98} variant="extended" />
          </div>
        </Case>
        <Case label='compact  count=99  value=0' center>
          <PaginationNavigation count={99} value={0} variant="compact" />
        </Case>
        <Case label='compact  count=99  value=4' center>
          <PaginationNavigation count={99} value={4} variant="compact" />
        </Case>
        <Case label='compact  count=99  value=98' center>
          <PaginationNavigation count={99} value={98} variant="compact" />
        </Case>
        <Case label='minimize  count=10  value=0' center>
          <PaginationNavigation count={10} value={0} variant="minimize" />
        </Case>
        <Case label='minimize  count=10  value=4' center>
          <PaginationNavigation count={10} value={4} variant="minimize" />
        </Case>
        <Case label='minimize  count=10  value=9' center>
          <PaginationNavigation count={10} value={9} variant="minimize" />
        </Case>
      </Section>

      {/* ── Resource ─────────────────────────────────────────── */}
      <Section title="Resource" background="var(--color-bg-normal-alternative)" gap="var(--spacing-16)" column>
        <Case label='compact  count=2  value=0' center>
          <PaginationNavigation count={2} value={0} variant="compact" />
        </Case>
        <Case label='compact  count=1  value=0' center>
          <PaginationNavigation count={1} value={0} variant="compact" />
        </Case>
        <Case label='pageInput' center>
          <GoToPage />
        </Case>
        <Case label='perPage' center>
          <PerPageSelector />
        </Case>
      </Section>
    </div>
  )
}

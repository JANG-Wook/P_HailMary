import { useState } from 'react'
import Tab from '../../design-system/components/Tab/Tab'
import PaginationDots from '../../design-system/components/PaginationDots/PaginationDots'
import PaginationNavigation from '../../design-system/components/PaginationNavigation/PaginationNavigation'
import Section, { Case } from '../Section'

/* ══════════════════════════════════════════════════════════════
   Dot 탭
══════════════════════════════════════════════════════════════ */

function DotContent() {
  return (
    <div>
      <Section title="Variant" background="var(--color-bg-normal-alternative)" gap="var(--spacing-24)">
        <Case label='variant="normal"  default' center>
          <PaginationDots count={5} value={0} variant="normal" />
        </Case>
        <Case label='variant="white"' center>
          <PaginationDots count={5} value={0} variant="white" />
        </Case>
      </Section>

      <Section title="Size" background="var(--color-bg-normal-alternative)" gap="var(--spacing-24)">
        <Case label='size="small"' center>
          <PaginationDots count={5} value={0} size="small" />
        </Case>
        <Case label='size="medium"  default' center>
          <PaginationDots count={5} value={0} size="medium" />
        </Case>
      </Section>

      <Section title="Resource" background="var(--color-bg-normal-alternative)" gap="var(--spacing-16)">
        <Case label='size="medium"  variant="normal"' center>
          <PaginationDots count={2} value={0} size="medium" variant="normal" />
        </Case>
        <Case label='size="medium"  variant="white"' center>
          <PaginationDots count={2} value={0} size="medium" variant="white" />
        </Case>
        <Case label='size="small"  variant="normal"' center>
          <PaginationDots count={2} value={0} size="small" variant="normal" />
        </Case>
        <Case label='size="small"  variant="white"' center>
          <PaginationDots count={2} value={0} size="small" variant="white" />
        </Case>
      </Section>
    </div>
  )
}

/* ══════════════════════════════════════════════════════════════
   Navigation 탭
══════════════════════════════════════════════════════════════ */

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
      display:    'inline-flex',
      alignItems: 'center',
      gap:        'var(--spacing-8)',
    }}>
      <div style={{
        display:       'inline-flex',
        alignItems:    'center',
        gap:           'var(--spacing-1)',
        paddingLeft:   'var(--spacing-8)',
        paddingRight:  'var(--spacing-6)',
        paddingTop:    'var(--spacing-6)',
        paddingBottom: 'var(--spacing-6)',
        border:        '1px solid var(--color-line-normal)',
        borderRadius:  'var(--spacing-8)',
        fontSize:      'var(--font-size-label-1)',
        lineHeight:    'var(--line-height-label-1-normal)',
        letterSpacing: 'var(--letter-spacing-label-1)',
        fontWeight:    'var(--font-weight-medium)',
        color:         'var(--color-label-normal)',
        whiteSpace:    'nowrap',
        cursor:        'pointer',
      }}>
        10 ▾
      </div>
      <span style={{
        fontSize:      'var(--font-size-label-2)',
        lineHeight:    'var(--line-height-label-2)',
        letterSpacing: 'var(--letter-spacing-label-2)',
        fontWeight:    'var(--font-weight-medium)',
        color:         'var(--color-label-alternative)',
        whiteSpace:    'nowrap',
      }}>씩 보기</span>
    </div>
  )
}

function GoToPage() {
  return (
    <div style={{
      display:    'inline-flex',
      alignItems: 'center',
      gap:        'var(--spacing-8)',
      whiteSpace: 'nowrap',
    }}>
      <span style={{
        fontSize:      'var(--font-size-label-2)',
        lineHeight:    'var(--line-height-label-2)',
        letterSpacing: 'var(--letter-spacing-label-2)',
        fontWeight:    'var(--font-weight-medium)',
        color:         'var(--color-label-alternative)',
        textAlign:     'center',
      }}>페이지 이동</span>
      <span style={{
        display:         'inline-flex',
        alignItems:      'center',
        justifyContent:  'center',
        width:           'var(--spacing-56)',
        padding:         'var(--spacing-4) var(--spacing-6)',
        border:          '1px solid var(--color-line-normal)',
        borderRadius:    'var(--spacing-8)',
        fontSize:        'var(--font-size-label-1)',
        lineHeight:      'var(--line-height-label-1-normal)',
        letterSpacing:   'var(--letter-spacing-label-1)',
        fontWeight:      'var(--font-weight-medium)',
        color:           'var(--color-label-normal)',
        textAlign:       'center',
        backgroundColor: 'var(--color-bg-transparent)',
      }}>23</span>
    </div>
  )
}

function NavigationContent() {
  return (
    <div>
      <Section title="Variant" background="var(--color-bg-normal-alternative)" gap="var(--spacing-24)" column>
        <Case label='variant="extended"  default'>
          <div style={{ width: '760px', maxWidth: '100%' }}>
            <PaginationNavigation
              count={11} value={0} variant="extended"
              leadingContent={<PerPageSelector />}
              trailingContent={<GoToPage />}
            />
          </div>
        </Case>
        <Case label='variant="compact"'>
          <PaginationNavigation count={7} value={0} variant="compact" />
        </Case>
        <Case label='variant="minimize"'>
          <PaginationNavigation count={10} value={0} variant="minimize" />
        </Case>
      </Section>

      <Section title="LeadingContent" background="var(--color-bg-normal-alternative)" gap="var(--spacing-24)" column>
        <Case label='leadingContent  none'>
          <div style={{ width: '760px', maxWidth: '100%' }}>
            <PaginationNavigation count={11} value={0} variant="extended"
              leadingContent={<Placeholder />}
            />
          </div>
        </Case>
        <Case label='leadingContent  씩 보기'>
          <div style={{ width: '760px', maxWidth: '100%' }}>
            <PaginationNavigation count={11} value={0} variant="extended"
              leadingContent={<PerPageSelector />}
            />
          </div>
        </Case>
        <Case label='leadingContent  페이지 이동'>
          <div style={{ width: '760px', maxWidth: '100%' }}>
            <PaginationNavigation count={11} value={0} variant="extended"
              leadingContent={<GoToPage />}
            />
          </div>
        </Case>
      </Section>

      <Section title="TrailingContent" background="var(--color-bg-normal-alternative)" gap="var(--spacing-24)" column>
        <Case label='trailingContent  none'>
          <div style={{ width: '760px', maxWidth: '100%' }}>
            <PaginationNavigation count={11} value={5} variant="extended"
              trailingContent={<Placeholder />}
            />
          </div>
        </Case>
        <Case label='trailingContent  씩 보기'>
          <div style={{ width: '760px', maxWidth: '100%' }}>
            <PaginationNavigation count={11} value={5} variant="extended"
              trailingContent={<PerPageSelector />}
            />
          </div>
        </Case>
        <Case label='trailingContent  페이지 이동'>
          <div style={{ width: '760px', maxWidth: '100%' }}>
            <PaginationNavigation count={11} value={5} variant="extended"
              trailingContent={<GoToPage />}
            />
          </div>
        </Case>
      </Section>

      <Section title="Preview" background="var(--color-bg-normal-alternative)" gap="var(--spacing-24)" column>
        <Case label='extended  count=59  value=0'>
          <div style={{ width: '760px', maxWidth: '100%' }}>
            <PaginationNavigation count={59} value={0} variant="extended" />
          </div>
        </Case>
        <Case label='extended  count=99  value=8'>
          <div style={{ width: '760px', maxWidth: '100%' }}>
            <PaginationNavigation count={99} value={8} variant="extended" />
          </div>
        </Case>
        <Case label='extended  count=99  value=98'>
          <div style={{ width: '760px', maxWidth: '100%' }}>
            <PaginationNavigation count={99} value={98} variant="extended" />
          </div>
        </Case>
        <Case label='compact  count=99  value=0'>
          <div style={{ display: 'inline-flex' }}>
            <PaginationNavigation count={99} value={0} variant="compact" />
          </div>
        </Case>
        <Case label='compact  count=99  value=4'>
          <div style={{ display: 'inline-flex' }}>
            <PaginationNavigation count={99} value={4} variant="compact" />
          </div>
        </Case>
        <Case label='compact  count=99  value=98'>
          <div style={{ display: 'inline-flex' }}>
            <PaginationNavigation count={99} value={98} variant="compact" />
          </div>
        </Case>
        <Case label='minimize  count=10  value=0'>
          <div style={{ display: 'inline-flex' }}>
            <PaginationNavigation count={10} value={0} variant="minimize" />
          </div>
        </Case>
        <Case label='minimize  count=10  value=4'>
          <div style={{ display: 'inline-flex' }}>
            <PaginationNavigation count={10} value={4} variant="minimize" />
          </div>
        </Case>
        <Case label='minimize  count=10  value=9'>
          <div style={{ display: 'inline-flex' }}>
            <PaginationNavigation count={10} value={9} variant="minimize" />
          </div>
        </Case>
      </Section>

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

/* ══════════════════════════════════════════════════════════════
   메인 페이지
══════════════════════════════════════════════════════════════ */

const TAB_ITEMS = [{ label: 'Dot' }, { label: 'Navigation' }]

export default function PaginationPage() {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <div>
      <h2 style={{
        fontSize:     'var(--font-size-title-3)',
        lineHeight:   'var(--line-height-title-3)',
        fontWeight:   'var(--font-weight-bold)',
        color:        'var(--color-label-normal)',
        marginBottom: 'var(--spacing-24)',
      }}>Pagination</h2>

      <div style={{ marginBottom: 'var(--spacing-40)' }}>
        <Tab items={TAB_ITEMS} value={activeTab} onChange={setActiveTab} />
      </div>

      {activeTab === 0 ? <DotContent /> : <NavigationContent />}
    </div>
  )
}

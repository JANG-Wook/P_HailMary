import { useState, useEffect, useRef } from 'react'
import Select from '../../design-system/components/Select/Select'
import Section from '../Section'

/* ── 공용 상수 ────────────────────────────────────────────────── */
const CARD = {
  width:           '100%',
  backgroundColor: 'var(--color-fill-alternative)',
  borderRadius:    'var(--spacing-12)',
  padding:         'var(--spacing-32)',
  boxSizing:       'border-box',
}

const SEL_W = 335

/* ── 공용 헬퍼 ────────────────────────────────────────────────── */
function CodeBadge({ children, isDefault }) {
  return (
    <span style={{
      display:        'inline-flex',
      alignItems:     'center',
      position:       'relative',
      fontSize:       'var(--font-size-caption-2)',
      fontWeight:     'var(--font-weight-semibold)',
      lineHeight:     1,
      borderRadius:   'var(--spacing-4)',
      padding:        'var(--spacing-2) var(--spacing-6)',
      whiteSpace:     'nowrap',
    }}>
      <span style={{ position: 'absolute', inset: 0, borderRadius: 'var(--spacing-4)', backgroundColor: 'var(--color-fill-strong)' }} />
      <span style={{ position: 'relative', color: 'var(--color-label-normal)' }}>{children}</span>
      {isDefault && (
        <span style={{ position: 'relative', color: 'var(--color-label-alternative)', marginLeft: 'var(--spacing-4)', fontSize: 'var(--font-size-caption-2)' }}>default</span>
      )}
    </span>
  )
}

function PropHead({ name, values, defaults = [] }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-6)', marginBottom: 'var(--spacing-24)' }}>
      <span style={{ fontSize: 'var(--font-size-label-2)', fontWeight: 'var(--font-weight-semibold)', color: 'var(--color-label-strong)' }}>{name} =</span>
      {values.map(v => <CodeBadge key={v} isDefault={defaults.includes(v)}>{v}</CodeBadge>)}
    </div>
  )
}

function ItemLabel({ children }) {
  return (
    <span style={{
      fontSize:    'var(--font-size-caption-1)',
      lineHeight:  'var(--line-height-caption-1)',
      fontWeight:  'var(--font-weight-regular)',
      color:       'var(--color-label-assistive)',
      whiteSpace:  'pre-line',
    }}>{children}</span>
  )
}

function SelItem({ label, width = SEL_W, children }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 'var(--spacing-8)' }}>
      <div style={{ width: `${width}px` }}>{children}</div>
      {label && <ItemLabel>{label}</ItemLabel>}
    </div>
  )
}

function ColHead({ label, width = SEL_W }) {
  return (
    <div style={{ width: `${width}px`, flexShrink: 0, display: 'flex', justifyContent: 'center' }}>
      <ItemLabel>{label}</ItemLabel>
    </div>
  )
}

function RowLabel({ children }) {
  return (
    <div style={{ width: '80px', flexShrink: 0, paddingTop: 'var(--spacing-12)' }}>
      <span style={{
        fontSize:    'var(--font-size-caption-1)',
        fontWeight:  'var(--font-weight-semibold)',
        color:       'var(--color-label-normal)',
        whiteSpace:  'pre-line',
      }}>{children}</span>
    </div>
  )
}

const GAP = 'var(--spacing-24)'
const ROW_GAP = 'var(--spacing-20)'

/* ══════════════════════════════════════════════════════════════
   interactive — 드롭다운 헬퍼
══════════════════════════════════════════════════════════════ */
const DROPDOWN_STYLE = {
  position:        'absolute',
  top:             'calc(100% + var(--spacing-4))',
  left:            0,
  right:           0,
  zIndex:          100,
  backgroundColor: 'var(--color-bg-normal)',
  borderRadius:    'var(--spacing-12)',
  border:          '1px solid var(--color-line-neutral)',
  boxShadow:       'var(--shadow-normal-medium)',
  overflow:        'hidden',
}

function DropdownMenu({ items, onSelect, selectedValue, multiSelect = false, emptyMessage = '항목 없음' }) {
  const [hovered, setHovered] = useState(null)

  if (items.length === 0) {
    return (
      <div style={DROPDOWN_STYLE}>
        <span style={{
          display:    'block',
          padding:    'var(--spacing-12) var(--spacing-16)',
          color:      'var(--color-label-assistive)',
          fontSize:   'var(--font-size-caption-1)',
          lineHeight: 'var(--line-height-caption-1)',
        }}>{emptyMessage}</span>
      </div>
    )
  }

  return (
    <div style={DROPDOWN_STYLE}>
      {items.map((item, idx) => {
        const isSelected = !multiSelect && item === selectedValue
        return (
          <div
            key={item}
            style={{
              padding:         'var(--spacing-12) var(--spacing-16)',
              cursor:          'pointer',
              backgroundColor: hovered === idx ? 'var(--color-fill-normal)' : 'transparent',
              color:           isSelected ? 'var(--color-primary-normal)' : 'var(--color-label-normal)',
              fontSize:        'var(--font-size-body-1)',
              fontWeight:      isSelected ? 'var(--font-weight-semibold)' : 'var(--font-weight-regular)',
              lineHeight:      'var(--line-height-body-1-normal)',
              letterSpacing:   'var(--letter-spacing-body-1)',
            }}
            onMouseEnter={() => setHovered(idx)}
            onMouseLeave={() => setHovered(null)}
            onClick={() => onSelect(item)}
          >
            {item}
          </div>
        )
      })}
    </div>
  )
}

/* ══════════════════════════════════════════════════════════════
   interactive
══════════════════════════════════════════════════════════════ */
const TEXT_OPTIONS = ['서울특별시', '부산광역시', '대구광역시', '인천광역시', '광주광역시', '대전광역시', '울산광역시']
const CHIP_OPTIONS = ['React', 'TypeScript', 'Vite', 'TailwindCSS', 'Node.js', 'GraphQL', 'Zustand', 'Next.js']

function InteractiveSection() {
  const [textValue, setTextValue] = useState('')
  const [textOpen,  setTextOpen]  = useState(false)
  const [chips,     setChips]     = useState([])
  const [chipOpen,  setChipOpen]  = useState(false)

  const textRef = useRef(null)
  const chipRef = useRef(null)

  useEffect(() => {
    function handleDown(e) {
      if (textRef.current && !textRef.current.contains(e.target)) setTextOpen(false)
      if (chipRef.current && !chipRef.current.contains(e.target)) setChipOpen(false)
    }
    document.addEventListener('mousedown', handleDown)
    return () => document.removeEventListener('mousedown', handleDown)
  }, [])

  const availableChips = CHIP_OPTIONS.filter(o => !chips.includes(o))

  const removeChip = (chip) => setChips(prev => {
    const idx = prev.indexOf(chip)
    return idx === -1 ? prev : [...prev.slice(0, idx), ...prev.slice(idx + 1)]
  })

  return (
    <Section title="Test">
      <div style={CARD}>
        <div style={{ display: 'flex', gap: GAP, flexWrap: 'wrap', alignItems: 'flex-start' }}>
          {/* Text Select */}
          <div ref={textRef} style={{ position: 'relative', width: `${SEL_W}px` }}>
            <Select
              value={textValue}
              placeholder="선택해주세요."
              forceFocused={textOpen}
              onClick={() => setTextOpen(o => !o)}
            />
            {textOpen && (
              <DropdownMenu
                items={TEXT_OPTIONS}
                selectedValue={textValue}
                onSelect={(v) => { setTextValue(v); setTextOpen(false) }}
              />
            )}
          </div>

          {/* Chip Select */}
          <div ref={chipRef} style={{ position: 'relative', width: `${SEL_W}px` }}>
            <Select
              render="chip"
              value={chips}
              overflow={chips.length > 3}
              placeholder="선택해주세요."
              forceFocused={chipOpen}
              onClick={() => setChipOpen(o => !o)}
              onRemoveChip={removeChip}
            />
            {chipOpen && (
              <DropdownMenu
                items={availableChips}
                multiSelect
                onSelect={(v) => setChips(prev => [...prev, v])}
                emptyMessage="더 이상 선택할 항목이 없습니다"
              />
            )}
          </div>
        </div>
      </div>
    </Section>
  )
}

/* ══════════════════════════════════════════════════════════════
   render
══════════════════════════════════════════════════════════════ */
function RenderSection() {
  return (
    <Section title="Render">
      <div style={CARD}>
        <PropHead name="render" values={['text', 'chip']} defaults={['text']} />
        <div style={{ display: 'flex', gap: GAP, flexWrap: 'wrap' }}>
          <SelItem label="text">
            <Select value="서울특별시" />
          </SelItem>
          <SelItem label="chip">
            <Select render="chip" value={['텍스트', '텍스트', '텍스트']} onRemoveChip={() => {}} />
          </SelItem>
        </div>
      </div>
    </Section>
  )
}

/* ══════════════════════════════════════════════════════════════
   active
══════════════════════════════════════════════════════════════ */
function ActiveSection() {
  return (
    <Section title="Active">
      <div style={CARD}>
        <div style={{ display: 'flex', gap: GAP, flexWrap: 'wrap' }}>
          <SelItem label="false">
            <Select placeholder="선택해주세요." />
          </SelItem>
          <SelItem label="true">
            <Select value="서울특별시" />
          </SelItem>
        </div>
      </div>
    </Section>
  )
}

/* ══════════════════════════════════════════════════════════════
   focus
══════════════════════════════════════════════════════════════ */
function FocusSection() {
  return (
    <Section title="Focus">
      <div style={CARD}>
        <PropHead name="forceFocused" values={['false', 'true']} defaults={['false']} />
        <div style={{ display: 'flex', gap: GAP, flexWrap: 'wrap' }}>
          <SelItem label="false">
            <Select placeholder="선택해주세요." />
          </SelItem>
          <SelItem label="true">
            <Select placeholder="선택해주세요." forceFocused />
          </SelItem>
        </div>
      </div>
    </Section>
  )
}

/* ══════════════════════════════════════════════════════════════
   status
══════════════════════════════════════════════════════════════ */
function StatusSection() {
  const STATUS_COL_GAP = 'var(--spacing-16)'

  function SelCol({ status, placeholder, value, forceFocused }) {
    return (
      <div style={{ width: `${SEL_W}px`, flexShrink: 0 }}>
        <Select
          status={status}
          placeholder={placeholder}
          value={value ?? ''}
          forceFocused={forceFocused}
        />
      </div>
    )
  }

  const rowStyle = { display: 'flex', gap: STATUS_COL_GAP, alignItems: 'flex-start' }
  const PH = '선택해주세요.'

  return (
    <Section title="Status">
      <div style={CARD}>
        <PropHead name="status" values={['normal', 'negative']} defaults={['normal']} />

        <div style={{ display: 'flex', gap: STATUS_COL_GAP, marginBottom: 'var(--spacing-16)' }}>
          <div style={{ width: '80px', flexShrink: 0 }} />
          <ColHead label="normal" />
          <ColHead label="negative" />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: ROW_GAP }}>
          <div style={rowStyle}>
            <RowLabel>inactive</RowLabel>
            <SelCol status="normal"   placeholder={PH} />
            <SelCol status="negative" placeholder={PH} />
          </div>
          <div style={rowStyle}>
            <RowLabel>focus</RowLabel>
            <SelCol status="normal"   placeholder={PH} forceFocused />
            <SelCol status="negative" placeholder={PH} forceFocused />
          </div>
          <div style={rowStyle}>
            <RowLabel>active</RowLabel>
            <SelCol status="normal"   value="서울특별시" />
            <SelCol status="negative" value="잘못된 선택" />
          </div>
          <div style={rowStyle}>
            <RowLabel>{'active\nfocus'}</RowLabel>
            <SelCol status="normal"   value="서울특별시" forceFocused />
            <SelCol status="negative" value="잘못된 선택" forceFocused />
          </div>
        </div>
      </div>
    </Section>
  )
}

/* ══════════════════════════════════════════════════════════════
   disable
══════════════════════════════════════════════════════════════ */
function DisableSection() {
  const rowStyle = { display: 'flex', gap: GAP, alignItems: 'flex-start' }
  const PH = '선택해주세요.'

  return (
    <Section title="Disable">
      <div style={CARD}>
        <PropHead name="disabled" values={['false', 'true']} defaults={['false']} />

        <div style={{ display: 'flex', gap: GAP, marginBottom: 'var(--spacing-16)' }}>
          <div style={{ width: '80px', flexShrink: 0 }} />
          <ColHead label="false" />
          <ColHead label="true" />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: ROW_GAP }}>
          <div style={rowStyle}>
            <RowLabel>inactive</RowLabel>
            <div style={{ width: `${SEL_W}px`, flexShrink: 0 }}>
              <Select placeholder={PH} />
            </div>
            <div style={{ width: `${SEL_W}px`, flexShrink: 0 }}>
              <Select placeholder={PH} disabled />
            </div>
          </div>
          <div style={rowStyle}>
            <RowLabel>active</RowLabel>
            <div style={{ width: `${SEL_W}px`, flexShrink: 0 }}>
              <Select value="서울특별시" />
            </div>
            <div style={{ width: `${SEL_W}px`, flexShrink: 0 }}>
              <Select value="서울특별시" disabled />
            </div>
          </div>
          <div style={rowStyle}>
            <RowLabel>chip</RowLabel>
            <div style={{ width: `${SEL_W}px`, flexShrink: 0 }}>
              <Select render="chip" value={['텍스트', '텍스트', '텍스트']} onRemoveChip={() => {}} />
            </div>
            <div style={{ width: `${SEL_W}px`, flexShrink: 0 }}>
              <Select render="chip" value={['텍스트', '텍스트', '텍스트']} disabled />
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}

/* ══════════════════════════════════════════════════════════════
   heading
══════════════════════════════════════════════════════════════ */
function HeadingSection() {
  return (
    <Section title="Heading">
      <div style={CARD}>
        <PropHead name="heading" values={['none', '"string"']} defaults={['none']} />
        <div style={{ display: 'flex', gap: GAP, flexWrap: 'wrap', alignItems: 'flex-end' }}>
          <SelItem label="none">
            <Select placeholder="선택해주세요." />
          </SelItem>
          <SelItem label='"string"'>
            <Select heading="지역 선택" placeholder="선택해주세요." />
          </SelItem>
        </div>
      </div>
    </Section>
  )
}

/* ══════════════════════════════════════════════════════════════
   requiredBadge
══════════════════════════════════════════════════════════════ */
function RequiredBadgeSection() {
  return (
    <Section title="RequiredBadge">
      <div style={CARD}>
        <PropHead name="required" values={['false', 'true']} defaults={['false']} />
        <div style={{ display: 'flex', gap: GAP, flexWrap: 'wrap', alignItems: 'flex-end' }}>
          <SelItem label="false">
            <Select heading="지역 선택" placeholder="선택해주세요." />
          </SelItem>
          <SelItem label="true">
            <Select heading="지역 선택" required placeholder="선택해주세요." />
          </SelItem>
        </div>
      </div>
    </Section>
  )
}

/* ══════════════════════════════════════════════════════════════
   description
══════════════════════════════════════════════════════════════ */
function DescriptionSection() {
  return (
    <Section title="Description">
      <div style={CARD}>
        <PropHead name="description" values={['none', '"string"']} defaults={['none']} />
        <div style={{ display: 'flex', gap: GAP, flexWrap: 'wrap', alignItems: 'flex-start' }}>
          <SelItem label="none">
            <Select heading="카테고리" placeholder="선택해주세요." />
          </SelItem>
          <SelItem label='"string"'>
            <Select heading="카테고리" description="관심 있는 분야를 선택해주세요." placeholder="선택해주세요." />
          </SelItem>
        </div>
      </div>
    </Section>
  )
}

/* ══════════════════════════════════════════════════════════════
   overflow
══════════════════════════════════════════════════════════════ */
function OverflowSection() {
  const OVF_GAP = 'var(--spacing-16)'
  const rowStyle = { display: 'flex', gap: OVF_GAP, alignItems: 'flex-start' }
  const LONG_TEXT = '값, 값, 값, 값, 값, 값, 값, 값, 값, 값, 값, 값, 값, 값, 값, 값, 값, 값, 값, 값, 값, 값, 값, 값, 값, 값, 값'
  const CHIPS = ['텍스트', '텍스트', '텍스트', '텍스트', '텍스트', '텍스트']

  return (
    <Section title="Overflow">
      <div style={CARD}>
        <PropHead name="overflow" values={['false', 'true']} defaults={['false']} />

        <div style={{ display: 'flex', gap: OVF_GAP, marginBottom: 'var(--spacing-16)' }}>
          <ColHead label="false" />
          <ColHead label="true" />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: ROW_GAP }}>
          {/* text 오버플로우 */}
          <div style={rowStyle}>
            <SelItem label="text">
              <Select value={LONG_TEXT} />
            </SelItem>
            <SelItem label="text overflow">
              <Select value={LONG_TEXT} overflow />
            </SelItem>
          </div>
          {/* chip 오버플로우 */}
          <div style={rowStyle}>
            <SelItem label="chip">
              <Select render="chip" value={CHIPS} onRemoveChip={() => {}} />
            </SelItem>
            <SelItem label="chip overflow">
              <Select render="chip" value={CHIPS} overflow onRemoveChip={() => {}} />
            </SelItem>
          </div>
        </div>
      </div>
    </Section>
  )
}

/* ══════════════════════════════════════════════════════════════
   leadingIcon
══════════════════════════════════════════════════════════════ */
function LeadingIconSection() {
  return (
    <Section title="LeadingIcon">
      <div style={CARD}>
        <PropHead name="leadingIcon" values={['false', 'true']} defaults={['false']} />
        <div style={{ display: 'flex', gap: GAP, flexWrap: 'wrap' }}>
          <SelItem label="false">
            <Select placeholder="선택해주세요." />
          </SelItem>
          <SelItem label="true">
            <Select leadingIcon="search" placeholder="선택해주세요." />
          </SelItem>
        </div>
      </div>
    </Section>
  )
}

/* ══════════════════════════════════════════════════════════════
   페이지
══════════════════════════════════════════════════════════════ */
export default function SelectPage() {
  return (
    <div>
      <h2 style={{
        fontSize:     'var(--font-size-title-3)',
        lineHeight:   'var(--line-height-title-3)',
        fontWeight:   'var(--font-weight-bold)',
        color:        'var(--color-label-normal)',
        marginBottom: 'var(--spacing-32)',
      }}>Select</h2>

      <InteractiveSection />
      <RenderSection />
      <ActiveSection />
      <FocusSection />
      <StatusSection />
      <DisableSection />
      <HeadingSection />
      <RequiredBadgeSection />
      <DescriptionSection />
      <OverflowSection />
      <LeadingIconSection />
    </div>
  )
}

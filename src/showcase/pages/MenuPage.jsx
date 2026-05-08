import { useState } from 'react'
import Menu from '../../design-system/components/Menu/Menu'
import Section, { Case } from '../Section'

/* ── 공통 아이템 셋 ── */
const items9 = Array.from({ length: 9 }, (_, i) => ({
  label: `항목 ${i + 1}`,
  onClick: () => {},
}))

const items9WithCaption = [
  { label: '최신순',   caption: '최근 등록된 항목부터 표시',  onClick: () => {} },
  { label: '인기순',   caption: '조회수가 높은 항목부터 표시', onClick: () => {} },
  { label: '가나다순', caption: '알파벳 오름차순으로 정렬',   onClick: () => {} },
  { label: '날짜순',   caption: '등록일 기준 오름차순',       onClick: () => {} },
  { label: '이름순',   caption: '이름 알파벳순 정렬',        onClick: () => {} },
]

const manyItems = Array.from({ length: 12 }, (_, i) => ({
  label: `항목 ${i + 1}`,
  onClick: () => {},
}))

/* ── Resource용 고정 아이템셋 ── */
const rNormal   = [{ label: '텍스트', onClick: () => {} }]
const rActive   = [{ label: '텍스트', active: true, onClick: () => {} }]
const rCaption  = [{ label: '텍스트', caption: '보조 텍스트', onClick: () => {} }]
const rDisabled = [{ label: '텍스트', disabled: true, onClick: () => {} }]
const rCaptionActive = [{ label: '텍스트', caption: '보조 텍스트', active: true, onClick: () => {} }]
const rCaptionDisabled = [{ label: '텍스트', caption: '보조 텍스트', disabled: true, onClick: () => {} }]

export default function MenuPage() {
  const [activeNormal,   setActiveNormal]   = useState(null)
  const [activeRadio,    setActiveRadio]    = useState(null)
  const [activeCheck,    setActiveCheck]    = useState([])
  const [activeAction,   setActiveAction]   = useState([])

  const interactiveNormal = items9.map((it, i) => ({
    ...it,
    active: i === activeNormal,
    onClick: () => setActiveNormal(i),
  }))

  const interactiveRadio = items9.map((it, i) => ({
    ...it,
    active: i === activeRadio,
    onClick: () => setActiveRadio(i),
  }))

  const interactiveCheck = items9.map((it, i) => ({
    ...it,
    active: activeCheck.includes(i),
    onClick: () => setActiveCheck(prev =>
      prev.includes(i) ? prev.filter(x => x !== i) : [...prev, i]
    ),
  }))

  const actionItems = items9.map((it, i) => ({
    ...it,
    active: activeAction.includes(i),
    onClick: () => setActiveAction(prev =>
      prev.includes(i) ? prev.filter(x => x !== i) : [...prev, i]
    ),
  }))

  return (
    <div>
      <h2 style={{
        fontSize:     'var(--font-size-title-3)',
        lineHeight:   'var(--line-height-title-3)',
        fontWeight:   'var(--font-weight-bold)',
        color:        'var(--color-label-normal)',
        marginBottom: 'var(--spacing-32)',
      }}>Menu</h2>

      {/* ── variant ─────────────────────────────────────────── */}
      <Section title="Variant" gap="var(--spacing-24)">
        <Case label="Normal">
          <Menu items={interactiveNormal} variant="normal" />
        </Case>
        <Case label="Radio">
          <Menu items={interactiveRadio} variant="radio" />
        </Case>
        <Case label="Checkbox">
          <Menu items={interactiveCheck} variant="checkbox" />
        </Case>
      </Section>

      {/* ── Cell Padding ─────────────────────────────────────── */}
      <Section title="Cell Padding" gap="var(--spacing-24)">
        <Case label="8px (기본)">
          <Menu items={items9} cellPadding="8px" />
        </Case>
        <Case label="12px">
          <Menu items={items9} cellPadding="12px" />
        </Case>
      </Section>

      {/* ── menuActionArea ───────────────────────────────────── */}
      <Section title="MenuActionArea" gap="var(--spacing-24)">
        <Case label="false">
          <Menu variant="checkbox" items={actionItems} />
        </Case>
        <Case label="true">
          <Menu
            variant="checkbox"
            items={actionItems}
            actionArea={{
              leadingLabel:    '초기화',
              onLeadingAction:  () => setActiveAction([]),
              trailingLabel:   '적용',
              onTrailingAction: () => {},
            }}
          />
        </Case>
      </Section>

      {/* ── scroll ───────────────────────────────────────────── */}
      <Section title="Scroll" gap="var(--spacing-24)">
        <Case label="false">
          <div style={{ width: '240px' }}>
            <Menu items={manyItems} />
          </div>
        </Case>
        <Case label="true">
          <div style={{ width: '240px' }}>
            <Menu items={manyItems} scrollable />
          </div>
        </Case>
      </Section>

      {/* ── Resource / Item Cell ─────────────────────────────── */}
      <Section title="Resource / Item Cell" column gap="var(--spacing-32)">

        {/* Normal */}
        <div>
          <p style={{
            fontSize:      'var(--font-size-label-1)',
            fontWeight:    'var(--font-weight-medium)',
            color:         'var(--color-label-alternative)',
            marginBottom:  'var(--spacing-12)',
            margin:        0,
            paddingBottom: 'var(--spacing-12)',
          }}>Normal</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--spacing-16)', alignItems: 'flex-start' }}>
            <Case label="기본"><Menu items={rNormal} /></Case>
            <Case label="Active"><Menu items={rActive} /></Case>
            <Case label="Caption"><Menu items={rCaption} /></Case>
            <Case label="Caption + Active"><Menu items={rCaptionActive} /></Case>
            <Case label="Disabled"><Menu items={rDisabled} /></Case>
            <Case label="Caption + Disabled"><Menu items={rCaptionDisabled} /></Case>
          </div>
        </div>

        {/* Normal 12px */}
        <div>
          <p style={{
            fontSize:      'var(--font-size-label-1)',
            fontWeight:    'var(--font-weight-medium)',
            color:         'var(--color-label-alternative)',
            margin:        0,
            paddingBottom: 'var(--spacing-12)',
          }}>Normal — cellPadding 12px</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--spacing-16)', alignItems: 'flex-start' }}>
            <Case label="기본"><Menu items={rNormal} cellPadding="12px" /></Case>
            <Case label="Active"><Menu items={rActive} cellPadding="12px" /></Case>
            <Case label="Caption"><Menu items={rCaption} cellPadding="12px" /></Case>
            <Case label="Disabled"><Menu items={rDisabled} cellPadding="12px" /></Case>
          </div>
        </div>

        {/* Checkbox */}
        <div>
          <p style={{
            fontSize:      'var(--font-size-label-1)',
            fontWeight:    'var(--font-weight-medium)',
            color:         'var(--color-label-alternative)',
            margin:        0,
            paddingBottom: 'var(--spacing-12)',
          }}>Checkbox</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--spacing-16)', alignItems: 'flex-start' }}>
            <Case label="Unchecked"><Menu variant="checkbox" items={rNormal} /></Case>
            <Case label="Checked"><Menu variant="checkbox" items={rActive} /></Case>
            <Case label="Caption"><Menu variant="checkbox" items={rCaption} /></Case>
            <Case label="Caption + Checked"><Menu variant="checkbox" items={rCaptionActive} /></Case>
            <Case label="Disabled (unchecked)"><Menu variant="checkbox" items={rDisabled} /></Case>
            <Case label="Disabled (checked)"><Menu variant="checkbox" items={[{ label: '텍스트', active: true, disabled: true, onClick: () => {} }]} /></Case>
          </div>
        </div>

        {/* Radio */}
        <div>
          <p style={{
            fontSize:      'var(--font-size-label-1)',
            fontWeight:    'var(--font-weight-medium)',
            color:         'var(--color-label-alternative)',
            margin:        0,
            paddingBottom: 'var(--spacing-12)',
          }}>Radio</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--spacing-16)', alignItems: 'flex-start' }}>
            <Case label="Unselected"><Menu variant="radio" items={rNormal} /></Case>
            <Case label="Selected"><Menu variant="radio" items={rActive} /></Case>
            <Case label="Caption"><Menu variant="radio" items={rCaption} /></Case>
            <Case label="Caption + Selected"><Menu variant="radio" items={rCaptionActive} /></Case>
            <Case label="Disabled (unselected)"><Menu variant="radio" items={rDisabled} /></Case>
            <Case label="Disabled (selected)"><Menu variant="radio" items={[{ label: '텍스트', active: true, disabled: true, onClick: () => {} }]} /></Case>
          </div>
        </div>

      </Section>

      {/* ── Resource / Item Title ────────────────────────────── */}
      <Section title="Resource / Item Title">
        <Case label="Title row">
          <Menu items={[
            { type: 'title', label: '섹션 제목' },
            { label: '항목 1', onClick: () => {} },
            { label: '항목 2', onClick: () => {} },
            { label: '항목 3', onClick: () => {} },
          ]} />
        </Case>
      </Section>

      {/* ── Resource / Action Area ───────────────────────────── */}
      <Section title="Resource / Action Area" gap="var(--spacing-24)">
        <Case label="actionArea = false">
          <Menu
            variant="checkbox"
            items={[
              { label: '알림 받기',   onClick: () => {} },
              { label: '이메일 수신', onClick: () => {} },
              { label: '문자 수신',   onClick: () => {} },
            ]}
          />
        </Case>
        <Case label="actionArea = true">
          <Menu
            variant="checkbox"
            items={[
              { label: '알림 받기',   active: true,  onClick: () => {} },
              { label: '이메일 수신', active: true,  onClick: () => {} },
              { label: '문자 수신',   onClick: () => {} },
              { label: '푸시 알림',   onClick: () => {} },
              { label: '마케팅 수신', disabled: true, onClick: () => {} },
            ]}
            actionArea={{
              leadingLabel:    '초기화',
              onLeadingAction:  () => {},
              trailingLabel:   '적용',
              onTrailingAction: () => {},
            }}
          />
        </Case>
      </Section>
    </div>
  )
}

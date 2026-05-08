import { useState } from 'react'
import Textfield from '../../design-system/components/Textfield/Textfield'
import Icon      from '../../design-system/components/Icon/Icon'
import Section   from '../Section'
import Menu      from '../../design-system/components/Menu/Menu'

/* ── 공용 상수 ────────────────────────────────────────────────── */
const CARD = {
  width:           '100%',
  backgroundColor: 'var(--color-fill-normal)',
  borderRadius:    'var(--spacing-12)',
  padding:         'var(--spacing-32)',
  boxSizing:       'border-box',
}

const TF_W       = 280
const TF_INTER_W = '280px'
const LABEL_W    = '110px'
const PH         = '텍스트를 입력해 주세요.'

/* ── 공용 헬퍼 ────────────────────────────────────────────────── */
function CodeBadge({ children }) {
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', position: 'relative',
      fontSize: 'var(--font-size-caption-2)', fontWeight: 'var(--font-weight-semibold)',
      lineHeight: 1, borderRadius: 'var(--spacing-4)',
      padding: 'var(--spacing-2) var(--spacing-6)', whiteSpace: 'nowrap' }}>
      <span style={{ position: 'absolute', inset: 0, borderRadius: 'var(--spacing-4)', backgroundColor: 'var(--color-fill-strong)' }} />
      <span style={{ position: 'relative', color: 'var(--color-label-normal)' }}>{children}</span>
    </span>
  )
}

function PropHead({ name, values }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-6)', marginBottom: 'var(--spacing-24)' }}>
      <span style={{ fontSize: 'var(--font-size-label-2)', fontWeight: 'var(--font-weight-semibold)', color: 'var(--color-label-strong)' }}>{name} =</span>
      {values.map(v => <CodeBadge key={v}>{v}</CodeBadge>)}
    </div>
  )
}

function ItemLabel({ children }) {
  return (
    <span style={{
      fontSize: 'var(--font-size-caption-1)', lineHeight: 'var(--line-height-caption-1)',
      fontWeight: 'var(--font-weight-regular)', color: 'var(--color-label-assistive)',
    }}>{children}</span>
  )
}

function TFItem({ label, width = TF_W, children }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 'var(--spacing-8)' }}>
      <div style={{ width: `${width}px` }}>{children}</div>
      {label && <ItemLabel>{label}</ItemLabel>}
    </div>
  )
}

function SubSection({ title, children }) {
  return (
    <div style={{ marginTop: 'var(--spacing-32)', paddingTop: 'var(--spacing-24)', borderTop: '1px solid var(--color-line-alternative)' }}>
      <p style={{ fontSize: 'var(--font-size-label-1)', fontWeight: 'var(--font-weight-semibold)', color: 'var(--color-label-normal)', marginBottom: 'var(--spacing-20)' }}>{title}</p>
      {children}
    </div>
  )
}

/* ── trailing 버튼 헬퍼 ──────────────────────────────────────── */
function BtnIcon({ disabled } = {}) {
  return (
    <button disabled={disabled} tabIndex={-1} style={{
      background: 'none', border: 'none', cursor: disabled ? 'not-allowed' : 'pointer',
      padding: 'var(--spacing-4)', display: 'flex', alignItems: 'center',
    }}>
      <Icon name="circleCloseFill" size={20} color={disabled ? 'var(--color-label-disable)' : 'var(--color-label-assistive)'} />
    </button>
  )
}

/* ── status 아이콘 / trailing 헬퍼 ───────────────────────────── */
function StatusIcon({ status }) {
  if (status === 'positive') return <Icon name="circleCheckFill" size={20} color="var(--color-primary-normal)" />
  if (status === 'negative') return <Icon name="circleExclamationFill" size={20} color="var(--color-status-negative)" />
  return null
}

function ClearBtn({ onClick }) {
  return (
    <button tabIndex={-1} onClick={onClick} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '0', display: 'flex', alignItems: 'center' }}>
      <Icon name="circleCloseFill" size={20} color="var(--color-label-assistive)" />
    </button>
  )
}

function buildTrailing(status, showClear) {
  const hasIcon = status !== 'normal'
  if (!hasIcon && !showClear) return null
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-4)' }}>
      {hasIcon && <StatusIcon status={status} />}
      {showClear && <ClearBtn />}
    </div>
  )
}

/* ══════════════════════════════════════════════════════════════
   인터랙션
══════════════════════════════════════════════════════════════ */
function InteractionSection() {
  const [value,   setValue]   = useState('')
  const [focused, setFocused] = useState(false)

  const stateLabel =
    focused && value ? 'active + focus' :
    focused          ? 'focus'          :
    value            ? 'active'         :
                       'inactive'

  return (
    <Section title="Test">
      <div style={CARD}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-8)', width: `${TF_W}px` }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-6)' }}>
            <span style={{ fontSize: 'var(--font-size-label-2)', fontWeight: 'var(--font-weight-semibold)', color: 'var(--color-label-normal)' }}>state</span>
            <CodeBadge>{stateLabel}</CodeBadge>
          </div>
          <Textfield
            placeholder={PH}
            value={value}
            onChange={e => setValue(e.target.value)}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            forceFocused={focused}
            trailingContent={value ? <ClearBtn onClick={() => setValue('')} /> : null}
          />
        </div>
      </div>
    </Section>
  )
}

/* ══════════════════════════════════════════════════════════════
   status
══════════════════════════════════════════════════════════════ */
const STATUS_DESC = {
  normal:   '메시지에 마침표를 찍어요.',
  positive: '성공 메시지를 나타내요.',
  negative: '에러 메시지를 나타내요.',
}
const STATUSES = ['normal', 'positive', 'negative']

function StatusSection() {
  function TFCol({ status, placeholder = '', value, forceFocused, disabled, trailing = null }) {
    return (
      <div style={{ width: '280px', flexShrink: 0 }}>
        <Textfield
          status={status}
          heading="주제"
          placeholder={placeholder}
          defaultValue={value}
          description={STATUS_DESC[status]}
          disabled={disabled}
          forceFocused={forceFocused}
          trailingContent={trailing}
        />
      </div>
    )
  }

  const statusIcon = (s) => s === 'positive'
    ? <Icon name="circleCheckFill" size={20} color="var(--color-primary-normal)" />
    : s === 'negative'
      ? <Icon name="circleExclamationFill" size={20} color="var(--color-status-negative)" />
      : null

  const withClear = (icon) => (
    <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-4)' }}>
      {icon}
      <ClearBtn />
    </div>
  )

  function RowHead({ label }) {
    return (
      <div style={{ width: '88px', flexShrink: 0, paddingTop: 'var(--spacing-20)' }}>
        <span style={{ fontSize: 'var(--font-size-caption-1)', fontWeight: 'var(--font-weight-semibold)', color: 'var(--color-label-normal)', whiteSpace: 'pre-line' }}>{label}</span>
      </div>
    )
  }

  const GAP = 'var(--spacing-20)'
  const rowStyle = { display: 'flex', gap: GAP, alignItems: 'flex-start' }

  return (
    <Section title="Status">
      <div style={CARD}>
        <PropHead name="status" values={STATUSES} />

        {/* 열 헤더 */}
        <div style={{ display: 'flex', gap: GAP, marginBottom: 'var(--spacing-16)' }}>
          <div style={{ width: '88px', flexShrink: 0 }} />
          {STATUSES.map(s => (
            <div key={s} style={{ width: '280px', flexShrink: 0, display: 'flex', justifyContent: 'center' }}>
              <ItemLabel>{s}</ItemLabel>
            </div>
          ))}
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: GAP }}>
          {/* Row 1: inactive — negative만 아이콘 */}
          <div style={rowStyle}>
            <RowHead label="inactive" />
            <TFCol status="normal"   placeholder={PH} />
            <TFCol status="positive" placeholder={PH} />
            <TFCol status="negative" placeholder={PH} trailing={statusIcon('negative')} />
          </div>

          {/* Row 2: focus — normal/positive=파란테두리, negative=빨간테두리+아이콘 */}
          <div style={rowStyle}>
            <RowHead label="focus" />
            <TFCol status="normal"   placeholder={PH} forceFocused />
            <TFCol status="positive" placeholder={PH} forceFocused />
            <TFCol status="negative" placeholder={PH} forceFocused trailing={statusIcon('negative')} />
          </div>

          {/* Row 3: active — positive/negative 아이콘 표시 */}
          <div style={rowStyle}>
            <RowHead label="active" />
            <TFCol status="normal"   value="값" />
            <TFCol status="positive" value="값" trailing={statusIcon('positive')} />
            <TFCol status="negative" value="값" trailing={statusIcon('negative')} />
          </div>

          {/* Row 4: active focus + trailing — forceFocused + 아이콘 + clear */}
          <div style={rowStyle}>
            <RowHead label={'active +\ntrailing'} />
            <TFCol status="normal"   value="값" forceFocused trailing={withClear(null)} />
            <TFCol status="positive" value="값" forceFocused trailing={withClear(statusIcon('positive'))} />
            <TFCol status="negative" value="값" forceFocused trailing={withClear(statusIcon('negative'))} />
          </div>

          {/* Row 5: disabled */}
          <div style={rowStyle}>
            <RowHead label="disabled" />
            <TFCol status="normal"   placeholder={PH} disabled />
            <TFCol status="positive" value="값"       disabled trailing={statusIcon('positive')} />
            <TFCol status="negative" placeholder={PH} disabled trailing={statusIcon('negative')} />
          </div>
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
        <div style={{ display: 'flex', gap: 'var(--spacing-24)', flexWrap: 'wrap' }}>
          <TFItem label="false">
            <Textfield heading="주제" placeholder={PH} description="메시지에 마침표를 찍어요." />
          </TFItem>
          <TFItem label="true">
            <Textfield heading="주제" defaultValue="입력된 텍스트" description="메시지에 마침표를 찍어요." />
          </TFItem>
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
        <PropHead name="forceFocused" values={['false', 'true']} />
        <div style={{ display: 'flex', gap: 'var(--spacing-24)', flexWrap: 'wrap', alignItems: 'flex-end' }}>
          <TFItem label="false">
            <Textfield heading="주제" placeholder={PH} description="메시지에 마침표를 찍어요." />
          </TFItem>
          <TFItem label="true">
            <Textfield heading="주제" placeholder={PH} description="메시지에 마침표를 찍어요." forceFocused />
          </TFItem>
        </div>
      </div>
    </Section>
  )
}

/* ══════════════════════════════════════════════════════════════
   disable
══════════════════════════════════════════════════════════════ */
function DisableSection() {
  return (
    <Section title="Disable">
      <div style={CARD}>
        <PropHead name="disabled" values={['false', 'true']} />
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-20)' }}>
          <div style={{ display: 'flex', gap: 'var(--spacing-24)', flexWrap: 'wrap' }}>
            <TFItem label="false">
              <Textfield heading="주제" placeholder={PH} description="메시지에 마침표를 찍어요." />
            </TFItem>
            <TFItem label="true">
              <Textfield heading="주제" placeholder={PH} description="메시지에 마침표를 찍어요." disabled />
            </TFItem>
          </div>
          <div style={{ display: 'flex', gap: 'var(--spacing-24)', flexWrap: 'wrap' }}>
            <TFItem label="false (active)">
              <Textfield heading="주제" defaultValue="입력된 텍스트" description="메시지에 마침표를 찍어요." />
            </TFItem>
            <TFItem label="true (active)">
              <Textfield heading="주제" defaultValue="입력된 텍스트" description="메시지에 마침표를 찍어요." disabled />
            </TFItem>
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
        <PropHead name="heading" values={['none', '"string"']} />
        <div style={{ display: 'flex', gap: 'var(--spacing-24)', flexWrap: 'wrap', alignItems: 'flex-end' }}>
          <TFItem label="none">
            <Textfield placeholder={PH} />
          </TFItem>
          <TFItem label='"string"'>
            <Textfield heading="이름" placeholder="실명을 입력해 주세요." />
          </TFItem>
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
        <PropHead name="required" values={['false', 'true']} />
        <div style={{ display: 'flex', gap: 'var(--spacing-24)', flexWrap: 'wrap', alignItems: 'flex-end' }}>
          <TFItem label="false">
            <Textfield heading="이메일" placeholder="example@email.com" />
          </TFItem>
          <TFItem label="true">
            <Textfield heading="이메일" required placeholder="example@email.com" />
          </TFItem>
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
        <PropHead name="description" values={['none', '"string"']} />
        <div style={{ display: 'flex', gap: 'var(--spacing-24)', flexWrap: 'wrap', alignItems: 'flex-start' }}>
          <TFItem label="none">
            <Textfield heading="비밀번호" placeholder={PH} />
          </TFItem>
          <TFItem label='"string"'>
            <Textfield heading="비밀번호" description="영문, 숫자, 특수문자 포함 8자 이상" placeholder={PH} />
          </TFItem>
        </div>
      </div>
    </Section>
  )
}

/* ══════════════════════════════════════════════════════════════
   icon
══════════════════════════════════════════════════════════════ */
function IconSection() {
  return (
    <Section title="Icon">
      <div style={CARD}>
        <PropHead name="icon" values={['false', 'true']} />
        <div style={{ display: 'flex', gap: 'var(--spacing-24)', flexWrap: 'wrap' }}>
          <TFItem label="false">
            <Textfield placeholder="검색어를 입력해 주세요." />
          </TFItem>
          <TFItem label="true">
            <Textfield icon="search" placeholder="검색어를 입력해 주세요." />
          </TFItem>
        </div>
      </div>
    </Section>
  )
}

/* ══════════════════════════════════════════════════════════════
   trailingButton
══════════════════════════════════════════════════════════════ */
function TrailingButtonSection() {
  const COL_W = '280px'
  const colHeadStyle = {
    fontSize: 'var(--font-size-caption-1)', fontWeight: 'var(--font-weight-semibold)',
    color: 'var(--color-label-normal)', textAlign: 'center',
  }
  const rowLabelStyle = {
    fontSize: 'var(--font-size-caption-1)', fontWeight: 'var(--font-weight-semibold)',
    color: 'var(--color-label-normal)', whiteSpace: 'pre-line',
  }
  const ROW_LABEL_W = '100px'
  const GAP = 'var(--spacing-20)'

  const TB_NORMAL = { label: '텍스트', variant: 'normal' }
  const TB_NORMAL_DISABLED = { label: '텍스트', variant: 'normal', disabled: true }

  return (
    <Section title="TrailingButton">
      <div style={CARD}>
        <PropHead name="trailingButton" values={['false', 'true']} />

        {/* 열 헤더 */}
        <div style={{ display: 'flex', gap: GAP, marginBottom: 'var(--spacing-16)' }}>
          <div style={{ width: ROW_LABEL_W, flexShrink: 0 }} />
          <div style={{ width: COL_W, flexShrink: 0 }}><span style={colHeadStyle}>false</span></div>
          <div style={{ width: COL_W, flexShrink: 0 }}><span style={colHeadStyle}>true</span></div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: GAP }}>
          {/* Row 1: active */}
          <div style={{ display: 'flex', gap: GAP, alignItems: 'flex-start' }}>
            <div style={{ width: ROW_LABEL_W, flexShrink: 0, paddingTop: 'var(--spacing-12)' }}>
              <span style={rowLabelStyle}>active</span>
            </div>
            <div style={{ width: COL_W, flexShrink: 0 }}>
              <Textfield defaultValue="값" />
            </div>
            <div style={{ width: COL_W, flexShrink: 0 }}>
              <Textfield defaultValue="값" trailingButton={TB_NORMAL} />
            </div>
          </div>

          {/* Row 2: active + focus */}
          <div style={{ display: 'flex', gap: GAP, alignItems: 'flex-start' }}>
            <div style={{ width: ROW_LABEL_W, flexShrink: 0, paddingTop: 'var(--spacing-12)' }}>
              <span style={rowLabelStyle}>{'active\nfocus'}</span>
            </div>
            <div style={{ width: COL_W, flexShrink: 0 }}>
              <Textfield defaultValue="값" forceFocused trailingContent={<ClearBtn />} />
            </div>
            <div style={{ width: COL_W, flexShrink: 0 }}>
              <Textfield defaultValue="값" forceFocused trailingContent={<ClearBtn />} trailingButton={TB_NORMAL} />
            </div>
          </div>

          {/* Row 3: disabled */}
          <div style={{ display: 'flex', gap: GAP, alignItems: 'flex-start' }}>
            <div style={{ width: ROW_LABEL_W, flexShrink: 0, paddingTop: 'var(--spacing-12)' }}>
              <span style={rowLabelStyle}>disabled</span>
            </div>
            <div style={{ width: COL_W, flexShrink: 0 }}>
              <Textfield placeholder={PH} disabled />
            </div>
            <div style={{ width: COL_W, flexShrink: 0 }}>
              <Textfield placeholder={PH} disabled trailingButton={TB_NORMAL} />
            </div>
          </div>

          {/* Row 4: active + button disabled */}
          <div style={{ display: 'flex', gap: GAP, alignItems: 'flex-start' }}>
            <div style={{ width: ROW_LABEL_W, flexShrink: 0, paddingTop: 'var(--spacing-12)' }}>
              <span style={rowLabelStyle}>{'button\ndisabled'}</span>
            </div>
            <div style={{ width: COL_W, flexShrink: 0 }}>
              <Textfield defaultValue="값" />
            </div>
            <div style={{ width: COL_W, flexShrink: 0 }}>
              <Textfield defaultValue="값" trailingButton={TB_NORMAL_DISABLED} />
            </div>
          </div>
        </div>

        <SubSection title="TrailingButton">
          <PropHead name="variant" values={['normal', 'assistive']} />
          <div style={{ display: 'flex', gap: 'var(--spacing-24)', flexWrap: 'wrap', marginBottom: 'var(--spacing-24)' }}>
            <TFItem label="normal" width={280}>
              <Textfield defaultValue="값" trailingButton={{ label: '텍스트', variant: 'normal' }} />
            </TFItem>
            <TFItem label="assistive" width={280}>
              <Textfield defaultValue="값" trailingButton={{ label: '확인', variant: 'assistive' }} />
            </TFItem>
          </div>

          <PropHead name="disabled" values={['false', 'true']} />
          <div style={{ display: 'flex', gap: 'var(--spacing-24)', flexWrap: 'wrap' }}>
            <TFItem label="false" width={280}>
              <Textfield defaultValue="값" trailingButton={{ label: '텍스트', variant: 'normal' }} />
            </TFItem>
            <TFItem label="true" width={280}>
              <Textfield defaultValue="값" trailingButton={{ label: '텍스트', variant: 'normal', disabled: true }} />
            </TFItem>
          </div>
        </SubSection>
      </div>
    </Section>
  )
}

/* ══════════════════════════════════════════════════════════════
   trailingContent
══════════════════════════════════════════════════════════════ */
function TrailingContentSection() {
  /* 뱃지 */
  function CountBadge() {
    return (
      <span style={{
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        minWidth: 'var(--spacing-20)', height: 'var(--spacing-20)',
        padding: '0 var(--spacing-4)',
        borderRadius: 'var(--spacing-20)',
        backgroundColor: 'var(--color-status-negative)',
        fontSize: 'var(--font-size-caption-2)', fontWeight: 'var(--font-weight-semibold)',
        color: 'var(--color-static-white)', lineHeight: 1,
      }}>3</span>
    )
  }

  /* 아이콘 버튼 */
  function TrailingIconBtn() {
    return (
      <button tabIndex={-1} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '0', display: 'flex', alignItems: 'center' }}>
        <Icon name="circleCloseFill" size={20} color="var(--color-label-assistive)" />
      </button>
    )
  }

  const resources = [
    {
      label: 'Icon',
      content: <Icon name="bookmarkFill" size={20} color="var(--color-label-assistive)" />,
    },
    {
      label: 'Text',
      content: (
        <span style={{ fontSize: 'var(--font-size-label-2)', fontWeight: 'var(--font-weight-regular)', color: 'var(--color-label-normal)', whiteSpace: 'nowrap' }}>원</span>
      ),
    },
    {
      label: 'Timer',
      content: (
        <span style={{ fontSize: 'var(--font-size-label-2)', fontWeight: 'var(--font-weight-semibold)', color: 'var(--color-status-negative)', whiteSpace: 'nowrap' }}>3:00</span>
      ),
    },
    {
      label: 'Badge',
      content: <CountBadge />,
    },
    {
      label: 'Icon Button',
      content: <TrailingIconBtn />,
    },
  ]

  return (
    <Section title="TrailingContent">
      <div style={CARD}>
        <PropHead name="trailingContent" values={['false', 'true']} />
        <div style={{ display: 'flex', gap: 'var(--spacing-24)', flexWrap: 'wrap' }}>
          <TFItem label="false">
            <Textfield defaultValue="값" forceFocused trailingContent={<TrailingIconBtn />} />
          </TFItem>
          <TFItem label="true">
            <Textfield defaultValue="값" forceFocused trailingContent={
              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-8)' }}>
                <TrailingIconBtn />
                <span style={{ fontSize: 'var(--font-size-label-2)', fontWeight: 'var(--font-weight-semibold)', color: 'var(--color-status-negative)', whiteSpace: 'nowrap' }}>3:00</span>
              </div>
            } />
          </TFItem>
        </div>

        <SubSection title="Resource">
          <div style={{ display: 'flex', gap: 'var(--spacing-20)', flexWrap: 'wrap' }}>
            {resources.map(({ label, content }) => (
              <TFItem key={label} label={label} width={280}>
                <Textfield defaultValue="값" trailingContent={content} />
              </TFItem>
            ))}
          </div>
        </SubSection>
      </div>
    </Section>
  )
}

/* ══════════════════════════════════════════════════════════════
   autoComplete
══════════════════════════════════════════════════════════════ */
const AUTO_SUGGESTIONS = [
  "'서울' 사용하기",
  '서울특별시 강남구',
  '서울특별시 마포구',
  '서울특별시 종로구',
  '서울특별시 서초구',
  '서울특별시 송파구',
  '서울특별시 용산구',
  '서울특별시 성동구',
  '서울특별시 광진구',
].map(label => ({ label, onClick: () => {} }))

function AutoCompleteSection() {
  return (
    <Section title="AutoComplete">
      <div style={CARD}>
        <PropHead name="autoComplete" values={['false', 'true']} />
        <div style={{ display: 'flex', gap: 'var(--spacing-40)', flexWrap: 'wrap', alignItems: 'flex-start' }}>
          {/* false */}
          <TFItem label="false">
            <Textfield heading="주소" placeholder="주소를 입력해 주세요." defaultValue="서울" />
          </TFItem>

          {/* true — Menu 컴포넌트로 드롭다운 표시 */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 'var(--spacing-8)' }}>
            <div style={{ width: `${TF_W}px`, display: 'flex', flexDirection: 'column', gap: 'var(--spacing-4)' }}>
              <Textfield heading="주소" placeholder="주소를 입력해 주세요." defaultValue="서울" forceFocused />
              <Menu scrollable items={AUTO_SUGGESTIONS} />
            </div>
            <ItemLabel>true</ItemLabel>
          </div>
        </div>
      </div>
    </Section>
  )
}

/* ══════════════════════════════════════════════════════════════
   페이지
══════════════════════════════════════════════════════════════ */
export default function TextfieldPage() {
  return (
    <div>
      <h2 style={{
        fontSize:     'var(--font-size-title-3)',
        lineHeight:   'var(--line-height-title-3)',
        fontWeight:   'var(--font-weight-bold)',
        color:        'var(--color-label-normal)',
        marginBottom: 'var(--spacing-32)',
      }}>Text field</h2>

      <InteractionSection />
      <StatusSection />
      <ActiveSection />
      <FocusSection />
      <DisableSection />
      <HeadingSection />
      <RequiredBadgeSection />
      <DescriptionSection />
      <IconSection />
      <TrailingButtonSection />
      <TrailingContentSection />
      <AutoCompleteSection />
    </div>
  )
}

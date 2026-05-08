import { useState } from 'react'
import Textarea from '../../design-system/components/Textfield/Textarea'
import Icon    from '../../design-system/components/Icon/Icon'
import Chip    from '../../design-system/components/Chip/Chip'
import Section from '../Section'

/* ── 공용 상수 ────────────────────────────────────────────────── */
const CARD = {
  width:           '100%',
  backgroundColor: 'var(--color-fill-normal)',
  borderRadius:    'var(--spacing-12)',
  padding:         'var(--spacing-32)',
  boxSizing:       'border-box',
}

const TA_W      = 335
const PH        = '메시지를 입력해 주세요.'
const ACTIVE_VAL = '청춘! 이는 듣기만 하여도 가슴이 설레는 말이다. 청춘! 너의 두 손을 가슴에 대고, 물방아 같은 심장의 고동을 들어 보라. 청춘의 피는 끓는다.'
const RESIZE_MID_VAL  = '청춘! 이는 듣기만 하여도 가슴이 설레는 말이다. 청춘! 너의 두 손을 가슴에 대고, 물방아 같은 심장의 고동을 들어 보라. 청춘의 피는 끓는다. 끓는 피에 뛰노는 심장은 거선(巨船)의 기관(汽罐)같이 힘있다. 이것이다. 인류의 역사를 꾸며 내려온 동력은 바로 이것이다. 이성(理性)은 투명하되 얼음과 같으며, 지혜는 날카로우나 갑 속에 든 칼이다. 청춘의 끓는 피가 아니더면, 인간이 얼마나 쓸쓸하랴? 얼음에 싸인 만물(萬物)은 죽음이 있을 뿐이다.'
const RESIZE_LONG_VAL = RESIZE_MID_VAL + '\n\n그들에게 생명을 불어넣는 것은 따뜻한 봄바람이다. 풀밭에 속잎 나고, 가지에 싹이 트고, 꽃 피고 새 우는 봄날의 천지는 얼마나 기쁘며, 얼마나 아름다우냐? 이것을 얼음 속에서 불러내는 것이 따뜻한 봄바람이다. 인생에 따뜻한 봄바람을 불어 보내는 것은 청춘의 끓는 피다.'
const DESC       = '메시지에 마침표를 찍어요.'

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
    <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-6)', marginBottom: 'var(--spacing-24)', flexWrap: 'wrap' }}>
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

function TAItem({ label, width = TA_W, children }) {
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

/* ── bottom bar 리소스 헬퍼 ──────────────────────────────────── */
function AssistiveBtn({ children = '텍스트' }) {
  return (
    <button tabIndex={-1} style={{
      background: 'none', border: 'none', cursor: 'pointer',
      padding: '0 var(--spacing-4)',
      fontSize: 'var(--font-size-body-1)', fontWeight: 'var(--font-weight-semibold)',
      lineHeight: 'var(--line-height-body-1-normal)',
      color: 'var(--color-label-alternative)', whiteSpace: 'nowrap',
    }}>{children}</button>
  )
}

function PrimaryBtn({ children = '텍스트' }) {
  return (
    <button tabIndex={-1} style={{
      background: 'none', border: 'none', cursor: 'pointer',
      padding: '0 var(--spacing-4)',
      fontSize: 'var(--font-size-body-1)', fontWeight: 'var(--font-weight-semibold)',
      lineHeight: 'var(--line-height-body-1-normal)',
      color: 'var(--color-primary-normal)', whiteSpace: 'nowrap',
    }}>{children}</button>
  )
}

function NormalIconBtn() {
  return (
    <button tabIndex={-1} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '0', display: 'flex', alignItems: 'center' }}>
      <Icon name="circleCloseFill" size={24} color="var(--color-label-assistive)" />
    </button>
  )
}

function PrimaryIconBtn() {
  return (
    <button tabIndex={-1} style={{
      background: 'var(--color-primary-normal)', border: 'none', cursor: 'pointer',
      padding: 'var(--spacing-7)', borderRadius: '1000px',
      display: 'flex', alignItems: 'center',
    }}>
      <Icon name="arrowUp" size={18} color="var(--color-static-white)" />
    </button>
  )
}

function CountBadge() {
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
      minWidth: 'var(--spacing-20)', height: 'var(--spacing-20)',
      padding: '0 var(--spacing-4)', borderRadius: 'var(--spacing-20)',
      backgroundColor: 'var(--color-status-negative)',
      fontSize: 'var(--font-size-caption-2)', fontWeight: 'var(--font-weight-semibold)',
      color: 'var(--color-static-white)', lineHeight: 1,
    }}>3</span>
  )
}

function TrailingCounter() {
  return (
    <span style={{
      fontSize: 'var(--font-size-label-2)', fontWeight: 'var(--font-weight-medium)',
      lineHeight: 'var(--line-height-label-2)', letterSpacing: 'var(--letter-spacing-label-2)',
      color: 'var(--color-label-alternative)', opacity: 0.74,
      padding: '0 var(--spacing-4)', whiteSpace: 'nowrap',
    }}>6/2000</span>
  )
}

function ContentBadge() {
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
      padding: 'var(--spacing-4) var(--spacing-6)',
      borderRadius: 'var(--spacing-6)',
      backgroundColor: 'var(--color-fill-normal)',
      fontSize: 'var(--font-size-caption-1)', fontWeight: 'var(--font-weight-medium)',
      lineHeight: 'var(--line-height-caption-1)', letterSpacing: 'var(--letter-spacing-caption-1)',
      color: 'var(--color-label-alternative)', whiteSpace: 'nowrap',
    }}>텍스트</span>
  )
}

function OverflowCounter() {
  return (
    <span style={{
      display: 'inline-flex',
      fontSize: 'var(--font-size-label-2)', fontWeight: 'var(--font-weight-medium)',
      lineHeight: 'var(--line-height-label-2)', letterSpacing: 'var(--letter-spacing-label-2)',
      opacity: 0.74, padding: '0 var(--spacing-4)', whiteSpace: 'nowrap',
    }}>
      <span style={{ color: 'var(--color-status-negative)' }}>81</span>
      <span style={{ color: 'var(--color-label-alternative)' }}>/80</span>
    </span>
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
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-8)', width: `${TA_W}px` }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-6)' }}>
            <span style={{ fontSize: 'var(--font-size-label-2)', fontWeight: 'var(--font-weight-semibold)', color: 'var(--color-label-normal)' }}>state</span>
            <CodeBadge>{stateLabel}</CodeBadge>
          </div>
          <Textarea
            placeholder={PH}
            value={value}
            onChange={e => setValue(e.target.value)}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            forceFocused={focused}
            maxLength={200}
            description={DESC}
          />
        </div>
      </div>
    </Section>
  )
}

/* ══════════════════════════════════════════════════════════════
   status
══════════════════════════════════════════════════════════════ */
function StatusSection() {
  const GAP = 'var(--spacing-24)'

  function Cell({ status, forceFocused }) {
    return (
      <div style={{ width: `${TA_W}px`, flexShrink: 0 }}>
        <Textarea
          status={status}
          heading="주제"
          defaultValue={ACTIVE_VAL}
          maxLength={2000}
          trailingContent={<PrimaryBtn>텍스트</PrimaryBtn>}
          description={status === 'negative' ? '에러 메시지를 나타내요.' : DESC}
          forceFocused={forceFocused}
        />
      </div>
    )
  }

  return (
    <Section title="Status">
      <div style={CARD}>
        <PropHead name="status" values={['Normal', 'Negative']} />

        {/* 열 헤더 */}
        <div style={{ display: 'flex', gap: GAP, marginBottom: 'var(--spacing-16)' }}>
          <div style={{ width: `${TA_W}px`, flexShrink: 0, textAlign: 'center' }}><ItemLabel>Normal</ItemLabel></div>
          <div style={{ width: `${TA_W}px`, flexShrink: 0, textAlign: 'center' }}><ItemLabel>Negative</ItemLabel></div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-20)' }}>
          {/* Row 1: focus=false */}
          <div style={{ display: 'flex', gap: GAP }}>
            <Cell status="normal"   forceFocused={false} />
            <Cell status="negative" forceFocused={false} />
          </div>
          {/* Row 2: focus=true */}
          <div style={{ display: 'flex', gap: GAP }}>
            <Cell status="normal"   forceFocused={true} />
            <Cell status="negative" forceFocused={true} />
          </div>
        </div>
      </div>
    </Section>
  )
}

/* ══════════════════════════════════════════════════════════════
   resize
══════════════════════════════════════════════════════════════ */
function ResizeSection() {
  return (
    <Section title="Resize">
      <div style={CARD}>
        <PropHead name="resize" values={['Normal', 'Limit', 'Fixed']} />
        <div style={{ display: 'flex', gap: 'var(--spacing-24)', flexWrap: 'wrap', alignItems: 'flex-start' }}>
          <TAItem label="Normal">
            <Textarea heading="주제" resize="normal" rows={12}
              defaultValue={RESIZE_LONG_VAL} maxLength={2000}
              trailingContent={<PrimaryBtn>텍스트</PrimaryBtn>} description={DESC} />
          </TAItem>
          <TAItem label="Limit">
            <Textarea heading="주제" resize="limit" rows={8}
              defaultValue={RESIZE_MID_VAL} maxLength={2000}
              trailingContent={<PrimaryBtn>텍스트</PrimaryBtn>} description={DESC} />
          </TAItem>
          <TAItem label="Fixed">
            <Textarea heading="주제" resize="fixed"
              defaultValue={RESIZE_MID_VAL} maxLength={2000}
              trailingContent={<PrimaryBtn>텍스트</PrimaryBtn>} description={DESC} />
          </TAItem>
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
        <div style={{ display: 'flex', gap: 'var(--spacing-24)', flexWrap: 'wrap', alignItems: 'flex-start' }}>
          <TAItem label="false">
            <Textarea heading="주제" placeholder={PH} maxLength={2000}
              trailingContent={<PrimaryBtn>텍스트</PrimaryBtn>} description={DESC} />
          </TAItem>
          <TAItem label="true">
            <Textarea heading="주제" defaultValue={ACTIVE_VAL} maxLength={2000}
              trailingContent={<PrimaryBtn>텍스트</PrimaryBtn>} description={DESC} />
          </TAItem>
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
        <div style={{ display: 'flex', gap: 'var(--spacing-24)', flexWrap: 'wrap', alignItems: 'flex-start' }}>
          <TAItem label="false">
            <Textarea heading="주제" defaultValue={ACTIVE_VAL} maxLength={2000}
              trailingContent={<PrimaryBtn>텍스트</PrimaryBtn>} description={DESC} />
          </TAItem>
          <TAItem label="true">
            <Textarea heading="주제" defaultValue={ACTIVE_VAL} maxLength={2000}
              trailingContent={<PrimaryBtn>텍스트</PrimaryBtn>} description={DESC} forceFocused />
          </TAItem>
        </div>
      </div>
    </Section>
  )
}

/* ══════════════════════════════════════════════════════════════
   disable
══════════════════════════════════════════════════════════════ */
function DisableSection() {
  const GAP = 'var(--spacing-24)'
  return (
    <Section title="Disable">
      <div style={CARD}>
        <PropHead name="disabled" values={['false', 'true']} />
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-20)' }}>
          <div style={{ display: 'flex', gap: GAP, flexWrap: 'wrap' }}>
            <TAItem label="false">
              <Textarea heading="주제" placeholder={PH} maxLength={2000}
                trailingContent={<PrimaryBtn>텍스트</PrimaryBtn>} description={DESC} />
            </TAItem>
            <TAItem label="true">
              <Textarea heading="주제" placeholder={PH} maxLength={2000}
                trailingContent={<PrimaryBtn>텍스트</PrimaryBtn>} description={DESC} disabled />
            </TAItem>
          </div>
          <div style={{ display: 'flex', gap: GAP, flexWrap: 'wrap' }}>
            <TAItem label="false (active)">
              <Textarea heading="주제" defaultValue={ACTIVE_VAL} maxLength={2000}
                trailingContent={<PrimaryBtn>텍스트</PrimaryBtn>} description={DESC} />
            </TAItem>
            <TAItem label="true (active)">
              <Textarea heading="주제" defaultValue={ACTIVE_VAL} maxLength={2000}
                trailingContent={<PrimaryBtn>텍스트</PrimaryBtn>} description={DESC} disabled />
            </TAItem>
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
          <TAItem label="none">
            <Textarea defaultValue={ACTIVE_VAL} maxLength={2000}
              trailingContent={<PrimaryBtn>텍스트</PrimaryBtn>} description={DESC} />
          </TAItem>
          <TAItem label='"string"'>
            <Textarea heading="주제" defaultValue={ACTIVE_VAL} maxLength={2000}
              trailingContent={<PrimaryBtn>텍스트</PrimaryBtn>} description={DESC} />
          </TAItem>
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
        <div style={{ display: 'flex', gap: 'var(--spacing-24)', flexWrap: 'wrap', alignItems: 'flex-start' }}>
          <TAItem label="false">
            <Textarea heading="주제" defaultValue={ACTIVE_VAL} maxLength={2000}
              trailingContent={<PrimaryBtn>텍스트</PrimaryBtn>} description={DESC} />
          </TAItem>
          <TAItem label="true">
            <Textarea heading="주제" required defaultValue={ACTIVE_VAL} maxLength={2000}
              trailingContent={<PrimaryBtn>텍스트</PrimaryBtn>} description={DESC} />
          </TAItem>
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
          <TAItem label="none">
            <Textarea heading="주제" defaultValue={ACTIVE_VAL} maxLength={2000}
              trailingContent={<PrimaryBtn>텍스트</PrimaryBtn>} />
          </TAItem>
          <TAItem label='"string"'>
            <Textarea heading="주제" defaultValue={ACTIVE_VAL} maxLength={2000}
              trailingContent={<PrimaryBtn>텍스트</PrimaryBtn>} description={DESC} />
          </TAItem>
        </div>
      </div>
    </Section>
  )
}

/* ══════════════════════════════════════════════════════════════
   bottom
══════════════════════════════════════════════════════════════ */
function BottomSection() {
  const GAP = 'var(--spacing-24)'

  const leadingResources = [
    {
      label: 'characterCounter',
      maxLength: 2000,
      leadingContent: null,
    },
    {
      label: 'button',
      maxLength: 0,
      leadingContent: <AssistiveBtn>텍스트</AssistiveBtn>,
    },
    {
      label: 'normalIconButton',
      maxLength: 0,
      leadingContent: <NormalIconBtn />,
    },
    {
      label: 'icon',
      maxLength: 0,
      leadingContent: <Icon name="bookmarkFill" size={24} color="var(--color-label-assistive)" />,
    },
    {
      label: 'badge',
      maxLength: 0,
      leadingContent: <CountBadge />,
    },
  ]

  const trailingResources = [
    { label: 'characterCounter', trailingContent: <TrailingCounter /> },
    { label: 'textButton',       trailingContent: <PrimaryBtn>텍스트</PrimaryBtn> },
    { label: 'primaryIconButton', trailingContent: <PrimaryIconBtn /> },
    { label: 'iconButton',       trailingContent: <NormalIconBtn /> },
    { label: 'icon',             trailingContent: <Icon name="bookmarkFill" size={24} color="var(--color-label-assistive)" /> },
    { label: 'badge',            trailingContent: <ContentBadge /> },
    { label: 'chip',             trailingContent: <Chip label="칩" /> },
  ]

  return (
    <Section title="Bottom">
      <div style={CARD}>
        <PropHead name="bottom" values={['false', 'true']} />
        <div style={{ display: 'flex', gap: GAP, flexWrap: 'wrap', alignItems: 'flex-start' }}>
          <TAItem label="false">
            <Textarea heading="주제" defaultValue={ACTIVE_VAL} description={DESC} />
          </TAItem>
          <TAItem label="true">
            <Textarea heading="주제" defaultValue={ACTIVE_VAL} maxLength={2000}
              trailingContent={<PrimaryBtn>텍스트</PrimaryBtn>} description={DESC} />
          </TAItem>
        </div>

        <SubSection title="LeadingContent">
          <PropHead name="leadingContent" values={['none', 'characterCounter', 'button', 'normalIconButton', 'icon', 'badge']} />
          <div style={{ display: 'flex', gap: GAP, flexWrap: 'wrap', alignItems: 'flex-start' }}>
            {leadingResources.map(({ label, maxLength, leadingContent }) => (
              <TAItem key={label} label={label}>
                <Textarea
                  placeholder={PH}
                  defaultValue={ACTIVE_VAL}
                  maxLength={maxLength}
                  leadingContent={leadingContent}
                />
              </TAItem>
            ))}
          </div>
        </SubSection>

        <SubSection title="TrailingContent">
          <PropHead name="trailingContent" values={['characterCounter', 'textButton', 'primaryIconButton', 'iconButton', 'icon', 'badge', 'chip']} />
          <div style={{ display: 'flex', gap: GAP, flexWrap: 'wrap', alignItems: 'flex-start' }}>
            {trailingResources.map(({ label, trailingContent }) => (
              <TAItem key={label} label={label}>
                <Textarea
                  placeholder={PH}
                  defaultValue={ACTIVE_VAL}
                  trailingContent={trailingContent}
                />
              </TAItem>
            ))}
          </div>
        </SubSection>

        <SubSection title="Overflow">
          <PropHead name="overflow" values={['value default', 'value']} />
          <div style={{ display: 'flex', gap: GAP, flexWrap: 'wrap', alignItems: 'flex-start' }}>
            <TAItem label="value default">
              <Textarea
                heading="주제"
                defaultValue={'가'.repeat(80)}
                maxLength={80}
                description={DESC}
              />
            </TAItem>
            <TAItem label="value">
              <Textarea
                heading="주제"
                defaultValue={'가'.repeat(81)}
                trailingContent={<OverflowCounter />}
                description={DESC}
              />
            </TAItem>
          </div>
        </SubSection>
      </div>
    </Section>
  )
}

/* ══════════════════════════════════════════════════════════════
   페이지
══════════════════════════════════════════════════════════════ */
export default function TextareaPage() {
  return (
    <div>
      <h2 style={{
        fontSize:     'var(--font-size-title-3)',
        lineHeight:   'var(--line-height-title-3)',
        fontWeight:   'var(--font-weight-bold)',
        color:        'var(--color-label-normal)',
        marginBottom: 'var(--spacing-32)',
      }}>Text area</h2>

      <InteractionSection />
      <StatusSection />
      <ResizeSection />
      <ActiveSection />
      <FocusSection />
      <DisableSection />
      <HeadingSection />
      <RequiredBadgeSection />
      <DescriptionSection />
      <BottomSection />
    </div>
  )
}

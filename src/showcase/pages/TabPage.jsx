import { useState } from 'react'
import Tab from '../../design-system/components/Tab/Tab'
import Icon from '../../design-system/components/Icon/Icon'
import IconButtonNormal from '../../design-system/components/IconButton/IconButtonNormal'
import Section, { Case } from '../Section'

/* ── 공통 아이템 ─────────────────────────────────────────────── */
const ITEMS_3 = [{ label: '텍스트' }, { label: '텍스트' }, { label: '텍스트' }]

const SCROLL_ITEMS = [
  { label: '전체' }, { label: '진행중' }, { label: '완료' },
  { label: '검토중' }, { label: '반려됨' }, { label: '보류중' },
  { label: '예약됨' }, { label: '만료됨' },
]

/* ── trailingContent용 아이콘 버튼 ───────────────────────────── */
function TrailingBtn() {
  return (
    <IconButtonNormal
      icon={<Icon name="moreHorizontal" />}
      aria-label="더보기"
    />
  )
}

/* ── 2열 행 래퍼 ─────────────────────────────────────────────── */
function TwoCol({ children }) {
  return (
    <div style={{ display: 'flex', gap: 'var(--spacing-24)' }}>
      {children}
    </div>
  )
}

/* ── 고정 너비 탭 래퍼 ───────────────────────────────────────── */
function TabBox({ children }) {
  return <div style={{ width: 320, flexShrink: 0 }}>{children}</div>
}

export default function TabPage() {
  const [t1, setT1] = useState(0)   // resize – hug
  const [t2, setT2] = useState(0)   // resize – fill
  const [t3, setT3] = useState(0)   // size (공유)
  const [t4, setT4] = useState(0)   // padding (공유)
  const [t5, setT5] = useState(0)   // trailingIconButton (공유)
  const [t6, setT6] = useState(0)   // scroll (공유)

  return (
    <div>
      <h2 style={{
        fontSize:     'var(--font-size-title-3)',
        lineHeight:   'var(--line-height-title-3)',
        fontWeight:   'var(--font-weight-bold)',
        color:        'var(--color-label-normal)',
        marginBottom: 'var(--spacing-8)',
      }}>Tab</h2>
      <p style={{
        fontSize:      'var(--font-size-body-2)',
        lineHeight:    'var(--line-height-body-2-normal)',
        color:         'var(--color-label-alternative)',
        marginBottom:  'var(--spacing-32)',
      }}>클릭하거나 선택하여 목적에 따라 구분된 콘텐츠를 볼 수 있도록 돕습니다.</p>

      {/* ── resize ──────────────────────────────────────────── */}
      <Section title="resize" gap="var(--spacing-24)">
        <Case label='resize="hug"  각 탭이 텍스트 너비에 맞춤'>
          <TabBox>
            <Tab items={ITEMS_3} value={t1} onChange={setT1} size="small" resize="hug" />
          </TabBox>
        </Case>
        <Case label='resize="fill"  각 탭이 균등 분할'>
          <TabBox>
            <Tab items={ITEMS_3} value={t2} onChange={setT2} size="small" resize="fill" />
          </TabBox>
        </Case>
      </Section>

      {/* ── size ────────────────────────────────────────────── */}
      <Section title="size" column gap="var(--spacing-24)">
        <Case label='size="small"  (40px)'>
          <TabBox>
            <Tab
              items={ITEMS_3}
              value={t3}
              onChange={setT3}
              size="small"
              trailingContent={<TrailingBtn />}
            />
          </TabBox>
        </Case>
        <Case label='size="medium"  (48px)  default'>
          <TabBox>
            <Tab
              items={ITEMS_3}
              value={t3}
              onChange={setT3}
              size="medium"
              trailingContent={<TrailingBtn />}
            />
          </TabBox>
        </Case>
        <Case label='size="large"  (56px)'>
          <TabBox>
            <Tab
              items={ITEMS_3}
              value={t3}
              onChange={setT3}
              size="large"
              trailingContent={<TrailingBtn />}
            />
          </TabBox>
        </Case>
      </Section>

      {/* ── padding ─────────────────────────────────────────── */}
      <Section title="padding" column gap="var(--spacing-24)">
        <Case label='size="small"  /  padding=false  →  padding=true'>
          <TwoCol>
            <TabBox>
              <Tab items={ITEMS_3} value={t4} onChange={setT4} size="small" />
            </TabBox>
            <TabBox>
              <Tab items={ITEMS_3} value={t4} onChange={setT4} size="small" horizontalPadding />
            </TabBox>
          </TwoCol>
        </Case>
        <Case label='size="medium"  /  padding=false  →  padding=true'>
          <TwoCol>
            <TabBox>
              <Tab items={ITEMS_3} value={t4} onChange={setT4} size="medium" />
            </TabBox>
            <TabBox>
              <Tab items={ITEMS_3} value={t4} onChange={setT4} size="medium" horizontalPadding />
            </TabBox>
          </TwoCol>
        </Case>
        <Case label='size="large"  /  padding=false  →  padding=true'>
          <TwoCol>
            <TabBox>
              <Tab items={ITEMS_3} value={t4} onChange={setT4} size="large" />
            </TabBox>
            <TabBox>
              <Tab items={ITEMS_3} value={t4} onChange={setT4} size="large" horizontalPadding />
            </TabBox>
          </TwoCol>
        </Case>
      </Section>

      {/* ── trailingIconButton ───────────────────────────────── */}
      <Section title="trailingIconButton" column gap="var(--spacing-24)">
        <Case label='horizontalPadding=false  /  trailingIconButton=false  →  true'>
          <TwoCol>
            <TabBox>
              <Tab items={ITEMS_3} value={t5} onChange={setT5} size="medium" />
            </TabBox>
            <TabBox>
              <Tab
                items={ITEMS_3}
                value={t5}
                onChange={setT5}
                size="medium"
                trailingContent={<TrailingBtn />}
              />
            </TabBox>
          </TwoCol>
        </Case>
        <Case label='horizontalPadding=true  /  trailingIconButton=false  →  true'>
          <TwoCol>
            <TabBox>
              <Tab items={ITEMS_3} value={t5} onChange={setT5} size="medium" horizontalPadding />
            </TabBox>
            <TabBox>
              <Tab
                items={ITEMS_3}
                value={t5}
                onChange={setT5}
                size="medium"
                horizontalPadding
                trailingContent={<TrailingBtn />}
              />
            </TabBox>
          </TwoCol>
        </Case>
      </Section>

      {/* ── scroll ──────────────────────────────────────────── */}
      <Section title="scroll" column gap="var(--spacing-24)">
        <Case label='scroll=true  /  padding=false  →  padding=true  (가로 스크롤 가능)'>
          <TwoCol>
            <TabBox>
              <Tab items={SCROLL_ITEMS} value={t6} onChange={setT6} scroll />
            </TabBox>
            <TabBox>
              <Tab items={SCROLL_ITEMS} value={t6} onChange={setT6} scroll horizontalPadding />
            </TabBox>
          </TwoCol>
        </Case>
      </Section>
    </div>
  )
}

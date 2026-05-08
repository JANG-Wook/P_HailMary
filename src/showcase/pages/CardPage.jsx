import { useState } from 'react'
import Tab from '../../design-system/components/Tab/Tab'
import Card from '../../design-system/components/Card/Card'
import ListCard from '../../design-system/components/ListCard/ListCard'
import Avatar from '../../design-system/components/Avatar/Avatar'
import ContentBadge from '../../design-system/components/ContentBadge/ContentBadge'
import Icon from '../../design-system/components/Icon/Icon'
import Switch from '../../design-system/components/Switch/Switch'
import Section, { Case } from '../Section'

const IMG = 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400'

const skeletonSlot = (
  <div style={{
    height:          'var(--spacing-20)',
    width:           'var(--spacing-48)',
    backgroundColor: 'var(--color-fill-alternative)',
    borderRadius:    'var(--spacing-4)',
  }} />
)

/* ══════════════════════════════════════════════════════════════
   Card 탭
══════════════════════════════════════════════════════════════ */

function CardContent() {
  const [demoSaved, setDemoSaved] = useState(false)
  const [demoClicked, setDemoClicked] = useState(0)

  return (
    <div>
      {/* ── 인터랙션 데모 ── */}
      <Section title="인터랙션 데모" gap="var(--spacing-24)">
        <Case label="카드에 마우스를 올리거나 클릭해보세요">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-16)' }}>
            <div style={{ width: '240px' }}>
              <Card
                src={IMG}
                alt="카드"
                title="산속의 고요한 아침"
                caption="자연 · 사진"
                saved={demoSaved}
                onToggleSave={() => setDemoSaved(s => !s)}
                onClick={() => setDemoClicked(c => c + 1)}
              />
            </div>
            <div style={{
              padding:         'var(--spacing-12)',
              borderRadius:    'var(--spacing-8)',
              backgroundColor: 'var(--color-fill-normal)',
              fontSize:        'var(--font-size-body-2)',
              color:           'var(--color-label-alternative)',
              display:         'flex',
              gap:             'var(--spacing-16)',
            }}>
              <span>클릭: <strong style={{ color: 'var(--color-label-normal)' }}>{demoClicked}회</strong></span>
              <span>북마크: <strong style={{ color: demoSaved ? 'var(--color-primary-normal)' : 'var(--color-label-normal)' }}>{demoSaved ? '저장됨' : '미저장'}</strong></span>
            </div>
          </div>
        </Case>
      </Section>

      {/* ── platform = ── */}
      <Section title="Platform =" gap="var(--spacing-24)">
        <Case label='platform="desktop"  default'>
          <div style={{ width: '240px' }}>
            <Card
              platform="desktop"
              src={IMG}
              alt="카드 이미지"
              title="제목"
              caption="캡션"
              overlayCaption="오버레이 캡션"
              onToggleSave={() => {}}
            />
          </div>
        </Case>
        <Case label='platform="mobile"'>
          <div style={{ width: '152px' }}>
            <Card
              platform="mobile"
              src={IMG}
              alt="카드 이미지"
              title="제목"
              caption="캡션"
              overlayCaption="오버레이 캡션"
              onToggleSave={() => {}}
            />
          </div>
        </Case>
      </Section>

      {/* ── thumbnailOverlay = ── */}
      <Section title="ThumbnailOverlay =" gap="var(--spacing-24)">
        <Case label='thumbnailOverlay={false}  default'>
          <div style={{ width: '240px' }}>
            <Card
              src={IMG}
              alt="카드"
              title="제목"
              caption="캡션"
              thumbnailOverlay={false}
            />
          </div>
        </Case>
        <Case label='thumbnailOverlay={true}'>
          <div style={{ width: '240px' }}>
            <Card
              src={IMG}
              alt="카드"
              title="제목"
              caption="캡션"
              overlayCaption="오버레이 캡션"
              onToggleSave={() => {}}
              thumbnailOverlay
            />
          </div>
        </Case>
      </Section>

      {/* ── overlayCaption = ── */}
      <Section title="OverlayCaption =" gap="var(--spacing-24)">
        <Case label='overlayCaption 있음  default'>
          <div style={{ width: '240px' }}>
            <Card
              src={IMG}
              alt="카드"
              title="제목"
              caption="캡션"
              overlayCaption="오버레이 캡션"
              onToggleSave={() => {}}
              thumbnailOverlay
            />
          </div>
        </Case>
        <Case label='overlayCaption 없음'>
          <div style={{ width: '240px' }}>
            <Card
              src={IMG}
              alt="카드"
              title="제목"
              caption="캡션"
              onToggleSave={() => {}}
              thumbnailOverlay
            />
          </div>
        </Case>
      </Section>

      {/* ── toggleIcon = ── */}
      <Section title="ToggleIcon =" gap="var(--spacing-24)">
        <Case label='onToggleSave 있음  default'>
          <div style={{ width: '240px' }}>
            <Card
              src={IMG}
              alt="카드"
              title="제목"
              caption="캡션"
              overlayCaption="오버레이 캡션"
              onToggleSave={() => {}}
              thumbnailOverlay
            />
          </div>
        </Case>
        <Case label='onToggleSave 없음'>
          <div style={{ width: '240px' }}>
            <Card
              src={IMG}
              alt="카드"
              title="제목"
              caption="캡션"
              overlayCaption="오버레이 캡션"
              thumbnailOverlay
            />
          </div>
        </Case>
      </Section>

      {/* ── caption = ── */}
      <Section title="Caption =" gap="var(--spacing-24)">
        <Case label='caption="캡션"  default'>
          <div style={{ width: '240px' }}>
            <Card
              src={IMG}
              alt="카드"
              title="제목"
              caption="캡션"
              overlayCaption="오버레이 캡션"
              onToggleSave={() => {}}
            />
          </div>
        </Case>
        <Case label='caption 없음'>
          <div style={{ width: '240px' }}>
            <Card
              src={IMG}
              alt="카드"
              title="제목"
              overlayCaption="오버레이 캡션"
              onToggleSave={() => {}}
            />
          </div>
        </Case>
      </Section>

      {/* ── extraCaption = ── */}
      <Section title="ExtraCaption =" gap="var(--spacing-24)">
        <Case label='extraCaption 없음  default'>
          <div style={{ width: '240px' }}>
            <Card
              src={IMG}
              alt="카드"
              title="제목"
              caption="캡션"
              overlayCaption="오버레이 캡션"
              onToggleSave={() => {}}
            />
          </div>
        </Case>
        <Case label='extraCaption="추가 캡션"'>
          <div style={{ width: '240px' }}>
            <Card
              src={IMG}
              alt="카드"
              title="제목"
              caption="캡션"
              extraCaption="추가 캡션"
              overlayCaption="오버레이 캡션"
              onToggleSave={() => {}}
            />
          </div>
        </Case>
      </Section>

      {/* ── topContent ── */}
      <Section title="TopContent" gap="var(--spacing-24)">
        <Case label="topContent 없음  default">
          <div style={{ width: '240px' }}>
            <Card
              src={IMG}
              alt="카드"
              title="제목"
              caption="캡션"
              overlayCaption="오버레이 캡션"
              onToggleSave={() => {}}
            />
          </div>
        </Case>
        <Case label="topContent: ContentBadge">
          <div style={{ width: '240px' }}>
            <Card
              src={IMG}
              alt="카드"
              title="제목"
              caption="캡션"
              overlayCaption="오버레이 캡션"
              onToggleSave={() => {}}
              topContent={<ContentBadge size="xsmall">텍스트</ContentBadge>}
            />
          </div>
        </Case>
        <Case label="topContent: ContentBadge × 3">
          <div style={{ width: '240px' }}>
            <Card
              src={IMG}
              alt="카드"
              title="제목"
              caption="캡션"
              overlayCaption="오버레이 캡션"
              onToggleSave={() => {}}
              topContent={
                <div style={{ display: 'flex', gap: 'var(--spacing-6)', flexWrap: 'wrap' }}>
                  <ContentBadge size="xsmall">텍스트</ContentBadge>
                  <ContentBadge size="xsmall">텍스트</ContentBadge>
                  <ContentBadge size="xsmall">텍스트</ContentBadge>
                </div>
              }
            />
          </div>
        </Case>
      </Section>

      {/* ── bottomContent ── */}
      <Section title="BottomContent" gap="var(--spacing-24)">
        <Case label="bottomContent 없음  default">
          <div style={{ width: '240px' }}>
            <Card
              src={IMG}
              alt="카드"
              title="제목"
              caption="캡션"
              overlayCaption="오버레이 캡션"
              onToggleSave={() => {}}
            />
          </div>
        </Case>
        <Case label="bottomContent: Avatar + 텍스트">
          <div style={{ width: '240px' }}>
            <Card
              src={IMG}
              alt="카드"
              title="제목"
              caption="캡션"
              overlayCaption="오버레이 캡션"
              onToggleSave={() => {}}
              bottomContent={
                <div style={{ display: 'flex', gap: 'var(--spacing-8)', alignItems: 'center' }}>
                  <Avatar size="xsmall" />
                  <span style={{ fontSize: 'var(--font-size-caption-1)', color: 'var(--color-label-alternative)' }}>홍길동</span>
                </div>
              }
            />
          </div>
        </Case>
        <Case label="bottomContent: ContentBadge × 3">
          <div style={{ width: '240px' }}>
            <Card
              src={IMG}
              alt="카드"
              title="제목"
              caption="캡션"
              overlayCaption="오버레이 캡션"
              onToggleSave={() => {}}
              bottomContent={
                <div style={{ display: 'flex', gap: 'var(--spacing-6)', flexWrap: 'wrap' }}>
                  <ContentBadge size="xsmall">텍스트</ContentBadge>
                  <ContentBadge size="xsmall">텍스트</ContentBadge>
                  <ContentBadge size="xsmall">텍스트</ContentBadge>
                </div>
              }
            />
          </div>
        </Case>
      </Section>

      {/* ── skeleton ── */}
      <Section title="Skeleton" column gap="var(--spacing-24)">
        <div style={{ display: 'flex', gap: 'var(--spacing-16)', alignItems: 'flex-start', flexWrap: 'wrap' }}>
          <Case label='platform="desktop"  기본'>
            <div style={{ width: '240px' }}>
              <Card skeleton />
            </div>
          </Case>
          <Case label='platform="desktop"  topContent + extraCaption + bottomContent'>
            <div style={{ width: '240px' }}>
              <Card skeleton />
            </div>
          </Case>
        </div>
        <div style={{ display: 'flex', gap: 'var(--spacing-16)', alignItems: 'flex-start', flexWrap: 'wrap' }}>
          <Case label='platform="mobile"  기본'>
            <div style={{ width: '152px' }}>
              <Card skeleton platform="mobile" />
            </div>
          </Case>
          <Case label='platform="mobile"  topContent + extraCaption + bottomContent'>
            <div style={{ width: '152px' }}>
              <Card skeleton platform="mobile" />
            </div>
          </Case>
        </div>
      </Section>
    </div>
  )
}

/* ══════════════════════════════════════════════════════════════
   List Card 탭
══════════════════════════════════════════════════════════════ */

function ListCardContent() {
  return (
    <div>
      {/* ── platform = ── */}
      <Section title="Platform =" gap="var(--spacing-24)" column>
        <Case label='platform="desktop"  default'>
          <div style={{ width: '480px' }}>
            <ListCard
              platform="desktop"
              src={IMG}
              alt="썸네일"
              title="산속의 고요한 아침 — 자연 사진 모음"
              caption="자연 · 사진"
              extraCaption="1.2만 회 조회"
            />
          </div>
        </Case>
        <Case label='platform="mobile"'>
          <div style={{ width: '335px' }}>
            <ListCard
              platform="mobile"
              src={IMG}
              alt="썸네일"
              title="산속의 고요한 아침"
              caption="자연 · 사진"
            />
          </div>
        </Case>
      </Section>

      {/* ── extraCaption = ── */}
      <Section title="ExtraCaption =" gap="var(--spacing-24)" column>
        <Case label='extraCaption 없음  default'>
          <div style={{ width: '480px' }}>
            <ListCard
              src={IMG}
              alt="썸네일"
              title="제목"
              caption="캡션"
            />
          </div>
        </Case>
        <Case label='extraCaption="추가 캡션"'>
          <div style={{ width: '480px' }}>
            <ListCard
              src={IMG}
              alt="썸네일"
              title="제목"
              caption="캡션"
              extraCaption="추가 캡션"
            />
          </div>
        </Case>
      </Section>

      {/* ── caption = ── */}
      <Section title="Caption =" gap="var(--spacing-24)" column>
        <Case label='caption 있음  default'>
          <div style={{ width: '480px' }}>
            <ListCard
              src={IMG}
              alt="썸네일"
              title="제목"
              caption="캡션"
            />
          </div>
        </Case>
        <Case label='caption 없음'>
          <div style={{ width: '480px' }}>
            <ListCard
              src={IMG}
              alt="썸네일"
              title="제목"
            />
          </div>
        </Case>
      </Section>

      {/* ── topContent ── */}
      <Section title="TopContent" gap="var(--spacing-24)" column>
        <Case label="topContent 없음  default">
          <div style={{ width: '480px' }}>
            <ListCard
              src={IMG}
              alt="썸네일"
              title="제목"
              caption="캡션"
            />
          </div>
        </Case>
        <Case label="topContent: ContentBadge">
          <div style={{ width: '480px' }}>
            <ListCard
              src={IMG}
              alt="썸네일"
              title="제목"
              caption="캡션"
              topContent={<ContentBadge size="xsmall">텍스트</ContentBadge>}
            />
          </div>
        </Case>
        <Case label="topContent: ContentBadge × 3">
          <div style={{ width: '480px' }}>
            <ListCard
              src={IMG}
              alt="썸네일"
              title="제목"
              caption="캡션"
              topContent={
                <div style={{ display: 'flex', gap: 'var(--spacing-6)', flexWrap: 'wrap' }}>
                  <ContentBadge size="xsmall">텍스트</ContentBadge>
                  <ContentBadge size="xsmall">텍스트</ContentBadge>
                  <ContentBadge size="xsmall">텍스트</ContentBadge>
                </div>
              }
            />
          </div>
        </Case>
      </Section>

      {/* ── bottomContent ── */}
      <Section title="BottomContent" gap="var(--spacing-24)" column>
        <Case label="bottomContent 없음  default">
          <div style={{ width: '480px' }}>
            <ListCard
              src={IMG}
              alt="썸네일"
              title="제목"
              caption="캡션"
            />
          </div>
        </Case>
        <Case label="bottomContent: Avatar + 텍스트">
          <div style={{ width: '480px' }}>
            <ListCard
              src={IMG}
              alt="썸네일"
              title="제목"
              caption="캡션"
              bottomContent={
                <div style={{ display: 'flex', gap: 'var(--spacing-8)', alignItems: 'center' }}>
                  <Avatar size="xsmall" />
                  <span style={{ fontSize: 'var(--font-size-caption-1)', color: 'var(--color-label-alternative)' }}>홍길동</span>
                </div>
              }
            />
          </div>
        </Case>
        <Case label="bottomContent: ContentBadge × 3">
          <div style={{ width: '480px' }}>
            <ListCard
              src={IMG}
              alt="썸네일"
              title="제목"
              caption="캡션"
              bottomContent={
                <div style={{ display: 'flex', gap: 'var(--spacing-6)', flexWrap: 'wrap' }}>
                  <ContentBadge size="xsmall">텍스트</ContentBadge>
                  <ContentBadge size="xsmall">텍스트</ContentBadge>
                  <ContentBadge size="xsmall">텍스트</ContentBadge>
                </div>
              }
            />
          </div>
        </Case>
      </Section>

      {/* ── leadingContent ── */}
      <Section title="LeadingContent" gap="var(--spacing-24)" column>
        <Case label="leadingContent 없음  default">
          <div style={{ width: '480px' }}>
            <ListCard
              src={IMG}
              alt="썸네일"
              title="제목"
              caption="캡션"
            />
          </div>
        </Case>
        <Case label="leadingContent: Avatar">
          <div style={{ width: '480px' }}>
            <ListCard
              src={IMG}
              alt="썸네일"
              title="제목"
              caption="캡션"
              leadingContent={<Avatar variant="person" size="small" />}
            />
          </div>
        </Case>
        <Case label="leadingContent: Icon">
          <div style={{ width: '480px' }}>
            <ListCard
              src={IMG}
              alt="썸네일"
              title="제목"
              caption="캡션"
              leadingContent={<Icon name="bookmark" size={24} color="var(--color-label-alternative)" />}
            />
          </div>
        </Case>
      </Section>

      {/* ── trailingContent ── */}
      <Section title="TrailingContent" gap="var(--spacing-24)" column>
        <Case label="trailingContent 없음  default">
          <div style={{ width: '480px' }}>
            <ListCard
              src={IMG}
              alt="썸네일"
              title="제목"
              caption="캡션"
            />
          </div>
        </Case>
        <Case label="trailingContent: Switch">
          <div style={{ width: '480px' }}>
            <ListCard
              src={IMG}
              alt="썸네일"
              title="제목"
              caption="캡션"
              trailingContent={<Switch active={true} size="small" />}
            />
          </div>
        </Case>
        <Case label="trailingContent: Toggle Icon">
          <div style={{ width: '480px' }}>
            <ListCard
              src={IMG}
              alt="썸네일"
              title="제목"
              caption="캡션"
              trailingContent={<Icon name="bookmark" size={24} color="var(--color-label-alternative)" />}
            />
          </div>
        </Case>
        <Case label="trailingContent: Chevron Right">
          <div style={{ width: '480px' }}>
            <ListCard
              src={IMG}
              alt="썸네일"
              title="제목"
              caption="캡션"
              trailingContent={<Icon name="chevronRight" size={24} color="var(--color-label-alternative)" />}
            />
          </div>
        </Case>
      </Section>

      {/* ── skeleton ── */}
      <Section title="Skeleton" gap="var(--spacing-24)" column>
        <Case label='platform="desktop"  기본'>
          <div style={{ width: '480px' }}>
            <ListCard skeleton />
          </div>
        </Case>
        <Case label='platform="desktop"  topContent + bottomContent'>
          <div style={{ width: '480px' }}>
            <ListCard skeleton topContent={skeletonSlot} bottomContent={skeletonSlot} />
          </div>
        </Case>
        <Case label='platform="mobile"  기본'>
          <div style={{ width: '335px' }}>
            <ListCard skeleton platform="mobile" />
          </div>
        </Case>
        <Case label='platform="mobile"  topContent + bottomContent'>
          <div style={{ width: '335px' }}>
            <ListCard skeleton platform="mobile" topContent={skeletonSlot} bottomContent={skeletonSlot} />
          </div>
        </Case>
      </Section>
    </div>
  )
}

/* ══════════════════════════════════════════════════════════════
   페이지
══════════════════════════════════════════════════════════════ */

const TAB_ITEMS = [{ label: 'Card' }, { label: 'List Card' }]

export default function CardPage() {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <div>
      <h2 style={{
        fontSize:     'var(--font-size-title-3)',
        lineHeight:   'var(--line-height-title-3)',
        fontWeight:   'var(--font-weight-bold)',
        color:        'var(--color-label-normal)',
        marginBottom: 'var(--spacing-24)',
      }}>Card</h2>

      <div style={{ marginBottom: 'var(--spacing-40)' }}>
        <Tab items={TAB_ITEMS} value={activeTab} onChange={setActiveTab} />
      </div>

      {activeTab === 0 ? <CardContent /> : <ListCardContent />}
    </div>
  )
}

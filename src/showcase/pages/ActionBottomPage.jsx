import { useState } from 'react'
import Section from '../Section'
import Button from '../../design-system/components/Button/Button'

/* ── 공통 버튼 스타일 ──────────────────────────────────────────── */
const BTN = {
  borderRadius: 'var(--spacing-12)',
  padding:      `var(--spacing-12) var(--spacing-24)`,
  fontSize:     'var(--font-size-body-1)',
  lineHeight:   'var(--line-height-body-1-normal)',
  fontWeight:   'var(--font-weight-semibold)',
  textAlign:    'center',
  boxSizing:    'border-box',
  whiteSpace:   'nowrap',
  overflow:     'hidden',
}
const BTN_SOLID         = { ...BTN, backgroundColor: 'var(--color-primary-normal)', color: 'var(--color-static-white)', border: 'none' }
const BTN_OUTLINED      = { ...BTN, backgroundColor: 'transparent', border: '1px solid var(--color-line-neutral)', color: 'var(--color-primary-normal)' }
const BTN_NEUTRAL       = { ...BTN, backgroundColor: 'transparent', border: '1px solid var(--color-line-neutral)', color: 'var(--color-label-normal)', fontWeight: 'var(--font-weight-medium)' }
const BTN_CANCEL         = { ...BTN, backgroundColor: 'transparent', border: '1px solid var(--color-line-neutral)', color: 'var(--color-label-normal)', fontWeight: 'var(--font-weight-medium)', width: '100%' }
const BTN_PRIMARY_BORDER = { ...BTN, backgroundColor: 'transparent', border: '1px solid var(--color-primary-normal)', color: 'var(--color-primary-normal)' }

/* ── Sub Action (Strong — 텍스트 전용) ───────────────────────────── */
const SUB_TEXT = {
  textAlign:  'center',
  fontSize:   'var(--font-size-label-2)',
  lineHeight: 'var(--line-height-label-2)',
  fontWeight: 'var(--font-weight-semibold)',
  color:      'var(--color-label-alternative)',
  padding:    'var(--spacing-4) 0',
}
const SUB_TEXT_PRIMARY = { ...SUB_TEXT, color: 'var(--color-primary-normal)' }

/* ── 섹션 카드 배경 ─────────────────────────────────────────────── */
const CARD = {
  width:           '100%',
  backgroundColor: 'var(--color-fill-normal)',
  borderRadius:    'var(--spacing-12)',
  padding:         'var(--spacing-32)',
  boxSizing:       'border-box',
}

/* ── MockFrame — 폰 프레임 프리뷰 ───────────────────────────────── */
function MockFrame({ label, children, width = 375 }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-8)', flexShrink: 0 }}>
      {label && (
        <span style={{
          fontSize:   'var(--font-size-label-2)',
          lineHeight: 'var(--line-height-label-2)',
          fontWeight: 'var(--font-weight-semibold)',
          color:      'var(--color-label-normal)',
        }}>{label}</span>
      )}
      <div style={{
        width:           `${width}px`,
        border:          '1.5px solid var(--color-line-normal)',
        borderRadius:    'var(--spacing-16)',
        overflow:        'hidden',
        backgroundColor: 'var(--color-bg-elevated)',
      }}>
        <div style={{ height: '100px', backgroundColor: 'var(--color-fill-normal)' }} />
        {children}
      </div>
    </div>
  )
}

const CAPTION_STYLE = {
  fontSize:   'var(--font-size-caption-1)',
  lineHeight: 'var(--line-height-caption-1)',
  color:      'var(--color-label-alternative)',
}

/* ── ActionArea 래퍼 ─────────────────────────────────────────────── */
function ActionArea({ children, divider, extra, caption, safeAreaH = 0, compact }) {
  return (
    <div>
      {divider && (
        <div style={{ height: 'var(--spacing-1)', backgroundColor: 'var(--color-line-neutral)' }} />
      )}
      {extra && (
        <div style={{
          margin:          `var(--spacing-20) var(--spacing-20) 0`,
          height:          'var(--spacing-48)',
          backgroundColor: 'var(--color-accent-bg-violet)',
          opacity:         0.14,
        }} />
      )}
      <div style={{
        padding:        'var(--spacing-20)',
        display:        'flex',
        flexDirection:  compact ? 'row' : 'column',
        gap:            'var(--spacing-12)',
        justifyContent: compact ? 'flex-end' : undefined,
        alignItems:     compact ? 'center' : undefined,
      }}>
        {compact ? (
          <>
            {/* Compact: caption은 버튼 왼쪽 flex-1 영역 */}
            <div style={{ flex: 1 }}>
              {caption && <p style={CAPTION_STYLE}>필요한 경우 설명을 덧붙입니다.</p>}
            </div>
            {children}
          </>
        ) : (
          <>
            {/* Strong/Neutral: caption은 버튼 위 */}
            {caption && (
              <p style={{ ...CAPTION_STYLE, textAlign: 'center', width: '100%' }}>
                필요한 경우 설명을 덧붙입니다.
              </p>
            )}
            {children}
          </>
        )}
      </div>
      {safeAreaH > 0 && (
        <div style={{ height: `${safeAreaH}px` }} />
      )}
    </div>
  )
}

/* ── StickyGradient ─────────────────────────────────────────────── */
function StickyGradient() {
  return (
    <div style={{
      height:     '36px',
      marginTop:  '-36px',
      background: 'linear-gradient(to bottom, transparent, var(--color-bg-elevated))',
      position:   'relative',
      zIndex:     1,
      pointerEvents: 'none',
    }} />
  )
}

/* ── Label 헤더 ─────────────────────────────────────────────────── */
function SubLabel({ children }) {
  return (
    <p style={{
      fontSize:   'var(--font-size-caption-1)',
      lineHeight: 'var(--line-height-caption-1)',
      fontWeight: 'var(--font-weight-semibold)',
      color:      'var(--color-label-assistive)',
      marginBottom: 'var(--spacing-16)',
    }}>{children}</p>
  )
}

/* ─────────────────────────────────────────────────────────────────
   페이지
───────────────────────────────────────────────────────────────── */
export default function ActionBottomPage() {
  const [clicked, setClicked] = useState(0)

  return (
    <div>
      <h2 style={{
        fontSize:     'var(--font-size-title-3)',
        lineHeight:   'var(--line-height-title-3)',
        fontWeight:   'var(--font-weight-bold)',
        color:        'var(--color-label-normal)',
        marginBottom: 'var(--spacing-8)',
      }}>Bottom</h2>
      <p style={{
        fontSize:     'var(--font-size-body-2)',
        lineHeight:   'var(--line-height-body-2-normal)',
        fontWeight:   'var(--font-weight-regular)',
        color:        'var(--color-label-alternative)',
        marginBottom: 'var(--spacing-32)',
      }}>화면 하단에 고정되는 주요 액션 영역입니다.</p>

      {/* ──────────────── 인터랙션 데모 ──────────────── */}
      <Section title="Test">
        <div style={CARD}>
          <SubLabel>버튼에 마우스를 올리거나 클릭해보세요</SubLabel>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--spacing-24)', marginTop: 'var(--spacing-16)' }}>
            <MockFrame label="Strong — Main + Alternative">
              <ActionArea>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-8)' }}>
                  <Button variant="solid"    color="primary" label="메인 액션" size="large" onClick={() => setClicked(c => c + 1)} />
                  <Button variant="outlined" color="primary" label="대체 액션" size="large" onClick={() => setClicked(c => c + 1)} />
                </div>
              </ActionArea>
            </MockFrame>
            <MockFrame label="Neutral — Alt + Main">
              <ActionArea compact>
                <Button variant="outlined" color="assistive" label="대체" size="large" onClick={() => setClicked(c => c + 1)} />
                <Button variant="solid"    color="primary"   label="메인" size="large" onClick={() => setClicked(c => c + 1)} />
              </ActionArea>
            </MockFrame>
          </div>
          <div style={{ marginTop: 'var(--spacing-16)', fontSize: 'var(--font-size-body-2)', color: 'var(--color-label-alternative)' }}>
            총 클릭: <strong style={{ color: 'var(--color-label-normal)' }}>{clicked}회</strong>
          </div>
        </div>
      </Section>

      {/* ──────────────── 1. extra & divider ──────────────── */}
      <Section title="Extra">
        <div style={CARD}>
          <SubLabel>extra = false / true</SubLabel>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--spacing-24)', marginBottom: 'var(--spacing-32)' }}>
            <MockFrame label="extra=false">
              <ActionArea>
                <div style={{ ...BTN_SOLID, width: '100%' }}>메인 액션</div>
              </ActionArea>
            </MockFrame>
            <MockFrame label="extra=true">
              <ActionArea extra>
                <div style={{ ...BTN_SOLID, width: '100%' }}>메인 액션</div>
              </ActionArea>
            </MockFrame>
          </div>

          <SubLabel>extra=true + divider = false / true</SubLabel>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--spacing-24)' }}>
            <MockFrame label="divider=false">
              <ActionArea extra>
                <div style={{ ...BTN_SOLID, width: '100%' }}>메인 액션</div>
                <div style={{ ...BTN_OUTLINED, width: '100%' }}>대체 액션</div>
              </ActionArea>
            </MockFrame>
            <MockFrame label="divider=true">
              <ActionArea extra divider>
                <div style={{ ...BTN_SOLID, width: '100%' }}>메인 액션</div>
                <div style={{ ...BTN_OUTLINED, width: '100%' }}>대체 액션</div>
              </ActionArea>
            </MockFrame>
          </div>
        </div>
      </Section>

      {/* ──────────────── 2. variant ──────────────── */}
      <Section title="Variant">
        <div style={CARD}>

          {/* Strong */}
          <SubLabel>variant = Strong</SubLabel>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--spacing-24)', marginBottom: 'var(--spacing-32)' }}>

            <MockFrame label="Main Action">
              <ActionArea>
                <div style={{ ...BTN_SOLID, width: '100%' }}>메인 액션</div>
              </ActionArea>
            </MockFrame>

            <MockFrame label="Main + Alternative">
              <ActionArea>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-8)' }}>
                  <div style={{ ...BTN_SOLID, width: '100%' }}>메인 액션</div>
                  <div style={{ ...BTN_OUTLINED, width: '100%' }}>대체 액션</div>
                </div>
              </ActionArea>
            </MockFrame>

            <MockFrame label="Main + Alternative + Sub">
              <ActionArea>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-8)' }}>
                  <div style={{ ...BTN_SOLID, width: '100%' }}>메인 액션</div>
                  <div style={{ ...BTN_OUTLINED, width: '100%' }}>대체 액션</div>
                </div>
                <div style={SUB_TEXT}>보조 액션</div>
              </ActionArea>
            </MockFrame>

          </div>

          {/* Neutral */}
          <SubLabel>variant = Neutral</SubLabel>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--spacing-24)', marginBottom: 'var(--spacing-32)' }}>

            <MockFrame label="Sub + Alt + Main">
              <ActionArea>
                <div style={{ display: 'flex', gap: 'var(--spacing-12)' }}>
                  <div style={{ ...BTN_NEUTRAL }}>보조</div>
                  <div style={{ ...BTN_OUTLINED, flex: 1 }}>대체</div>
                  <div style={{ ...BTN_SOLID, flex: 1 }}>메인</div>
                </div>
              </ActionArea>
            </MockFrame>

            <MockFrame label="Sub + Main">
              <ActionArea>
                <div style={{ display: 'flex', gap: 'var(--spacing-12)' }}>
                  <div style={{ ...BTN_NEUTRAL }}>보조</div>
                  <div style={{ ...BTN_SOLID, flex: 1 }}>메인</div>
                </div>
              </ActionArea>
            </MockFrame>

            <MockFrame label="Alt + Main">
              <ActionArea>
                <div style={{ display: 'flex', gap: 'var(--spacing-12)' }}>
                  <div style={{ ...BTN_OUTLINED, flex: 1 }}>대체</div>
                  <div style={{ ...BTN_SOLID, flex: 1 }}>메인</div>
                </div>
              </ActionArea>
            </MockFrame>

          </div>

          {/* Compact (Web Only) */}
          <SubLabel>variant = Compact (Web Only)</SubLabel>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--spacing-24)', marginBottom: 'var(--spacing-32)' }}>

            <MockFrame label="Sub + Alt + Main" width={375}>
              <ActionArea compact>
                <div style={{ ...BTN_NEUTRAL }}>보조</div>
                <div style={{ ...BTN_OUTLINED }}>대체</div>
                <div style={{ ...BTN_SOLID }}>메인</div>
              </ActionArea>
            </MockFrame>

            <MockFrame label="Sub + Main" width={375}>
              <ActionArea compact>
                <div style={{ ...BTN_NEUTRAL }}>보조</div>
                <div style={{ ...BTN_SOLID }}>메인</div>
              </ActionArea>
            </MockFrame>

            <MockFrame label="Alt + Main" width={375}>
              <ActionArea compact>
                <div style={{ ...BTN_OUTLINED }}>대체</div>
                <div style={{ ...BTN_SOLID }}>메인</div>
              </ActionArea>
            </MockFrame>

          </div>

          {/* compactContent sub-property */}
          <SubLabel>compactContent = false / true</SubLabel>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--spacing-24)', marginBottom: 'var(--spacing-32)' }}>

            <MockFrame label="compactContent=false">
              <ActionArea compact>
                <div style={{ ...BTN_OUTLINED }}>대체</div>
                <div style={{ ...BTN_SOLID }}>메인</div>
              </ActionArea>
            </MockFrame>

            <MockFrame label="compactContent=true">
              <div style={{ padding: 'var(--spacing-20)', display: 'flex', gap: 'var(--spacing-12)', alignItems: 'center', justifyContent: 'flex-end' }}>
                <div style={{
                  flex:            1,
                  height:          'var(--spacing-48)',
                  backgroundColor: 'var(--color-accent-bg-violet)',
                  opacity:         0.08,
                }} />
                <div style={{ ...BTN_OUTLINED }}>대체</div>
                <div style={{ ...BTN_SOLID }}>메인</div>
              </div>
            </MockFrame>

          </div>

          {/* Cancel */}
          <SubLabel>variant = Cancel</SubLabel>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--spacing-24)' }}>
            <MockFrame label="확인 (단일 버튼)">
              <ActionArea>
                <div style={{ ...BTN_CANCEL }}>확인</div>
              </ActionArea>
            </MockFrame>
          </div>

        </div>
      </Section>

      {/* ──────────────── 3. customize ──────────────── */}
      <Section title="Customize">
        <div style={CARD}>
          <SubLabel>customize = button (메인 액션이 Outlined Primary로 커스텀된 케이스)</SubLabel>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--spacing-24)' }}>

            {/* Strong — 메인/대체 모두 커스텀 */}
            <MockFrame label="Strong">
              <ActionArea>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-8)' }}>
                  <div style={{ ...BTN_PRIMARY_BORDER, width: '100%' }}>메인 액션</div>
                  <div style={{ ...BTN_NEUTRAL, width: '100%' }}>대체 액션</div>
                </div>
                <div style={SUB_TEXT_PRIMARY}>보조 액션</div>
              </ActionArea>
            </MockFrame>

            {/* Neutral — 보조(neutral) + 대체/메인 primary border */}
            <MockFrame label="Neutral">
              <ActionArea>
                <div style={{ display: 'flex', gap: 'var(--spacing-12)' }}>
                  <div style={{ ...BTN_NEUTRAL }}>보조</div>
                  <div style={{ ...BTN_PRIMARY_BORDER, flex: 1 }}>대체</div>
                  <div style={{ ...BTN_PRIMARY_BORDER, flex: 1 }}>메인</div>
                </div>
              </ActionArea>
            </MockFrame>

            {/* Compact — 보조(neutral) + 대체/메인 primary border, right-aligned */}
            <MockFrame label="Compact">
              <ActionArea compact>
                <div style={{ ...BTN_NEUTRAL }}>보조</div>
                <div style={{ ...BTN_PRIMARY_BORDER }}>대체</div>
                <div style={{ ...BTN_PRIMARY_BORDER }}>메인</div>
              </ActionArea>
            </MockFrame>

            {/* Cancel — primary border */}
            <MockFrame label="Cancel">
              <ActionArea>
                <div style={{ ...BTN_PRIMARY_BORDER, width: '100%' }}>확인</div>
              </ActionArea>
            </MockFrame>

          </div>
        </div>
      </Section>

      {/* ──────────────── 4. caption ──────────────── */}
      <Section title="Caption">
        <div style={CARD}>
          <SubLabel>Strong — caption = false / true</SubLabel>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--spacing-24)', marginBottom: 'var(--spacing-32)' }}>
            <MockFrame label="caption=false">
              <ActionArea>
                <div style={{ ...BTN_SOLID, width: '100%' }}>메인 액션</div>
              </ActionArea>
            </MockFrame>
            <MockFrame label="caption=true">
              <ActionArea caption>
                <div style={{ ...BTN_SOLID, width: '100%' }}>메인 액션</div>
              </ActionArea>
            </MockFrame>
          </div>

          <SubLabel>Compact — caption = false / true</SubLabel>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--spacing-24)' }}>
            <MockFrame label="caption=false">
              <ActionArea compact>
                <div style={{ ...BTN_OUTLINED }}>대체</div>
                <div style={{ ...BTN_SOLID }}>메인 액션</div>
              </ActionArea>
            </MockFrame>
            <MockFrame label="caption=true">
              <ActionArea compact caption>
                <div style={{ ...BTN_OUTLINED }}>대체</div>
                <div style={{ ...BTN_SOLID }}>메인 액션</div>
              </ActionArea>
            </MockFrame>
          </div>
        </div>
      </Section>

      {/* ──────────────── 5. sticky ──────────────── */}
      <Section title="Sticky">
        <div style={CARD}>
          <SubLabel>sticky = false / true (스크롤 본문 위 그라디언트 페이드)</SubLabel>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--spacing-24)', marginBottom: 'var(--spacing-32)' }}>
            <MockFrame label="sticky=false">
              <ActionArea>
                <div style={{ ...BTN_SOLID, width: '100%' }}>메인 액션</div>
              </ActionArea>
            </MockFrame>
            <MockFrame label="sticky=true">
              <StickyGradient />
              <ActionArea>
                <div style={{ ...BTN_SOLID, width: '100%' }}>메인 액션</div>
              </ActionArea>
            </MockFrame>
          </div>

          <SubLabel>sticky=true — 버튼 조합별</SubLabel>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--spacing-24)' }}>
            {[
              {
                label:   'Main only',
                content: <div style={{ ...BTN_SOLID, width: '100%' }}>메인 액션</div>,
              },
              {
                label:   'Main + Alt',
                content: (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-8)', width: '100%' }}>
                    <div style={{ ...BTN_SOLID, width: '100%' }}>메인 액션</div>
                    <div style={{ ...BTN_OUTLINED, width: '100%' }}>대체 액션</div>
                  </div>
                ),
              },
              {
                label:   'Neutral Alt+Main',
                content: (
                  <div style={{ display: 'flex', gap: 'var(--spacing-12)', width: '100%' }}>
                    <div style={{ ...BTN_OUTLINED, flex: 1 }}>대체</div>
                    <div style={{ ...BTN_SOLID, flex: 1 }}>메인</div>
                  </div>
                ),
              },
              {
                label:   'Cancel',
                content: <div style={{ ...BTN_CANCEL }}>확인</div>,
              },
            ].map(({ label, content }) => (
              <MockFrame key={label} label={label}>
                <StickyGradient />
                <ActionArea>{content}</ActionArea>
              </MockFrame>
            ))}
          </div>
        </div>
      </Section>

      {/* ──────────────── 6. resource ──────────────── */}
      <Section title="Resource">
        <div style={CARD}>

          {/* ── extra 슬롯 프리셋 ── */}
          <SubLabel>extra 슬롯 콘텐츠 프리셋</SubLabel>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--spacing-24)', marginBottom: 'var(--spacing-32)' }}>

            <MockFrame label="Custom">
              <div>
                <div style={{ margin: `var(--spacing-20) var(--spacing-20) 0` }}>
                  <div style={{ height: 'calc(var(--spacing-48) + var(--spacing-24))', backgroundColor: 'var(--color-accent-bg-violet)', opacity: 0.08 }} />
                </div>
                <ActionArea>
                  <div style={{ ...BTN_SOLID, width: '100%' }}>메인 액션</div>
                </ActionArea>
              </div>
            </MockFrame>

            <MockFrame label="Summary">
              <div>
                <div style={{ margin: `var(--spacing-20) var(--spacing-20) 0`, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span style={{ fontSize: 'var(--font-size-body-1)', lineHeight: 'var(--line-height-body-1-normal)', color: 'var(--color-label-alternative)' }}>요약</span>
                  <span style={{ fontSize: 'var(--font-size-heading-2)', lineHeight: 'var(--line-height-heading-2)', fontWeight: 'var(--font-weight-semibold)', color: 'var(--color-label-strong)' }}>값</span>
                </div>
                <ActionArea>
                  <div style={{ ...BTN_SOLID, width: '100%' }}>메인 액션</div>
                </ActionArea>
              </div>
            </MockFrame>

            <MockFrame label="Information">
              <div>
                <div style={{ margin: `var(--spacing-20) var(--spacing-20) 0`, textAlign: 'center' }}>
                  <p style={{ fontSize: 'var(--font-size-headline-2)', lineHeight: 'var(--line-height-headline-2)', fontWeight: 'var(--font-weight-semibold)', color: 'var(--color-label-strong)', marginBottom: 'var(--spacing-4)' }}>헤딩</p>
                  <p style={{ fontSize: 'var(--font-size-label-1)', lineHeight: 'var(--line-height-label-1-normal)', color: 'var(--color-label-alternative)' }}>필요한 경우 설명을 덧붙입니다.</p>
                </div>
                <ActionArea>
                  <div style={{ ...BTN_SOLID, width: '100%' }}>메인 액션</div>
                </ActionArea>
              </div>
            </MockFrame>

            <MockFrame label="Checkbox">
              <div>
                <div style={{ margin: `var(--spacing-20) var(--spacing-20) 0`, display: 'flex', alignItems: 'center', gap: 'var(--spacing-4)' }}>
                  <span style={{
                    display:        'inline-flex',
                    alignItems:     'center',
                    justifyContent: 'center',
                    width:          'var(--spacing-24)',
                    height:         'var(--spacing-24)',
                    border:         '2px solid var(--color-primary-normal)',
                    borderRadius:   'var(--spacing-6)',
                    flexShrink:     0,
                  }}>
                    <svg width="12" height="9" viewBox="0 0 12 9" fill="none">
                      <path d="M1 4L4.5 7.5L11 1" stroke="var(--color-primary-normal)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <span style={{ fontSize: 'var(--font-size-body-1)', lineHeight: 'var(--line-height-body-1-normal)', color: 'var(--color-label-normal)' }}>텍스트</span>
                </div>
                <ActionArea>
                  <div style={{ ...BTN_SOLID, width: '100%' }}>메인 액션</div>
                </ActionArea>
              </div>
            </MockFrame>

            <MockFrame label="Chip">
              <div>
                <div style={{ margin: `var(--spacing-20) var(--spacing-20) 0`, display: 'flex', gap: 'var(--spacing-6)' }}>
                  {['텍스트', '텍스트', '텍스트'].map((t, i) => (
                    <span key={i} style={{
                      display:         'inline-flex',
                      alignItems:      'center',
                      padding:         `var(--spacing-8) var(--spacing-10)`,
                      borderRadius:    'var(--spacing-10)',
                      backgroundColor: 'var(--color-fill-alternative)',
                      fontSize:        'var(--font-size-body-2)',
                      lineHeight:      'var(--line-height-body-2-normal)',
                      color:           'var(--color-label-alternative)',
                      whiteSpace:      'nowrap',
                      flexShrink:      0,
                    }}>{t}</span>
                  ))}
                </div>
                <ActionArea>
                  <div style={{ ...BTN_SOLID, width: '100%' }}>메인 액션</div>
                </ActionArea>
              </div>
            </MockFrame>

          </div>

          {/* ── compactContent 슬롯 프리셋 ── */}
          <SubLabel>compactContent 슬롯 콘텐츠 프리셋 (Compact variant)</SubLabel>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--spacing-24)' }}>

            <MockFrame label="Custom" width={375}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-12)', padding: 'var(--spacing-20)' }}>
                <div style={{ flex: 1, height: 'var(--spacing-48)', backgroundColor: 'var(--color-accent-bg-violet)', opacity: 0.08 }} />
                <div style={{ ...BTN_OUTLINED }}>대체</div>
                <div style={{ ...BTN_SOLID }}>메인</div>
              </div>
            </MockFrame>

            <MockFrame label="Summary" width={375}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-12)', padding: 'var(--spacing-20)' }}>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <p style={{ fontSize: 'var(--font-size-label-2)', lineHeight: 'var(--line-height-label-2)', color: 'var(--color-label-alternative)', marginBottom: 'var(--spacing-2)' }}>요약</p>
                  <p style={{ fontSize: 'var(--font-size-body-2)', lineHeight: 'var(--line-height-body-2-normal)', fontWeight: 'var(--font-weight-semibold)', color: 'var(--color-label-strong)' }}>값</p>
                </div>
                <div style={{ ...BTN_OUTLINED }}>대체</div>
                <div style={{ ...BTN_SOLID }}>메인</div>
              </div>
            </MockFrame>

            <MockFrame label="Information" width={375}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-12)', padding: 'var(--spacing-20)' }}>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <p style={{ fontSize: 'var(--font-size-body-2)', lineHeight: 'var(--line-height-body-2-normal)', fontWeight: 'var(--font-weight-semibold)', color: 'var(--color-label-strong)', marginBottom: 'var(--spacing-2)' }}>헤딩</p>
                  <p style={{ fontSize: 'var(--font-size-label-2)', lineHeight: 'var(--line-height-label-2)', color: 'var(--color-label-alternative)' }}>필요한 경우 설명을 덧붙입니다.</p>
                </div>
                <div style={{ ...BTN_OUTLINED }}>대체</div>
                <div style={{ ...BTN_SOLID }}>메인</div>
              </div>
            </MockFrame>

            <MockFrame label="Checkbox" width={375}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-12)', padding: 'var(--spacing-20)' }}>
                <div style={{ flex: 1, display: 'flex', alignItems: 'center', gap: 'var(--spacing-4)' }}>
                  <span style={{
                    display:        'inline-flex',
                    alignItems:     'center',
                    justifyContent: 'center',
                    width:          'var(--spacing-24)',
                    height:         'var(--spacing-24)',
                    border:         '2px solid var(--color-primary-normal)',
                    borderRadius:   'var(--spacing-6)',
                    flexShrink:     0,
                  }}>
                    <svg width="12" height="9" viewBox="0 0 12 9" fill="none">
                      <path d="M1 4L4.5 7.5L11 1" stroke="var(--color-primary-normal)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <span style={{ fontSize: 'var(--font-size-body-1)', lineHeight: 'var(--line-height-body-1-normal)', color: 'var(--color-label-normal)' }}>텍스트</span>
                </div>
                <div style={{ ...BTN_OUTLINED }}>대체</div>
                <div style={{ ...BTN_SOLID }}>메인</div>
              </div>
            </MockFrame>

            <MockFrame label="Chip" width={375}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-12)', padding: 'var(--spacing-20)' }}>
                <div style={{ flex: 1, display: 'flex', gap: 'var(--spacing-6)', overflow: 'hidden' }}>
                  {['텍스트', '텍스트', '텍스트'].map((t, i) => (
                    <span key={i} style={{
                      display:         'inline-flex',
                      alignItems:      'center',
                      padding:         `var(--spacing-8) var(--spacing-10)`,
                      borderRadius:    'var(--spacing-10)',
                      backgroundColor: 'var(--color-fill-alternative)',
                      fontSize:        'var(--font-size-body-2)',
                      lineHeight:      'var(--line-height-body-2-normal)',
                      color:           'var(--color-label-alternative)',
                      whiteSpace:      'nowrap',
                      flexShrink:      0,
                    }}>{t}</span>
                  ))}
                </div>
                <div style={{ ...BTN_OUTLINED }}>대체</div>
                <div style={{ ...BTN_SOLID }}>메인</div>
              </div>
            </MockFrame>

            <MockFrame label="Button" width={375}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-12)', padding: 'var(--spacing-20)' }}>
                <div style={{ flex: 1 }}>
                  <span style={{
                    display:        'inline-flex',
                    alignItems:     'center',
                    justifyContent: 'center',
                    width:          'var(--spacing-48)',
                    height:         'var(--spacing-48)',
                    border:         '1px solid var(--color-line-neutral)',
                    borderRadius:   '50%',
                    color:          'var(--color-label-normal)',
                  }}>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M10 4v12M4 10h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </span>
                </div>
                <div style={{ ...BTN_OUTLINED }}>대체</div>
                <div style={{ ...BTN_SOLID }}>메인 액션</div>
              </div>
            </MockFrame>

          </div>
        </div>
      </Section>

      {/* ──────────────── 7. safeArea ──────────────── */}
      <Section title="Safe Area">
        <div style={CARD}>
          <SubLabel>플랫폼별 하단 Safe Area</SubLabel>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--spacing-24)' }}>

            <MockFrame label="Web (0px)">
              <ActionArea safeAreaH={0}>
                <div style={{ ...BTN_SOLID, width: '100%' }}>메인 액션</div>
              </ActionArea>
            </MockFrame>

            <MockFrame label="iOS (34px)">
              <div>
                <ActionArea safeAreaH={0}>
                  <div style={{ ...BTN_SOLID, width: '100%' }}>메인 액션</div>
                </ActionArea>
                {/* Home Bar */}
                <div style={{
                  height:          'var(--safe-area-bottom-ios)',
                  backgroundColor: 'var(--color-fill-normal)',
                  display:         'flex',
                  alignItems:      'center',
                  justifyContent:  'center',
                  borderTop:       '1px solid var(--color-line-alternative)',
                }}>
                  <div style={{
                    width:           '38%',
                    height:          'var(--spacing-4)',
                    backgroundColor: 'var(--color-label-strong)',
                    borderRadius:    'var(--spacing-4)',
                    opacity:         0.35,
                  }} />
                </div>
              </div>
            </MockFrame>

            <MockFrame label="Android (14px)">
              <div>
                <ActionArea safeAreaH={0}>
                  <div style={{ ...BTN_SOLID, width: '100%' }}>메인 액션</div>
                </ActionArea>
                {/* Navigation Bar */}
                <div style={{
                  height:          'var(--safe-area-bottom-android)',
                  backgroundColor: 'var(--color-fill-normal)',
                  display:         'flex',
                  alignItems:      'center',
                  justifyContent:  'center',
                  borderTop:       '1px solid var(--color-line-alternative)',
                }}>
                  <div style={{
                    width:           '32%',
                    height:          'var(--spacing-2)',
                    backgroundColor: 'var(--color-label-strong)',
                    borderRadius:    'var(--spacing-4)',
                    opacity:         0.35,
                  }} />
                </div>
              </div>
            </MockFrame>

          </div>
        </div>
      </Section>
    </div>
  )
}

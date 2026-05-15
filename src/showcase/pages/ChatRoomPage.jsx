// 채팅방 UI 쇼케이스 페이지 — 배너 on/off 토글로 변형 확인

import { useState } from 'react'
import Section from '../Section'
import Switch from '../../design-system/components/Switch/Switch'
import ChatRoom, { ChatTopBanner, ChatBottomBanner } from '../../design-system/components/ChatRoom/ChatRoom'

function PhoneFrame({ children }) {
  return (
    <div style={{
      width:           '360px',
      height:          '780px',
      overflow:        'hidden',
      borderRadius:    'var(--spacing-24)',
      boxShadow:       '0 0 0 1px var(--color-line-solid-normal), var(--shadow-normal-large)',
      backgroundColor: 'var(--color-bg-normal)',
    }}>
      {children}
    </div>
  )
}

function ToggleRow({ label, active, onChange }) {
  return (
    <div style={{
      display:    'flex',
      alignItems: 'center',
      gap:        'var(--spacing-8)',
    }}>
      <Switch size="small" active={active} onChange={onChange} />
      <span style={{
        fontSize:      'var(--font-size-label-1)',
        lineHeight:    'var(--line-height-label-1-normal)',
        fontWeight:    'var(--font-weight-medium)',
        color:         'var(--color-label-normal)',
        letterSpacing: 'var(--letter-spacing-label-1)',
      }}>{label}</span>
    </div>
  )
}

export default function ChatRoomPage() {
  const [topBannerOn,    setTopBannerOn]    = useState(false)
  const [bottomBannerOn, setBottomBannerOn] = useState(false)

  return (
    <>
      <h2 style={{
        fontSize:      'var(--font-size-title-3)',
        fontWeight:    'var(--font-weight-bold)',
        color:         'var(--color-label-normal)',
        letterSpacing: 'var(--letter-spacing-title-3)',
        marginBottom:  'var(--spacing-32)',
      }}>Chat Room</h2>

      <Section title="Chat UI" column>
        <div style={{ display: 'flex', gap: 'var(--spacing-16)', marginBottom: 'var(--spacing-20)' }}>
          <ToggleRow label="상단 배너" active={topBannerOn}    onChange={() => setTopBannerOn(v    => !v)} />
          <ToggleRow label="하단 배너" active={bottomBannerOn} onChange={() => setBottomBannerOn(v => !v)} />
        </div>
        <PhoneFrame>
          <ChatRoom
            title="인포뱅크 봇"
            topBanner={topBannerOn
              ? <ChatTopBanner title="2025년 해외주식 양도소득세 무료 신고 대행" subtitle="서비스 안내" />
              : null
            }
            bottomBanner={bottomBannerOn
              ? <ChatBottomBanner text="공지사항 안내 배너입니다." />
              : null
            }
          />
        </PhoneFrame>
      </Section>

    </>
  )
}

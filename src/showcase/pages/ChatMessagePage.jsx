// 챗봇 메시지 설정 페이지 — 좌측 미리보기 + 우측 토글 트리로 메시지 구성요소 on/off 제어

import { useState, useMemo } from 'react'
import ChatRoom from '../../design-system/components/ChatRoom/ChatRoom'
import Switch from '../../design-system/components/Switch/Switch'
import Icon from '../../design-system/components/Icon/Icon'
import chatbotImg    from '/T1_parksy/Chatbot img.png'
import chatbotBanner from '/T1_parksy/Chatbot Banner.png'

function PhoneFrame({ children }) {
  return (
    <div style={{
      width:           '360px',
      height:          '780px',
      overflow:        'hidden',
      borderRadius:    'var(--spacing-24)',
      boxShadow:       '0 0 0 1px var(--color-line-solid-normal), var(--shadow-normal-large)',
      backgroundColor: 'var(--color-bg-normal)',
      flexShrink:      0,
    }}>
      {children}
    </div>
  )
}

function ToggleRow({ label, active, onChange, indent = 0, disabled = false, hasChildren = false, expanded = true, onToggleExpand }) {
  return (
    <div style={{
      display:        'flex',
      alignItems:     'center',
      gap:            'var(--spacing-8)',
      paddingLeft:    `calc(var(--spacing-20) * ${indent})`,
      paddingTop:     'var(--spacing-8)',
      paddingBottom:  'var(--spacing-8)',
      opacity:        disabled ? 0.4 : 1,
    }}>
      {hasChildren ? (
        <button
          onClick={onToggleExpand}
          style={{
            width:           'var(--spacing-20)',
            height:          'var(--spacing-20)',
            border:          'none',
            background:      'none',
            cursor:          'pointer',
            padding:         0,
            display:         'flex',
            alignItems:      'center',
            justifyContent:  'center',
            flexShrink:      0,
          }}
        >
          <Icon
            name={expanded ? 'chevronDownSmall' : 'chevronRightSmall'}
            size={16}
            color="var(--color-label-alternative)"
          />
        </button>
      ) : (
        <span style={{ width: 'var(--spacing-20)', flexShrink: 0 }} />
      )}
      <Switch size="small" active={active} onChange={disabled ? undefined : onChange} />
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

function GroupHeader({ label, indent = 0, expanded, onToggleExpand }) {
  return (
    <div style={{
      display:        'flex',
      alignItems:     'center',
      gap:            'var(--spacing-8)',
      paddingLeft:    `calc(var(--spacing-20) * ${indent})`,
      paddingTop:     'var(--spacing-8)',
      paddingBottom:  'var(--spacing-8)',
    }}>
      <button
        onClick={onToggleExpand}
        style={{
          width:           'var(--spacing-20)',
          height:          'var(--spacing-20)',
          border:          'none',
          background:      'none',
          cursor:          'pointer',
          padding:         0,
          display:         'flex',
          alignItems:      'center',
          justifyContent:  'center',
          flexShrink:      0,
        }}
      >
        <Icon
          name={expanded ? 'chevronDownSmall' : 'chevronRightSmall'}
          size={16}
          color="var(--color-label-alternative)"
        />
      </button>
      <span style={{
        fontSize:      'var(--font-size-label-1)',
        lineHeight:    'var(--line-height-label-1-normal)',
        fontWeight:    'var(--font-weight-semibold)',
        color:         'var(--color-label-normal)',
        letterSpacing: 'var(--letter-spacing-label-1)',
      }}>{label}</span>
    </div>
  )
}

export default function ChatMessagePage() {
  const [cfg, setCfg] = useState({
    imageOn:         true,
    textOn:          true,
    titleOn:         true,
    bodyOn:          true,
    accordionOn:     true,
    buttonOn:        true,
    mainOn:          true,
    subOn:           true,
    messageBannerOn: false,
    quickButtonOn:   false,
  })

  const [openAction,  setOpenAction]  = useState(true)
  const [openSend,    setOpenSend]    = useState(true)
  const [openText,    setOpenText]    = useState(true)
  const [openButton,  setOpenButton]  = useState(true)

  const toggle = key => () => setCfg(prev => ({ ...prev, [key]: !prev[key] }))

  const initialMessages = useMemo(() => ([
    {
      id:   'u1',
      type: 'user',
      text: '안녕하세요',
    },
    {
      id:        'b1',
      type:      'bot',
      botName:   '인포뱅크 봇',
      title:     '챗봇 타이틀 텍스트',
      body:      '챗봇 본문 텍스트입니다. 원하시는 내용을 안내해 드리겠습니다.',
      mainButton: '메인 버튼',
      subButton:  '서브 버튼',
      timestamp:  '09:41',
      imageSrc:   chatbotImg,
      bannerSrc:  chatbotBanner,
      quickItems: ['퀵 버튼', '퀵 버튼', '퀵 버튼', '퀵 버튼'],
      ...cfg,
    },
  ]), [cfg])

  return (
    <>
      <h2 style={{
        fontSize:      'var(--font-size-title-3)',
        fontWeight:    'var(--font-weight-bold)',
        color:         'var(--color-label-normal)',
        letterSpacing: 'var(--letter-spacing-title-3)',
        marginBottom:  'var(--spacing-32)',
      }}>Chat Message</h2>

      <div style={{
        display:       'flex',
        gap:           'var(--spacing-32)',
        alignItems:    'flex-start',
      }}>
        <PhoneFrame>
          <ChatRoom
            title="인포뱅크 봇"
            initialMessages={initialMessages}
          />
        </PhoneFrame>

        <div style={{
          flex:            1,
          minWidth:        '320px',
          padding:         'var(--spacing-24)',
          borderRadius:    'var(--spacing-12)',
          backgroundColor: 'var(--color-bg-elevated)',
          border:          '1px solid var(--color-line-solid-normal)',
        }}>
          <h3 style={{
            fontSize:      'var(--font-size-headline-2)',
            lineHeight:    'var(--line-height-headline-2)',
            letterSpacing: 'var(--letter-spacing-headline-2)',
            fontWeight:    'var(--font-weight-semibold)',
            color:         'var(--color-label-normal)',
            marginTop:     0,
            marginBottom:  'var(--spacing-16)',
            paddingBottom: 'var(--spacing-12)',
            borderBottom:  '1px solid var(--color-line-solid-normal)',
          }}>설정</h3>

          <GroupHeader
            label="액션"
            indent={0}
            expanded={openAction}
            onToggleExpand={() => setOpenAction(v => !v)}
          />

          {openAction && (
            <>
              <GroupHeader
                label="메시지 보내기"
                indent={1}
                expanded={openSend}
                onToggleExpand={() => setOpenSend(v => !v)}
              />

              {openSend && (
                <>
                  <ToggleRow
                    label="이미지"
                    indent={2}
                    active={cfg.imageOn}
                    onChange={toggle('imageOn')}
                  />

                  <ToggleRow
                    label="텍스트"
                    indent={2}
                    hasChildren
                    expanded={openText}
                    onToggleExpand={() => setOpenText(v => !v)}
                    active={cfg.textOn}
                    onChange={toggle('textOn')}
                  />
                  {openText && (
                    <>
                      <ToggleRow
                        label="제목"
                        indent={3}
                        active={cfg.titleOn}
                        onChange={toggle('titleOn')}
                        disabled={!cfg.textOn}
                      />
                      <ToggleRow
                        label="본문"
                        indent={3}
                        active={cfg.bodyOn}
                        onChange={toggle('bodyOn')}
                        disabled={!cfg.textOn}
                      />
                      <ToggleRow
                        label="아코디언"
                        indent={3}
                        active={cfg.accordionOn}
                        onChange={toggle('accordionOn')}
                        disabled={!cfg.textOn}
                      />
                    </>
                  )}

                  <ToggleRow
                    label="버튼"
                    indent={2}
                    hasChildren
                    expanded={openButton}
                    onToggleExpand={() => setOpenButton(v => !v)}
                    active={cfg.buttonOn}
                    onChange={toggle('buttonOn')}
                  />
                  {openButton && (
                    <>
                      <ToggleRow
                        label="메인"
                        indent={3}
                        active={cfg.mainOn}
                        onChange={toggle('mainOn')}
                        disabled={!cfg.buttonOn}
                      />
                      <ToggleRow
                        label="서브"
                        indent={3}
                        active={cfg.subOn}
                        onChange={toggle('subOn')}
                        disabled={!cfg.buttonOn}
                      />
                    </>
                  )}

                  <ToggleRow
                    label="메시지 배너"
                    indent={2}
                    active={cfg.messageBannerOn}
                    onChange={toggle('messageBannerOn')}
                  />
                  <ToggleRow
                    label="퀵 버튼"
                    indent={2}
                    active={cfg.quickButtonOn}
                    onChange={toggle('quickButtonOn')}
                  />
                </>
              )}
            </>
          )}
        </div>
      </div>
    </>
  )
}

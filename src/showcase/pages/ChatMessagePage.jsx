// 챗봇 메시지 응답 설정 페이지 — 좌측 미리보기 + 우측 토글/입력 패널

import { useState, useMemo } from 'react'
import ChatRoom        from '../../design-system/components/ChatRoom/ChatRoom'
import Switch          from '../../design-system/components/Switch/Switch'
import Checkbox        from '../../design-system/components/Checkbox/Checkbox'
import Radio           from '../../design-system/components/Radio/Radio'
import Textfield       from '../../design-system/components/Textfield/Textfield'
import Select          from '../../design-system/components/Select/Select'
import TextButton      from '../../design-system/components/TextButton/TextButton'
import IconButtonNormal from '../../design-system/components/IconButton/IconButtonNormal'
import Icon            from '../../design-system/components/Icon/Icon'
import chatbotImg      from '/T1_parksy/Chatbot img.png'
import chatbotBanner   from '/T1_parksy/Chatbot Banner.png'

const PANEL_HEIGHT = '780px'

const PH = {
  title:      '제목 텍스트',
  body:       '본문 텍스트',
  accordion:  '아코디언 펼침 시 보일 텍스트',
  mainLabel:  '메인 버튼',
  subLabel:   '서브 버튼',
  quickItem:  '퀵 버튼',
}

const FILE_CAPTION = '* Jpg, Jpeg 형식 지원 (최대 10MB)'

/* ── 미리보기 폰 프레임 ────────────────────────────────────── */
function PhoneFrame({ children }) {
  return (
    <div style={{
      width:           '360px',
      height:          PANEL_HEIGHT,
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

/* ── 1단계 Switch 행 ─────────────────────────────────────── */
function SwitchRow({ label, active, onChange, disabled = false }) {
  return (
    <div style={{
      display:    'flex',
      alignItems: 'center',
      gap:        'var(--spacing-12)',
    }}>
      <Switch size="small" active={active} onChange={onChange} disabled={disabled} />
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

/* ── 섹션 외곽: 번호 칩 + 좌측 막대 ────────────────────────── */
function NumberedSection({ index, children }) {
  return (
    <section style={{ display: 'flex', gap: 'var(--spacing-12)' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0 }}>
        <div style={{
          width:           'var(--spacing-24)',
          height:          'var(--spacing-24)',
          borderRadius:    'var(--radius-full)',
          backgroundColor: 'var(--color-fill-strong)',
          color:           'var(--color-label-normal)',
          fontSize:        'var(--font-size-caption-1)',
          fontWeight:      'var(--font-weight-semibold)',
          display:         'flex',
          alignItems:      'center',
          justifyContent:  'center',
        }}>{index}</div>
        <div style={{
          width:           '2px',
          flex:            1,
          marginTop:       'var(--spacing-4)',
          backgroundColor: 'var(--color-line-neutral)',
          borderRadius:    'var(--radius-full)',
        }} />
      </div>
      <div style={{ flex: 1, minWidth: 0, paddingBottom: 'var(--spacing-4)' }}>
        {children}
      </div>
    </section>
  )
}

/* ── 자식 영역 카드 ─────────────────────────────────────── */
function SectionCard({ children }) {
  return (
    <div style={{
      marginTop:    'var(--spacing-12)',
      border:       '1px solid var(--color-line-alternative)',
      borderRadius: 'var(--spacing-12)',
      padding:      'var(--spacing-20)',
      display:      'flex',
      flexDirection:'column',
      gap:          'var(--spacing-20)',
    }}>
      {children}
    </div>
  )
}

/* ── 라벨 + 입력 묶음 ──────────────────────────────────── */
function FieldGroup({ label, children }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-8)' }}>
      <span style={{
        fontSize:      'var(--font-size-label-2)',
        lineHeight:    'var(--line-height-label-2)',
        fontWeight:    'var(--font-weight-regular)',
        color:         'var(--color-label-alternative)',
        letterSpacing: 'var(--letter-spacing-label-2)',
      }}>{label}</span>
      {children}
    </div>
  )
}

/* ── Checkbox 라벨이 있는 입력 블록 ─────────────────────── */
function CheckBlock({ checked, onChange, label, children }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-12)' }}>
      <Checkbox state={checked ? 'checked' : 'unchecked'} bold label={label} onChange={onChange} />
      {checked && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-16)' }}>
          {children}
        </div>
      )}
    </div>
  )
}

/* ── 파일 업로드 카드 (Textfield + 불러오기 + caption) ───── */
function FileUploadCard({ value, onChange }) {
  return (
    <SectionCard>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-8)' }}>
        <Textfield
          placeholder="파일을 업로드해 주세요."
          value={value}
          onChange={e => onChange(e.target.value)}
          trailingButton={{ label: '불러오기', variant: 'normal' }}
        />
        <span style={{
          fontSize:      'var(--font-size-caption-1)',
          lineHeight:    'var(--line-height-caption-1)',
          color:         'var(--color-label-assistive)',
          letterSpacing: 'var(--letter-spacing-caption-1)',
        }}>{FILE_CAPTION}</span>
      </div>
    </SectionCard>
  )
}

/* ── 퀵 버튼 항목 ──────────────────────────────────────── */
function QuickButtonItem({ index, label, onLabelChange, onRemove }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-12)' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-4)' }}>
        <div style={{ margin: 'calc(-1 * var(--spacing-8))' }}>
          <IconButtonNormal
            aria-label="삭제"
            color="var(--color-primary-normal)"
            onClick={onRemove}
            icon={<Icon name="close" size={20} />}
          />
        </div>
        <span style={{
          fontSize:      'var(--font-size-label-1)',
          lineHeight:    'var(--line-height-label-1-normal)',
          fontWeight:    'var(--font-weight-semibold)',
          color:         'var(--color-label-normal)',
          letterSpacing: 'var(--letter-spacing-label-1)',
        }}>Quick Button {index + 1}</span>
      </div>
      <FieldGroup label="버튼명">
        <Textfield
          placeholder={PH.quickItem}
          value={label}
          onChange={e => onLabelChange(e.target.value)}
        />
      </FieldGroup>
      <FieldGroup label="연결응답">
        <Select placeholder="값" />
      </FieldGroup>
    </div>
  )
}

/* ───────────────────────────────────────────────────── */

export default function ChatMessagePage() {
  /* 스위치/체크박스 상태 */
  const [cfg, setCfg] = useState({
    messageOn:        true,
    imageOn:          true,
    textOn:           true,
    titleOn:          true,
    bodyOn:           true,
    accordionOn:      true,
    buttonOn:         true,
    mainOn:           true,
    subOn:            true,
    messageBannerOn:  false,
    quickButtonOn:    false,
  })
  const [mode, setMode] = useState('single')

  /* 텍스트 입력 상태 */
  const [texts, setTexts] = useState({
    title:     '',
    body:      '',
    accordion: '',
    mainLabel: '',
    subLabel:  '',
  })

  /* 파일 입력 상태 (값 무관, UI만) */
  const [imageFile,  setImageFile]  = useState('')
  const [bannerFile, setBannerFile] = useState('')

  /* 퀵 버튼 동적 리스트 */
  const [quickList, setQuickList] = useState([
    { id: 1, label: '' },
    { id: 2, label: '' },
  ])

  const toggle  = key => () => setCfg(prev => ({ ...prev, [key]: !prev[key] }))
  const setText = key => v  => setTexts(prev => ({ ...prev, [key]: v }))

  // 자식 체크박스를 토글한 결과 형제가 모두 OFF면 부모 스위치도 자동 OFF
  const toggleChild = (childKey, parentKey, siblings) => () => setCfg(prev => {
    const next = { ...prev, [childKey]: !prev[childKey] }
    if (!siblings.some(k => next[k])) next[parentKey] = false
    return next
  })

  const addQuick    = () => setQuickList(prev => [...prev, { id: Date.now(), label: '' }])
  const removeQuick = id => setQuickList(prev => prev.filter(it => it.id !== id))
  const updateQuick = (id, label) => setQuickList(prev => prev.map(it => it.id === id ? { ...it, label } : it))

  /* 미리보기 데이터 생성 */
  const quickPreview = useMemo(() => {
    if (quickList.length === 0) return [PH.quickItem]
    return quickList.map(it => it.label.trim() || PH.quickItem)
  }, [quickList])

  const initialMessages = useMemo(() => ([
    {
      id:   'u1',
      type: 'user',
      text: '안녕하세요',
    },
    {
      id:            'b1',
      type:          'bot',
      botName:       '인포뱅크 봇',
      title:         texts.title.trim()     ? texts.title     : PH.title,
      body:          texts.body.trim()      ? texts.body      : PH.body,
      accordionText: texts.accordion.trim() ? texts.accordion : PH.accordion,
      mainButton:    texts.mainLabel.trim() ? texts.mainLabel : PH.mainLabel,
      subButton:     texts.subLabel.trim()  ? texts.subLabel  : PH.subLabel,
      timestamp:     '09:41',
      imageSrc:      chatbotImg,
      bannerSrc:     chatbotBanner,
      quickItems:    quickPreview,
      imageOn:         cfg.imageOn,
      textOn:          cfg.textOn,
      buttonOn:        cfg.buttonOn,
      titleOn:         cfg.titleOn,
      bodyOn:          cfg.bodyOn,
      accordionOn:     cfg.accordionOn,
      mainOn:          cfg.mainOn,
      subOn:           cfg.subOn,
      messageBannerOn: cfg.messageBannerOn,
      quickButtonOn:   cfg.quickButtonOn,
    },
  ]), [cfg, texts, quickPreview])

  /* ─── 렌더 ─── */
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
        display:    'flex',
        gap:        'var(--spacing-32)',
        alignItems: 'flex-start',
      }}>
        <PhoneFrame>
          <ChatRoom
            title="인포뱅크 봇"
            initialMessages={cfg.messageOn ? initialMessages : []}
          />
        </PhoneFrame>

        <div className="scrollbar-thin" style={{
          flex:            1,
          minWidth:        '420px',
          maxHeight:       PANEL_HEIGHT,
          overflowY:       'auto',
          padding:         'var(--spacing-24)',
          borderRadius:    'var(--spacing-12)',
          backgroundColor: 'var(--color-bg-elevated)',
          border:          '1px solid var(--color-line-solid-normal)',
          boxSizing:       'border-box',
        }}>
          <h3 style={{
            fontSize:      'var(--font-size-headline-2)',
            lineHeight:    'var(--line-height-headline-2)',
            letterSpacing: 'var(--letter-spacing-headline-2)',
            fontWeight:    'var(--font-weight-semibold)',
            color:         'var(--color-label-normal)',
            marginTop:     0,
            marginBottom:  'var(--spacing-32)',
            paddingBottom: 'var(--spacing-12)',
            borderBottom:  '1px solid var(--color-line-solid-normal)',
          }}>응답 설정</h3>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-24)' }}>

            {/* 1. Message */}
            <NumberedSection index={1}>
              <SwitchRow label="Message" active={cfg.messageOn} disabled />
              {cfg.messageOn && (
                <SectionCard>
                  <div style={{ display: 'flex', gap: 'var(--spacing-32)' }}>
                    <Radio checked={mode === 'single'}   label="Single"   onChange={() => setMode('single')} />
                    <Radio checked={mode === 'carousel'} label="Carousel" onChange={() => setMode('carousel')} />
                  </div>
                </SectionCard>
              )}
            </NumberedSection>

            {/* 2. Image */}
            <NumberedSection index={2}>
              <SwitchRow label="Image" active={cfg.imageOn} onChange={toggle('imageOn')} />
              {cfg.imageOn && (
                <FileUploadCard value={imageFile} onChange={setImageFile} />
              )}
            </NumberedSection>

            {/* 3. Text */}
            <NumberedSection index={3}>
              <SwitchRow label="Text" active={cfg.textOn} onChange={toggle('textOn')} />
              {cfg.textOn && (
                <SectionCard>
                  <CheckBlock
                    checked={cfg.titleOn}
                    onChange={toggleChild('titleOn', 'textOn', ['titleOn', 'bodyOn', 'accordionOn'])}
                    label="Title Text"
                  >
                    <Textfield
                      placeholder={PH.title}
                      value={texts.title}
                      onChange={e => setText('title')(e.target.value)}
                    />
                  </CheckBlock>

                  <CheckBlock
                    checked={cfg.bodyOn}
                    onChange={toggleChild('bodyOn', 'textOn', ['titleOn', 'bodyOn', 'accordionOn'])}
                    label="Body Text"
                  >
                    <Textfield
                      placeholder={PH.body}
                      value={texts.body}
                      onChange={e => setText('body')(e.target.value)}
                    />
                  </CheckBlock>

                  <CheckBlock
                    checked={cfg.accordionOn}
                    onChange={toggleChild('accordionOn', 'textOn', ['titleOn', 'bodyOn', 'accordionOn'])}
                    label="Accordion Text"
                  >
                    <Textfield
                      placeholder={PH.accordion}
                      value={texts.accordion}
                      onChange={e => setText('accordion')(e.target.value)}
                    />
                  </CheckBlock>
                </SectionCard>
              )}
            </NumberedSection>

            {/* 4. Button */}
            <NumberedSection index={4}>
              <SwitchRow label="Button" active={cfg.buttonOn} onChange={toggle('buttonOn')} />
              {cfg.buttonOn && (
                <SectionCard>
                  <CheckBlock
                    checked={cfg.mainOn}
                    onChange={toggleChild('mainOn', 'buttonOn', ['mainOn', 'subOn'])}
                    label="Main Button"
                  >
                    <FieldGroup label="버튼명">
                      <Textfield
                        placeholder={PH.mainLabel}
                        value={texts.mainLabel}
                        onChange={e => setText('mainLabel')(e.target.value)}
                      />
                    </FieldGroup>
                    <FieldGroup label="연결응답">
                      <Select placeholder="값" />
                    </FieldGroup>
                  </CheckBlock>

                  <CheckBlock
                    checked={cfg.subOn}
                    onChange={toggleChild('subOn', 'buttonOn', ['mainOn', 'subOn'])}
                    label="Sub Button"
                  >
                    <FieldGroup label="버튼명">
                      <Textfield
                        placeholder={PH.subLabel}
                        value={texts.subLabel}
                        onChange={e => setText('subLabel')(e.target.value)}
                      />
                    </FieldGroup>
                    <FieldGroup label="연결응답">
                      <Select placeholder="값" />
                    </FieldGroup>
                  </CheckBlock>
                </SectionCard>
              )}
            </NumberedSection>

            {/* 5. Message Banner */}
            <NumberedSection index={5}>
              <SwitchRow label="Message Banner" active={cfg.messageBannerOn} onChange={toggle('messageBannerOn')} />
              {cfg.messageBannerOn && (
                <FileUploadCard value={bannerFile} onChange={setBannerFile} />
              )}
            </NumberedSection>

            {/* 6. Quick Button */}
            <NumberedSection index={6}>
              <SwitchRow label="Quick Button" active={cfg.quickButtonOn} onChange={toggle('quickButtonOn')} />
              {cfg.quickButtonOn && (
                <SectionCard>
                  {quickList.map((item, idx) => (
                    <QuickButtonItem
                      key={item.id}
                      index={idx}
                      label={item.label}
                      onLabelChange={v => updateQuick(item.id, v)}
                      onRemove={() => removeQuick(item.id)}
                    />
                  ))}
                  <div style={{ display: 'flex' }}>
                    <TextButton
                      color="primary"
                      size="small"
                      label="버튼 추가"
                      leadingIcon={<Icon name="plus" size={16} />}
                      onClick={addQuick}
                    />
                  </div>
                </SectionCard>
              )}
            </NumberedSection>

          </div>
        </div>
      </div>
    </>
  )
}

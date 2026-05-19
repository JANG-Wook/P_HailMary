// 챗봇 메시지 응답 설정 페이지 — 좌측 미리보기 + 우측 토글/입력 패널

import { useState, useMemo, useRef, useEffect } from 'react'
import ChatRoom        from '../../design-system/components/ChatRoom/ChatRoom'
import Switch          from '../../design-system/components/Switch/Switch'
import Checkbox        from '../../design-system/components/Checkbox/Checkbox'
import Textfield       from '../../design-system/components/Textfield/Textfield'
import Textarea        from '../../design-system/components/Textfield/Textarea'
import Select          from '../../design-system/components/Select/Select'
import Menu            from '../../design-system/components/Menu/Menu'
import TextButton      from '../../design-system/components/TextButton/TextButton'
import IconButtonNormal from '../../design-system/components/IconButton/IconButtonNormal'
import Tab             from '../../design-system/components/Tab/Tab'
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

const ACTION_TYPES = [
  { value: 'single',    label: '단일 메시지'    },
  { value: 'carousel',  label: '캐로셀 메시지'  },
  { value: 'inputForm', label: '입력 폼 메시지' },
  { value: 'rag',       label: 'RAG 메시지'     },
  { value: 'branch',    label: '분기 연결'      },
]

const FORM_TYPES = [
  { value: 'textfield',      label: 'String (Textfield)',   hasOptions: false, hasGuide: true,  sampleDesc: '휴대폰 번호', samplePlaceholder: '휴대폰 번호를 입력해 주세요.' },
  { value: 'textarea',       label: 'String (Textarea)',    hasOptions: false, hasGuide: true,  sampleDesc: '주관식 의견', samplePlaceholder: '의견을 남겨주세요.'           },
  { value: 'date',           label: 'Date (단일 선택)',         hasOptions: false, hasGuide: true,  sampleDesc: '예약일',     samplePlaceholder: '날짜 선택'                   },
  { value: 'dateRange',      label: 'Date (기간 선택)',         hasOptions: false, hasGuide: true,  sampleDesc: '예약 기간',  samplePlaceholder: '기간 선택'                   },
  { value: 'datetime',       label: 'Date time (단일 선택)',    hasOptions: false, hasGuide: true,  hasTime: true, sampleDesc: '예약 일시',  samplePlaceholder: '날짜 선택', sampleTimePlaceholder: '시간 선택' },
  { value: 'selectSingle',   label: 'Select (단일 선택)',    hasOptions: true,  hasGuide: true,  sampleDesc: '항목',       samplePlaceholder: '항목을 선택해 주세요.'         },
  { value: 'selectMulti',    label: 'Select (복수 선택)',    hasOptions: true,  hasGuide: true,  sampleDesc: '항목',       samplePlaceholder: '항목을 선택해 주세요.'         },
  { value: 'checkboxSingle', label: 'Checkbox (단일 선택)',  hasOptions: true,  hasGuide: false, sampleDesc: '항목',       samplePlaceholder: ''                            },
  { value: 'checkboxMulti',  label: 'Checkbox (복수 선택)',  hasOptions: true,  hasGuide: false, sampleDesc: '항목',       samplePlaceholder: ''                            },
  { value: 'boolean',        label: 'Boolean',              hasOptions: true,  hasGuide: false, sampleDesc: '동의 여부',  samplePlaceholder: ''                            },
  { value: 'number',         label: 'Number',               hasOptions: false, hasGuide: true,  sampleDesc: '예약 인원',  samplePlaceholder: '숫자를 입력해 주세요.'          },
]

const defaultFormOptionsFor = (type) => {
  if (type === 'boolean') return [{ id: 1, label: '예' }, { id: 2, label: '아니오' }]
  return [{ id: 1, label: '' }, { id: 2, label: '' }]
}

const sampleDescFor            = (type) => FORM_TYPES.find(t => t.value === type)?.sampleDesc            ?? ''
const samplePlaceholderFor     = (type) => FORM_TYPES.find(t => t.value === type)?.samplePlaceholder     ?? ''
const sampleTimePlaceholderFor = (type) => FORM_TYPES.find(t => t.value === type)?.sampleTimePlaceholder ?? ''

/* ── Select 트리거 + Menu 드롭다운 (재사용 가능) ─────────────── */
function MenuSelect({ value, onChange, options, placeholder = '값' }) {
  const [open, setOpen] = useState(false)
  const ref = useRef(null)
  const selected = options.find(o => o.value === value)

  useEffect(() => {
    if (!open) return
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false)
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [open])

  return (
    <div ref={ref} style={{ position: 'relative' }}>
      <Select
        placeholder={placeholder}
        value={selected?.label}
        onClick={() => setOpen(o => !o)}
        forceFocused={open}
      />
      {open && (
        <div style={{
          position: 'absolute',
          top:      'calc(100% + var(--spacing-4))',
          left:     0,
          right:    0,
          zIndex:   10,
        }}>
          <Menu
            variant="normal"
            cellPadding="12px"
            items={options.map(o => ({
              label:    o.label,
              active:   o.value === value,
              onClick:  () => { onChange(o.value); setOpen(false) },
            }))}
          />
        </div>
      )}
    </div>
  )
}

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
        fontSize:      'var(--font-size-body-2)',
        lineHeight:    'var(--line-height-body-2-normal)',
        fontWeight:    'var(--font-weight-semibold)',
        color:         'var(--color-label-normal)',
        letterSpacing: 'var(--letter-spacing-body-2)',
      }}>{label}</span>
    </div>
  )
}

/* ── 섹션 외곽: 아이콘 칩 + 좌측 막대 ────────────────────────── */
function NumberedSection({ icon, children }) {
  return (
    <section style={{ display: 'flex', gap: 'var(--spacing-12)' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0 }}>
        <div style={{
          width:           'var(--spacing-24)',
          height:          'var(--spacing-24)',
          borderRadius:    'var(--radius-full)',
          backgroundColor: 'var(--color-fill-normal)',
          color:           'var(--color-label-normal)',
          display:         'flex',
          alignItems:      'center',
          justifyContent:  'center',
          flexShrink:      0,
        }}>
          <Icon name={icon} size={14} />
        </div>
        <div style={{
          width:           '2px',
          flex:            1,
          marginTop:       'var(--spacing-4)',
          backgroundColor: 'var(--color-line-alternative)',
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
      <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-8)' }}>
        <Checkbox state={checked ? 'checked' : 'unchecked'} onChange={onChange} />
        <span
          onClick={onChange}
          style={{
            fontSize:      'var(--font-size-label-1)',
            lineHeight:    'var(--line-height-label-1-normal)',
            fontWeight:    'var(--font-weight-semibold)',
            color:         'var(--color-label-normal)',
            letterSpacing: 'var(--letter-spacing-label-1)',
            cursor:        'pointer',
            userSelect:    'none',
          }}
        >{label}</span>
      </div>
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
        }}>퀵 버튼 {index + 1}</span>
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

// 캐로셀 카드 초기값 — 토글 + 텍스트를 한 객체에 평탄화
function defaultCarouselCard(id) {
  return {
    id,
    imageOn:   true,
    textOn:    true,
    titleOn:   true,
    bodyOn:    true,
    buttonOn:  true,
    mainOn:    true,
    subOn:     true,
    title:     '',
    body:      '',
    mainLabel: '',
    subLabel:  '',
    imageFile: '',
  }
}

export default function ChatMessagePage() {
  /* 스위치/체크박스 상태 (single 모드 + 공유) */
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

  /* 텍스트 입력 상태 (single 모드) */
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

  /* 캐로셀 카드 상태 */
  const [carouselCards, setCarouselCards] = useState([
    defaultCarouselCard(1),
    defaultCarouselCard(2),
  ])
  const [activeCardIdx, setActiveCardIdx] = useState(0)

  /* 입력 폼 상태 */
  const [form, setForm] = useState({
    type:          'textfield',
    description:   sampleDescFor('textfield'),
    guideText:     samplePlaceholderFor('textfield'),
    timeGuideText: sampleTimePlaceholderFor('textfield'),
    options:       defaultFormOptionsFor('textfield'),
  })
  const setFormField = (key, v) => setForm(prev => ({ ...prev, [key]: v }))

  // 입력 폼 유형 변경 — 설명/안내 문구/선택 값을 새 유형에 맞게 초기화
  const changeFormType = (newType) => setForm({
    type:          newType,
    description:   sampleDescFor(newType),
    guideText:     samplePlaceholderFor(newType),
    timeGuideText: sampleTimePlaceholderFor(newType),
    options:       defaultFormOptionsFor(newType),
  })
  const addFormOption    = () => setForm(prev => {
    const nextId = (prev.options[prev.options.length - 1]?.id ?? 0) + 1
    return { ...prev, options: [...prev.options, { id: nextId, label: '' }] }
  })
  const removeFormOption = id => setForm(prev => ({ ...prev, options: prev.options.filter(o => o.id !== id) }))
  const updateFormOption = (id, label) => setForm(prev => ({
    ...prev,
    options: prev.options.map(o => o.id === id ? { ...o, label } : o),
  }))

  const currentFormType = FORM_TYPES.find(t => t.value === form.type)
  const formHasOptions  = currentFormType?.hasOptions ?? false
  const formHasGuide    = currentFormType?.hasGuide   ?? false
  const formHasTime     = currentFormType?.hasTime    ?? false

  const isCarousel  = mode === 'carousel'
  const isInputForm = mode === 'inputForm'

  // 캐로셀 모드일 때는 현재 활성 카드, 아니면 cfg+texts를 합친 객체
  const activeCard = isCarousel
    ? carouselCards[activeCardIdx]
    : { ...cfg, ...texts }

  const updateActiveCard = patch => setCarouselCards(prev => prev.map((c, i) =>
    i === activeCardIdx ? { ...c, ...patch } : c
  ))

  const toggle  = key => () => setCfg(prev => ({ ...prev, [key]: !prev[key] }))
  const setText = key => v  => setTexts(prev => ({ ...prev, [key]: v }))

  // 자식 체크박스를 토글한 결과 형제가 모두 OFF면 부모 스위치도 자동 OFF
  const toggleChild = (childKey, parentKey, siblings) => () => setCfg(prev => {
    const next = { ...prev, [childKey]: !prev[childKey] }
    if (!siblings.some(k => next[k])) next[parentKey] = false
    return next
  })

  // 카드 단위 핸들러 (mode에 따라 single 또는 carousel 카드 갱신)
  const toggleCard = key => () => {
    if (isCarousel) updateActiveCard({ [key]: !activeCard[key] })
    else            toggle(key)()
  }
  const toggleCardChild = (childKey, parentKey, siblings) => () => {
    if (isCarousel) {
      const next = { ...activeCard, [childKey]: !activeCard[childKey] }
      if (!siblings.some(k => next[k])) next[parentKey] = false
      updateActiveCard(next)
    } else {
      toggleChild(childKey, parentKey, siblings)()
    }
  }
  const setCardText = key => v => {
    if (isCarousel) updateActiveCard({ [key]: v })
    else            setText(key)(v)
  }

  // 캐로셀 탭 추가/삭제
  const addCarouselCard = () => setCarouselCards(prev => {
    const nextId = (prev[prev.length - 1]?.id ?? 0) + 1
    return [...prev, defaultCarouselCard(nextId)]
  })
  const removeCardAt = idx => {
    if (carouselCards.length <= 1) return
    setCarouselCards(prev => prev.filter((_, i) => i !== idx))
    setActiveCardIdx(curr => {
      if (curr === idx) return Math.max(0, curr - 1)
      if (curr > idx)   return curr - 1
      return curr
    })
  }

  const addQuick    = () => setQuickList(prev => [...prev, { id: Date.now(), label: '' }])
  const removeQuick = id => setQuickList(prev => prev.filter(it => it.id !== id))
  const updateQuick = (id, label) => setQuickList(prev => prev.map(it => it.id === id ? { ...it, label } : it))

  /* 미리보기 데이터 생성 */
  const quickPreview = useMemo(() => {
    if (quickList.length === 0) return [PH.quickItem]
    return quickList.map(it => it.label.trim() || PH.quickItem)
  }, [quickList])

  // 캐로셀 카드를 미리보기용으로 변환 (빈 값 → placeholder)
  const carouselPreview = useMemo(() => carouselCards.map(c => ({
    id:         c.id,
    title:      c.title.trim()     ? c.title     : PH.title,
    body:       c.body.trim()      ? c.body      : PH.body,
    mainButton: c.mainLabel.trim() ? c.mainLabel : PH.mainLabel,
    subButton:  c.subLabel.trim()  ? c.subLabel  : PH.subLabel,
    imageSrc:   chatbotImg,
    imageOn:    c.imageOn,
    textOn:     c.textOn,
    buttonOn:   c.buttonOn,
    titleOn:    c.titleOn,
    bodyOn:     c.bodyOn,
    mainOn:     c.mainOn,
    subOn:      c.subOn,
  })), [carouselCards])

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
      mode,
      carouselCards:   isCarousel ? carouselPreview : undefined,
      formDescription: form.description.trim() ? form.description : sampleDescFor(form.type),
      formPlaceholder:     form.guideText.trim()     ? form.guideText     : samplePlaceholderFor(form.type),
      formTimePlaceholder: form.timeGuideText.trim() ? form.timeGuideText : sampleTimePlaceholderFor(form.type),
      formType:        form.type,
      formOptions:     form.options.map(o => ({ ...o, label: o.label.trim() || `옵션 ${o.id}` })),
      title:           texts.title.trim()     ? texts.title     : PH.title,
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
  ]), [cfg, texts, quickPreview, mode, isCarousel, carouselPreview, form])

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
            resetDisabled
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
          }}>액션</h3>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-24)' }}>

            {/* 1. 액션 유형 */}
            <NumberedSection icon="sparkle">
              <SwitchRow label="액션 유형" active={cfg.messageOn} disabled />
              {cfg.messageOn && (
                <SectionCard>
                  <MenuSelect value={mode} onChange={setMode} options={ACTION_TYPES} placeholder="액션 유형 선택" />
                </SectionCard>
              )}
            </NumberedSection>

            {/* 캐로셀 탭 바 (캐로셀 모드에서만) */}
            {isCarousel && (
              <div>
                <Tab
                  items={carouselCards.map((_, i) => ({
                    label: (
                      <span style={{ display: 'inline-flex', alignItems: 'center', gap: 'var(--spacing-8)' }}>
                        캐로셀 {i + 1}
                        {carouselCards.length > 1 && (
                          <span
                            role="button"
                            aria-label={`캐로셀 ${i + 1} 삭제`}
                            className="chat-msg-tab-close"
                            onClick={e => { e.stopPropagation(); removeCardAt(i) }}
                          >
                            <Icon name="close" size={16} />
                          </span>
                        )}
                      </span>
                    ),
                  }))}
                  value={activeCardIdx}
                  onChange={setActiveCardIdx}
                  size="small"
                  scroll
                  trailingContent={
                    <TextButton
                      color="primary"
                      size="small"
                      label="추가"
                      leadingIcon={<Icon name="plus" size={16} />}
                      onClick={addCarouselCard}
                    />
                  }
                />
              </div>
            )}

            {/* 2. Image (입력 폼 모드에서는 숨김) */}
            {!isInputForm && (
              <NumberedSection icon="image">
                <SwitchRow label="이미지" active={activeCard.imageOn} onChange={toggleCard('imageOn')} />
                {activeCard.imageOn && (
                  <FileUploadCard
                    value={isCarousel ? (activeCard.imageFile ?? '') : imageFile}
                    onChange={isCarousel ? (v => updateActiveCard({ imageFile: v })) : setImageFile}
                  />
                )}
              </NumberedSection>
            )}

            {/* 3. Text */}
            <NumberedSection icon="documentText">
              <SwitchRow label="텍스트" active={activeCard.textOn} onChange={toggleCard('textOn')} />
              {activeCard.textOn && (
                <SectionCard>
                  <CheckBlock
                    checked={activeCard.titleOn}
                    onChange={toggleCardChild('titleOn', 'textOn', (isCarousel || isInputForm) ? ['titleOn', 'bodyOn'] : ['titleOn', 'bodyOn', 'accordionOn'])}
                    label="제목 텍스트"
                  >
                    <Textfield
                      placeholder={PH.title}
                      value={activeCard.title}
                      onChange={e => setCardText('title')(e.target.value)}
                    />
                  </CheckBlock>

                  <CheckBlock
                    checked={activeCard.bodyOn}
                    onChange={toggleCardChild('bodyOn', 'textOn', (isCarousel || isInputForm) ? ['titleOn', 'bodyOn'] : ['titleOn', 'bodyOn', 'accordionOn'])}
                    label="본문 텍스트"
                  >
                    <Textarea
                      placeholder={PH.body}
                      resize="fixed"
                      value={activeCard.body}
                      onChange={e => setCardText('body')(e.target.value)}
                    />
                  </CheckBlock>

                  {!isCarousel && !isInputForm && (
                    <CheckBlock
                      checked={activeCard.accordionOn}
                      onChange={toggleCardChild('accordionOn', 'textOn', ['titleOn', 'bodyOn', 'accordionOn'])}
                      label="아코디언 텍스트"
                    >
                      <Textarea
                        placeholder={PH.accordion}
                        resize="fixed"
                        value={activeCard.accordion}
                        onChange={e => setCardText('accordion')(e.target.value)}
                      />
                    </CheckBlock>
                  )}
                </SectionCard>
              )}
            </NumberedSection>

            {/* 4. 입력 폼 (입력 폼 모드일 때만) */}
            {isInputForm && (
              <NumberedSection icon="keyboard">
                <SwitchRow label="입력 폼" active disabled />
                <SectionCard>
                  <FieldGroup label="입력 폼 유형">
                    <MenuSelect
                      value={form.type}
                      onChange={changeFormType}
                      options={FORM_TYPES}
                      placeholder="값"
                    />
                  </FieldGroup>

                  <FieldGroup label="입력 폼 설명">
                    <Textfield
                      placeholder={sampleDescFor(form.type)}
                      value={form.description}
                      onChange={e => setFormField('description', e.target.value)}
                    />
                  </FieldGroup>

                  {formHasGuide && (
                    <FieldGroup label="입력 폼 안내 문구">
                      <Textfield
                        placeholder={samplePlaceholderFor(form.type)}
                        value={form.guideText}
                        onChange={e => setFormField('guideText', e.target.value)}
                      />
                    </FieldGroup>
                  )}

                  {formHasTime && (
                    <FieldGroup label="입력 폼 시간 안내 문구">
                      <Textfield
                        placeholder={sampleTimePlaceholderFor(form.type)}
                        value={form.timeGuideText}
                        onChange={e => setFormField('timeGuideText', e.target.value)}
                      />
                    </FieldGroup>
                  )}

                  {formHasOptions && (
                    <FieldGroup label="선택 값">
                      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-8)' }}>
                        {form.options.map((o, i) => (
                          <div key={o.id} style={{ display: 'flex', gap: 'var(--spacing-8)', alignItems: 'center' }}>
                            <div style={{ flex: 1, minWidth: 0 }}>
                              <Textfield
                                placeholder={`옵션 ${i + 1}`}
                                value={o.label}
                                onChange={e => updateFormOption(o.id, e.target.value)}
                              />
                            </div>
                            <div style={{ margin: 'calc(-1 * var(--spacing-8))' }}>
                              <IconButtonNormal
                                aria-label="선택 값 삭제"
                                color="var(--color-label-alternative)"
                                disabled={form.options.length <= 1}
                                onClick={() => removeFormOption(o.id)}
                                icon={<Icon name="close" size={20} />}
                              />
                            </div>
                          </div>
                        ))}
                        <div style={{ display: 'flex' }}>
                          <TextButton
                            color="primary"
                            size="small"
                            label="선택 값 추가"
                            leadingIcon={<Icon name="plus" size={16} />}
                            onClick={addFormOption}
                          />
                        </div>
                      </div>
                    </FieldGroup>
                  )}
                </SectionCard>
              </NumberedSection>
            )}

            {/* 4. Button (입력 폼 모드 아닐 때) */}
            {!isInputForm && (
            <NumberedSection icon="component">
              <SwitchRow label="버튼" active={activeCard.buttonOn} onChange={toggleCard('buttonOn')} />
              {activeCard.buttonOn && (
                <SectionCard>
                  <CheckBlock
                    checked={activeCard.mainOn}
                    onChange={toggleCardChild('mainOn', 'buttonOn', ['mainOn', 'subOn'])}
                    label="메인 버튼"
                  >
                    <FieldGroup label="버튼명">
                      <Textfield
                        placeholder={PH.mainLabel}
                        value={activeCard.mainLabel}
                        onChange={e => setCardText('mainLabel')(e.target.value)}
                      />
                    </FieldGroup>
                    <FieldGroup label="연결응답">
                      <Select placeholder="값" />
                    </FieldGroup>
                  </CheckBlock>

                  <CheckBlock
                    checked={activeCard.subOn}
                    onChange={toggleCardChild('subOn', 'buttonOn', ['mainOn', 'subOn'])}
                    label="서브 버튼"
                  >
                    <FieldGroup label="버튼명">
                      <Textfield
                        placeholder={PH.subLabel}
                        value={activeCard.subLabel}
                        onChange={e => setCardText('subLabel')(e.target.value)}
                      />
                    </FieldGroup>
                    <FieldGroup label="연결응답">
                      <Select placeholder="값" />
                    </FieldGroup>
                  </CheckBlock>
                </SectionCard>
              )}
            </NumberedSection>
            )}

            {/* 5. Message Banner */}
            <NumberedSection icon="megaphone">
              <SwitchRow label="메시지 배너" active={cfg.messageBannerOn} onChange={toggle('messageBannerOn')} />
              {cfg.messageBannerOn && (
                <FileUploadCard value={bannerFile} onChange={setBannerFile} />
              )}
            </NumberedSection>

            {/* 6. Quick Button */}
            <NumberedSection icon="thunder">
              <SwitchRow label="퀵 버튼" active={cfg.quickButtonOn} onChange={toggle('quickButtonOn')} />
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

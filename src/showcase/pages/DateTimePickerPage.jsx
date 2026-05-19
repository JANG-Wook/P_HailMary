// Date & Time Picker 컴포넌트 시각 예시 페이지

import { useState } from 'react'
import Section, { Case } from '../Section'
import Calendar       from '../../design-system/components/DateTimePicker/Calendar'
import DateInput      from '../../design-system/components/DateTimePicker/DateInput'
import TimeInput      from '../../design-system/components/DateTimePicker/TimeInput'
import TimeSlotChips  from '../../design-system/components/DateTimePicker/TimeSlotChips'

export default function DateTimePickerPage() {
  const [singleDate, setSingleDate]   = useState(new Date(2026, 4, 15))
  const [rangeDate,  setRangeDate]    = useState({ start: new Date(2026, 4, 8), end: new Date(2026, 4, 13) })
  const [diStart,    setDiStart]      = useState(new Date(2026, 4, 6))
  const [diEnd,      setDiEnd]        = useState(null)
  const [time,       setTime]         = useState('14:30')
  const [slot,       setSlot]         = useState('14:00')

  return (
    <>
      <h2 style={{
        fontSize:      'var(--font-size-title-3)',
        fontWeight:    'var(--font-weight-bold)',
        color:         'var(--color-label-normal)',
        letterSpacing: 'var(--letter-spacing-title-3)',
        marginBottom:  'var(--spacing-32)',
      }}>Date & Time Picker</h2>

      <Section title="Date Input" description="Textfield 모양의 트리거. 클릭하면 캘린더 팝오버가 열립니다.">
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-16)', width: '280px' }}>
          <DateInput heading="시작일" value={diStart} onChange={setDiStart} />
          <DateInput heading="종료일" value={diEnd}   onChange={setDiEnd}   />
          <TimeInput heading="시간"   value={time}    onChange={setTime}    />
        </div>
      </Section>

      <Section title="Calendar — 단일 선택" description="mode=single. 단일 날짜를 선택합니다.">
        <Calendar mode="single" value={singleDate} onChange={setSingleDate} />
      </Section>

      <Section title="Calendar — 기간 선택" description="mode=range. 시작일/종료일 두 번 클릭으로 기간을 지정합니다.">
        <Calendar mode="range" value={rangeDate} onChange={setRangeDate} />
      </Section>

      <Section title="Time Slot Chips" description="정해진 시간 슬롯 중 하나를 칩으로 선택합니다.">
        <div style={{ width: '420px' }}>
          <TimeSlotChips
            value={slot}
            onChange={setSlot}
            disabledSlots={['11:30', '13:00']}
          />
        </div>
      </Section>
    </>
  )
}

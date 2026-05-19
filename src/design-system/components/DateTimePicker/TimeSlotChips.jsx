// 시간 슬롯 칩 — 정해진 시간 슬롯 중 하나를 선택 (Chip 그리드)

const defaultSlots = [
  '10:00', '10:30', '11:00', '11:30',
  '13:00', '13:30', '14:00', '14:30',
  '15:00', '15:30', '16:00', '16:30',
]

export default function TimeSlotChips({
  slots         = defaultSlots,
  value,
  onChange,
  disabledSlots = [],
  columns       = 4,
}) {
  return (
    <div style={{
      display:             'grid',
      gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
      gap:                 'var(--spacing-8)',
      width:               '100%',
    }}>
      {slots.map(slot => {
        const isActive   = slot === value
        const isDisabled = disabledSlots.includes(slot)
        return (
          <button
            key={slot}
            type="button"
            disabled={isDisabled}
            onClick={() => !isDisabled && onChange?.(slot)}
            style={{
              padding:         'var(--spacing-8) var(--spacing-12)',
              borderRadius:    'var(--spacing-8)',
              border:          'none',
              boxShadow:       isActive
                ? 'none'
                : 'inset 0 0 0 1px var(--color-line-neutral)',
              backgroundColor: isActive
                ? 'var(--color-primary-normal)'
                : isDisabled
                  ? 'var(--color-fill-alternative)'
                  : 'var(--color-bg-normal)',
              color:           isActive
                ? 'var(--color-static-white)'
                : isDisabled
                  ? 'var(--color-label-disable)'
                  : 'var(--color-label-normal)',
              fontSize:        'var(--font-size-label-1)',
              lineHeight:      'var(--line-height-label-1-normal)',
              fontWeight:      isActive
                ? 'var(--font-weight-semibold)'
                : 'var(--font-weight-regular)',
              letterSpacing:   'var(--letter-spacing-label-1)',
              fontFamily:      'var(--font-family-base)',
              cursor:          isDisabled ? 'not-allowed' : 'pointer',
              whiteSpace:      'nowrap',
            }}
          >{slot}</button>
        )
      })}
    </div>
  )
}

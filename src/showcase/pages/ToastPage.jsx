import Toast from '../../design-system/components/Toast/Toast'
import Icon from '../../design-system/components/Icon/Icon'
import Section, { Case } from '../Section'

const VARIANTS = ['normal', 'positive', 'cautionary', 'negative']

export default function ToastPage() {
  return (
    <div>
      <h2 style={{
        fontSize:      'var(--font-size-title-3)',
        lineHeight:    'var(--line-height-title-3)',
        fontWeight:    'var(--font-weight-bold)',
        color:         'var(--color-label-normal)',
        marginBottom:  'var(--spacing-32)',
      }}>Toast</h2>

      <Section
        title="Variant"
        background="var(--color-bg-normal-alternative)"
        column
      >
        {VARIANTS.map(v => (
          <Case key={v} label={v === 'normal' ? 'variant="normal" (default)' : `variant="${v}"`}>
            <Toast
              variant={v}
              text="메시지에 마침표를 찍어요."
              leadingIcon={v === 'normal'
                ? <Icon name="bell" size={22} color="var(--color-static-white)" />
                : undefined
              }
            />
          </Case>
        ))}
      </Section>

      <Section
        title="Width"
        description="최소 335px, 최대 420px 너비를 가집니다."
        background="var(--color-bg-normal-alternative)"
        column
      >
        <Case label="짧은 텍스트 → min-width 335px">
          <Toast variant="normal" text="완료" />
        </Case>
        <Case label="긴 텍스트 → max-width 420px">
          <Toast variant="negative" text="일시적인 오류가 발생했습니다. 잠시 후 다시 시도해 주세요." />
        </Case>
      </Section>

      <Section
        title="Leading Icon"
        description="normal variant에서만 적용됩니다."
        background="var(--color-bg-normal-alternative)"
        column
      >
        <Case label='leadingIcon={<Icon />} (default)'>
          <Toast
            variant="normal"
            text="메시지에 마침표를 찍어요."
            leadingIcon={<Icon name="bell" size={22} color="var(--color-static-white)" />}
          />
        </Case>
        <Case label="leadingIcon 없음">
          <Toast
            variant="normal"
            text="메시지에 마침표를 찍어요."
          />
        </Case>
      </Section>
    </div>
  )
}

import Snackbar from '../../design-system/components/Snackbar/Snackbar'
import Icon from '../../design-system/components/Icon/Icon'
import Section, { Case } from '../Section'

export default function SnackbarPage() {
  return (
    <div>
      <h2 style={{
        fontSize:     'var(--font-size-title-3)',
        lineHeight:   'var(--line-height-title-3)',
        fontWeight:   'var(--font-weight-bold)',
        color:        'var(--color-label-normal)',
        marginBottom: 'var(--spacing-32)',
      }}>Snackbar</h2>

      <Section title="Heading =" background="var(--color-bg-normal-alternative)">
        <Case label="true (default)" center>
          <Snackbar
            message="메시지에 마침표를 찍어요."
            description="설명은 필요할 때만 써요."
            actionLabel="텍스트"
            onAction={() => {}}
          />
        </Case>
        <Case label="false" center>
          <Snackbar
            description="메시지가 두 줄 이상 길어지는 경우 예외적으로 사용해요."
            actionLabel="텍스트"
            onAction={() => {}}
          />
        </Case>
      </Section>

      <Section title="Description =" background="var(--color-bg-normal-alternative)">
        <Case label="false (default)" center>
          <Snackbar
            message="메시지에 마침표를 찍어요."
            actionLabel="텍스트"
            onAction={() => {}}
          />
        </Case>
        <Case label="true" center>
          <Snackbar
            message="메시지에 마침표를 찍어요."
            description="설명은 필요할 때만 써요."
            actionLabel="텍스트"
            onAction={() => {}}
          />
        </Case>
      </Section>

      <Section title="Icon =" background="var(--color-bg-normal-alternative)">
        <Case label="false (default)" center>
          <Snackbar
            message="메시지에 마침표를 찍어요."
            actionLabel="텍스트"
            onAction={() => {}}
          />
        </Case>
        <Case label="false (default) + description" center>
          <Snackbar
            message="메시지에 마침표를 찍어요."
            description="설명은 필요할 때만 써요."
            actionLabel="텍스트"
            onAction={() => {}}
          />
        </Case>
        <Case label="true" center>
          <Snackbar
            message="메시지에 마침표를 찍어요."
            icon={<Icon name="bell" size={20} color="var(--color-static-white)" />}
            actionLabel="텍스트"
            onAction={() => {}}
          />
        </Case>
        <Case label="true + description" center>
          <Snackbar
            message="메시지에 마침표를 찍어요."
            description="설명은 필요할 때만 써요."
            icon={<Icon name="bell" size={20} color="var(--color-static-white)" />}
            actionLabel="텍스트"
            onAction={() => {}}
          />
        </Case>
      </Section>

      <Section title="Close button =" background="var(--color-bg-normal-alternative)">
        <Case label="false (default)" center>
          <Snackbar
            message="메시지에 마침표를 찍어요."
            actionLabel="텍스트"
            onAction={() => {}}
          />
        </Case>
        <Case label="true" center>
          <Snackbar
            message="메시지에 마침표를 찍어요."
            actionLabel="텍스트"
            onAction={() => {}}
            onClose={() => {}}
          />
        </Case>
      </Section>
    </div>
  )
}

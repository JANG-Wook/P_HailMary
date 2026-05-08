import ListCell from '../../design-system/components/ListCell/ListCell'
import Avatar from '../../design-system/components/Avatar/Avatar'
import Switch from '../../design-system/components/Switch/Switch'
import Section, { Case } from '../Section'

const INTERACTION_STATES = [
  { state: 'none',     selected: false },
  { state: 'hover',    selected: false },
  { state: 'active',   selected: false },
  { state: 'selected', selected: true  },
]

const boundStyle = { border: '1px solid var(--color-line-normal)' }

function Bound({ children }) {
  return <div style={boundStyle}>{children}</div>
}

export default function ListCellPage() {
  return (
    <div>
      <h2 style={{
        fontSize:     'var(--font-size-title-3)',
        lineHeight:   'var(--line-height-title-3)',
        fontWeight:   'var(--font-weight-bold)',
        color:        'var(--color-label-normal)',
        marginBottom: 'var(--spacing-32)',
      }}>ListCell</h2>

      {/* 1. verticalPadding */}
      <Section title="VerticalPadding" gap="var(--spacing-8)" column>
        <div style={{ width: '335px', display: 'flex', flexDirection: 'column', gap: 'var(--spacing-24)' }}>
          <Case label='verticalPadding="none"'>
            <Bound><ListCell label="텍스트" verticalPadding="none" /></Bound>
          </Case>
          <Case label='verticalPadding="small"'>
            <Bound><ListCell label="텍스트" verticalPadding="small" /></Bound>
          </Case>
          <Case label='verticalPadding="medium" (default)'>
            <Bound><ListCell label="텍스트" verticalPadding="medium" /></Bound>
          </Case>
          <Case label='verticalPadding="large"'>
            <Bound><ListCell label="텍스트" verticalPadding="large" /></Bound>
          </Case>
        </div>
      </Section>

      {/* 2. verticalAlign */}
      <Section title="VerticalAlign" gap="var(--spacing-8)" column>
        <div style={{ display: 'flex', gap: 'var(--spacing-24)' }}>
          <div style={{ width: '335px' }}>
            <Case label='verticalAlign="top" (default)'>
              <Bound>
                <ListCell
                  label="텍스트"
                  description="보조 텍스트가 여러 줄이 될 때 leadingContent 정렬 기준입니다"
                  verticalAlign="top"
                  leadingContent={<Avatar variant="person" size="medium" />}
                />
              </Bound>
            </Case>
          </div>
          <div style={{ width: '335px' }}>
            <Case label='verticalAlign="center"'>
              <Bound>
                <ListCell
                  label="텍스트"
                  description="보조 텍스트가 여러 줄이 될 때 leadingContent 정렬 기준입니다"
                  verticalAlign="center"
                  leadingContent={<Avatar variant="person" size="medium" />}
                />
              </Bound>
            </Case>
          </div>
        </div>
      </Section>

      {/* 3. fillWidth */}
      <Section title="FillWidth" gap="var(--spacing-8)" column>
        <Case label='fillWidth=false (default) — 335px 고정 너비'>
          <div style={{ width: '335px' }}>
            <Bound><ListCell label="텍스트" /></Bound>
          </div>
        </Case>
        <Case label='fillWidth=true — 부모 너비를 채움'>
          <Bound><ListCell label="텍스트" /></Bound>
        </Case>
      </Section>

      {/* 4. textEllipsis */}
      <Section title="TextEllipsis" gap="var(--spacing-8)" column>
        <div style={{ display: 'flex', gap: 'var(--spacing-24)' }}>
          <div style={{ width: '335px' }}>
            <Case label='textEllipsis=false (default)'>
              <Bound>
                <ListCell
                  label="매우 긴 제목이 있을 때 어떻게 처리되는지 확인하는 셀입니다"
                  description="보조 텍스트도 말줄임 없이 모두 표시됩니다"
                  textEllipsis={false}
                />
              </Bound>
            </Case>
          </div>
          <div style={{ width: '335px' }}>
            <Case label='textEllipsis=true'>
              <Bound>
                <ListCell
                  label="매우 긴 제목이 있을 때 어떻게 처리되는지 확인하는 셀입니다"
                  description="보조 텍스트도 말줄임 처리됩니다"
                  textEllipsis={true}
                />
              </Bound>
            </Case>
          </div>
        </div>
      </Section>

      {/* 5. divider */}
      <Section title="Divider" gap="var(--spacing-8)" column>
        <div style={{ display: 'flex', gap: 'var(--spacing-24)' }}>
          <div style={{ width: '335px' }}>
            <Case label='divider=false (default)'>
              <Bound>
                <ListCell label="텍스트" description="보조 텍스트" />
                <ListCell label="텍스트" description="보조 텍스트" />
              </Bound>
            </Case>
          </div>
          <div style={{ width: '335px' }}>
            <Case label='divider=true'>
              <Bound>
                <ListCell label="텍스트" description="보조 텍스트" divider />
                <ListCell label="텍스트" description="보조 텍스트" />
              </Bound>
            </Case>
          </div>
        </div>
      </Section>

      {/* 6. chevron */}
      <Section title="Chevron" gap="var(--spacing-8)" column>
        <div style={{ display: 'flex', gap: 'var(--spacing-24)' }}>
          <div style={{ width: '335px' }}>
            <Case label='chevron=false (default)'>
              <Bound><ListCell label="텍스트" onClick={() => {}} /></Bound>
            </Case>
          </div>
          <div style={{ width: '335px' }}>
            <Case label='chevron=true'>
              <Bound><ListCell label="텍스트" chevron onClick={() => {}} /></Bound>
            </Case>
          </div>
        </div>
      </Section>

      {/* 7. selected */}
      <Section title="Selected" gap="var(--spacing-8)" column>
        <div style={{ display: 'flex', gap: 'var(--spacing-24)' }}>
          <div style={{ width: '335px' }}>
            <Case label='selected=false (default)'>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-24)' }}>
                <Bound><ListCell label="텍스트" /></Bound>
                <Bound><ListCell label="텍스트" description="보조 텍스트" /></Bound>
              </div>
            </Case>
          </div>
          <div style={{ width: '335px' }}>
            <Case label='selected=true'>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-24)' }}>
                <Bound><ListCell label="텍스트" selected /></Bound>
                <Bound><ListCell label="텍스트" description="보조 텍스트" selected /></Bound>
              </div>
            </Case>
          </div>
        </div>
      </Section>

      {/* 8. disabled */}
      <Section title="Disabled" gap="var(--spacing-8)" column>
        <div style={{ display: 'flex', gap: 'var(--spacing-24)' }}>
          <div style={{ width: '335px' }}>
            <Case label='disabled=false (default)'>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-24)' }}>
                <Bound><ListCell label="텍스트" description="보조 텍스트" /></Bound>
                <Bound><ListCell label="텍스트" description="보조 텍스트" selected /></Bound>
              </div>
            </Case>
          </div>
          <div style={{ width: '335px' }}>
            <Case label='disabled=true'>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-24)' }}>
                <Bound><ListCell label="텍스트" description="보조 텍스트" disabled /></Bound>
                <Bound><ListCell label="텍스트" description="보조 텍스트" disabled selected /></Bound>
              </div>
            </Case>
          </div>
        </div>
      </Section>

      {/* 9. interaction */}
      <Section title="Interaction" gap="var(--spacing-8)" column>
        <div style={{ display: 'flex', gap: 'var(--spacing-24)' }}>
          <div style={{ width: '335px' }}>
            <Case label='interaction=false (default, onClick 없음)'>
              <Bound><ListCell label="텍스트" /></Bound>
            </Case>
          </div>
          <div style={{ width: '335px' }}>
            <Case label='interaction=true (onClick 있음)'>
              <Bound><ListCell label="텍스트" onClick={() => {}} /></Bound>
            </Case>
          </div>
        </div>
        <Case label='interaction=true — none / hover / active / selected 상태'>
          <div style={{ display: 'flex', gap: 'var(--spacing-24)' }}>
            {INTERACTION_STATES.map(({ state, selected }) => (
              <div key={state} style={{ width: '240px' }}>
                <span style={{
                  display:      'block',
                  fontSize:     'var(--font-size-label-2)',
                  color:        'var(--color-label-alternative)',
                  marginBottom: 'var(--spacing-8)',
                }}>{state}</span>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-24)' }}>
                  <Bound><ListCell label="텍스트" selected={selected} onClick={() => {}} /></Bound>
                  <Bound><ListCell label="텍스트" description="보조 텍스트" selected={selected} onClick={() => {}} /></Bound>
                </div>
              </div>
            ))}
          </div>
        </Case>
      </Section>

      {/* 10. leadingContent */}
      <Section title="LeadingContent" gap="var(--spacing-8)" column>
        <div style={{ width: '335px' }}>
          <Bound>
            <ListCell
              label="텍스트"
              leadingContent={<Avatar variant="person" size="medium" />}
            />
          </Bound>
        </div>
      </Section>

      {/* 11. trailingContent */}
      <Section title="TrailingContent" gap="var(--spacing-8)" column>
        <div style={{ width: '335px' }}>
          <Bound>
            <ListCell
              label="텍스트"
              trailingContent={<Switch active={false} size="small" />}
            />
          </Bound>
        </div>
      </Section>

      {/* 12. customize */}
      <Section title="Customize" gap="var(--spacing-8)" column>
        <span style={{
          fontSize: 'var(--font-size-label-2)',
          color:    'var(--color-label-alternative)',
        }}>
          className · style · onClick 등 기본 속성으로 커스터마이즈할 수 있습니다.
        </span>
      </Section>
    </div>
  )
}

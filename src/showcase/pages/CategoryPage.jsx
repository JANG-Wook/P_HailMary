import { useState } from 'react'
import Category from '../../design-system/components/Category/Category'
import Section, { Case } from '../Section'

const ITEMS_5 = [
  { label: '전체' }, { label: '인기' }, { label: '최신' }, { label: '추천' }, { label: '완료' },
]

const ITEMS_4 = [
  { label: '전체' }, { label: '인기' }, { label: '최신' }, { label: '추천' },
]

const ITEMS_MANY = [
  { label: '전체' }, { label: '인기' }, { label: '최신' }, { label: '추천' },
  { label: '완료' }, { label: '진행중' }, { label: '마감' }, { label: '임시' },
]

export default function CategoryPage() {
  const [varNormal, setVarNormal] = useState(0)
  const [varAlt, setVarAlt]       = useState(0)
  const [hpFalse, setHpFalse]     = useState(0)
  const [hpTrue, setHpTrue]       = useState(0)
  const [vpFalse, setVpFalse]     = useState(0)
  const [vpTrue, setVpTrue]       = useState(0)

  return (
    <div>
      <h2 style={{
        fontSize:     'var(--font-size-title-3)',
        lineHeight:   'var(--line-height-title-3)',
        fontWeight:   'var(--font-weight-bold)',
        color:        'var(--color-label-normal)',
        marginBottom: 'var(--spacing-32)',
      }}>Category</h2>

      {/* variant */}
      <Section title="Variant" gap="var(--spacing-24)">
        <Case label="normal (default)">
          <div style={{ width: '320px' }}>
            <Category items={ITEMS_5} value={varNormal} onChange={setVarNormal} variant="normal" />
          </div>
        </Case>
        <Case label="alternative">
          <div style={{ width: '320px' }}>
            <Category items={ITEMS_5} value={varAlt} onChange={setVarAlt} variant="alternative" />
          </div>
        </Case>
      </Section>

      {/* size */}
      <Section title="Size" gap="var(--spacing-16)">
        {[
          { size: 'small',  label: 'small'           },
          { size: 'medium', label: 'medium (default)' },
          { size: 'large',  label: 'large'            },
          { size: 'xlarge', label: 'xlarge'           },
        ].map(({ size, label }) => (
          <Case key={size} label={label}>
            <div style={{ width: '320px' }}>
              <Category items={ITEMS_4} value={0} size={size} />
            </div>
          </Case>
        ))}
      </Section>

      {/* horizontalPadding */}
      <Section title="HorizontalPadding" gap="var(--spacing-24)">
        <Case label="false (default)">
          <div style={{
            width: '320px',
            backgroundColor: 'var(--color-bg-normal-alternative)',
            borderRadius: 'var(--spacing-8)',
          }}>
            <Category items={ITEMS_5} value={hpFalse} onChange={setHpFalse} />
          </div>
        </Case>
        <Case label="true">
          <div style={{
            width: '360px',
            backgroundColor: 'var(--color-bg-normal-alternative)',
            borderRadius: 'var(--spacing-8)',
          }}>
            <Category items={ITEMS_5} value={hpTrue} onChange={setHpTrue} horizontalPadding />
          </div>
        </Case>
      </Section>

      {/* verticalPadding */}
      <Section title="VerticalPadding" gap="var(--spacing-24)">
        <Case label="false (default)">
          <div style={{
            width: '320px',
            backgroundColor: 'var(--color-bg-normal-alternative)',
            borderRadius: 'var(--spacing-8)',
          }}>
            <Category items={ITEMS_5} value={vpFalse} onChange={setVpFalse} />
          </div>
        </Case>
        <Case label="true">
          <div style={{
            width: '375px',
            backgroundColor: 'var(--color-bg-normal-alternative)',
            borderRadius: 'var(--spacing-8)',
          }}>
            <Category items={ITEMS_5} value={vpTrue} onChange={setVpTrue} verticalPadding />
          </div>
        </Case>
      </Section>

      {/* scroll */}
      <Section title="Scroll" gap="var(--spacing-24)">
        <Case label="false (default)">
          <div style={{ width: '320px' }}>
            <Category items={ITEMS_MANY} value={0} />
          </div>
        </Case>
        <Case label="true">
          <div style={{ width: '320px' }}>
            <Category items={ITEMS_MANY} value={0} scroll />
          </div>
        </Case>
      </Section>

      {/* resource */}
      <Section title="Resource" column gap="var(--spacing-16)">
        <div>
          <p style={{
            fontSize:      'var(--font-size-body-2)',
            lineHeight:    'var(--line-height-body-2-normal)',
            fontWeight:    'var(--font-weight-semibold)',
            color:         'var(--color-label-normal)',
            marginBottom:  'var(--spacing-16)',
          }}>chip</p>
          <div style={{ display: 'flex', gap: 'var(--spacing-24)', alignItems: 'flex-start' }}>
            <Case label="active = false (default)">
              <Category items={[{ label: '텍스트' }]} value={-1} />
            </Case>
            <Case label="active = true">
              <Category items={[{ label: '텍스트' }]} value={0} />
            </Case>
          </div>
        </div>
      </Section>
    </div>
  )
}

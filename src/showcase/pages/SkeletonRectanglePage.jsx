import SkeletonRect from '../../design-system/components/SkeletonRect/SkeletonRect'

export default function SkeletonRectanglePage() {
  return (
    <div>
      <h2 style={{
        fontSize:     'var(--font-size-title-3)',
        lineHeight:   'var(--line-height-title-3)',
        fontWeight:   'var(--font-weight-bold)',
        color:        'var(--color-label-normal)',
        marginBottom: 'var(--spacing-8)',
      }}>Rectangle</h2>

      <p style={{
        fontSize:      'var(--font-size-body-2)',
        lineHeight:    'var(--line-height-body-2-normal)',
        letterSpacing: 'var(--letter-spacing-body-2)',
        color:         'var(--color-label-alternative)',
        marginBottom:  'var(--spacing-48)',
      }}>네모난 모양을 가진 콘텐츠를 대체하여 사용합니다.</p>

      <div style={{
        display:    'flex',
        gap:        'var(--spacing-24)',
        alignItems: 'flex-start',
      }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-8)' }}>
          <SkeletonRect color="normal" width={64} height={64} />
          <p style={{
            fontSize:      'var(--font-size-caption-1)',
            lineHeight:    'var(--line-height-caption-1)',
            letterSpacing: 'var(--letter-spacing-caption-1)',
            color:         'var(--color-label-assistive)',
          }}>Color=Normal</p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-8)' }}>
          <div style={{
            padding:         'var(--spacing-16)',
            backgroundColor: 'var(--color-inverse-background)',
            borderRadius:    'var(--spacing-8)',
          }}>
            <SkeletonRect color="white" width={64} height={64} />
          </div>
          <p style={{
            fontSize:      'var(--font-size-caption-1)',
            lineHeight:    'var(--line-height-caption-1)',
            letterSpacing: 'var(--letter-spacing-caption-1)',
            color:         'var(--color-label-assistive)',
          }}>Color=White</p>
        </div>
      </div>
    </div>
  )
}

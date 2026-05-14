import { useState } from 'react'
import Sidebar from './showcase/Sidebar'

import ColorsPage         from './showcase/pages/ColorsPage'
import TypographyPage     from './showcase/pages/TypographyPage'
import ElevationPage      from './showcase/pages/ElevationPage'
import ArtboardPage       from './showcase/pages/ArtboardPage'
import BreakpointPage     from './showcase/pages/BreakpointPage'
import SpacingPage        from './showcase/pages/SpacingPage'
import LayoutPage           from './showcase/pages/LayoutPage'
import ThemeIconNormalPage      from './showcase/pages/ThemeIconNormalPage'
import ThemeIconNavigationPage  from './showcase/pages/ThemeIconNavigationPage'
import AlertPage          from './showcase/pages/AlertPage'
import AvatarPage         from './showcase/pages/AvatarPage'
import CardPage           from './showcase/pages/CardPage'
import CategoryPage       from './showcase/pages/CategoryPage'
import CheckboxPage       from './showcase/pages/CheckboxPage'
import CheckMarkPage      from './showcase/pages/CheckMarkPage'
import ContentBadgePage   from './showcase/pages/ContentBadgePage'
import DividerPage        from './showcase/pages/DividerPage'
import FramedStylePage    from './showcase/pages/FramedStylePage'
import IconPage           from './showcase/pages/IconPage'
import ListCellPage       from './showcase/pages/ListCellPage'
import MenuPage           from './showcase/pages/MenuPage'
import PageIndicatorPage  from './showcase/pages/PageIndicatorPage'
import PaginationPage     from './showcase/pages/PaginationPage'
import RadioPage          from './showcase/pages/RadioPage'
import SegmentedControlPage from './showcase/pages/SegmentedControlPage'
import SelectPage         from './showcase/pages/SelectPage'
import SkeletonPage from './showcase/pages/SkeletonPage'
import SnackbarPage       from './showcase/pages/SnackbarPage'
import SpinnerPage        from './showcase/pages/SpinnerPage'
import SwitchPage         from './showcase/pages/SwitchPage'
import TabPage            from './showcase/pages/TabPage'
import TextfieldPage      from './showcase/pages/TextfieldPage'
import TextareaPage       from './showcase/pages/TextareaPage'
import ThumbnailPage      from './showcase/pages/ThumbnailPage'
import ToastPage          from './showcase/pages/ToastPage'
import TooltipPage        from './showcase/pages/TooltipPage'
import BasicRatioPage              from './showcase/pages/BasicRatioPage'
import ElementSafeAreaPage           from './showcase/pages/ElementSafeAreaPage'
import DecoratePage                from './showcase/pages/DecoratePage'
import EssentialPage              from './showcase/pages/EssentialPage'
import ActionBottomPage           from './showcase/pages/ActionBottomPage'
import ButtonPage                from './showcase/pages/ButtonPage'
import TextButtonPage           from './showcase/pages/TextButtonPage'
import IconButtonNormalPage     from './showcase/pages/IconButtonNormalPage'
import IconButtonBackgroundPage from './showcase/pages/IconButtonBackgroundPage'
import IconButtonPage           from './showcase/pages/IconButtonPage'
import ChipPage                 from './showcase/pages/ChipPage'
import ToggleIconPage           from './showcase/pages/ToggleIconPage'
import ChatRoomPage             from './showcase/pages/ChatRoomPage'

const PAGE_MAP = {
  colors:           ColorsPage,
  typography:       TypographyPage,
  elevation:        ElevationPage,
  artboard:         ArtboardPage,
  breakpoint:       BreakpointPage,
  spacing:          SpacingPage,
  layout:           LayoutPage,
  iconNormal:       ThemeIconNormalPage,
  iconNavigation:   ThemeIconNavigationPage,
  alert:            AlertPage,
  avatar:           AvatarPage,
  card:             CardPage,
  category:         CategoryPage,
  checkbox:         CheckboxPage,
  checkMark:        CheckMarkPage,
  contentBadge:     ContentBadgePage,
  divider:          DividerPage,
  framedStyle:      FramedStylePage,
  icon:             IconPage,
  listCell:         ListCellPage,
  menu:             MenuPage,
  pageIndicator:    PageIndicatorPage,
  pagination:       PaginationPage,
  radio:            RadioPage,
  segmentedControl: SegmentedControlPage,
  select:           SelectPage,
  skeleton:          SkeletonPage,
  snackbar:         SnackbarPage,
  spinner:          SpinnerPage,
  switch:           SwitchPage,
  tab:              TabPage,
  textfield:        TextfieldPage,
  textarea:         TextareaPage,
  thumbnail:        ThumbnailPage,
  toast:            ToastPage,
  tooltip:              TooltipPage,
  basicRatio:             BasicRatioPage,
  elementSafeArea:        ElementSafeAreaPage,
  decorate:                 DecoratePage,
  essential:                EssentialPage,
  actionBottom:             ActionBottomPage,
  button:                   ButtonPage,
  textButton:               TextButtonPage,
  actionNormal:             IconButtonNormalPage,
  actionBackground:         IconButtonBackgroundPage,
  iconButton:               IconButtonPage,
  chip:                     ChipPage,
  toggleIcon:               ToggleIconPage,
  chatRoom:                 ChatRoomPage,
}

export default function App() {
  const [activePage, setActivePage] = useState('colors')
  const PageComponent = PAGE_MAP[activePage] ?? ColorsPage

  return (
    <div style={{
      display:         'flex',
      minHeight:       '100vh',
      backgroundColor: 'var(--color-bg-normal-alternative)',
      fontFamily:      'var(--font-family-base)',
    }}>
      <Sidebar activePage={activePage} onNavigate={setActivePage} />

      <main style={{
        flex:       1,
        overflowY:  'auto',
        minHeight:  '100vh',
        padding:    'var(--spacing-48)',
        boxSizing:  'border-box',
        maxWidth:   'calc(100vw - 220px)',
        minWidth:   '900px',
      }}>
        <PageComponent />
      </main>
    </div>
  )
}

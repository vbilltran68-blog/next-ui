import { IconPath, IconType } from '@interfaces/icon'
import { NavigationItem } from '@interfaces/navigation'

export const NAVIGATION_ITEMS: NavigationItem[] = [
  {
    label: 'Notes',
    href: '/',
    icon: IconPath[IconType.Note]
  },
  {
    label: 'About',
    href: '/about',
    icon: IconPath[IconType.Info]
  },
]

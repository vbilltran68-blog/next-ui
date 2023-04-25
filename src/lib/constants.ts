import { IconPath, IconType } from '@interfaces/icon'
import { NavigationItem } from '@interfaces/navigation'
import { join } from 'path'

// NAVIGATION
export const NAVIGATION_ITEMS: NavigationItem[] = [
  {
    label: 'Notes',
    href: '/',
    icon: IconPath[IconType.Note]
  },
  {
    label: 'About',
    href: '/about',
    icon: IconPath[IconType.Help]
  },
]

// DIRECTORY
export const POST_DIR = join(process.cwd(), 'posts')
export const INFO_DIR = join(process.cwd(), 'info')

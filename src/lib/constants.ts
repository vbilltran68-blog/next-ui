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
    icon: IconPath[IconType.Info]
  },
]

// DIRECTORY
export const POST_DIR = join(process.cwd(), 'posts')
export const INFO_DIR = join(process.cwd(), 'info')

// APP => move to env file
export const APP_URL = process.env.APP_URL || 'https://khuetran.tech'
export const GITHUB_REPO = process.env.GITHUB_REPO || 'vbilltran68/vbilltran68-blog'

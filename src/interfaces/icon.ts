export enum IconType {
  Note = 'note',
  Info = 'info',
  History = 'history',
  HandTop = 'hand-top',
  LightMode = 'light-mode',
  DarkMode = 'dark-mode',
  Share = 'share',
  Back = 'back'
}

export const IconPath: Record<string, string> = {
  [IconType.Note]: '/assets/svg-icons/toilet-paper.svg',
  [IconType.Info]: '/assets/svg-icons/info.svg',
  [IconType.History]: '/assets/svg-icons/history.svg',
  [IconType.HandTop]: '/assets/svg-icons/hand-top.svg',
  [IconType.LightMode]: '/assets/svg-icons/light-mode.svg',
  [IconType.DarkMode]: '/assets/svg-icons/dark-mode.svg',
  [IconType.Share]: '/assets/svg-icons/share.svg',
  [IconType.Back]: '/assets/svg-icons/back.svg',
}

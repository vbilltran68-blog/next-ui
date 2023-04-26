import Icon from "@components/Icon";
import { Theme } from "@interfaces/app"
import { IconPath, IconType } from "@interfaces/icon"

import { ToggleThemeWrapper } from "./styled"

type DisplayModeProps = { theme: Theme | undefined; toggleTheme?: Function }

const ToggleTheme = ({ theme, toggleTheme }: DisplayModeProps) => {
  return (
    <ToggleThemeWrapper onClick={() => toggleTheme && toggleTheme()}>
      <Icon src={IconPath[theme === Theme.DARK ? IconType.LightMode : IconType.DarkMode]} size={30} />
    </ToggleThemeWrapper>
  );
}

export default ToggleTheme


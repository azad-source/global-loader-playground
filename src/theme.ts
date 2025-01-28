import { KonturColors } from '@skbkontur/colors';
import { ThemeFactory, LIGHT_THEME } from '@skbkontur/react-ui';
import { Theme } from '@skbkontur/react-ui/lib/theming/Theme';
import { SideMenuTheme } from '@skbkontur/side-menu';
import { colors } from 'variables';

const CHECKBOX_THEME: Partial<Theme> = {
  checkboxCheckedBg: colors.serviceColor,
  checkboxCheckedHoverBg: colors.serviceColorHover,
  radioCheckedBgColor: colors.serviceColor,
  radioBgColor: '#fff',
  radioHoverBg: KonturColors.grayscaleLightBackground,
  radioCheckedHoverBgColor: colors.serviceColorHover,
};

const BUTTON_THEME: Partial<Theme> = {
  // default button
  btnDefaultHoverBg: colors.serviceSecondColorHover,
  btnDefaultHoverBorderColor: colors.serviceSecondColorActive,
  btnDefaultActiveBg: colors.serviceSecondColorActive,
  btnDefaultActiveBorderColor: colors.serviceSecondColorDisabled,

  // backless
  btnBacklessHoverBg: colors.serviceSecondColorHover,
  btnBacklessActiveBg: colors.serviceSecondColorActive,
  btnBacklessHoverBorderColor: colors.serviceSecondColorActive,
  btnBacklessActiveBorderColor: colors.serviceSecondColorDisabled,

  // primary button
  btnPrimaryBg: colors.serviceColor,
  btnPrimaryHoverBg: colors.serviceColorHover,
  btnPrimaryActiveBg: colors.serviceColorActive,
  btnPrimaryBorderColor: colors.serviceColorBg,
  btnPrimaryHoverBorderColor: colors.serviceColorHover,
  btnPrimaryActiveBorderColor: colors.serviceColorActive,
  btnTextHoverBg: colors.serviceSecondColorHover,
  btnTextActiveBg: colors.serviceSecondColorActive,
  btnCheckedBg: colors.serviceColor,
};

const SIDE_MENU_THEME: Partial<SideMenuTheme> = {
  sideMenuBgColor: '#fff',
  sideMenuBoxShadow: '0 4px 40px 0 rgba(0, 0, 0, 0.06)',
  sideMenuItemActiveBg: colors.serviceColorBg,
  sideMenuItemHoverBg: 'transparent',
  sideMenuItemContentPaddingY: '8px',
  sideMenuHeaderPaddingBottom: '16px',
};

const TOKEN_THEME: Partial<Theme> = {
  tokenBorderWidth: '0',
  tokenBorderRadius: '20px',
  tokenPaddingXMedium: '8px',
  tokenBg: '#fff',
  tokenBgHover: '#fff',
};

const TOGGLE_THEME: Partial<Theme> = {
  toggleBgChecked: colors.serviceColor,
  toggleBgFocus: colors.serviceColorActive,
  toggleContainerBgChecked: colors.serviceColor,
  toggleContainerBgCheckedHover: colors.serviceColor,
};

const FILE_UPLOADER_THEME: Partial<Theme> = {
  fileUploaderBorderColor: colors.serviceColor,
  fileUploaderIconColor: colors.serviceColor,
  fileUploaderLinkColor: colors.serviceColor,
  fileUploaderHoveredBg: colors.surfacePrimaryBlue,
  fileUploaderHoveredBorderColor: colors.serviceColor,
  fileUploaderBorderColorFocus: colors.serviceColor,
  fileUploaderDragOverBorderColor: colors.serviceColor,
  fileUploaderDragOverShadow: `0px 0px 0px 3px ${colors.serviceColor}, 0px 0px 0px 8px ${colors.surfacePrimaryBlue}`,
};

const OTHER_THEME: Partial<Theme> = {
  borderColorFocus: colors.serviceColor,
  globalLoaderColor: colors.serviceColor,
};

const CUSTOM_THEME: Partial<Theme> = {
  ...BUTTON_THEME,
  ...CHECKBOX_THEME,
  ...SIDE_MENU_THEME,
  ...TOKEN_THEME,
  ...TOGGLE_THEME,
  ...FILE_UPLOADER_THEME,
  ...OTHER_THEME,
};

export function createTheme(theme?: Partial<Theme>) {
  return ThemeFactory.create({ ...CUSTOM_THEME, ...theme }, LIGHT_THEME);
}

export default createTheme();

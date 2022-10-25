import {
  violetDark,
  yellowDark,
  greenDark,
  blueDark,
  grayDark,
  redDark
} from '@radix-ui/colors';
import { TokenKey } from '../types';

const colors = {
  ...violetDark,
  ...blueDark,
  ...yellowDark,
  ...greenDark,
  ...grayDark,
  ...redDark
};

export const darkTheme: Partial<Record<TokenKey, any>> = {
  //solid button variant
  '--btn-sld-pri-bg': colors.violet9,
  '--btn-sld-suc-bg': colors.green9,
  '--btn-sld-dan-bg': colors.red9,
  '--btn-sld-war-bg': colors.yellow9,
  '--btn-sld-inf-bg': colors.blue9,
  '--btn-sld-neu-bg': colors.gray9,
  '--btn-sld-pri-hov-bg': colors.violet10,
  '--btn-sld-suc-hov-bg': colors.green10,
  '--btn-sld-dan-hov-bg': colors.red10,
  '--btn-sld-war-hov-bg': colors.yellow10,
  '--btn-sld-inf-hov-bg': colors.blue10,
  '--btn-sld-neu-hov-bg': colors.gray10,
  //flat button variant
  '--btn-flt-pri-bg': colors.violet3,
  '--btn-flt-suc-bg': colors.green3,
  '--btn-flt-dan-bg': colors.red3,
  '--btn-flt-war-bg': colors.yellow3,
  '--btn-flt-inf-bg': colors.blue3,
  '--btn-flt-neu-bg': colors.gray3,
  '--btn-flt-pri-hov-bg': colors.violet4,
  '--btn-flt-suc-hov-bg': colors.green4,
  '--btn-flt-dan-hov-bg': colors.red4,
  '--btn-flt-war-hov-bg': colors.yellow4,
  '--btn-flt-inf-hov-bg': colors.blue4,
  '--btn-flt-neu-hov-bg': colors.gray4,
  '--btn-flt-pri-txt': colors.violet11,
  '--btn-flt-suc-txt': colors.green11,
  '--btn-flt-dan-txt': colors.red11,
  '--btn-flt-war-txt': colors.yellow11,
  '--btn-flt-inf-txt': colors.blue11,
  '--btn-flt-neu-txt': colors.gray11,
  // outline button variant
  '--btn-out-pri-bor': colors.violet7,
  '--btn-out-suc-bor': colors.green7,
  '--btn-out-dan-bor': colors.red7,
  '--btn-out-war-bor': colors.yellow7,
  '--btn-out-inf-bor': colors.blue7,
  '--btn-out-neu-bor': colors.gray7,
  '--btn-out-pri-hov-bor': colors.violet8,
  '--btn-out-suc-hov-bor': colors.green8,
  '--btn-out-dan-hov-bor': colors.red8,
  '--btn-out-war-hov-bor': colors.yellow8,
  '--btn-out-inf-hov-bor': colors.blue8,
  '--btn-out-neu-hov-bor': colors.gray8
};

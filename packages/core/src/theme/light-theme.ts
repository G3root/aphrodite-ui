import { violet, green, yellow, red, blue, gray } from '@radix-ui/colors';
import { TokenKey } from '../types';
import { cssVar } from '../utils';

const colors = {
  ...violet,
  ...blue,
  ...yellow,
  ...green,
  ...gray,
  ...red
};
export const lightTheme: Partial<Record<TokenKey, any>> = {
  //✨ solid button variant
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

  //✨ flat button variant
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

  //✨ outline button variant
  '--btn-out-pri-txt': cssVar('btn-flt-pri-txt'),
  '--btn-out-suc-txt': cssVar('btn-flt-suc-txt'),
  '--btn-out-dan-txt': cssVar('btn-flt-dan-txt'),
  '--btn-out-war-txt': cssVar('btn-flt-war-txt'),
  '--btn-out-inf-txt': cssVar('btn-flt-inf-txt'),
  '--btn-out-neu-txt': cssVar('btn-flt-neu-txt'),
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
  '--btn-out-neu-hov-bor': colors.gray8,
  '--btn-out-pri-hov-bg': cssVar('btn-flt-pri-hov-bg'),
  '--btn-out-suc-hov-bg': cssVar('btn-flt-suc-hov-bg'),
  '--btn-out-dan-hov-bg': cssVar('btn-flt-dan-hov-bg'),
  '--btn-out-war-hov-bg': cssVar('btn-flt-war-hov-bg'),
  '--btn-out-inf-hov-bg': cssVar('btn-flt-inf-hov-bg'),
  '--btn-out-neu-hov-bg': cssVar('btn-flt-neu-hov-bg'),

  //✨ ghost variant
  '--btn-gho-pri-txt': cssVar('btn-flt-pri-txt'),
  '--btn-gho-suc-txt': cssVar('btn-flt-suc-txt'),
  '--btn-gho-dan-txt': cssVar('btn-flt-dan-txt'),
  '--btn-gho-war-txt': cssVar('btn-flt-war-txt'),
  '--btn-gho-inf-txt': cssVar('btn-flt-inf-txt'),
  '--btn-gho-neu-txt': cssVar('btn-flt-neu-txt'),
  '--btn-gho-pri-hov-bg': cssVar('btn-flt-pri-hov-bg'),
  '--btn-gho-suc-hov-bg': cssVar('btn-flt-suc-hov-bg'),
  '--btn-gho-dan-hov-bg': cssVar('btn-flt-dan-hov-bg'),
  '--btn-gho-war-hov-bg': cssVar('btn-flt-war-hov-bg'),
  '--btn-gho-inf-hov-bg': cssVar('btn-flt-inf-hov-bg'),
  '--btn-gho-neu-hov-bg': cssVar('btn-flt-neu-hov-bg'),

  //✨ text variant
  '--btn-lin-pri-txt': cssVar('btn-flt-pri-txt'),
  '--btn-lin-suc-txt': cssVar('btn-flt-suc-txt'),
  '--btn-lin-dan-txt': cssVar('btn-flt-dan-txt'),
  '--btn-lin-war-txt': cssVar('btn-flt-war-txt'),
  '--btn-lin-inf-txt': cssVar('btn-flt-inf-txt'),
  '--btn-lin-neu-txt': cssVar('btn-flt-neu-txt')
};

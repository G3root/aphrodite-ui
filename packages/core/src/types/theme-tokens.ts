export type Colors = 'pri' | 'dan' | 'suc' | 'war' | 'inf' | 'neu';
export type Properties = 'bg' | 'hov-bg' | 'txt' | 'bor' | 'hov-bor';
export type Components = 'btn';
export type BtnVariants = 'sld' | 'flt' | 'out' | 'gho' | 'lin';

export type TokenValue = `${Components}-${BtnVariants}-${Colors}-${Properties}`;
export type TokenKey = `--${Components}-${BtnVariants}-${Colors}-${Properties}`;

export type ThemeRange = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

export type Tokens =
  | 'black-alpha'
  | 'white-alpha'
  | 'primary'
  | 'neutral'
  | 'success'
  | 'info'
  | 'warning'
  | 'danger';

export type TokenKey = `--${Tokens}-${ThemeRange}`;

export type ColorTokens = Partial<Record<TokenKey, string>>;

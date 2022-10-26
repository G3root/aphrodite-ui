import type * as CSS from 'csstype';
import { Colors } from '../../constants';

function solidVariant() {
  const variant = 'sld';
  const styles = Colors.reduce<
    Record<string, CSS.Properties | Record<string, CSS.Properties>>
  >((prev, color) => {
    prev[`&.btn-${color}`] = {
      backgroundColor: `var(--btn-${variant}-${color}-bg)`,
      color: color === 'war' ? 'black' : 'white',
      '&:not(:disabled):hover': {
        backgroundColor: `var(--btn-${variant}-${color}-hov-bg)`
      }
    };
    return prev;
  }, {});
  return styles;
}

function flatVariant() {
  const variant = 'flt';
  const styles = Colors.reduce<
    Record<string, CSS.Properties | Record<string, CSS.Properties>>
  >((prev, color) => {
    prev[`&.btn-${color}`] = {
      backgroundColor: `var(--btn-${variant}-${color}-bg)`,
      color: `var(--btn-${variant}-${color}-txt)`,
      '&:not(:disabled):hover': {
        backgroundColor: `var(--btn-${variant}-${color}-hov-bg)`
      }
    };
    return prev;
  }, {});
  return styles;
}

function outLineVariant() {
  const variant = 'out';
  const styles = Colors.reduce<
    Record<string, CSS.Properties | Record<string, CSS.Properties>>
  >((prev, color) => {
    prev[`&.btn-${color}`] = {
      borderColor: `var(--btn-${variant}-${color}-bor)`,
      color: `var(--btn-${variant}-${color}-txt)`,
      '&:not(:disabled):hover': {
        backgroundColor: `var(--btn-${variant}-${color}-hov-bg)`,
        borderColor: `var(--btn-${variant}-${color}-hov-bor)`
      }
    };
    return prev;
  }, {});
  return styles;
}

function ghostVariant() {
  const variant = 'gho';
  const styles = Colors.reduce<
    Record<string, CSS.Properties | Record<string, CSS.Properties>>
  >((prev, color) => {
    prev[`&.btn-${color}`] = {
      color: `var(--btn-${variant}-${color}-txt)`,
      '&:not(:disabled):hover': {
        backgroundColor: `var(--btn-${variant}-${color}-hov-bg)`
      }
    };
    return prev;
  }, {});
  return styles;
}

function linkVariant() {
  const variant = 'lin';
  const styles = Colors.reduce<
    Record<string, CSS.Properties | Record<string, CSS.Properties>>
  >((prev, color) => {
    prev[`&.btn-${color}`] = {
      color: `var(--btn-${variant}-${color}-txt)`,
      '&:not(:disabled):hover': {
        textDecoration: 'underline'
      }
    };
    return prev;
  }, {});
  return styles;
}

export const button = {
  '.btn': {
    '&.btn-sld': solidVariant(),
    '&.btn-flt': flatVariant(),
    '&.btn-out': outLineVariant(),
    '&.btn-gho': ghostVariant(),
    '&.btn-lin': linkVariant()
  }
} as {};

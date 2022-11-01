import type * as CSS from 'csstype';
import { Colors } from '../../constants';
import { cssVar } from '../../utils';

function solidVariant() {
  const styles = Colors.reduce<
    Record<string, CSS.Properties | Record<string, CSS.Properties>>
  >((prev, color) => {
    const isNeutral = color === 'neutral';
    const neutralBg = 'var(--sld-btn-neu-bg)';
    const neutralHovBg = 'var(--sld-btn-neu-hov-bg)';
    prev[`&.btn-${color.substring(0, 3)}`] = {
      backgroundColor: isNeutral ? neutralBg : cssVar(color, 9),
      color: color === 'warning' ? 'black' : 'white',
      '&:not(:disabled):hover': {
        backgroundColor: isNeutral ? neutralHovBg : cssVar(color, 10)
      }
    };
    return prev;
  }, {});
  return styles;
}

function flatVariant() {
  const styles = Colors.reduce<
    Record<string, CSS.Properties | Record<string, CSS.Properties>>
  >((prev, color) => {
    prev[`&.btn-${color.substring(0, 3)}`] = {
      backgroundColor: cssVar(color, 3),
      color: cssVar(color, 11),
      '&:not(:disabled):hover': {
        backgroundColor: cssVar(color, 4)
      }
    };
    return prev;
  }, {});
  return styles;
}

function outLineVariant() {
  const styles = Colors.reduce<
    Record<string, CSS.Properties | Record<string, CSS.Properties>>
  >((prev, color) => {
    const isNeutral = color === 'neutral';
    prev[`&.btn-${color.substring(0, 3)}`] = {
      borderColor: cssVar(color, 7),
      color: isNeutral ? cssVar(color, 12) : cssVar(color, 11),
      '&:not(:disabled):hover': {
        borderColor: cssVar(color, 8)
      }
    };
    return prev;
  }, {});
  return styles;
}

function ghostVariant() {
  const styles = Colors.reduce<
    Record<string, CSS.Properties | Record<string, CSS.Properties>>
  >((prev, color) => {
    const isNeutral = color === 'neutral';
    prev[`&.btn-${color.substring(0, 3)}`] = {
      color: isNeutral ? cssVar(color, 12) : cssVar(color, 11),
      '&:not(:disabled):hover': {
        backgroundColor: cssVar(color, 4)
      }
    };
    return prev;
  }, {});
  return styles;
}

function linkVariant() {
  const styles = Colors.reduce<
    Record<string, CSS.Properties | Record<string, CSS.Properties>>
  >((prev, color) => {
    const isNeutral = color === 'neutral';
    prev[`&.btn-${color.substring(0, 3)}`] = {
      color: isNeutral ? cssVar(color, 12) : cssVar(color, 11),
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

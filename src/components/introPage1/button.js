import React from 'react';
import cn from 'classnames';

import { makeStyles, createStyles } from '@material-ui/core/styles';

import theme from 'styles/theme';
import * as Font from 'constants/fonts';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      backgroundColor: theme.palette.primary.main,
      width: '100%',
      fontFamily: Font.NUNITO,
      fontWeight: 700,
      color: 'white',
      borderRadius: 8,
      border: 'transparent',
      outline: 'none',
      cursor: 'pointer',
      '&:disabled': {
        backgroundColor: '#C7C7C7',
        cursor: 'default',
      },
    },
    xbig: {
      height: 96,
      fontSize: 16,
    },
    big: {
      height: 72,
      fontSize: 14,
    },
    medium: {
      height: 56,
      fontSize: 14,
    },
    outline: {
      backgroundColor: 'white',
      color: theme.palette.primary.main,
      border: '2px solid ' + theme.palette.primary.main,
    },
  })
);

const ButtonComponent = ({
  onClick,
  children,
  size = 'big',
  backgroundColor = null,
  color = null,
  disabled = false,
  underline = false,
  outline = false,
  style = {},
}) => {
  const classes = useStyles();

  let inlineStyles = {};

  if (backgroundColor) {
    inlineStyles.backgroundColor = backgroundColor;

    if (backgroundColor == 'white' || backgroundColor.indexOf('#FFF') >= 0) {
      inlineStyles.color = theme.palette.primary.main;
    }
  }

  if (color) {
    inlineStyles.color = color;
  }

  if (underline) {
    inlineStyles.textDecoration = 'underline';
  }

  if (style) {
    inlineStyles = {
      ...inlineStyles,
      ...style,
    };
  }

  return (
    <button
      className={cn({
        [classes.root]: true,
        [classes.xbig]: size === 'xbig',
        [classes.big]: size === 'big',
        [classes.medium]: size === 'medium',
        [classes.outline]: outline === true,
      })}
      disabled={disabled}
      style={inlineStyles}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default ButtonComponent;

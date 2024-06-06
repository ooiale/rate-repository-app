import { Text as NativeText, StyleSheet } from 'react-native';

import theme from '../theme';

const styles = StyleSheet.create({
  text: {
    color: theme.colors.textPrimary,
    fontSize: theme.fontSizes.body,
    fontFamily: theme.fonts.main,
    fontWeight: theme.fontWeights.normal,
  },
  colorTextSecondary: {
    color: theme.colors.textSecondary,
  },
  colorPrimary: {
    color: theme.colors.primary,
  },
  colorPressable: {
    color: theme.colors.white
  },
  fontSizeSubheading: {
    fontSize: theme.fontSizes.subheading,
  },
  fontWeightBold: {
    fontWeight: theme.fontWeights.bold,
  },
  warningMessage: {
    color: '#d73a4a',
  },
});

const Text = ({ color, fontSize, fontWeight, style, ...props }) => {
  const textStyle = [
    styles.text,
    color === 'white' ? styles.colorPressable : null,
    color === 'red' ? styles.warningMessage : null,
    color === 'textSecondary' ? styles.colorTextSecondary : null,
    color === 'primary' ? styles.colorPrimary : null,
    fontSize === 'subheading' ? styles.fontSizeSubheading : null,
    fontWeight === 'bold' ? styles.fontWeightBold : null,
    style,
  ];

  return <NativeText style={textStyle} {...props} />;
};

export default Text;
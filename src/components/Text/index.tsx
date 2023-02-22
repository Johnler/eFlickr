import * as React from 'react';
import { Text as TextRN, StyleSheet, useColorScheme, TextProps } from 'react-native';
import { logger } from '../../utils';

interface IText extends TextProps {
  styles?: any;
}

const Text = (props: IText) => {
    const { styles, children } = props
    const isDarkMode = useColorScheme() === 'dark';

  return (
      <TextRN 
      style={StyleSheet.flatten([isDarkMode ? style.textDark : style.textLight, styles])}
        // style={isDarkMode ? style.textDark : style.textLight}
        >
            {children}
        </TextRN>
  );
};

export default Text;

const style = StyleSheet.create({
  container: {},
  textDark: {
    color: '#000000'
  },
  textLight: {
    color: '#fefefe'
  }
});

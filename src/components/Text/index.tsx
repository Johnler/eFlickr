import * as React from 'react';
import { Text as TextRN, StyleSheet, useColorScheme, TextProps } from 'react-native';
import { logger } from '../../utils';

const Text = (props: TextProps) => {
    const { children } = props
    const isDarkMode = useColorScheme() === 'dark';

  return (
      <TextRN 
        style={isDarkMode ? styles.textDark : styles.textLight}
        >
            {children}
        </TextRN>
  );
};

export default Text;

const styles = StyleSheet.create({
  container: {},
  textDark: {
    color: '#000000'
  },
  textLight: {
    color: '#fefefe'
  }
});

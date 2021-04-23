import React, { memo } from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';

import colors from '../constants/colors';

const styles = StyleSheet.create({
  link: {
    marginTop: colors.spacer,
    paddingVertical: colors.spacerQuarter,
    paddingHorizontal: colors.spacerHalf,
  },
  linkText: {
    color: colors.accent1,
    fontSize: colors.spacer - 2,
  },
  linkTextDisabled: {
    color: colors.accent4,
  },
});

interface LinkButtonProps {
  buttonStyles?: any;
  buttonText: string;
  disabled?: boolean;
  handlePress: (event?: any) => void;
  textStyles?: any;
}

function LinkButton(props: LinkButtonProps): React.ReactElement {
  const {
    buttonStyles,
    buttonText,
    disabled,
    handlePress,
    textStyles,
  } = props;

  return (
    <Pressable
      disabled={disabled}
      onPress={handlePress}
      style={[
        styles.link,
        buttonStyles,
      ]}
    >
      <Text
        style={[
          styles.linkText,
          disabled ? styles.linkTextDisabled : null,
          textStyles,
        ]}
      >
        { buttonText }
      </Text>
    </Pressable>
  );
}

LinkButton.defaultProps = {
  buttonStyles: null,
  disabled: false,
  textStyles: null,
};

export default memo(LinkButton);

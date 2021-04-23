import React, { memo } from 'react';
import { Text, View } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';

import LinkButton from '../../components/LinkButton';
import { RootStackParamList } from '../../types';
import styles from './styles';

function NotFound(
  { navigation }: StackScreenProps<RootStackParamList, 'NotFound'>,
): React.ReactElement {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Oops! Something went wrong...
      </Text>
      <LinkButton
        buttonText="Back"
        handlePress={() => navigation.replace('Root')}
      />
    </View>
  );
}

export default memo(NotFound);

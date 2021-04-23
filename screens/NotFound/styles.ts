import { StyleSheet } from 'react-native';

import colors from '../../constants/colors';

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: colors.appBackground,
    flex: 1,
    justifyContent: 'center',
    padding: colors.spacer,
  },
  title: {
    fontSize: colors.spacer + colors.spacerQuarter,
    fontWeight: 'bold',
  },
});

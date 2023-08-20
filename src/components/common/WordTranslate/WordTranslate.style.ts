import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  word: {
    paddingVertical: 2,
    paddingHorizontal: 2,
    borderWidth: 0.1,
    borderColor: 'grey',
  },
  shadow: {
    shadowOffset: {
      width: 1,
      height: -1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 0,
  },
  play: {
    width: 12,
    height: 12,
    marginRight: 2,
  },
});

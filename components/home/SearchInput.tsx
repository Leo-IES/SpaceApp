/* eslint-disable react/react-in-jsx-scope */
// import {StyleSheet} from 'react-native';
import {Icon, Input} from '@ui-kitten/components';
import {ReactElement, useState} from 'react';

export const SearchInput = () => {
  const [value, setValue] = useState('');

  const renderIcon = (props: any): ReactElement => (
    <Icon {...props} name="search-outline" />
  );

  //   const renderCaption = (): ReactElement => {
  //     return (
  //       <View style={styles.captionContainer}>
  //         {AlertIcon(styles.captionIcon)}
  //         <Text style={styles.captionText}>
  //           Should contain at least 8 symbols
  //         </Text>
  //       </View>
  //     );
  //   };

  return (
    <Input
      value={value}
      label="Buscar producto"
      placeholder="Nombre del producto"
      //   caption={renderCaption}
      accessoryRight={renderIcon}
      onChangeText={nextValue => setValue(nextValue)}
    />
  );
};

// const styles = StyleSheet.create({
//   captionContainer: {
//     display: 'flex',
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   captionIcon: {
//     width: 10,
//     height: 10,
//     marginRight: 5,
//   },
//   captionText: {
//     fontSize: 12,
//     fontWeight: '400',
//     fontFamily: 'opensans-regular',
//     color: '#8F9BB3',
//   },
// });

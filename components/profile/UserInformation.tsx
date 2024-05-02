/* eslint-disable react/react-in-jsx-scope */
import {Avatar, Layout, Text} from '@ui-kitten/components';
import {StyleSheet} from 'react-native';

export const UserInformation = () => {
  const styles = StyleSheet.create({
    avatar: {
      margin: 8,
    },
    layout: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center',
      paddingVertical: 8,
      maxHeight: 80,
    },
  });
  return (
    <>
      <Layout style={styles.layout} level="1">
        <Avatar
          style={styles.avatar}
          size="giant"
          source={require(`../../public/img/person-outline.png`)}
        />
        <Text>Hola USER!</Text>
      </Layout>
    </>
  );
};

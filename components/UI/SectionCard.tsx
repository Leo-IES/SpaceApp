/* eslint-disable prettier/prettier */
import {Card, Text} from '@ui-kitten/components';
import {StyleSheet, View, ViewProps} from 'react-native';

export const SectionCard = ({
  title = '',
  showTitle = false,
  children,
}: {
  title?: string;
  showTitle?: boolean;
  children: any;
}) => {
  const Header = (props: ViewProps): React.ReactElement =>
    showTitle ? (
      <View style={styles.header} {...props}>
        <Text category="s1">{title}</Text>
      </View>
    ) : null;

  return (
    <Card style={styles.card} header={Header}>
      {children}
    </Card>
  );
};

const styles = StyleSheet.create({
  header: {
    paddingVertical: 0,
  },
  card: {
    marginHorizontal: 15,
    marginVertical: 10,
    borderRadius: 10,
  },
});

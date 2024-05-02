/* eslint-disable react/react-in-jsx-scope */
import {Icon, IconElement, Layout, Text} from '@ui-kitten/components';
import {SectionCard} from '../../components/UI/SectionCard';
import {UserInformation} from '../../components/profile/UserInformation';
import {SafeAreaView, StyleSheet} from 'react-native';

export const ProfilePage = ({navigation}: any) => {
  const SettingsIcon = (props: any): IconElement => (
    <Icon
      {...props}
      name="settings-outline"
      style={styles.icon}
      fill="#8F9BB3"
    />
  );
  const PinIcon = (props: any): IconElement => (
    <Icon {...props} name="pin-outline" style={styles.icon} fill="#8F9BB3" />
  );
  return (
    <>
      <SafeAreaView style={{flex: 1}}>
        <UserInformation />
        <SectionCard title="Credito" showTitle={true}>
          <Layout style={styles.container}>
            <Layout style={styles.layout} level="1">
              <Text>Saldo en Tienda</Text>
              <Text>$0</Text>
            </Layout>
            {/* <Layout style={styles.layout} level="1">
            <Button style={styles.button} appearance="filled">
              Recargar
            </Button>
          </Layout> */}
          </Layout>
        </SectionCard>

        <SectionCard title="Preeventas" showTitle={true}>
          <Layout style={styles.container}>
            <Layout style={styles.layout} level="1">
              <PinIcon />
              <Text>Mi Direccion</Text>
            </Layout>
            <Layout style={styles.layout} level="1">
              <SettingsIcon />
              <Text>Configuracion</Text>
            </Layout>
          </Layout>
        </SectionCard>

        <SectionCard title="Mi cuenta" showTitle={true}>
          <Layout style={styles.container}>
            <Layout style={styles.layout} level="1">
              <PinIcon />
              <Text>Mi Direccion</Text>
            </Layout>
            <Layout style={styles.layout} level="1">
              <SettingsIcon />
              <Text>Configuracion</Text>
            </Layout>
          </Layout>
        </SectionCard>
      </SafeAreaView>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  layout: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {},
  icon: {
    width: 32,
    height: 32,
  },
});

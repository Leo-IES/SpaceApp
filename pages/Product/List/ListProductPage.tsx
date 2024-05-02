/* eslint-disable react/react-in-jsx-scope */
import {Text} from '@ui-kitten/components';
import {SectionCard} from '../../../components/UI/SectionCard';
import {ListContainer} from '../../../components/UI/ListContainer';
import {Button, SafeAreaView, ScrollView} from 'react-native';

export const ListProductPage = ({navigation}: any) => {
  return (
    <>
      <SafeAreaView style={{flex: 1}}>
        <ScrollView>
          <Button
            title="Añadir Producto"
            onPress={() => navigation.navigate('Añadir Productos')}
          />

          <SectionCard title="Yugioh" showTitle>
            <ListContainer />
          </SectionCard>
          <SectionCard title="Pokemon" showTitle>
            <Text>test</Text>
          </SectionCard>
          <SectionCard title="Digimon" showTitle>
            <Text>test</Text>
          </SectionCard>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

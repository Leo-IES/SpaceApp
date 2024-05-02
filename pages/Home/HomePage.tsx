import {SafeAreaView} from 'react-native';
import {SectionCard} from '../../components/UI/SectionCard';
import {SearchInput} from '../../components/home/SearchInput';

export const HomePage = ({navigation}: any) => {
  return (
    <>
      <SafeAreaView>
        <SectionCard>
          <SearchInput />
        </SectionCard>
      </SafeAreaView>
    </>
  );
};

/* eslint-disable prettier/prettier */
import {GluestackUIProvider, SafeAreaView, Text} from '@gluestack-ui/themed';
import {config} from '@gluestack-ui/config'; // Optional if you want to use default theme

export default function App() {
  return (
    <GluestackUIProvider config={config}>
      <SafeAreaView flex={1}>
        <Text>Hello World!</Text>
      </SafeAreaView>
    </GluestackUIProvider>
  );
}

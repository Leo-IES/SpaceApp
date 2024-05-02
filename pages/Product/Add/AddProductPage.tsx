/* eslint-disable react/react-in-jsx-scope */
import {Button, Input} from '@ui-kitten/components';
import {SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import {SectionCard} from '../../../components/UI/SectionCard';
import {useState} from 'react';
import {UploadImageinput} from '../../../components/UI/UploadImageInput';

export const AddProductPage = () => {
  const [formState, setFormState] = useState({
    name: '',
    price: '',
    stock: '',
    description: '',
    brand: '',
    category: '',
    model: '',
    year: '',
    warranty: '',
    warranty_type: '',
    warranty_time: '',
  });

  const onInputChange = (name: string, value: String) => {
    setFormState({...formState, [name]: value});
  };

  return (
    <>
      <SafeAreaView>
        <ScrollView>
          <SectionCard title="Informacion del Producto" showTitle>
            <Input
              label="Nombre del Producto"
              style={styles.input}
              value={formState.name}
              onChangeText={value => onInputChange('name', value)}
            />
            <Input
              keyboardType="decimal-pad"
              label="Precio del Producto"
              style={styles.input}
              value={formState.price}
              onChangeText={value => onInputChange('price', value)}
            />
            <Input
              keyboardType="number-pad"
              label="Existencias del Producto"
              style={styles.input}
              value={formState.stock}
              onChangeText={value => onInputChange('stock', value)}
            />
            <Input
              label="Descripcion del Producto"
              style={styles.inputTextArea}
              value={formState.description}
              onChangeText={value => onInputChange('description', value)}
              multiline={true}
            />
            <Input
              label="Marca del Producto"
              style={styles.input}
              value={formState.brand}
              onChangeText={value => onInputChange('brand', value)}
            />
            <Input
              label="Juego al que pertenece"
              style={styles.input}
              value={formState.category}
              onChangeText={value => onInputChange('category', value)}
            />
            <UploadImageinput />
            <Button style={styles.button}>Guardar</Button>
          </SectionCard>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  input: {
    marginVertical: 10,
  },
  inputTextArea: {
    marginVertical: 10,
    minHeight: 64,
  },
  button: {
    marginVertical: 10,
  },
});

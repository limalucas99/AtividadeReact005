import React, { useState } from 'react';
import { 
  View,
  Text,
  TextInput,
  StyleSheet,
  Alert
} from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { TextInputMask } from 'react-native-masked-text';
import Cores from '../constantes/Cores';

const NewContactScreen = (props) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChangeName = (name) => {
    setName(name);
  }

  const handleChangeNumber = (number) => {
    setNumber(number);
  }

  const handleAddContact = () => {
    if(!name.trim() || !number) {
      Alert.alert('Atenção!', 'Preencha todos os campos');
      return;
    }
    if(!(number.replace(/[^0-9]+/g, '').length >= 10)) {
      Alert.alert('Atenção!', 'Preencha o telefone corretamente');
      return;
    }

    props.navigation.getParam('onAddContact')({ name, number })
    props.navigation.navigate('ContactList');
  }

  return (
    <View style={styles.container}>
      <Text style = {styles.title}>Novo Contato</Text>
      <TextInput
        placeholder="Nome"
        value={name}
        onChangeText={handleChangeName}
        style={styles.input}
      />
      <TextInputMask
        type={'cel-phone'}
        options={{
          maskType: 'BRL',
          withDDD: true,
          dddMask: '(99) '
        }}
        keyboardType={'phone-pad'}
        placeholder="Número"
        value={number}
        onChangeText={handleChangeNumber}
        style={styles.input}
      />

      <RectButton 
        onPress={handleAddContact}
        style={styles.addButton}>
        <Text style={styles.addButtonText}>Adicionar</Text>
      </RectButton>
    </View>
  );
}

export default NewContactScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    backgroundColor: Cores.background
  },
  title: {
    fontFamily: 'Archivo_700Bold',
    fontSize: 38,
    color: Cores.titlePrimary,
    textAlign: 'center',
    marginBottom: 24
  },
  input: {    
    backgroundColor: Cores.white,
    height: 50,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#CCC',
    paddingHorizontal: 16,
    marginBottom: 10,
    fontSize: 16,
    fontFamily: 'Poppins_400Regular'
  },
  addButton: {
    backgroundColor: Cores.button,
    height: 56,
    borderRadius: 8,
    marginTop: 4,
    alignItems: 'center',
    justifyContent: 'center'
  },
  addButtonText: {
    color: Cores.white,
    fontFamily: 'Poppins_600SemiBold',
    fontSize: 18
  }
});

NewContactScreen.navigationOptions = options => {
  return {
    headerTitle: 'Adicionar contato'
  }
}
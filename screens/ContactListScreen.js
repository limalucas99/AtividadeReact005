import React, { useState, useEffect } from 'react';
import { 
  View,
  Text,
  FlatList,
  StyleSheet, 
  Platform, 
  Alert 
} from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import ContactItem from '../components/ContactItem';
import ButtonHeader from '../components/ButtonHeader';
import Cores from '../constantes/Cores';

const ContactListScreen = (props) => {
  const [contacts, setContacts] = useState([]);
  const [counter, setCounter] = useState(10);

  useEffect(() => {
    props.navigation.setParams({onAddContact: addContact})
  }, [contacts]);

  const addContact = (contact) => {
    setContacts(contacts => {  
      setCounter(counter + 2);
      return [...contacts, {key: counter.toString(), value: contact}];
    });
  }

  const removeContact = (key) => {
    Alert.alert(
      'Confirmação',
      `Tem certeza que deseja excluir o contato ${contacts.find(contact => contact.key === key).value.name}?`,
      [
        {
          text: 'Sim',
          onPress: () => {
            setContacts(contacts => {
              return contacts.filter(contact => contact.key != key);
            });
          }
        },
        {
          text: 'Cancelar'
        }
      ],
      {cancelable: false}
    )
    
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Meus Contatos</Text>
      <View style={styles.contactListContainer}>
        {!contacts.length && <Text style={styles.contactListEmpty}>Nenhum contato salvo</Text>}
        <FlatList
          data={contacts}
          renderItem={
            (contact) => (
              <ContactItem
                contactKey={contact.item.key}
                contact={contact.item.value}
                onDelete={removeContact}
              />
            )
          }
        />
      </View>
    </View>
  );
}

export default ContactListScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: Cores.background
  },
  title: {
    fontFamily: 'Archivo_700Bold',
    fontSize: 38,
    color: Cores.titlePrimary,
    marginBottom: 24,
    textAlign: 'center'
  },
  contactListContainer: {
    flex: 1
  },
  contactListEmpty: {
    fontFamily: 'Archivo_400Regular',
    fontSize: 18,
    color: '#6A6180',
    textAlign: 'center'
  }
}); 

ContactListScreen.navigationOptions = options => {
  return {
    headerTitle: 'Contatos',
    headerRight: () => {
      return (
        <HeaderButtons HeaderButtonComponent={ButtonHeader}>
          <Item 
            title="Adicionar"
            iconName={Platform.OS === 'android' ? 'md-add' : 'ios-add'}
            onPress={() => {
              options.navigation.navigate('NewContact', {onAddContact: options.navigation.getParam('onAddContact')})
            }}
          />
        </HeaderButtons>
      );
    }
  }
}
import React from 'react';
import { 
  Text, 
  View, 
  TouchableOpacity, 
  StyleSheet 
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Cores from '../constantes/Cores';

const ContactItem = (props) => {
  return (
    <TouchableOpacity onLongPress={() => props.onDelete(props.contactKey)} style={styles.container}>
      <Ionicons name="md-contact" size={60} />
      <View style={styles.contactInfo}>
        <Text style={styles.contactName}>{props.contact.name}</Text>
        <Text style={styles.contactNumber}>{props.contact.number}</Text>
      </View>
    </TouchableOpacity>
  ); 
};

export default ContactItem;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    backgroundColor: Cores.white,
    borderColor: 'black',
    borderWidth: 1,
    marginBottom: 8,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center'
  },
  contactInfo: {
    marginLeft: 16,
    justifyContent: 'center',
    marginRight: 50
  },
  contactName: {
    fontFamily: 'Archivo_700Bold',
    fontSize: 18
  },
  contactNumber: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 16,
    marginTop: 3
  },
});
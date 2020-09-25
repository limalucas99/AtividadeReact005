import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from "react-navigation";
import ContactListScreen from '../screens/ContactListScreen';
import NewContactScreen from '../screens/NewContactScreen';
import Cores from '../constantes/Cores';

const ContactsNavigator = createStackNavigator({
  ContactList: ContactListScreen,
  NewContact: NewContactScreen
}, {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Cores.primary
      },
      headerTitleStyle: {
        fontSize: 24,
        fontFamily: 'Archivo_700Bold'
      },
      headerTintColor: Cores.white
    }
  }
);

export default createAppContainer(ContactsNavigator);
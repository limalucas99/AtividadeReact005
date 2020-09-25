import React from 'react';
import { HeaderButton } from 'react-navigation-header-buttons';
import { Ionicons } from '@expo/vector-icons';
import Cores from '../constantes/Cores';

const ButtonHeader = (props) => {
  return (
    <HeaderButton
      {...props}
      IconComponent={Ionicons}
      iconSize={35}
      color={Cores.button}
    />
  );
}

export default ButtonHeader;
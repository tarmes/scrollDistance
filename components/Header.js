import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = (props) => {

   const { amountScrolled } = props;



   return (
      <View>
         <Text style={styles.header}>Check this out. Amount Scrolled: {amountScrolled}</Text>
      </View>
      
   )
};

export default Header;

const styles = StyleSheet.create({
   header: {
      paddingTop: 40,
      paddingHorizontal: 20,
      fontSize: 20,
      fontWeight: 'bold',
   }
})
import React from 'react';
import { View, Text, StyleSheet, useWindowDimensions } from 'react-native';

const Header = (props) => {

   const { amountScrolled } = props;

   let docHeight = useWindowDimensions().height;


   return (
      <View>
         <Text style={styles.header}>Amount Scrolled: {amountScrolled}</Text>
         <Text style={styles.header}>DocHeight: {docHeight}</Text>
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
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TestText = () => {

   



   return (
      <View style={styles.textBoxContainer}>
         <Text style={styles.textBox}>This is the text box.</Text>
      </View>
   )
};



export default TestText;

const styles = StyleSheet.create({
   textBoxContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      paddingVertical: 20,
   },
   textBox: {
      fontSize: 24,
      justifyContent: 'center',
      alignItems: 'center',
   }
})


import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, ScrollView } from 'react-native';
import Header from './components/Header';
import TestText from './components/TestText';

export default function App() {

   const [amountScrolled, setAmountScrolled] = useState(0);

   const changeScrolled = () => {
      setAmountScrolled(nativeEvent.contentOffset.y)
   }

   // window.addEventListener('scroll', changeScrolled)

  return (
    <View style={styles.container}>
      <Header amountScrolled={amountScrolled}/>
      <ScrollView onScroll={changeScrolled}>
         <TestText />
         <TestText />
         <TestText />
         <TestText />
         <TestText />
         <TestText />
         <TestText />
         <TestText />
         <TestText />
         <TestText />
         <TestText />
         <TestText />
         <TestText />
         <TestText />
         <TestText />
         <TestText />
         <TestText />
         <TestText />
         <TestText />
         <TestText />
         <TestText />
         <TestText />
         <TestText />
         <TestText />
      </ScrollView>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
   //  alignItems: 'center',
   //  justifyContent: 'center',
  },
  header: {
     paddingTop: 40,
     paddingHorizontal: 20,
     fontSize: 24,
     fontWeight: 'bold',
  }
});

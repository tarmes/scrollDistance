import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList, ScrollView } from 'react-native';
import Header from './components/Header';
import TestText from './components/TestText';


export default function App() {

   const [amountScrolled, setAmountScrolled] = useState(0);
   // const [dimensions, setDimensions] = useState(window);

   // const onChange = (window) => {
   //    setDimensions(window)
   // }

   // useEffect(() => {
   //    Dimensions.addEventListener('change', onChange);
   //    return () => {
   //       Dimensions.removeEventListener('change', onChange);
   //    }
   // })


   const changeScrolled = (event) => {
      const positionY = event.nativeEvent.contentOffset.y;
      setAmountScrolled(positionY)
      }

   // useEffect(() => {
   //    window.addEventListener('scroll', changeScrolled);
   // })

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

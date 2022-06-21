import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import setButton from './src/components/setButton';
import Details from './screens/Details';
import ResultsList from './src/components/ResultsList';

const axios = require('axios');



function HomeScreen() {

  const navigation = useNavigation();
  const goToDetails = () => navigation.navigate('Details');

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', marginTop: '10px' }}>
      <ResultsList />
    </View>
  );
}






const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({

});

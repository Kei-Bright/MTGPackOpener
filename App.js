import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import setButton from './src/components/setButton';
const axios = require('axios');



function HomeScreen() {

  const navigation = useNavigation();
  const goToDetails = () => navigation.navigate('Details');

  const hitAPI = async function () {
    const result = await axios.get('https://api.magicthegathering.io/v1/sets');
    const setsData = result.data.sets;
    // setCardSets(setsData.length)
    setCardSets(setsData)
    for (let cardSets of setsData) {
      console.log(cardSets)
    }
  }

  const [cardSets, setCardSets] = useState(0);

  useEffect(() => {
    hitAPI()
  }, [])



  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <FlatList
        data={cardSets}
        renderItem={({ item }) => (
          // ^^not quite sure how renderItem works, ask Luke
          <TouchableOpacity>
            <Text>{item.name}</Text>
          </TouchableOpacity>
        )}

      />
    </View>
  );
}




function Details() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
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

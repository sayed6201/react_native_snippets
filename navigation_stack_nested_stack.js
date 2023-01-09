
// ====================================================
// App.js level stack navigation 
// definie your navigation screeen
// ====================================================

import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import HomeScreen from './screens/HomeScreen';
import { store } from './store';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MapScreen from './screens/MapScreen';
import { KeyboardAvoidingView } from 'react-native';

export default function App() {

    //define createNativeStackNavigation
    const Stack = createNativeStackNavigator();
  
    return (
  
      <Provider store={store}>

        <NavigationContainer>
        <SafeAreaProvider>
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            keyboardVerticalOffset={Platform.OS === "ios" ? -64:0}
            style={{flex:1}}
            >
            
            {/* add your navigatoin stacks here */}
            {/* HomeScreen will be loaded first */}
            <Stack.Navigator>
              <Stack.Screen 
                name="HomeScreen" 
                component={HomeScreen} 
                options={{
                  headerShown:false
                }}
              />
              <Stack.Screen 
                name="MapScreen" 
                component={MapScreen} 
                options={{
                  headerShown:false
                }}
              />
            </Stack.Navigator>


          </KeyboardAvoidingView>
          
        </SafeAreaProvider>
        </NavigationContainer>
      </Provider>
      
    );
  }



// ====================================================
// Step: 2 
// You can navigate from the child components using following code
// ====================================================
  const navigation = useNavigation()
  //call this in onPress function...
  navigation.navigate('HomeScreen')



// ====================================================
// Part of screen - navigate screens in only a certain part of the screen
// definie your navigations
// ====================================================
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import Map from '../components/Map'
import MapView from 'react-native-maps';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NavigateCard from '../components/NavigateCard';
import RideOptionsCard from '../components/RideOptionsCard';
import { Icon } from '@rneui/base';
import { useNavigation } from '@react-navigation/native';

const MapScreen = () => {

    const Stack = createNativeStackNavigator()
    const navigation = useNavigation()
  return (
    <View>
      {/* <Text>MapScreen</Text> */}

      <TouchableOpacity onPress={()=>{
        navigation.navigate('HomeScreen')
      }} style={tw`bg-gray-100 absolute top-16 left-8 z-50 rounded-full shadow-lg`} >

        <Icon name="menu" />

      </TouchableOpacity>
      <View style={tw`h-[45%]`}>

        <Map/>

      </View>
      <View style={tw`h-[55%]`}>

        {/* only this part of view will get replaced with the new screen */}

        <Stack.Navigator>
            <Stack.Screen
                name='NavigateCard'
                component={NavigateCard}
                options={{
                    headerShown: false
                }}
             />

            <Stack.Screen
                name='RideOptionCard'
                component={RideOptionsCard}
                options={{
                    headerShown: false
                }}
             />
        </Stack.Navigator>

      </View>
    </View>
  )
}

export default MapScreen

const styles = StyleSheet.create({})
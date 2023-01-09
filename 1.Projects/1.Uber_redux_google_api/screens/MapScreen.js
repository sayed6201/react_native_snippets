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
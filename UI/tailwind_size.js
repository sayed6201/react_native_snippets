

// ====================================================
// You can add percentage to define the hieght of component in tailwind
// ====================================================

import tw from 'twrnc'
(
``
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

</View>)


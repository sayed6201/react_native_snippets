//==========================================
// flex-row items-center
//==========================================
//flex-row -> puts item in a row
//items-center -> defines childs vertical position
//justify-between -> defines childs position in horizonatal axis
//justify-evenly -> evenly adds between in horizontal axis

<TouchableOpacity style={tw`flex-row items-center p-5`}>
<Icon
    style={tw`mr-4 rounded-full bg-gray-300 p-3`}
    name={icon}
    color={"white"}
    size={18}
 />
 <View>
    <Text style={tw`font-semibold text-lg`}>{location}</Text>
    <Text style={tw`text-gray-500`}>{destination}</Text>
 </View>
</TouchableOpacity>

``
//
(
<View style={tw`flex-row bg-white justify-evenly py-2 mt-auto border-t border-gray-100`} >

    <TouchableOpacity style={tw`flex flex-row justify-between bg-black w-24 px-4 py-3 rounded-full`}
    onPress={()=>navigation.navigate('RideOptionCard')}>
        <Icon name='car' type='font-awesome' color={"white"} size={16}/>
        <Text style={tw`text-white text-center`} >Ride</Text>
    </TouchableOpacity>

    <TouchableOpacity style={tw`flex flex-row justify-between w-24 px-4 py-3 rounded-full`}>
        <Icon name='fast-food-outline' type='ionicon' color={"black"} size={16} />
        <Text style={tw` text-center`} >Eats</Text>
    </TouchableOpacity>

</View>
)


//==========================================
//positinng-Top-LEFT -> menu button 
//==========================================
<TouchableOpacity onPress={()=>{
        navigation.navigate('HomeScreen')
      }} style={tw`bg-gray-100 absolute top-16 left-8 z-50 rounded-full shadow-lg`} >

        <Icon name="menu" />

</TouchableOpacity>
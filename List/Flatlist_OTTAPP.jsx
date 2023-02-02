<FlatList
style={{
  // marginBottom:
}}
numColumns={2}
contentContainerStyle={{ paddingBottom: heightOfBtnTab*2}} 
horizontal={false} 
ItemSeparatorComponent={
  () => <View style={{ width: 2 }}/>
}
data={playlist?.playlist}

renderItem={({ item }) => (
  <View style={{flex:0.5}}>
    <TouchableOpacity 
      onPress={()=>{
        console.log('data clicked',item)
        dispatch(setData(
          item
        ))
        navigation.navigate('SinglePlayer')
      }}
    >
      <VideoCard
        title={item?.title}
        imgUrl={item?.image}
        desc={item?.description}
      />
    </TouchableOpacity>
  </View>
  
  // <Text>{item?.title}</Text>
)}
/>
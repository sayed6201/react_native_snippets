<ScrollView style={{ marginVertical: 15 }} horizontal>
{config?.content.map((item, index) => (
  <TouchableOpacity
    onPress={() => setActiveCategory(index)}
    style={{ marginRight: 12 }}
    key={index}
  >
    <View style={{backgroundColor:'blue', borderRadius:100, padding: 15}}>
      <Text
        style={
          { fontSize: 12, color: 'white' }}
      >
        {item.title}
      </Text>
    </View>
  </TouchableOpacity>
))}
</ScrollView>
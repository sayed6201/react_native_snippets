// This is one way to center text in the screen:
(
<View style={{
    flex: 1, 
    alignItems: 'center',
    justifyContent: 'center', 
    backgroundColor: 'blue'
}}>
    <Text style={{backgroundColor: 'red'}}>
        Your Text
    </Text>
</View> )
// And you can also try with position:'absolute':

(
<View style={{
    backgroundColor: 'blue',
    position: 'absolute', 
    top: 0, left: 0, 
    right: 0, bottom: 0, 
    justifyContent: 'center', 
    alignItems: 'center'}}>
<Text style={{backgroundColor: 'red'}}> Your Text </Text>
</View>)
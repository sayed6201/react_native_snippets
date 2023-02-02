{/* Appname - Image section */}
<View
style={{
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
}}
>
        <Text
        style={{
            fontSize: SPACING * 3,
            fontWeight: "bold",
            color: COLORS.dark,
        }}
        >
        Discover
        </Text>
        <Image
        style={{
            height: SPACING * 5,
            width: SPACING * 5,
            borderRadius: SPACING * 5,
        }}
        source={require("../assets/images/Avatar.png")}
        />
</View>
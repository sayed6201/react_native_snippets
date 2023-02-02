{/* =======================================================
    image carousal section - with vertical scrolling 
 ==========================================================*/}
<ScrollView
    horizontal
    showsHorizontalScrollIndicator={false}
    snapToInterval={WIDTH * 0.7}
    decelerationRate="fast"
    pagingEnabled
    style={{ marginVertical: SPACING * 2 }}
>
    {CATEGORIES[activeCategory].tours.map((tour, index) => (
        <TouchableOpacity
            style={{
            width: WIDTH * 0.7,
            height: WIDTH * 0.9,
            overflow: "hidden",
            borderRadius: SPACING * 2,
            marginRight: SPACING * 2,
            }}
            key={index}
        >

                {/* placing view on top of another - positioning */}
                <View
                    style={{
                        position: "absolute",
                        zIndex: 1,
                        height: "100%",
                        width: "100%",
                        //setting color- as transparent
                        backgroundColor: COLORS.transparent,
                        justifyContent: "space-between",
                        padding: SPACING,
                    }}
                >
                <TouchableOpacity
                    style={{
                    alignSelf: "flex-end",
                    padding: SPACING / 2,
                    backgroundColor: COLORS.white,
                    borderRadius: SPACING * 5,
                    justifyContent: "center",
                    alignItems: "center",
                    }}
                >
                    <Ionicons
                    name="heart-outline"
                    color={COLORS.primary}
                    size={SPACING * 3}
                    />
                </TouchableOpacity>
                <Text
                    style={{
                    fontSize: SPACING * 2,
                    color: COLORS.white,
                    fontWeight: "700",
                    marginLeft: SPACING,
                    }}
                >
                    {tour.title}
                </Text>
                </View>

                {/* placing icon and text on top of this image */}
                <Image
                    source={tour.image}
                    style={{ width: "100%", height: "100%" }}
                />
        </TouchableOpacity>
    ))}
</ScrollView>
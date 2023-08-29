// ressetting navigation

await navigation.reset({
    index: 0,
    routes:[
        {
          name: ROUTES.HOME_SCREEN
        //  params:{key:'param'},
        },
      ],        
});

// navigate to a screen
navigation.navigate(ROUTES.PROFILE_SCREEN)


//replacing current screen with a screen
navigation.replace(ROUTES.PROFILE_SCREEN)


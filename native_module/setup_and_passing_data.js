
// ================================================================================
// Passing data btween js and native module
// ================================================================================

// ------------------------------------------------------------------------------------
// JAVA CODE
// ------------------------------------------------------------------------------------
// package com.ntuappn1037505; // replace your-apps-package-name with your app’s package name
// import com.facebook.react.bridge.Callback;
// import com.facebook.react.bridge.NativeModule;
// import com.facebook.react.bridge.Promise;
// import com.facebook.react.bridge.ReactApplicationContext;
// import com.facebook.react.bridge.ReactContext;
// import com.facebook.react.bridge.ReactContextBaseJavaModule;
// import com.facebook.react.bridge.ReactMethod;
// import java.util.Map;
// import java.util.HashMap;

// import android.provider.Settings;
// import android.widget.Toast;
// import android.os.Bundle;  

public class DisplayToastTest extends ReactContextBaseJavaModule {
    

    private ReactApplicationContext reactContext;

    DisplayToastTest(ReactApplicationContext context) {
        super(context);
        this.reactContext = context;
    }

    // javascript will acess the module through this
    //    const {CalendarModule} = ReactNative.NativeModules;
    @Override
    public String getName() {
        return "DisplayToastTest";
    }

    @ReactMethod
    public void showToast(String msg) {
       Toast.makeText(reactContext, msg,  Toast.LENGTH_LONG).show();
    }

    // passing data using promise
     @ReactMethod
    public void getDeviceId(String fromJSWorld, Promise promise) {
       try{
           String android_id = Settings.Secure.getString(reactContext.getContentResolver(), Settings.Secure.ANDROID_ID);
           promise.resolve(android_id);
           Toast.makeText(reactContext, fromJSWorld,  Toast.LENGTH_LONG).show();
       }catch(Exception e){
           promise.reject("Error",e);
       }
    }

    //passing data 
    @ReactMethod
    public void getDataFromAndroid(Callback successCallback, Callback errorCallback) {
        try{
            successCallback.invoke("Called Device Discovery ");
        }catch (Exception e){
            errorCallback.invoke(e.getLocalizedMessage());
        }
    }
}



// ------------------------------------------------------------------------------------
// JavaScript CODE
// ------------------------------------------------------------------------------------

//receiving data using promise
const [deviceId, setDeviceId] = useState('')

  useEffect(()=>{
    const fetchDeviceId = async () => {

      const  id = await DisplayToastTest.getDeviceId("Android ID fetch");
      setDeviceId(id)
    }
    fetchDeviceId()
  },[])

//receiving data using callback
DisplayToastTest.getDataFromAndroid(
    (success) => {
        console.log(success)
        setDeviceId(success)
    },
    (error) => {
        console.log(error)
  })


// ------------------------------------------------------------------------------------
//   Passing data using event emitter
// ------------------------------------------------------------------------------------

import {
    View, Text, StyleSheet, Button, FlatList,
    NativeModules, TouchableOpacity, NativeEventEmitter
} from 'react-native' 
 const eventEmitter = new NativeEventEmitter(ConnectSDKNative)
 

 useEffect(() => {
        const newDevice = eventEmitter.addListener(
            'DeviceFound',
            (deviceDiscovered) => {
                console.log(deviceDiscovered.friendlyName)
                setDeviceList(deviceList => [...deviceList,deviceDiscovered])
            }
        )
        return () => newDevice.remove()
}, [])


// java code
private void sendEvent(ReactContext reactContext,
    String eventName,
    @Nullable WritableMap params) {
        reactContext
        .getJSModule(RCTNativeAppEventEmitter.class)
        .emit(eventName, params);
}

@Override
public void onDeviceAdded(DiscoveryManager manager, ConnectableDevice device) {
    Log.i("Device",device.getFriendlyName());
    try{
        sendEvent(applicationContext,"DeviceFound", Util.convertJsonToMap(device.toJSONObject()));
    }catch (Exception e){
        e.printStackTrace();
    }
}
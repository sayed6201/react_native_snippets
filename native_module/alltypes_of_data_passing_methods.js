// =============================================================
// java code DiplayT0ast.java
// =============================================================

package com.ntuappn1037505; // replace your-apps-package-name with your app’s package name
import com.facebook.react.bridge.ActivityEventListener;
import com.facebook.react.bridge.BaseActivityEventListener;
import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.WritableMap;

import android.app.Activity;
import android.content.Intent;
import android.net.Uri;
import android.provider.Settings;
import android.widget.Toast;

import androidx.annotation.Nullable;

import com.facebook.react.modules.core.DeviceEventManagerModule;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.bridge.Arguments;

public class DisplayToastTest extends ReactContextBaseJavaModule {
    

    private ReactApplicationContext reactContext;
    private int counter = 0;


    private static final int IMAGE_PICKER_REQUEST = 1;
    private static final String E_ACTIVITY_DOES_NOT_EXIST = "E_ACTIVITY_DOES_NOT_EXIST";
    private static final String E_PICKER_CANCELLED = "E_PICKER_CANCELLED";
    private static final String E_FAILED_TO_SHOW_PICKER = "E_FAILED_TO_SHOW_PICKER";
    private static final String E_NO_IMAGE_DATA_FOUND = "E_NO_IMAGE_DATA_FOUND";

    private Promise mPickerPromise;



    DisplayToastTest(ReactApplicationContext context) {
        super(context);
        this.reactContext = context;

        reactContext.addActivityEventListener(mActivityEventListener);

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

    //passing data using callback
    @ReactMethod
    public void getDataFromAndroid(Callback successCallback, Callback errorCallback) {
        try{
            successCallback.invoke("Called Device Discovery ");
        }catch (Exception e){
            errorCallback.invoke(e.getLocalizedMessage());
        }
    }

     // this will send event from android to js
     private void sendEvent(
        ReactContext reactContext,
        String eventName,
            @Nullable WritableMap params
        // int params
        ) {
            reactContext.getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class)
            .emit(eventName, params);
    }

    @ReactMethod
    public void triggerAnEventFromJS() {
        ++ counter;
        WritableMap params = Arguments.createMap();
        params.putString("demo", "Value");
        params.putString("counter", counter+"");

// sendEvent(reactContext, "EventReminder", params);
        sendEvent( reactContext, "EventCount", params);
    }

    @ReactMethod
    public void addListener(String eventName) {
        // if (counter == 0) {
        //     // Set up any upstream listeners or background tasks as necessary
        // }
        counter += 1;
    }

    @ReactMethod
    public void removeListeners(Integer count) {
        counter -= count;
        if (counter == 0) {
            // Remove upstream listeners, stop unnecessary background tasks
        }
    }




    //Getting Activity Result from startActivityForResult
    private final ActivityEventListener mActivityEventListener = new BaseActivityEventListener() {

        @Override
        public void onActivityResult(Activity activity, int requestCode, int resultCode, Intent intent) {
            if (requestCode == IMAGE_PICKER_REQUEST) {
                if (mPickerPromise != null) {
                    if (resultCode == Activity.RESULT_CANCELED) {
                        mPickerPromise.reject(E_PICKER_CANCELLED, "Image picker was cancelled");
                    } else if (resultCode == Activity.RESULT_OK) {
                        Uri uri = intent.getData();

                        if (uri == null) {
                            mPickerPromise.reject(E_NO_IMAGE_DATA_FOUND, "No image data found");
                        } else {
                            mPickerPromise.resolve(uri.toString());
                        }
                    }

                    mPickerPromise = null;
                }
            }
        }
    };

    @ReactMethod
    public void pickImage(final Promise promise) {
        Activity currentActivity = getCurrentActivity();

        if (currentActivity == null) {
            promise.reject(E_ACTIVITY_DOES_NOT_EXIST, "Activity doesn't exist");
            return;
        }

        // Store the promise to resolve/reject when picker returns data
        mPickerPromise = promise;

        try {
            final Intent galleryIntent = new Intent(Intent.ACTION_PICK);

            galleryIntent.setType("image/*");

            final Intent chooserIntent = Intent.createChooser(galleryIntent, "Pick an image");

            //this will trigger startActivityForResult and the eventemitter will send event to JS
            currentActivity.startActivityForResult(chooserIntent, IMAGE_PICKER_REQUEST);
        } catch (Exception e) {
            mPickerPromise.reject(E_FAILED_TO_SHOW_PICKER, e);
            mPickerPromise = null;
        }
    }
}



// =============================================================
// usage in js
// =============================================================

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect, useState } from 'react';
import type {PropsWithChildren} from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import CalendarModule from './native_modules/CalenderModule';
import DisplayToastTest from './native_modules/DisplayToastTest';
import {NativeEventEmitter, NativeModules} from 'react-native';

// const eventEmitter = new NativeEventEmitter();


const App = ()=>{

  const eventEmitter = new NativeEventEmitter(NativeModules.DisplayToastTest);

  const [deviceId, setDeviceId] = useState('')
  // let eventListener = null
  let eventListener = null;

  //fetching data asyncrounously 
  const fetchDeviceId = async () => {
    setDeviceId('Fetching data ...')
    await new Promise(resolve => setTimeout(resolve, 2000))
    const  id = await DisplayToastTest.getDeviceId("Android ID fetch");
    setDeviceId(id)
  }

  useEffect(()=>{

    fetchDeviceId()

    eventListener = eventEmitter.addListener('EventCount', event => {
      setDeviceId(event.counter) // "someValue"
    });

    return ()=>{
      eventEmitter?.removeAllListeners()
      eventListener?.remove()
    }
  },[])

  return (
    <SafeAreaView style={styles.backgroundStyle}>
      <StatusBar
        barStyle={'light-content' }
        backgroundColor={Colors.white}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.backgroundStyle}>
        <Header />
        <View
          style={{
            backgroundColor: Colors.white,
          }}>
          

          {/* sending data from js to native code */}
          <TouchableOpacity
              onPress={()=>{
                DisplayToastTest.showToast('Message from react native -> native')
              }}
            >
              <View>
                <Text>Pass string from js to native Toast</Text>
              </View>
            </TouchableOpacity>

            {/* getting data from , native android through callback/promise */}
            <TouchableOpacity
              onPress={()=>{
                DisplayToastTest.getDataFromAndroid(
                  (success) => {
                      console.log(success)
                      setDeviceId(success)
                  },
                  (error) => {
                      console.log(error)
                })
              }}
            >
              <View>
                <Text>get data through CallBack</Text>
              </View>
            </TouchableOpacity>

            {/* event trigger example */}
            <TouchableOpacity
              onPress={()=>{
              
                DisplayToastTest.triggerAnEventFromJS()
               

              }}
            >
              <View>
                <Text>Event triggering: </Text>
              </View>
            </TouchableOpacity>

            {/* Async data fetching */}
            <TouchableOpacity
              onPress={()=>{
                fetchDeviceId()
              }}
            >
              <View>
                <Text>Async data display using promise: </Text>
              </View>
            </TouchableOpacity>

            {/* getting data from , native android through callback/promise */}
            <TouchableOpacity
              onPress={()=>{
                DisplayToastTest.pickImage(
                  (success) => {
                      console.log(success)
                      setDeviceId(success)
                  },
                  (error) => {
                      console.log(error)
                })
              }}
            >
              <View>
                <Text>getting data through Promise + Activity listener</Text>
              </View>
            </TouchableOpacity>

            <View>
                <Text>Result: {deviceId}</Text>
            </View>

        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  backgroundStyle:{
    backgroundColor:'gray'
  }
});

export default App;

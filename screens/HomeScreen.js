import { StyleSheet, Text, View, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import tw from 'tailwind-react-native-classnames';
import NavOptions from '../components/NavOptions';

import React from 'react';
import uberlogo from '../assets/uberlogo.png';

const HomeScreen = () => {
  return (
    <SafeAreaView style={tw`bg-white h-full`}>
        <View style={tw`p-5`}>
            <Image 
                style={{
                    width: 100,
                    height: 100,
                    resizeMode: "contain",
                }}
                 source={uberlogo}

            />
           <Text>yfyfyfyy</Text> 

           <NavOptions />
        </View>

    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    text: {
        color: "blue",
    }
})
import { FlatList, View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'


const data = [
    {
        id: "123",
        title: "Get a ride",
        image: "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_485,h_385/f_auto,q_auto/products/carousel/UberX.png",
        screen: "MapScreen",
    },
    {
        id: "456",
        title: "Order food",
        image: "https://links.papareact.com/28w",
        screen: "EatsScreen",
    },
];

const NavOptions = () => {
  return (
   <FlatList 
    data={data}
    horizontal
    keyExtractor={(item) => item.id}
    renderItem={({ item }) => (
        <TouchableOpacity>  
            <View>
                <Image 
                    style={{ width: 120, height: 120, resizeMode:"contain" }}
                    source={{ uri: item.image }}
                />
            </View>
        </TouchableOpacity>
    )}
   />
  )
};

export default NavOptions

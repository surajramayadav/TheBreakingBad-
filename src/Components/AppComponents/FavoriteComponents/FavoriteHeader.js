import React from 'react'
import { Text, View } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
export default function FavoriteHeader({HandleBack}) {
    return (
        <>
            <View style={{ paddingVertical: 15, elevation: 5, backgroundColor: '#242424' }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginHorizontal: 20 }}>
                    <Text style={{ fontSize: 25, fontWeight: 'bold', color: 'green' }}>
                        Favourites
                    </Text>
                    <Ionicons name="close" color="white" size={25} style={{ marginRight: 20 }} onPress={() => HandleBack()} />
                </View>

            </View>
            <View style={{ marginHorizontal: 10, borderWidth: 0.5 }} />
        </>
    )
}

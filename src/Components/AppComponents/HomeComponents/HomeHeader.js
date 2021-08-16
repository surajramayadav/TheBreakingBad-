import React from 'react'
import { Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/Feather'
import Font from 'react-native-vector-icons/FontAwesome'


export default function HomeHeader({ HandleSearch, HandleFavorite }) {
    return (
        <>
            <View style={{ paddingVertical:15, elevation: 5, backgroundColor: '#242424' }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', }}>
                    <Text style={{ fontSize: 23, fontWeight: 'bold', marginLeft: 20, color: 'white' }}>The Breaking bad</Text>
                    <View style={{ flexDirection: 'row', marginRight: 20 }}>
                        <Icon name="search" size={20} color='white' onPress={() => HandleSearch()} />
                        <Font name="heart" size={20} color='green' style={{ marginLeft: 20 }} onPress={() => HandleFavorite()} />
                        {/* <Font name="heart-o" size={20} color='grey' /> */}
                    </View>
                </View>
            </View>
            <View style={{ marginHorizontal: 10, borderWidth: 0.5 }} />
        </>
    )
}

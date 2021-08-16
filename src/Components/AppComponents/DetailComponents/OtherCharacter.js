import React from 'react'
import { FlatList, Text, View, Image } from 'react-native'
import { useSelector } from 'react-redux'

export default function OtherCharacter() {
    const home = useSelector(state => state.home)
    const { actordata } = home
    return (
        <View style={{ marginHorizontal: 20, marginVertical: 20 }}>
            <View >
                <Text style={{ color: 'white', fontSize: 25, fontWeight: 'bold' }}>Other Character</Text>
            </View>
            <FlatList
                showsHorizontalScrollIndicator={false}
                horizontal
                data={actordata}
                contentContainerStyle={{ marginTop: 20, marginBottom: 40 }}
                keyExtractor={(item, index) => index.toString()}
                ItemSeparatorComponent={(props) => {
                    // console.log('props', props); // here you can access the trailingItem with props.trailingItem
                    return (<View style={{ marginLeft: 30 }} />);
                }}
                renderItem={({ item }) => (
                    <View>
                        <Image source={{ uri: item.img }} style={{ width: 150, height: 200, borderRadius: 5 }} />
                        <Text style={{ marginTop: 10, fontWeight: 'bold', color: 'white', fontSize: 16 }}>{item.name}</Text>
                        <Text style={{color: 'white'}}>{item.nickname}</Text>
                    </View>
                )}
            />
        </View>
    )
}

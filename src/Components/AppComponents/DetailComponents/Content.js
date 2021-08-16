import React from 'react'
import { FlatList, Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
export default function Content({ data }) {
    return (
        <View style={{ marginHorizontal: 20, marginVertical: 20 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', }}>
                <View >
                    <Text style={{ color: 'green', fontWeight: 'bold' }}>Portrayed</Text>
                    <Text style={{ color: 'white', }}>{data.portrayed}</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={{ color: 'white', }}>{data.birthday}</Text>
                    <Icon name='gift-outline' size={15} color='white' style={{ marginLeft: 10 }} />
                </View>
            </View>

            <View style={{ marginTop: 30 }}>
                <Text style={{ color: 'green', fontWeight: 'bold' }}>Occupation</Text>
                <Text style={{ color: 'white', }}>{data.occupation[0]}</Text>
                <Text style={{ color: 'white', }}>{data.occupation[1]}</Text>
            </View>

            <View style={{ marginTop: 30 }}>
                <Text style={{ color: 'green', fontWeight: 'bold' }}>Appeared in</Text>
                <FlatList
                    showsHorizontalScrollIndicator={false}
                    horizontal
                    data={data.appearance}
                    contentContainerStyle={{
                        marginTop
                            : 10
                    }}
                    ItemSeparatorComponent={(props) => {
                        // console.log('props', props); // here you can access the trailingItem with props.trailingItem
                        return (<View style={{ marginLeft: 10 }} />);
                    }}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => (
                        <View style={{ padding: 7, borderRadius: 2, backgroundColor:'#242424' }}>
                            <Text style={{ color: 'white', }}>{`Season ${item}`}</Text>
                        </View>
                    )}

                />
            </View>
        </View>
    )
}

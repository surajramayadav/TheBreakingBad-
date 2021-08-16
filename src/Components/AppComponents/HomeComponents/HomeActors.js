import React, { useState } from 'react'
import { FlatList, Text, View, Image, TouchableOpacity } from 'react-native'
import { windowHeight, windowWidth } from '../../../Utils/Dimensions'
import Font from 'react-native-vector-icons/FontAwesome'
import { useDispatch, useSelector } from 'react-redux'
import { setfab } from '../../../Redux/Slice/HomeSlice'
export default function HomeActors({ data, HandleDetail }) {
    // console.log(data)
    const dispatch = useDispatch()
    const home = useSelector(state => state.home)
    const { fab } = home
    let select = []
    const [parentid, setparentid] = useState([])
    let cancel = [];
    React.useEffect(() => {
        if (fab.length !== 0) {
            fab.map((d, i) => {
                cancel.push(
                    d.char_id
                )
            })
            setparentid(cancel)
        } else {

            setparentid([])
        }
    }, [fab])

    const HandleAdd = (item) => {
        let selects = [...fab]

        selects.push({
            char_id: item.char_id,
            name: item.name,
            birthday: item.birthday,
            img: item.img,
            status: item.status,
            nickname: item.nickname,
            portrayed: item.portrayed,
            occupation: item.occupation,
            appearance: item.appearance

        })
        dispatch(setfab(selects))

    }


    return (
        <View>
            <View style={{ marginBottom: 80 }}>
                <FlatList
                    data={data}
                    numColumns={2}
                    contentContainerStyle={{ marginVertical: 40, }}
                    keyExtractor={(item, index) => index.toString()}
                    ItemSeparatorComponent={(props) => {
                        // console.log('props', props); // here you can access the trailingItem with props.trailingItem
                        return (<View style={{ marginTop: 10 }} />);
                    }}
                    renderItem={({ item }) => (
                        <View style={{ flex: 1, }} >
                            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                <TouchableOpacity onPress={() => HandleDetail && HandleDetail(item)}>
                                    <Image source={{ uri: item.img }} style={{ height: windowHeight / 4, width: windowWidth / 2.7, borderRadius: 5 }} />
                                </TouchableOpacity>
                                <View style={{ flexDirection: 'row', marginTop: 10, marginBottom: 40 }}>
                                    <View style={{}} >
                                        <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'white' }}>{item.name}</Text>
                                        <Text style={{ fontSize: 14, color: 'white' }}>{item.nickname}</Text>
                                    </View>
                                    {
                                        !parentid.includes(item.char_id) ?
                                            <Font name="heart-o" size={20} color='grey' style={{ marginLeft: 20 }} onPress={() => HandleAdd(item)} />
                                            :
                                            <Font name="heart" size={20} color='green' style={{ marginLeft: 20 }} onPress={() => {
                                                const result = fab
                                                    .filter(function (element) {
                                                        return element.char_id != item.char_id;
                                                    });
                                                dispatch(setfab(result))
                                            }} />

                                    }
                                </View>
                            </View>


                        </View>
                    )}
                />
            </View>
        </View>
    )
}

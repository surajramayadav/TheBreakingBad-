import React, { useState } from 'react'
import { ImageBackground, Text, View, Image, StyleSheet } from 'react-native'
import { windowHeight, windowWidth } from '../../../Utils/Dimensions'
import Icon from 'react-native-vector-icons/AntDesign'
import Font from 'react-native-vector-icons/FontAwesome'
import LinearGradient from 'react-native-linear-gradient';
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { setfab } from '../../../Redux/Slice/HomeSlice'

export default function CoverImage({ data, Handleback }) {

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

    // console.log(data)
    return (
        <ImageBackground source={{ uri: data.img }} style={{ width: '100%', height: windowHeight / 1.5 }}>
            <LinearGradient colors={["transparent", "black"]} locations={[0.0, 1.2]} style={{

                backgroundColor: "transparent",
                position: "absolute",
                top: 0,
                bottom: 0,
                left: 0,
                right: 0

            }}>
                <View style={{ flex: 1, justifyContent: "space-between", marginTop: 10 }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 10, marginHorizontal: 20 }}>
                        <Icon name='arrowleft' size={25} color='white' onPress={() => Handleback()} />
                        {
                            !parentid.includes(data.char_id) ?
                                <Font name="heart-o" size={20} color='grey' style={{ marginLeft: 20 }} onPress={() => HandleAdd(data)} />
                                :
                                <Font name="heart" size={20} color='green' style={{ marginLeft: 20 }} onPress={() => {
                                    const result = fab
                                        .filter(function (element) {
                                            return element.char_id != data.char_id;
                                        });
                                    dispatch(setfab(result))
                                }} />

                        }
                    </View>
                    <View style={{ alignItems: "center", marginTop: 20 }}>
                        <Image source={{ uri: data.img }} resizeMode='stretch' style={{ width: '40%', height: '60%', borderRadius: 5 }} />
                        <Text style={{ fontWeight: 'bold', fontSize: 25, marginTop: 20, color: 'white', }}>{data.name}</Text>
                        <Text style={{ color: 'white', }}>{data.nickname}</Text>
                    </View>
                </View>
            </LinearGradient>
        </ImageBackground>

    )
}

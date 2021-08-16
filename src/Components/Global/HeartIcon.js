import React from 'react'
import { Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import Feather from 'react-native-vector-icons/Feather'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

export default function HeartIcon({name,icon,size ,color,bg,wh,navigation,BackButton}) {
    let data;
        switch (icon) {
            case 'Ionicons':
                data = <Icon name={name} size={size}  color={color} />
                break;
            case 'Feather':
                data = <Feather name={name} size={size}  color={color} />
                break;
            case 'MaterialCommunityIcons':
                 data = <MaterialCommunityIcons name={name} size={size}  color={color} />
                 break;
            case 'MaterialIcons':
                data = <MaterialIcons name={name} size={size} color={color} />
                break;
            case 'Ionicons':
                data = <Ionicons name={name} size={size} color={color} />
                break;
            case 'FontAwesome5':
                data = <FontAwesome5 name={name} size={size} color={color} />
                break;
            default:
                console.log("not found")

        }
        
    return (
        <View style={{ width:wh? wh: 30, height:wh?wh :30, backgroundColor:bg ? bg :'white', borderRadius: 50,
        elevation:3,justifyContent: 'center',alignItems: 'center' }}>
            <Text style={{ alignSelf: 'center', }} onPress={()=>BackButton && BackButton()} >
                {
                    data
                }
               
            </Text>
        </View>
    )
}

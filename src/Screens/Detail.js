import React from 'react'
import { ScrollView, Text, View } from 'react-native'
import Content from '../Components/AppComponents/DetailComponents/Content'
import CoverImage from '../Components/AppComponents/DetailComponents/CoverImage'
import OtherCharacter from '../Components/AppComponents/DetailComponents/OtherCharacter'
import Wrapped from '../Components/Global/Wrapped'
import { windowHeight } from '../Utils/Dimensions'
export default function Detail({ route,navigation }) {
    const { data } = route.params

    const Handleback=()=>{
        navigation.goBack()
    }

    return (
        <Wrapped>
            <ScrollView>
                <CoverImage data={data}  Handleback={Handleback}/>
                <Content data={data} />
                <OtherCharacter/>
            </ScrollView>
        </Wrapped>

    )
}

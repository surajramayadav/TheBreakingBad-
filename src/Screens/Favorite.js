import React from 'react'
import { Text, View } from 'react-native'
import { useSelector } from 'react-redux'
import FavoriteHeader from '../Components/AppComponents/FavoriteComponents/FavoriteHeader'
import HomeActors from '../Components/AppComponents/HomeComponents/HomeActors'
import Wrapped from '../Components/Global/Wrapped'
export default function Favorite({navigation}) {
    const home = useSelector(state => state.home)
    const { fab } = home
    const HandleDetail = (item) => {
        navigation.navigate('Detail', { "data": item })
    }
    const HandleBack=()=>{
        navigation.goBack()
    }

    return (
        <Wrapped>
            <FavoriteHeader HandleBack={HandleBack} />
            <HomeActors data={fab} HandleDetail={HandleDetail} />
        </Wrapped>

    )
}


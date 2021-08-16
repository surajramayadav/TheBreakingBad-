import React from 'react'
import { Text, View } from 'react-native'
import { useSelector } from 'react-redux'
import HomeActors from '../Components/AppComponents/HomeComponents/HomeActors'
import SearchHeader from '../Components/AppComponents/SearchComponents/SearchHeader'
import Wrapped from '../Components/Global/Wrapped'
export default function Search({navigation}) {

    const home = useSelector(state => state.home)
    const { actordata } = home
    const HandleDetail = (item) => {
        navigation.navigate('Detail', { "data": item })
    }
    const HandleBack=()=>{
        navigation.goBack()
    }
    return (
        <Wrapped>
            <SearchHeader HandleBack={HandleBack}/>
            <HomeActors data={actordata} HandleDetail={HandleDetail} />
        </Wrapped>

    )
}
